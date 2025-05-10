//import {useReducer} from 'react'
import InputImage from './InputImage.jsx'
import Input from './Input.jsx'
import InputJSON from './InputJSON.jsx'
import InputList from './InputList.jsx'
import {useResume} from './Custom.js'


export default function Sillyform(){
  const [state, dispatch] = useResume()

  function handleImageChange(event, p){
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = ()=> dispatch({type:"updating", field:p, value:reader.result}) 
      console.log(':v', p, file, file.name)
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('Form submitted!',   
    Object.fromEntries(Object.entries(state).map(([key, {value}]) => [key, value] ))
    //Object.entries(state).map(([key, {value}])=> [key, value])
    //Object.entries(state).map(([key, {value}])=>[key, value])
    )
    downloadJSON()
  }


  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `CV - ${state.name.value}.json`;
    link.click();
  };


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          //if ('name' in json ) {
          if (Object.keys(state).map(e=> e in json).reduce((acc, element)=> acc && element )) {
            dispatch({ type:"clone", dump:json });
          } else {
            alert('Invalid JSON format!');
          }
        } catch (error) {
          alert('Error reading JSON file!', error);
        }
      };
      reader.readAsText(file);
    }
  }


  function renderInputField(kind, property){
    switch (kind) {
      case "image":
        return <InputImage 
                  name={property} 
                  changer={(e)=>handleImageChange(e,property)} 
                  deleter={()=> dispatch({type:"delete", field:property}) }
                />

      default:
        return <Input 
                  name={property} 
                  type={state[property].kind} 
                  value={state[property].value} 
                  changer={(e)=> dispatch({type:"updating", field:property, value:e.target.value})} 
                  deleter={()=>dispatch({type:"delete", field:property})} 
               />
    }
  }



  return (<form onSubmit={handleSubmit}>

    <InputList />



  <button> Ok! </button>


  </form>)
}



    //<InputJSON name={"Load from file"} changer={handleFileUpload}  />
    //{
    //  Object.keys(initialState).map((property, i)=>
    //    <div key={i}> { renderInputField(state[property].kind, property)  } </div>
    //  )
    //}

    //{state.pfp.value && <img src={state.pfp.value} />}
