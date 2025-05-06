import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AdminItem = {
  id: string
  title: string
  description: string
}

type AdminState = {
  items: AdminItem[]
}

const initialState: AdminState = {
  items: [],
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AdminItem>) => {
      state.items.push(action.payload)
    },
    updateItem: (state, action: PayloadAction<AdminItem>) => {
      const index = state.items.findIndex(i => i.id === action.payload.id)
      if (index !== -1) state.items[index] = action.payload
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
  },
})

export const { addItem, updateItem, deleteItem } = adminSlice.actions
export default adminSlice.reducer
