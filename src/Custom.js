import {useReducer} from 'react'

const initialState = {
  name:   {value:"",kind:"text"},
  age:    {value:"",kind:"number"},
  height: {value:"",kind:"text"},
  sex:    {value:"",kind:"text"},
  DOB:    {value:"",kind:"date"},
  pfp:    {value:"",kind:"image"}
}


function reducer(state, action) {
  switch (action.type){

    case "updating":
      return {...state, [action.field]:{...state[action.field], value:action.value} }

    case "delete":
      return {...state, [action.field]:{...state[action.field], value:""}}

    case "clone":
      return action.dump

    case "initialState":
      return initialState;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function useResume(){
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}
