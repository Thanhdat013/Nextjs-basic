import { MainLayout } from '@/components/layout'
import WorkList from '@/components/work/workList'
import WorkSkeleton from '@/components/work/workSkeleton'
import { useWorkList } from '@/hooks/useWorkList'
import { ListParams, ListPagination } from '@/models/api'
import { Box, Button, Container, Pagination, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const [filters, setFilters] = useState<Partial<ListParams>>({ _page: 1, _limit: 3 })

  const { data, isLoading } = useWorkList({ params: filters })
  console.log({ data, isLoading })

  const { _limit, _totalRows, _page } = data?.pagination || {}
  const totalPage = data?.pagination ? Math.ceil(_totalRows / _limit) : 0

  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       const workList = await workApi.getAll({})
  //       console.log({ workList })
  //     } catch (error) {
  //       console.log('failed to get work list', error)
  //     }
  //   })()
  // }, [])

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _page: value,
    }))
  }

  if (data.data.length === 0) return null
  return (
    <Box mt={{ mobile: 10 }}>
      <Container>
        <Box mb={3}>
          <Typography component="h1" variant="h3" fontWeight="bold">
            Work
          </Typography>
        </Box>
        <WorkList workList={data?.data || []} loading={isLoading} />

        {totalPage > 0 && (
          <Stack mb={4} spacing={2} alignItems="center">
            <Pagination count={totalPage} page={_page} onChange={handlePageChange} />
          </Stack>
        )}
      </Container>
    </Box>
  )
}

WorksPage.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: {},
  }
}
