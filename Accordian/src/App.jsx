import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [selectedSignleId,setSelectSigleId] = useState(null);
  const [selectMulitpleId,setSelectMultipleId] = useState([]);
  const [enableMultiple, setEnableMultiple] = useState(false)

  function handleSelectSingle(currentId){
     selectedSignleId === currentId? setSelectSigleId(null):setSelectSigleId(currentId);
  }

  function handleMultipleId(currentId){
    setSelectSigleId(null);
    let cpymultiple = [...selectMulitpleId];
    let index = cpymultiple.indexOf(currentId);
    
    if(index === -1){
      cpymultiple.push(currentId);
     }
    else{
      cpymultiple.splice(index,1);
    }
    setSelectMultipleId(cpymultiple);
    
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={()=>{setEnableMultiple(!enableMultiple)}} ><strong>{enableMultiple ? 'disable' :"enable" } multiple tabs</strong> </button>
        <div className="accordian">
        {data && data.map((dataitem)=>(
           <div key={dataitem.id} className="dataitem">
            
            <div className='title'onClick={enableMultiple?
                                            ()=>handleMultipleId(dataitem.id):
                                            ()=>handleSelectSingle(dataitem.id)}>
            <h3>{dataitem.name}</h3> 
            <span className='btn' >
              read more...</span>
            </div>

           {selectMulitpleId.indexOf(dataitem.id) !== -1 || selectedSignleId === dataitem.id  ? 
           <div className="desc"> {dataitem.description} </div> 
           :null}
           
          </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default App
