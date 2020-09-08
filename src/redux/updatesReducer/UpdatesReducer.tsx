import { C, Notice } from "./types";
import * as actions from "./actions";

interface State extends Notice {
  news: any[];
  events: any[];
  notices: any[];
  notice: Notice;
}
const initState: State = {
  news: [],
  events: [],
  notices: [],
  notice: {},
};
type actions =
  | ReturnType<typeof actions.addNews>
  | ReturnType<typeof actions.addEvents>
  | ReturnType<typeof actions.addNotices>
  | ReturnType<typeof actions.addNotice>;

function UpdatesReducer(state = initState, action: actions): State {
  switch (action.type) {
    case C.ADD_NOTICES:
      return { ...state, notices: action.payload };
    case C.ADD_NEWS:
      return { ...state, news: action.payload };
    case C.ADD_EVENTS:
      return { ...state, events: action.payload };
    case C.ADD_NOTICE:
      return {
        ...state,
        notice: state.notices.find(
          (item: Notice) => item.id && +item.id === action.payload
        ),
      };
    default:
      return state;
  }
}
export default UpdatesReducer;
