import { configureStore } from '@reduxjs/toolkit'
import specSlice from '../features/specSlice'

export default configureStore({
  reducer: {
    spec: specSlice
  },
})