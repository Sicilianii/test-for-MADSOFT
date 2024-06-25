import { configureStore} from "@reduxjs/toolkit";
import {QuestionReducer} from "./questions.slice.ts";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage
// }


export type RootReducerType = ReturnType<typeof QuestionReducer>;

// const persistedReducer = persistReducer(persistConfig, QuestionReducer);

export const store = configureStore({
    reducer: QuestionReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// export const persistor = persistStore(store);