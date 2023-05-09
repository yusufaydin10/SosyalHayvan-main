import {configureStore} from '@reduxjs/toolkit';
import auth from './auth';
import forum from './forum';
const store = configureStore({
    reducer: {
        auth,
        forum
    }
});

export default store;