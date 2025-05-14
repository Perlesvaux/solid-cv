import {useReducer, useState} from 'react'

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
  const {type, field, at, part, value, dump} = action
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
      return {...state, [field]:[...state[field].filter((item, indx) => indx!==value ) ]}

    case "update entry":
    {
      const entries = [...state[field] ]
      entries[at][part] = value
      return {...state, [field]:entries }
    }


    // Nukes entire progress
    case "initialState":
      return blueprint;


    // Dump 
    case "clone":
    return dump;

    default:
      throw new Error(`Unknown action: ${type}`);
  }
}


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


export function useHandler (setter, field, initial){
  const [newEntry, setNewEntry] = useState(initial)

  // Enhanced local state setters (handle new entries in: education, skills, experience, links) extends useState
  const modifyText = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})
  const modifyImage = (readerResult, part) => setNewEntry({ ...newEntry, [part]:readerResult })
  const eraseImage = (part) => setNewEntry({...newEntry, [part]:''})
  const confirm = () =>{ setNewEntry(()=>initial); setter({type:'add entry', field:field, value:newEntry}) } 


  // Enhanced shared state setters (manipulate existing entries in: education, skills, experience, links) extends useReducer
  const entryPurge = () => setter({type:'delete all entries', field: field})
  const entryDelete = (e) => {setter({type:'delete entry', field:field, value:Number(e.target.dataset.index)});console.log(field, e.target.dataset.index)}
  const entryEdit = (e) => setter({type:'update entry', field:field, value:e.target.value, at:Number(e.target.dataset.index), part:e.target.name})

  const entryImageDelete = (part, indx) => setter({ type:'update entry', field:field, value:'', at:indx, part:part })
  const entryImageEdit = (readerResult, part, index) => setter({type:'update entry', field:field, value:readerResult, at:index, part:part})


  // Enhanced simple property shared state setters (manipulate new/existing value of: name, phone, email, profile)
  const singleUpdate = (e) => setter({type:'update property', field:field, value:e.target.value}) 
  const singleDelete = () => setter({type:'delete property', field:field, value:''})

  const clone = (dump) => setter({type:'clone', dump:dump})

  return {newEntry, modifyText, modifyImage, eraseImage, entryPurge, entryDelete, entryEdit, confirm, entryImageDelete, entryImageEdit, singleUpdate, singleDelete, clone}



}
