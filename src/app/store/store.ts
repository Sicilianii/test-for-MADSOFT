import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {QuestionReducer} from "./slices/questions.slice.ts";
import {timeReducer} from "./slices/timer.slice.ts";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//     key: 'root',
//     storage
// }
//

const combine = combineReducers({
    questions: QuestionReducer,
    time: timeReducer
})


// export type RootReducerType = ReturnType<typeof QuestionReducer>;

// const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: combine,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
});

export type StateType = ReturnType<typeof store.getState>

// export const persistor = persistStore(store);