import {useState} from 'react'
export default function FieldLinks({ getter, setter }){
  const initial = {site:"", url:""}
  const [newEntry, setNewEntry] = useState(initial)
  const handleNewEntry = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})
  const wipeOut = () => setter({type:"delete all links"})
  const updater = () => { setNewEntry(()=>initial); setter({type:"add link", value:newEntry}) }
  const deleter = (index) => setter({type:"delete link", value:index})

  return (
    <>
      <label>Site
        <input type="text" name="site" value={newEntry.site} onChange={handleNewEntry} />
      </label>

      <label>URL
        <input type="url" name="url" value={newEntry.url} onChange={handleNewEntry} />
      </label>


      <button onClick={updater}> Ok </button>
      <button onClick={wipeOut}> clear </button>

      {
        getter.links.map(({site, url}, indx) => 
          <div key={indx}>{site} {url}<button onClick={()=>deleter(indx)}>x</button></div>)
      }
    </>
  )
}



