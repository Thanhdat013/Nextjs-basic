import { Box, Skeleton, Stack, Typography } from '@mui/material'

export default function WorkSkelton() {
  return (
    <Stack direction={{ mobile: 'column', tabletMini: 'row' }} spacing={2}>
      <Box width={{ mobile: '100%', tabletMini: '246px' }} flexShrink={0}>
        <Skeleton variant="rectangular" width={246} height={180}></Skeleton>
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h4" fontWeight="bold">
          <Skeleton></Skeleton>
        </Typography>
        <Stack direction="row" my={2} alignItems="center" textAlign="center">
          <Skeleton variant="rectangular" width={50} height={24}></Skeleton>

          <Typography color="GrayText" ml={3} textAlign="left" flexGrow={1}>
            <Skeleton></Skeleton>
          </Typography>
        </Stack>
        <Typography>
          {' '}
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
          <Skeleton width="40%"></Skeleton>
        </Typography>
      </Box>
    </Stack>
  )
}
