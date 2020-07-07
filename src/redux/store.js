import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

//we defined middleware as an array so that we can keep adding
//middlewares which we want and the spread component
//enables all the middleware present
const middleware = [];

//As we dont want our deployed website to have the logger, we do the below =>

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
