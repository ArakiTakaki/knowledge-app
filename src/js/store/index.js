import React, { useReducer } from 'react';
import initialState from './initialState';
import reducers, {registerMiddleware} from  './reducers';
import logger from './lib/logger';

const Store = React.createContext();
registerMiddleware(logger)

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
export { Store, Provider };
