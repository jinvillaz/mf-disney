import axios from 'axios'

import { API_URL } from '../shared/constants'
import { DataList } from '../shared/types'

interface Params {
  page: number
  pageSize: number
  name?: string
}

class DisneyApi {
  async getCharacters({ page = 1, name = '' }): Promise<DataList> {
    const params: Params = {
      page,
      pageSize: 10,
    }
    if (name !== '') {
      params.name = name
    }
    const { data } = await axios.get(`${API_URL}/character/`, { params })
    return { data: data.data, pages: data.info.totalPages }
  }
}

export default new DisneyApi()
