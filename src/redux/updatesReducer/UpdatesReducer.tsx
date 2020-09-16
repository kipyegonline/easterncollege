import { C, Notice } from "./types";
import * as actions from "./actions";

interface State {
  news: any[];
  events: any[];
  notices: any[];
  notice: Notice;
  tenders: any[];
  careers: any[];
}
const initState: State = {
  news: [],
  events: [],
  notices: [],
  notice: {},
  tenders: [],
  careers: [],
};
type Actions =
  | ReturnType<typeof actions.addNews>
  | ReturnType<typeof actions.addEvents>
  | ReturnType<typeof actions.addNotices>
  | ReturnType<typeof actions.addNotice>
  | { type: "ADD_NOTICE"; payload: any }
  | ReturnType<typeof actions.addTenders>
  | ReturnType<typeof actions.addCareers>;

function UpdatesReducer(state = initState, action: Actions): State {
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
          (item: Notice) => item.id === action.payload
        ),
      };
    case C.ADD_TENDERS:
      return { ...state, tenders: action.payload };
    case C.ADD_CAREERS:
      return { ...state, careers: action.payload };
    default:
      return state;
  }
}
export default UpdatesReducer;
