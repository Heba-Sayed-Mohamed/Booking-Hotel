import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../Pages/Theme';

export const store = configureStore({
    reducer: {
        theme: themeSlice,
      },
});
export default store;