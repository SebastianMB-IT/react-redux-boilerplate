import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
  name: 'info',
  initialState: {
    value: {
      timestamp: '',
      version: null
    }
  },
  reducers: {
    setInfo: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setInfo } = infoSlice.actions

export default infoSlice.reducer
