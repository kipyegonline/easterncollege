export interface Constants {
  ADD_NEWS: string;
  ADD_EVENTS: string;
  ADD_NOTICES: string;
  ADD_NOTICE: string;
  ADD_TENDERS: string;
  ADD_CAREERS: string;
  ADD_COURSES: string;
}

export type Notice = {
  title?: string;
  body?: string;
  id?: string;
};
type Course = { course: string; id: number; level: string; des: string };
export type Courses = { school: string; des: string; courses: Course[] };

export const C: Constants = {
  ADD_NEWS: "ADD_NEWS",
  ADD_EVENTS: "ADD_EVENTS",
  ADD_NOTICES: "ADD_NOTICES",
  ADD_NOTICE: "ADD_NOTICE",
  ADD_TENDERS: "ADD_TENDERS",
  ADD_CAREERS: "ADD_CAREERS",
  ADD_COURSES: "ADD_COURSES",
};
