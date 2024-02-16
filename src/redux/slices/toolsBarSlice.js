import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const toolsBarSlice = createSlice({
  name: 'toolsBar',
  initialState,
  reducers: {
    saveOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const projectModalSlice = createSlice({
  name: 'projectModal',
  initialState,
  reducers: {
    saveOpenProjectModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const miniDrawerSlice = createSlice({
  name: 'miniDrawer',
  initialState,
  reducers: {
    saveCurrent: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveOpen } = toolsBarSlice.actions;
export const { saveCurrent } = miniDrawerSlice.actions;
export const { saveOpenProjectModal } = projectModalSlice.actions;