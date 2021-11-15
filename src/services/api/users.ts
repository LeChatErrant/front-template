import useSWR from 'swr'

export function useUsers() {
  const { data, error } = useSWR('/users')
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export function useUser(id: string) {
  const { data, error } = useSWR(`/users/${id}`)
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}
