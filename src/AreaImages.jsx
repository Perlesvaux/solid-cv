import PropTypes from 'prop-types';
import {useState} from 'react'
import css from './AreaImages.module.css'
//import on from './assets/on.svg'
//import off from './assets/off.svg'
import img_on from './assets/img_on.svg'
import img_off from './assets/img_off.svg'
export default function AreaImages({getter}){
  const [visibility, setVisibility] = useState(false)
  const toggle = () => setVisibility(()=> !visibility)

  return <>
    <button onClick={toggle} className={css.toggle}> <img src={visibility? img_on : img_off} /> </button>
    { visibility &&
      getter.education.map(({institution, title, url, image}, indx) => 
        image &&
          (<div key={indx} className={css.card}>
            <figure>
              <img src={image}/>
              <figcaption><a href={url}>{title} @ {institution}</a></figcaption>
            </figure> 
          </div>)
      )
    }
    { visibility &&
      getter.documents.map(({title, image}, indx) => 
        image &&
          (<div key={indx} className={css.card}>
            <figure>
              <img alt={title} src={image}/>
            </figure> 
          </div>)
      )
    }
  </>
}

AreaImages.propTypes = {
  getter: PropTypes.object,
};
