/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// ** type
import { TUserResponse } from '@/types/auth'

// ** action
import { currentUserThunk, loginThunk, logoutThunk } from './action'

interface TUserState {
  user: {
    _id: string
    name: string
    email: string
    picture: string
    role: string[]
    stripe_account_id: string
  } | null
  isAuthenticated: boolean
  loading: boolean
}

const initialState: TUserState = {
  user: null,
  isAuthenticated: false,
  loading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers(builder) {
    // ** login
    builder.addCase(loginThunk.fulfilled, (state) => {
      state.isAuthenticated = true
      state.loading = false
    })
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true
    })
    builder.addCase(loginThunk.rejected, (state) => {
      state.user = null
      state.isAuthenticated = false
      state.loading = false
    })
    // ** current user
    builder.addCase(currentUserThunk.fulfilled, (state, action: PayloadAction<TUserResponse>) => {
      state.user = action.payload.result.user
      state.isAuthenticated = true
    })
    builder.addCase(currentUserThunk.rejected, (state) => {
      state.user = null
      state.isAuthenticated = false
    })
    // ** logout
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = null
      state.isAuthenticated = false
    })
  },
  reducers: {}
})

export default authSlice.reducer