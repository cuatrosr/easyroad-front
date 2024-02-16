import { configureStore } from '@reduxjs/toolkit';
import {
  toolsBarSlice,
  miniDrawerSlice,
  projectModalSlice,
} from './slices/toolsBarSlice';

export const store = configureStore({
  reducer: {
    toolsBar: toolsBarSlice.reducer,
    projectModal: projectModalSlice.reducer,
    miniDrawer: miniDrawerSlice.reducer,
  },
});
