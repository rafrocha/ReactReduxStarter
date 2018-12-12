// State argument is not app state, only the state this reducer is responsible for.
export default function(state = null, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
