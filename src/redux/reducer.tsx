import { combineReducers } from "redux";
import axios from "axios";
import UpdatesReducer from "./updatesReducer/UpdatesReducer";

const rootReducer = combineReducers({ updates: UpdatesReducer });
export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;

export const fetchData = async (
  url: string,
  dispatch = f => f,
  setSpinner = f => f,
  setError = f => f,
  callback = f => f
) => {
  try {
    setSpinner(true);
    const { data } = await axios.get(url);

    if (!Array.isArray(data) || !!!data.length) {
      throw new Error("No data!");
    } else {
      setTimeout(() => {
        setSpinner(false);
        dispatch(callback(data));
      }, 2000);
    }
  } catch (error) {
    setSpinner(false);
    setError(error.message);
    console.log(error.message);
  }
};
