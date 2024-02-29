import { configureStore } from '@reduxjs/toolkit';
import {
  toolsBarSlice,
  poleModalSlice,
  miniDrawerSlice,
} from './slices/toolsBarSlice';

export const store = configureStore({
  reducer: {
    toolsBar: toolsBarSlice.reducer,
    poleModal: poleModalSlice.reducer,
    miniDrawer: miniDrawerSlice.reducer,
  },
});
