import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { searchReducer } from '../reducers/search.reducer';
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, searchReducer);
export const globalStore = createStore( persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(globalStore)


