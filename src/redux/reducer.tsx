import { combineReducers } from "redux";
import UpdatesReducer from "./updatesReducer/UpdatesReducer";

const rootReducer = combineReducers({ updates: UpdatesReducer });
export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
