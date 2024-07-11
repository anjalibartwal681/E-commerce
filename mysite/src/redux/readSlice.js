import { createSlice as _createSlice } from "@reduxjs/toolkit";

import { Map } from "immutable";

// {
//   id:{data,loading,error},
//   'Servise_List':{data:{},loading,error},
//   'User_List':{data,loading,error}
// }
// [response?.get('data'),response.get('error'),response.get('loading'),()=>{}]

const readSlice = _createSlice({
  name: "read",
  initialState: Map({}),
  reducers: {
    setReadData: (state, action) => {
      const { id, data } = action.payload;

      return state.setIn([id, "data"], data).setIn([id, "loading"], false);
    },
    setReadLoading: (state, action) => {
      const { id, loading } = action.payload || {};

      return state.setIn([id, "loading"], loading);
    },
    setReadError: (state, action) => {
      const { id, error } = action.payload || {};
      return state.setIn([id, "error"], error).setIn([id, "loading"], false);
    },

    clearReadData: (state, action) => {
      const { id } = action.payload || {};
      return state.deleteIn([id]);
    },
    //     clearCreateAllData: () =>
    //
  },
});

export const { setReadData, setReadLoading, setReadError } = readSlice.actions;

export default readSlice.reducer;
