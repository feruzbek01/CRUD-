import { createContext, useReducer } from "react";
import {v4 as uuid} from 'uuid'

  const AppReducer = (state, action) => {
    switch (action.type) {
      case "onDelete":
        return {
          users: state?.users?.filter((user) => user.id !== action.payload),
        };
      case "onAdd":
        return {
          users: [{ id: uuid(), name: action.payload }, ...state.users],
        };
      case "onEdit":
        return {
          users: state?.users?.map((value) => {
            // eslint-disable-next-line
            if (value.id == action.payload.id) {
              value.name = action.payload.name
              return value
            } else {
             return value
            }
          }),
        };
      default:
        return state;
    }
  };

const initialState = {
  users: [
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" },
    { id: 3, name: "User Three" },
  ],
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState); 

    const onDelete = (id) => {
        dispatch({
            type: 'onDelete',
            payload: id
        })
  }
  
   

    const onAdd = (ism) => {
        dispatch({
          type: "onAdd",
          payload: ism,
        });
  }
  
  const onEdit = (Edited, id) => {
    dispatch({
      type: "onEdit",
      payload: Edited,
    });
  };
   
    return (
      <GlobalContext.Provider
        value={{
          users: state.users,
          onDelete,
          onAdd,
          onEdit,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
};
