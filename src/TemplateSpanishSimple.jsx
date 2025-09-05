import PropTypes from 'prop-types';
import {linkIcon} from './Lib.js'
import css from './TemplateSimple.module.css'

import email from './assets/email.svg'
import phone from './assets/phone.svg'

export default function TemplateSpanishSimple({ getter }){

  return <section className={css.template}>
    <div className={css.header} >
      {getter.photo && <img className={css.photo} src={getter.photo}/>}
      <h1>{getter.name}</h1>
    </div>

    <h3>Contacto</h3>
    <div className={css.mapping}>
      <article> <p> <img src={phone} /> Teléfono </p></article>
      <article> <p>  <a href={`tel:${getter.phone}`} target='_blank'>{getter.phone}</a> </p> </article>
    </div>

    <div className={css.mapping}>
      <article> <p> <img src={email} />e-mail</p> </article>
      <article> <p> <a href={`mailto:${getter.email}`} target='_blank'>{getter.email}</a></p> </article>
    </div>

    { 
      getter.links.map(({site, url}, indx) => <div key={indx} className={css.mapping}>
        <article><p> <img src={linkIcon(site)} /> {site}</p></article>
        <article> <p><a href={url} target='_blank'>{url}</a></p> </article>
      </div>)
    }



    {getter.experience.length>0 && <h3>Experience</h3>}
    { 
      
      getter.experience.map(({when, where, what, desc}, indx) => <div key={indx} className={css.mapping}>
        <article>
          <p>{when}</p> 
          <p><strong>{where}</strong></p> 
          <p><i>{what}</i></p> 
        </article>
        <article> <p>{desc}</p> </article>
      </div>)
    }

    <h3>Habilidades</h3>
    { 
      getter.skills.map(({icon, skill}, indx) => <div key={indx} className={css.skills}>
        <article> <p><img src={icon} />{skill}</p> </article>
      </div>)
    }


    <h3>Educación, Licencias y Certificaciones</h3>
    { 
      getter.education.map(({institution, title, url}, indx) => <div key={indx} className={css.mapping}>
        <article>
          <p>{institution}</p> 
        </article>
        <article> <p><a href={url} target='_blank'>{title}</a></p>  </article>
      </div>)
    }


    <h3>Acerca de mí</h3>
    <article>{getter.profile}</article>


    { getter.references && getter.references.length>0 && <h3>Referencias</h3>}
    <div  className={css.three}>
      { 
       getter.references &&  getter.references.map(({reference, contact}, indx) => 
          <article key={indx}>
            <p><strong>{reference}</strong></p> 
            <p>{contact}</p> 
          </article>
        )
      }
    </div>

    <div className={css.break}/>

  </section>

}



TemplateSpanishSimple.propTypes ={
  getter: PropTypes.object.isRequired,
}
