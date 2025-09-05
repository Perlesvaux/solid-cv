import {useReducer, useState, useEffect, useRef} from 'react'

const blueprint = {
  // Contact
  photo:           '',
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

  // Enhanced shared state setters (manipulate new/existing value of: name, phone, email, profile)
  const singleUpdate = (e) => setter({type:'update property', field:field, value:e.target.value}) 
  const singleDelete = () => setter({type:'delete property', field:field, value:''})

  // Enhanced local state setters (handle new entries in: education, skills, experience, links) extends useState
  const modifyText = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})
  const confirm = () =>{ setNewEntry(()=>initial); setter({type:'add entry', field:field, value:newEntry}) } 

  // Enhanced shared state setters (manipulate existing entries in: education, skills, experience, links) extends useReducer
  const entryPurge = () => setter({type:'delete all entries', field: field})
  const entryDelete = (e) => {setter({type:'delete entry', field:field, value:Number(e.currentTarget.dataset.index)});console.log(field, e.currentTarget.dataset.index)}
  const entryEdit = (e) => setter({type:'update entry', field:field, value:e.target.value, at:Number(e.target.dataset.index), part:e.target.name})

  // Local state setter to handle InputDataList components.
  const modifyDropdown = (e) => setNewEntry({...newEntry, [e.currentTarget.name]: e.currentTarget.dataset.value}) 
  
  // shared state setter to handle InputDataList components.
  const entryDropdownEdit = (e) => setter({type:'update entry', field:field, at:Number(e.currentTarget.dataset.index), part:e.currentTarget.name, value:e.currentTarget.dataset.value}) 

  // JSON contents overwrite shared state
  const dump = (e) => {
    try {
      const json = JSON.parse(e.target.result);
      if (isValidJSON(json)) {
        setter({type:'clone', dump:json});
      } else {
        alert('Invalid JSON format!');
      }
    } catch (error) {
      alert(`Error reading JSON file! ${error}`);
    }
  };

  // Shared state setter to handle single images
  const singleImageDelete = () => { setter({type:'update property', field:field, value:''}) }

  const singleImageEdit = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => setter({
        type:'update property', field:field, value:reader.result, at:Number(e.target.dataset.index)
      });
      console.log(file, file.name)
    }
  }



  // Shared state setter to handle existing image entries.
  const entryImageDelete = (e) => { setter({ type:'update entry', field:field, value:'', at:Number(e.currentTarget.dataset.index), part:e.currentTarget.dataset.part });console.log(e.currentTarget) }


  const entryImageEdit = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => setter({
        type:'update entry', field:field, value:reader.result, at:Number(e.target.dataset.index), part:e.target.name
      });
      console.log(file, file.name)
    }
  }

  // Local state setter to handle images.
  const eraseImage = (e) => setNewEntry({...newEntry, [e.target.dataset.part]:''});

  const modifyImage = (e) => {
    const file = e.target.files[0]
      if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = ()=> setNewEntry({ ...newEntry, [e.target.name]:reader.result });
    }
  }


  return {newEntry, modifyText, modifyImage, eraseImage, entryPurge, entryDelete, entryEdit, confirm, entryImageDelete, entryImageEdit, singleUpdate, singleDelete, dump, entryDropdownEdit, modifyDropdown, singleImageDelete, singleImageEdit}



}




export const isValidJSON = (json) => [
  'name',
  'phone',
  'email',
  'links',
  'experience',
  'skills',
  'education',
  'profile'
].every((property)=>property in json)



import balance from './assets/balance.svg'
import bank from './assets/bank.svg'
import headset from './assets/headset.svg'
import chef from './assets/chef.svg'
import cafe from './assets/cafe.svg'
import food from './assets/food.svg'
import insurance from './assets/insurance.svg'
import health from './assets/health.svg'
import cloud from './assets/cloud.svg'
import gavel from './assets/gavel.svg'
import windowIcon from './assets/window.svg'
import briefcase from './assets/briefcase.svg'
import office from './assets/office.svg'
import paperclip from './assets/paperclip.svg'
import branch from './assets/branch.svg'
import server from './assets/server.svg'
import terminal from './assets/terminal.svg'
import database from './assets/database.svg'
import menu from './assets/menu.svg'
import code from './assets/code.svg'
import language from './assets/language.svg'
import book from './assets/book.svg'
import truck from './assets/truck.svg'
import enginer from './assets/enginer.svg'
import gears from './assets/gears.svg'


export const skillOptions = [
  { icon: balance, tag: 'law' },
  { icon: bank, tag: 'academy' },
  { icon: headset, tag: 'headset'},
  { icon: insurance, tag: 'insurance'},
  { icon: cafe, tag: 'cafe'},
  { icon: food, tag: 'food'},
  { icon: health, tag: 'health'},
  { icon: cloud, tag: 'cloud'},
  { icon: gavel, tag: 'gavel'},
  { icon: windowIcon, tag: 'window icon'},
  { icon: chef, tag: 'chef'},
  { icon: briefcase, tag: 'briefcase'},
  { icon: office, tag: 'office'},
  { icon: paperclip, tag: 'paperclip'},
  { icon: branch, tag: 'branch'},
  { icon: server, tag: 'server'},
  { icon: terminal, tag: 'terminal'},
  { icon: database, tag: 'database'},
  { icon: menu, tag: 'menu'},
  { icon: code, tag: 'code'},
  { icon: language, tag: 'language'},
  { icon: book, tag: 'book'},
  { icon: gears, tag: 'gears'},
  { icon: enginer, tag: 'enginer'},
  { icon: truck, tag: 'truck'},
]

import twitter from './assets/twitter.svg'
import threads from './assets/threads.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import behance from './assets/behance.svg'
import pinterest from './assets/pinterest.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import share from './assets/share.svg'
import chrome from './assets/chrome.svg'

export const linkIcon = (name) => {

  const link = name.toLowerCase().replaceAll(" ", "");

  switch (link){

    case "chromewebstore":
      return chrome;

    case "github":
      return github;

    case "pinterest":
      return pinterest;

    case "behance":
      return behance;

    case "instagram":
      return instagram;

    case "linkedin":
      return linkedin;

    case "twitter":
      return twitter;

    case "threads":
      return threads;

    case "facebook":
      return facebook;

    default:
      return share;

  }


}


import down from './assets/down.svg'
export function useDropdownHandler (value, onChange){

  const [selection, setSelection] = useState(()=> value ? value : down)
  const [isVisible, setIsVisible] = useState(false)
  const dropDownRef = useRef(null)

  useEffect(() => {
    const dispel_key = (e) => {
      const isESC = ( e.key==='Escape' && dropDownRef.current )
      if (isESC) setIsVisible(false)
    }
    const dispel_click = (e) => {
      const clickedOutside = !(e.target === dropDownRef.current)
      if(clickedOutside) setIsVisible(false)
    }

    addEventListener('keydown', dispel_key)
    addEventListener('click', dispel_click)

    return () => {
      removeEventListener('keydown', dispel_click)
      removeEventListener('click', dispel_click)
    }
  }, [])
  

  const selectIcon = (e) => {
    onChange(e)
    setSelection(e.currentTarget.dataset.value)
    setIsVisible(false)
  }

  const toggle = () => setIsVisible(!isVisible)

  return { selection, isVisible, toggle, selectIcon, dropDownRef }

}
