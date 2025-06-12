import { default as axios } from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk as asynthunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//createAsyncThunk syntax ==== function name(action name ,callback functiom)
//generates pending,fulfilled and rejected action types
export const fetchUsers = asynthunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});
const useSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
export default useSlice.reducer;

