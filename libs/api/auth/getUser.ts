import { get } from '@/libs/api/client'
import { USER_TOKEN_HEADER } from '@/libs/constants/api-headers'

import { User } from '../models/User'

export type Request = {
  clientKey: string
}

export type Response = User

export default async function getUser(query: { clientKey: string; userToken: string }) {
  const { clientKey, userToken } = query
  const request: Request = { clientKey }
  const response: Response = await get('/api/user/v2', request, { [USER_TOKEN_HEADER]: userToken })
  return response
}
