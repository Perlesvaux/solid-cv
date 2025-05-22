import save from './assets/save.svg'
import css from './DumpPrint.module.css'
export default function DumpPrint(){
  return <button className={css.container}
    onClick={()=>window.print()}> 
    <img src={save} />
  </button>
}
