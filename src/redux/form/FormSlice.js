import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { data: [] },
  reducers: {
    setFormData: (state, action) => {
      state.data = action.payload;
    },
    updateFormField: (state, action) => {
      const { index, field, value } = action.payload;
      state.data[index][field] = value;
    },
  },
});

export const { setFormData, updateFormField } = formSlice.actions;
export default formSlice.reducer;
