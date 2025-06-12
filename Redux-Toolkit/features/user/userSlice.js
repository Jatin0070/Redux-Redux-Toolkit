const { default: axios } = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;
const asynthunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//createAsyncThunk syntax ==== function name(action name ,callback functiom)
//generates pending,fulfilled and rejected action types
const fetchUsers = asynthunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
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
module.exports = useSlice.reducer;
module.exports.fetchUsers = fetchUsers;
