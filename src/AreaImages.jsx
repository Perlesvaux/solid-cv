import PropTypes from 'prop-types';
import {useState} from 'react'
import css from './AreaImages.module.css'
export default function AreaImages({getter}){
  const [visibility, setVisibility] = useState(false)
  const toggle = () => setVisibility(()=> !visibility)

  return <>
    <button onClick={toggle} className={css.toggle}>show</button>
    { visibility &&
      getter.education.map(({institution, title, url, image}, indx) => <div key={indx} className={css.card}>
      <figure>
        <img src={image}/>
        <figcaption><a href={url}>{title} @ {institution}</a></figcaption>
      </figure> 
      </div>)
    }
  </>
}

AreaImages.propTypes = {
  getter: PropTypes.object,
};
