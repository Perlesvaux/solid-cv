import PropTypes from 'prop-types';
import css from './TemplateSimple.module.css'

export default function TemplateSimple({ getter }){

  return <section className={css.template}>
    <h1>{getter.name}</h1>

    <h3>Contact</h3>
    <div className={css.mapping}>
      <article> <p>telephone </p></article>
      <article> <p>{getter.phone}</p> </article>
    </div>

    <div className={css.mapping}>
      <article> <p>email</p> </article>
      <article> <p>{getter.email}</p> </article>
    </div>

    { 
      getter.links.map(({site, url}, indx) => <div key={indx} className={css.mapping}>
        <article><p>{site}</p></article>
        <article> <p>{url}</p> </article>
      </div>)
    }



    <h3>Experience</h3>
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

    <h3>Skills</h3>
    { 
      getter.skills.map(({icon, skill}, indx) => <div key={indx} className={css.mapping}>
        <article><p>{icon}</p></article>
        <article> <p>{skill}</p> </article>
      </div>)
    }


    <h3>Education, Licences &amp; Certificates</h3>
    { 
  //const initial = {institution:'', title:'', url:'', image:''}
      getter.education.map(({institution, title, url, image}, indx) => <div key={indx} className={css.mapping}>
        <article>
          <p>{institution}</p> 
        </article>
        <article> <p><a href={url}>{title}</a></p>  </article>
      </div>)
    }


    <h3>Profile</h3>
    <article>{getter.profile}</article>


  </section>

}



TemplateSimple.propTypes ={
  getter: PropTypes.object.isRequired,
}


    //Zeromus was here!
    //Neo Ex-death was here!
    //Enuo Was here!
    //Sephiroth was here!
    //Kefka was here!
