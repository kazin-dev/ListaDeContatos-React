import { configureStore } from '@reduxjs/toolkit'
import slice from './slice'

const store = configureStore({
  reducer: {
    contatos: slice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
