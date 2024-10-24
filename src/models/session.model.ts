import { User } from './user.model'

export interface Session {
  isAuthenticated: boolean
  accessToken: string
  user: User | null
}
