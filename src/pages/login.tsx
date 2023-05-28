import LoginForm from '@/components/auth/loginForm'
import { useAuth } from '@/hooks/useAuth'
import { LoginPayload } from '@/models/auth'
import { getErrorMessage } from '@/utils'
import { Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter()
  const { profile, login, logout } = useAuth({ revalidateOnMount: false })

  const handleLoginSubmit = async (payload: LoginPayload) => {
    try {
      await login(payload)
      toast.success('login successful')
      router.push('/')
    } catch (error) {
      const message = getErrorMessage(error)
      console.log('fail to login', message)
      toast.error(message)
    }
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)',
        height: '100vh',
      }}
      alignItems="center"
      justifyItems="center"
      display="flex"
    >
      <Paper
        elevation={8}
        sx={{
          mx: 'auto',
          p: 4,
          maxWidth: '480px',
          textAlign: 'center',
          transform: 'translateY(-50%)',
        }}
      >
        <Stack gap={2}>
          <Typography component="h1" variant="h5">
            Welcome back
          </Typography>
          <LoginForm onSubmit={handleLoginSubmit} />
          <Link legacyBehavior href="/" passHref>
            <MuiLink sx={{ cursor: 'pointer' }}> {`>> Go back home`}</MuiLink>
          </Link>
        </Stack>
      </Paper>
    </Box>
  )
}
