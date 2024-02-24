import { createSlice } from "@reduxjs/toolkit";

import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchTasks, deleteTask  } from './operations'


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false,
    }
     ,
            
    reducers: {
        addContact: (state, action) => {
            state.abs.push(action.payload) 
        },
        // deleteContact: (state, action) => {
        //     state.abs = state.abs.filter(contact => contact.id !== action.payload);
        // },
    },
    extraReducers: builder =>
        builder
            .addCase(fetchTasks.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => { 
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteTask.pending, () => { })
            .addCase(deleteTask.fulfilled, (state, action) => { 
                state = state.filter(contact => contact.id !== action.payload);
            })
            .addCase(deleteTask.rejected, () =>{ })
})



// console.dir(fetchTasks)
// console.log(fetchTasks.fulfilled.type);

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
}
export const contactsReducer = persistReducer(
    persistConfig, 
    contactsSlice.reducer
)

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },