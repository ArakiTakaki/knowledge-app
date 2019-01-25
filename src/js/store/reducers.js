const middlewareList = [];
export const registerMiddleware = ({ before, after }) => {
  const middleware = { before, after };
  middlewareList.push(middleware);
};

const reducerMiddleware = (state, action) => {
  for ( let middleware of middlewareList ) middleware.before(state, action);
  const nextState = reducer(state, action);
  for ( let middleware of middlewareList ) middleware.after(nextState, action);
  return nextState
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default reducerMiddleware;
