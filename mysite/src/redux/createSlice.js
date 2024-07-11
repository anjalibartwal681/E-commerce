import { createSlice as _createSlice } from "@reduxjs/toolkit";

import { Map } from "immutable";

// {
//   id:{data,loading,error},
//   'Servise_List':{data:{},loading,error},
//   'User_List':{data,loading,error}
// }
// [response?.get('data'),response.get('error'),response.get('loading'),()=>{}]

const createSlice = _createSlice({
  name: "create",
  initialState: Map({}),
  reducers: {
    setCreateData: (state, action) => {
      const { id, data } = action.payload;

      return state.setIn([id, "data"], data).setIn([id, "loading"], false);
    },
    setCreateLoading: (state, action) => {
      const { id, loading } = action.payload || {};

      return state.setIn([id, "loading"], loading);
    },
    setCreateError: (state, action) => {
      const { id, error } = action.payload || {};
      return state.setIn([id, "error"], error).setIn([id, "loading"], false);
    },

    clearCreateData: (state, action) => {
      const { id } = action.payload || {};
      return state.deleteIn([id]);
    },
    //     clearCreateAllData: () =>
    //
  },
});

export const { setCreateData, setCreateLoading, setCreateError } =
  createSlice.actions;

export default createSlice.reducer;
