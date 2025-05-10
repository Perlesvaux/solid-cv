import PropTypes from 'prop-types'
export default function Dump({getter}){
  function handleSubmit(e){
    e.preventDefault();
    //console.log('Form submitted!',   
    //Object.fromEntries(Object.entries(getter).map(([key, {value}]) => [key, value] ))
    //Object.entries(state).map(([key, {value}])=> [key, value])
    //Object.entries(state).map(([key, {value}])=>[key, value])
    //)
    downloadJSON()
  }


  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(getter, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `CV - ${getter.name}.json`;
    link.click();
  };


  return (
  <>
      <form>
        <button onClick={handleSubmit}> download as json </button>
      </form>
      
  </>
  )



}


Dump.propTypes = {
  getter:PropTypes.object,
  setter:PropTypes.func,

}
