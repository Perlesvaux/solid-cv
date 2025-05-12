import {useReducer} from 'react'

const blueprint = {
  // Contact
  name:            '',
  phone:           '',
  email:           '',
  links:  [],

  // Experience
  experience:      [],

  // Skills
  skills:          [],

  // Education 
  education: [],

  // Profile
  profile:         ''

  
}


function reducer(state, action) {
  const {type, field, at, part, value} = action
  switch (type){

    // name, phone, email, profile
    case "update property":
      return {...state, [field]:value}

    case "delete property":
      return {...state, [field]:''}


    // skills, links, experience, education
    case "add entry":
      return {...state, [field]:[...state[field], value] }
    
    case "delete all entries":
      return {...state, [field]:[] }

    case "delete entry":
      return {...state, [field]:[...state[field].filter((item, at) => at!==value ) ]}

    case "update entry":
    {
      const entries = [...state[field] ]
      entries[at][part] = value
      return {...state, entries }
    }


    //case "add link":
    //  return {...state, links:[...state.links, value] }
    //
    //case "delete all links":
    //  return {...state, links:[] }
    //
    //case "delete link":
    //  return {...state, links:[...state.links.filter((item, index) => index!==value ) ]}
    //
    //case "update links":
    //{
    //  const links = [...state.links]
    //  links[at][fieldname] = value
    //  return {...state, links }
    //}


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
      throw new Error(`Unknown action: ${type}`);
  }
}

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

export function useResume(){
  const [state, dispatch] = useReducer(reducer, blueprint)
  return [state, dispatch, blueprint]
}



export function imageToDataURL(event, func){
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = ()=> func(reader.result) 
    console.log(file, file.name)
  }
}





export const downloadJSON = (target) => {
  const blob = new Blob([JSON.stringify(target, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `CV - ${target.name || 'your'}.json`;
  link.click();
};



  //function handleImageChange(event){
  //  const file = event.target.files[0]
  //  if (file) {
  //    const reader = new FileReader();
  //    reader.readAsDataURL(file)
  //    reader.onloadend = ()=> setNewEntry({ ...newEntry, image:reader.result }) 
  //    console.log(file, file.name)
  //  }
  //}

