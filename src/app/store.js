import { configureStore } from '@reduxjs/toolkit';
import theme from '../features/theme/themeSlice';
import portfolio from '../features/portfolio/portfolioSlice';
import pricing from '../features/pricing/pricingSlice';
import quote from '../features/quote/quoteSlice';
import ui from '../features/ui/uiSlice';

export const store = configureStore({
  reducer: { theme, portfolio, pricing, quote, ui },
});
