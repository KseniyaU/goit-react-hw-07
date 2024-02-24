import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://65d85d83c96fbb24c1bb5b97.mockapi.io/contacts'
    );
    return response.data  
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
})

export const deleteTask = createAsyncThunk('"contacts/deleteContact', async (taskId, thunkAPI) => {
    try {
        const response = await axios.delete(`https://65d85d83c96fbb24c1bb5b97.mockapi.io/contacts/${taskId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
}
)