import PropTypes from 'prop-types';
import css from './TemplateSimple.module.css'

export default function TemplateSimple({ getter }){

  return <>
    <article className={css.name}>{getter.name}</article>

    Zeromus was here!
    Neo Ex-death was here!
    Enuo Was here!
    Sephiroth was here!
    Kefka was here!


    <article className={css.email} >{getter.email}</article>

  </>

}

TemplateSimple.propTypes ={
  getter: PropTypes.object.isRequired,
}
