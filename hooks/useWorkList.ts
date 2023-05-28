import useSWR, { SWRConfiguration } from 'swr'
import { ListParams } from '@/models/index'
import { workApi } from '@/api/index'
import { QueryKey } from '../constants'

export interface UseWorkListProps {
  params: Partial<ListParams>
  options?: SWRConfiguration
  enabled?: boolean // use to set if the params --> call Api, if not --> do not call Api
}

export function useWorkList({ params, options, enabled = true }: UseWorkListProps) {
  const swrResponse = useSWR(
    enabled ? [QueryKey.GET_WORK_LIST, params] : null,
    () => workApi.getAll(params),
    {
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
    }
  )

  return swrResponse
}
