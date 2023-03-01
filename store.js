import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './slices/basketSlice'

export default configureStore({
  reducer: {
    basket: basketSlice,
  }
})