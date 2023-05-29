import { MainLayout } from '@/components/layout'
import WorkFilters from '@/components/work/workFilters'
import WorkList from '@/components/work/workList'
import { useWorkList } from '@/hooks/useWorkList'
import { ListParams } from '@/models/api'
import { WorkFiltersPayload } from '@/models/work'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const router = useRouter()
  // get query params and set default values
  const filters: Partial<ListParams> = {
    _page: 1,
    _limit: 3,
    ...router.query,
  }

  const { data, isLoading } = useWorkList({ params: filters, enabled: router.isReady })
  const initialValueSearch: WorkFiltersPayload = {
    search: filters.title_like || '',
  }

  const { _limit, _totalRows, _page } = data?.pagination || {}
  const totalPage = data?.pagination ? Math.ceil(_totalRows / _limit) : 0

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: value,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  function handleFilterChange(newFilters: WorkFiltersPayload) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: 1,
          title_like: newFilters.search,
        },
      },
      undefined,
      { shallow: true }
    )
  }
  return (
    data.data.length > 0 && (
      <>
        <Box mt={{ mobile: 10 }}>
          <Container>
            <Box mb={3}>
              <Typography component="h1" variant="h3" fontWeight="bold">
                Work
              </Typography>
            </Box>
            {/*  router.isReady  when router.isReady has a values --> render component */}
            {router.isReady && (
              <WorkFilters initialValue={initialValueSearch} onSubmit={handleFilterChange} />
            )}
            <WorkList workList={data?.data || []} loading={isLoading} />

            {totalPage > 0 && (
              <Stack mb={4} spacing={2} alignItems="center">
                <Pagination count={totalPage} page={_page} onChange={handlePageChange} />
              </Stack>
            )}
          </Container>
        </Box>
      </>
    )
  )
}

WorksPage.Layout = MainLayout

// export async function getStaticProps() {
//   return {
//     props: {},
//   }
// }
