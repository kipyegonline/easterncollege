type state = { user: string }
type action = { type: string; payload: string }

export const initState: state = { user: "" }

export default function (state = initState, action: action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: action.payload }

    default:
      return state
      break
  }
  return state
}
