import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:5000/hadirin";

export const getHadirin = createAsyncThunk("hadirin/getHadirin", async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

export const addHadirin = createAsyncThunk(
  "hadirin/addHadirin",
  async (initialPost) => {
    try {
      console.log(initialPost);
      const response = await axios.post(apiURL, initialPost);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const updateHadirin = createAsyncThunk(
  "hadirin/updateHadirin",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const response = await axios.put(`${apiURL}/${id}`, initialPost);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteHadirin = createAsyncThunk(
  "hadirin/deleteHadirin",
  async (initialPost) => {
    console.log(initialPost);
    const { id } = initialPost;
    try {
      const response = await axios.delete(`${apiURL}/${id}`);
      if (response?.status === 200) return initialPost;
      return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
      return err.message;
    }
  }
);

const hadirinSlice = createSlice({
  name: "hadirin",
  initialState: {
    value: [],
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getHadirin.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHadirin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(getHadirin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addHadirin.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(addHadirin.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.value = state.value.concat(action.payload);
      })
      .addCase(updateHadirin.fulfilled, (state, action) => {
        const { id } = action.payload;
        console.log("masukkkkk oiii", action.payload);
        state.value.map((hadir) => {
          if (hadir.id === action.payload.id) {
            hadir.nama = action.payload.nama;
            hadir.alamat = action.payload.alamat;
            hadir.ucapan = action.payload.ucapan;
          }
        });
      })
      .addCase(deleteHadirin.fulfilled, (state, action) => {
        const { id } = action.payload;
        const value = state.value.filter((hadir) => hadir.id !== id);
        state.value = value;
      });
  },
});

export default hadirinSlice.reducer;
