import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contato {
  id: number
  nome: string
  email: string
  numero: string
}

const initialState: Contato[] = []

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contato>) {
      state.push(action.payload)
    },
    editContact(state, action: PayloadAction<Contato>) {
      const index = state.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    removeContact(state, action: PayloadAction<number>) {
      const index = state.findIndex((contato) => contato.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    }
  }
})

export const { addContact, editContact, removeContact } = contatoSlice.actions
export default contatoSlice.reducer

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useContact = (state: any) => {
  return state.contatos as Contato
}
