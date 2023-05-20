import { MainLayout } from '@/components/layout'
import WorkFilters from '@/components/work/workFilters'
import WorkList from '@/components/work/workList'
import { useWorkList } from '@/hooks/useWorkList'
import { ListParams } from '@/models/api'
import { WorkFiltersPayload } from '@/models/work'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const [filters, setFilters] = useState<Partial<ListParams>>({ _page: 1, _limit: 3 })

  const { data, isLoading } = useWorkList({ params: filters })

  const { _limit, _totalRows, _page } = data?.pagination || {}
  const totalPage = data?.pagination ? Math.ceil(_totalRows / _limit) : 0

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _page: value,
    }))
  }

  function handleFilterChange(newFilters: WorkFiltersPayload) {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _page: 1,
      title_like: newFilters.search,
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
        <WorkFilters onSubmit={handleFilterChange} />
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
