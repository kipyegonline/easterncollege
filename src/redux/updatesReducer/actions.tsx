import { C } from "./types";

export const addNews = (payload: any[]): { type: string; payload: any[] } => ({
  type: C.ADD_NEWS,
  payload,
});

export const addNotices = (
  payload: any[]
): { type: string; payload: any[] } => ({
  type: C.ADD_NOTICES,
  payload,
});

export const addNotice = (
  payload: number
): { type: string; payload: number } => ({
  type: C.ADD_NOTICE,
  payload,
});

export const addEvents = (
  payload: any[]
): { type: string; payload: any[] } => ({
  type: C.ADD_EVENTS,
  payload,
});

export const addTenders = (
  payload: any[]
): { type: string; payload: any[] } => ({
  type: C.ADD_TENDERS,
  payload,
});
