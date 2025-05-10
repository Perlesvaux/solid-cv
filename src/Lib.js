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


    case "update name":
      return {...state, name:action.value}

    case "delete name":
      return {...state, name:''}


    case "update email":
      return {...state, email:action.value}

    case "delete email":
      return {...state, email:''}

    case "update phone":
      return {...state, phone:action.value}

    case "delete phone":
      return {...state, phone:''}

    case "add skill":
      return {...state, skills:[...state.skills, action.value] }
    
    case "delete all skills":
      return {...state, skills:[] }

    case "delete skill":
      return {...state, skills:[...state.skills.filter((item, index) => index!==action.value ) ]}
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

