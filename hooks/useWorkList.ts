import useSWR, { SWRConfiguration } from 'swr'
import { ListParams } from '@/models/index'
import { workApi } from '@/api/index'
import { QueryKey } from '../constants'

export interface UseWorkListProps {
  params: Partial<ListParams>
  options?: SWRConfiguration
}

export function useWorkList({ params, options }: UseWorkListProps) {
  const swrResponse = useSWR([QueryKey.GET_WORK_LIST, params], () => workApi.getAll(params), {
    dedupingInterval: 20 * 1000, // 20s
    keepPreviousData: true, // save prev data when change
    fallbackData: {
      data: [],

      pagination: {
        _page: 1,
        _limit: 10,
        _totalRows: 0,
      },
    }, // set initial data
    ...options,
  })

  return swrResponse
}
