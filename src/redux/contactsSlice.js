import { createSlice } from "@reduxjs/toolkit";

// import { persistReducer,persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { fetchTasks, deleteTask, addContact  } from './operations'


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false,
    }
     ,
            
    reducers: {
        // addContact: (state, action) => {
        //     state.abs.push(action.payload) 
        // },
        // deleteContact: (state, action) => {
        //     state.items = state.items.filter(contact => contact.id !== action.payload);
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
            .addCase(deleteTask.pending, (state, action) => { 
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteTask.fulfilled, (state, action) => { 
                state.loading = false;
                state.items = state.items.filter(contact => contact.id !== action.payload);
            })
            .addCase(deleteTask.rejected, (state, action) => { 
                state.loading = false;
                state.error = true;
            })
            .addCase(addContact.pending, (state, action) => {
                state.loading = true;
                state.error = false;
             })
            .addCase(addContact.fulfilled, (state, action) => { 
                state.loading = false;
                state.items.push(action.payload) 
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
})



// console.dir(fetchTasks)
// console.log(fetchTasks.fulfilled.type);

// export const { addContact, deleteContact } = contactsSlice.actions;

export  const contactsReducer = contactsSlice.reducer;
// const persistConfig = {
//   key: 'contacts',
//   storage,
// }
// export const contactsReducer = persistReducer(
//     persistConfig, 
//     contactsSlice.reducer
// )

