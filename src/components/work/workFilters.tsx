import { Search } from '@mui/icons-material'
import { Box, InputAdornment, debounce } from '@mui/material'
import { useForm } from 'react-hook-form'
import InputField from '../form/inputField'

import { WorkFiltersPayload } from '@/models/work'
import * as yup from 'yup'
import { ChangeEvent } from 'react'
export interface WorkFiltersProps {
  onSubmit?: (payload: WorkFiltersPayload) => void
}

const schema = yup.object({})

export default function WorkFilters({ onSubmit }: WorkFiltersProps) {
  // validate with yub
  const schema = yup.object().shape({})

  const { control, handleSubmit } = useForm<WorkFiltersPayload>({
    defaultValues: {
      search: '',
    },
  })

  const handleSearchFiltersSubmit = async (payload: WorkFiltersPayload) => {
    console.log('submit', payload)
    await onSubmit?.(payload)
  }
  const debounceSearchFilter = debounce(handleSubmit(handleSearchFiltersSubmit), 350)

  return (
    <Box component="form" onSubmit={handleSubmit(handleSearchFiltersSubmit)}>
      <InputField
        name="search"
        placeholder="search by title"
        control={control}
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          console.log('search by title', event.target.value)
          debounceSearchFilter()
        }}
      />
    </Box>
  )
}
