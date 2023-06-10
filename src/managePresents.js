const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  switch (action.type) {
    case "presents/increase":
      return { numberOfPresents: state.numberOfPresents + 1 };
    default:
      return state;
    } 
}

// function managePresents(state, action)

// state = { numberOfPresents : 0 }
// action = { type : "presents/increase" }