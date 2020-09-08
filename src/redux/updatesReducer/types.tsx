export interface Constants {
  ADD_NEWS: string;
  ADD_EVENTS: string;
  ADD_NOTICES: string;
  ADD_NOTICE: string;
}

export type Notice = {
  title?: string;
  body?: string;
  id?: string;
};

export const C: Constants = {
  ADD_NEWS: "ADD_NEWS",
  ADD_EVENTS: "ADD_EVENTS",
  ADD_NOTICES: "ADD_NOTICES",
  ADD_NOTICE: "ADD_NOTICE",
};
