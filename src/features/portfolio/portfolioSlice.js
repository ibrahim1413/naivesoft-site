import { createSlice, createSelector } from '@reduxjs/toolkit';
import projects from '../../data/projects';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: { items: projects, activeFilter: 'All' },
  reducers: {
    setFilter(state, action) {
      state.activeFilter = action.payload;
    },
  },
});

export const { setFilter } = portfolioSlice.actions;

export const selectVisible = createSelector(
  (state) => state.portfolio.items,
  (state) => state.portfolio.activeFilter,
  (items, filter) => (filter === 'All' ? items : items.filter((p) => p.category === filter))
);

export default portfolioSlice.reducer;
