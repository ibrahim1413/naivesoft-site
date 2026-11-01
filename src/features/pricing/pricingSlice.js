import { createSlice } from '@reduxjs/toolkit';

const pricingSlice = createSlice({
  name: 'pricing',
  initialState: { activeTab: 'website' },
  reducers: {
    setTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export const { setTab } = pricingSlice.actions;
export default pricingSlice.reducer;
