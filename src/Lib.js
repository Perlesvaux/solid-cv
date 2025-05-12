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

    case "update skill":
    {
      const skills = [...state.skills]
      skills[action.at] = action.value
      return {...state, skills }
    }


    case "add experience":
      return {...state, experience:[...state.experience, action.value] }
    
    case "delete all experience":
      return {...state, experience:[] }

    case "delete experience":
      return {...state, experience:[...state.experience.filter((item, index) => index!==action.value ) ]}

    
    case "add education":
      return {...state, education:[...state.education, action.value] }
    
    case "delete all education":
      return {...state, education:[] }

    case "delete education":
      return {...state, education:[...state.education.filter((item, index) => index!==action.value ) ]}


    case "add link":
      return {...state, links:[...state.links, action.value] }
    
    case "delete all links":
      return {...state, links:[] }

    case "delete link":
      return {...state, links:[...state.links.filter((item, index) => index!==action.value ) ]}

    case "update links":
    {
      const links = [...state.links]
      links[action.at][action.fieldname] = action.value
      return {...state, links }
    }


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



export function handleImageChange(event, setter){
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = ()=> setter() 
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


