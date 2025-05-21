import PropTypes from 'prop-types'
import FieldName from './FieldName.jsx'
import FieldEmail from './FieldEmail.jsx'
import FieldPhone from './FieldPhone.jsx'

import css from './SectionContact.module.css'

export default function SectionContact({getter, setter}){

  return <section className={css.container}>
    <h2>Contact</h2>
    <FieldName  getter={getter} setter={setter} />
    <FieldEmail getter={getter} setter={setter} />
    <FieldPhone getter={getter} setter={setter} />
  </section>

}

SectionContact.propTypes={
  getter:PropTypes.object,
  setter:PropTypes.func,
}
