import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

//we defined middleware as an array so that we can keep adding
//middlewares which we want and the spread component
//enables all the middleware present
const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
