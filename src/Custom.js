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



//Old reducer: 
//
//function reducer(state, action) {
//  const {type, at, fieldname, value} = action
//  switch (type){
//
//    case "update profile":
//      return {...state, profile:value}
//
//    case "delete profile":
//      return {...state, profile:''}
//
//
//    case "update name":
//      return {...state, name:value}
//
//    case "delete name":
//      return {...state, name:''}
//
//
//    case "update email":
//      return {...state, email:value}
//
//    case "delete email":
//      return {...state, email:''}
//
//    case "update phone":
//      return {...state, phone:value}
//
//    case "delete phone":
//      return {...state, phone:''}
//
//
//    case "add skill":
//      return {...state, skills:[...state.skills, value] }
//
//    case "delete all skills":
//      return {...state, skills:[] }
//
//    case "delete skill":
//      return {...state, skills:[...state.skills.filter((item, index) => index!==value ) ]}
//
//    case "update skill":
//    {
//      const skills = [...state.skills]
//      skills[at][fieldname] = value
//      return {...state, skills }
//    }
//
//
//    case "add experience":
//      return {...state, experience:[...state.experience, value] }
//
//    case "delete all experience":
//      return {...state, experience:[] }
//
//    case "delete experience":
//      return {...state, experience:[...state.experience.filter((item, index) => index!==value ) ]}
//
//    case "update experience":
//    {
//      const experience = [...state.experience]
//      experience[at][fieldname] = value
//      return {...state, experience }
//    }
//
//
//
//    case "add education":
//      return {...state, education:[...state.education, value] }
//
//    case "delete all education":
//      return {...state, education:[] }
//
//    case "delete education":
//      return {...state, education:[...state.education.filter((item, index) => index!==value ) ]}
//
//    case "update education":
//    {
//      const education = [...state.education]
//      education[at][fieldname] = value
//      return {...state, education }
//    }
//
//
//    case "add link":
//      return {...state, links:[...state.links, value] }
//
//    case "delete all links":
//      return {...state, links:[] }
//
//    case "delete link":
//      return {...state, links:[...state.links.filter((item, index) => index!==value ) ]}
//
//    case "update links":
//    {
//      const links = [...state.links]
//      links[at][fieldname] = value
//      return {...state, links }
//    }
//
//
//    //case "updating":
//    //  return {...state, [action.field]:{...state[action.field], value:action.value} }
//    //
//    //case "delete":
//    //  return {...state, [action.field]:{...state[action.field], value:""}}
//    //
//    //case "clone":
//    //  return action.dump
//
//    case "initialState":
//      return blueprint;
//
//    default:
//      throw new Error(`Unknown action: ${type}`);
//  }
//}
