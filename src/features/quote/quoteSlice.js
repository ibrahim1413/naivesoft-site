import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = import.meta.env.VITE_API_URL || '/api/quote';

export const submitQuote = createAsyncThunk('quote/submit', async (form, { rejectWithValue }) => {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    });
    if (!res.ok) throw new Error('Request failed');
    return await res.json();
  } catch (err) {
    return rejectWithValue('The online form could not send your message. Please email info@naivesoft.net or call +88 01715163908.');
  }
});

const emptyForm = { name: '', email: '', phone: '', message: '', budget: '' };

const quoteSlice = createSlice({
  name: 'quote',
  initialState: { form: emptyForm, status: 'idle', error: null },
  reducers: {
    setField(state, action) {
      const { key, value } = action.payload;
      state.form[key] = value;
    },
    resetQuote() {
      return { form: emptyForm, status: 'idle', error: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuote.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitQuote.fulfilled, (state) => {
        state.status = 'success';
        state.form = emptyForm;
      })
      .addCase(submitQuote.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { setField, resetQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
