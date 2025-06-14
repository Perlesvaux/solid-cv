import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'
import InputOkClear from './InputOkClear.jsx'
import css from './FieldLinks.module.css'
import trash from './assets/trash.svg'

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
      {
        getter.links.map(({site, url}, indx) => 
          <div key={indx} className={css.entries}>
            <div className={css.inputs}>
              <Input index={indx} type="text" name="site" value={site} onChange={entryEdit} />
              <Input index={indx} type="text" name="url" value={url}  onChange={entryEdit} />
             </div> 
            <button data-index={indx} onClick={entryDelete} className={css.remove}><img src={trash} /></button>
          </div>)
      }
      <strong>+ Links</strong>
      <Input type="text" name="site" value={newEntry.site} onChange={modifyText} placeholder="LinkedIn" />
      <Input type="url" name="url" value={newEntry.url} onChange={modifyText}  placeholder="www.linkedin.com/in/bigboss1984" />
      <InputOkClear ok={confirm} clear={entryPurge} />
    </>
  )
}


FieldLinks.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
