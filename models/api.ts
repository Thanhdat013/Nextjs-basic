export interface ListParams {
  _page: number
  _limit: number
  title_like: string
}

export interface ListPagination {
  _page: number
  _limit: number
  _totalRows: number
}

export interface ListResponse<T> {
  data: Array<T>
  pagination: ListPagination
}
