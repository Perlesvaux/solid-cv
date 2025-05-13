import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldLinks({ getter, setter }){
  const initial = {site:"", url:""}
  const {newEntry, 
    modifyText, 
    entryPurge, 
    entryDelete, 
    entryEdit, 
    confirm} = useHandler(setter, 'links', initial)

  return (
    <>
      <Input type="text" name="site" value={newEntry.site} onChange={modifyText} />
      <Input type="url" name="url" value={newEntry.url} onChange={modifyText} />
      <button onClick={confirm}> Ok </button>
      <button onClick={entryPurge}> clear </button>

      {
        getter.links.map(({site, url}, indx) => 
          <div key={indx}>
            <Input index={indx} type="text" name="site" value={site} onChange={entryEdit} />
            <Input index={indx} type="text" name="url" value={url}  onChange={entryEdit} />
            <button data-index={indx} onClick={entryDelete}>x</button>
          </div>)
      }
    </>
  )
}


FieldLinks.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
