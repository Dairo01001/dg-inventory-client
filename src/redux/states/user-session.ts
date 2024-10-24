import { Session } from '@/models'
import { createSlice } from '@reduxjs/toolkit'

export const userSessionEmptyState: Session = {
  user: null,
  accessToken: '',
  isAuthenticated: false
}

export const userSessionSlice = createSlice({
  name: 'userSession',
  initialState: userSessionEmptyState,
  reducers: {
    createUserSession: (_, action) => action.payload,
    modifyUserSession: (state, action) => ({ ...state, ...action.payload }),
    resetUserSession: () => userSessionEmptyState
  }
})

export const { createUserSession, modifyUserSession, resetUserSession } =
  userSessionSlice.actions

export default userSessionSlice.reducer
