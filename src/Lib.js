import {useReducer} from 'react'

const blueprint = {
  // Contact
  name:            '',
  phone:           '',
  email:           '',
  external_links:  [],

  // Experience
  experience:      [],

  // Skills
  skills:          [],

  // Profile
  profile:         ''
}


function reducer(state, action) {
  switch (action.type){

    case "update profile":
      return {...state, profile:action.value}

    case "delete profile":
      return {...state, profile:''}

    //case "updating":
    //  return {...state, [action.field]:{...state[action.field], value:action.value} }
    //
    //case "delete":
    //  return {...state, [action.field]:{...state[action.field], value:""}}
    //
    //case "clone":
    //  return action.dump

    case "initialState":
      return blueprint;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function useResume(){
  const [state, dispatch] = useReducer(reducer, blueprint)
  return [state, dispatch, blueprint]
}

