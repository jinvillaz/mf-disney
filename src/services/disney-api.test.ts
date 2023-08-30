import axios from 'axios'

import DisneyApi from './disney-api'

jest.mock('axios')

describe('DisneyApi', () => {
  it('should fetch characters without a name', async () => {
    const responseData = {
      data: {
        data: [
          {
            _id: 1,
            name: 'Mickey Mouse',
            imageUrl: 'https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png',
          },
        ],
        info: { totalPages: 1 },
      },
    };
    (axios.get as jest.Mock).mockResolvedValue(responseData)

    const result = await DisneyApi.getCharacters({ page: 1 })

    expect(result.data.length).toBe(1)
    expect(result.pages).toBe(1)
  })

  it('should fetch characters with a name', async () => {
    const responseData = {
      data: {
        data: [
          { _id: 2, name: 'Donald Duck', imageUrl: 'https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png' },
        ],
        info: { totalPages: 1 },
      },
    };
    (axios.get as jest.Mock).mockResolvedValue(responseData)

    const result = await DisneyApi.getCharacters({ page: 1, name: 'Donald' })

    expect(result.data.length).toBe(1)
    expect(result.pages).toBe(1)
  })
})
