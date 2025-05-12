import PropTypes from 'prop-types';
import {useState} from 'react'
export default function FieldLinks({ getter, setter }){
  const initial = {site:"", url:""}
  const [newEntry, setNewEntry] = useState(initial)
  const handleNewEntry = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})
  const wipeOut = () => setter({type:"delete all links"})
  const updater = () => { setNewEntry(()=>initial); setter({type:"add link", value:newEntry}) }
  const deleter = (index) => setter({type:"delete link", value:index})
  const edit = (e, index) => setter({type:"update links", value:e.target.value, at:index, fieldname:e.target.name})

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
          <div key={indx}>
            <input type="text" name="site" value={site} onChange={(e)=>edit(e, indx) } />
            <input type="text" name="url" value={url}  onChange={(e)=>edit(e, indx) } />
            <button onClick={()=>deleter(indx)}>x</button>
          </div>)
      }
    </>
  )
}



FieldLinks.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
