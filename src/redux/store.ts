import { Session } from '@/models'
import { configureStore } from '@reduxjs/toolkit'
import { userSessionSlice } from './states'

export interface AppStore {
  userSession: Session
}

const store = configureStore({
  reducer: {
    userSession: userSessionSlice.reducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
