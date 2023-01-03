import React,{useState,useRef} from 'react'

const Form = (props)=>{
    const cityRef= useRef()
    const [flag,setFlag] = useState(0);
     const sendData = ()=>{
         if(cityRef.current.value.length>0){
          props.getDataFromServer(cityRef.current.value);
          if(flag===0){
            unm();
          }
         }
     }

     const unm = ()=>{
        setFlag(1);
        document.getElementById('cities').remove();
      }

     const handleKeyDown = (event)=>{
        if(event.key==="Enter"){
           sendData();
        }
     }

  return(
    <div>
      <div className="search-wrap">
            <input 
            type="text" 
            placeholder="Enter City" 
            className="input"
            ref={cityRef}
            onKeyDown={handleKeyDown}
            />
            <button 
            className="button"
            onClick={sendData} 
            >Search</button>
      </div>
      <div id="cities">
        <hr />
        <p>POPULAR CITIES</p>
        <table className='data-table cities'>
            <tbody>
                <tr>
                    <td onClick={() => {cityRef.current.value="Paris"; sendData();}}><span>Paris</span></td>
                    <td onClick={() => {cityRef.current.value="New York"; sendData();}}><span>New York</span></td>
                </tr>
                <tr>
                    <td onClick={() => {cityRef.current.value="London"; sendData();}}><span>London</span></td>
                    <td onClick={() => {cityRef.current.value="Hong Kong"; sendData();}}><span>Hong Kong</span></td>
                </tr>
                <tr>
                    <td onClick={() => {cityRef.current.value="Dubai"; sendData();}}><span>Dubai</span></td>
                    <td onClick={() => {cityRef.current.value="Singapore"; sendData();}}><span>Singapore</span></td>
                </tr>
                <tr>
                    <td onClick={() => {cityRef.current.value="Rome"; sendData();}}><span>Rome</span></td>
                    <td onClick={() => {cityRef.current.value="Istanbul"; sendData();}}><span>Istanbul</span></td>
                </tr>
                <tr>
                    <td onClick={() => {cityRef.current.value="Delhi"; sendData();}}><span>Delhi</span></td>
                    <td onClick={() => {cityRef.current.value="Mumbai"; sendData();}}><span>Mumbai</span></td>
                </tr>
                <tr>
                    <td onClick={() => {cityRef.current.value="Tokyo"; sendData();}}><span>Tokyo</span></td>
                    <td onClick={() => {cityRef.current.value="Mexico"; sendData();}}><span>Mexico</span></td>
                </tr>
                <tr>
                    <td onClick={() => {cityRef.current.value="Moscow"; sendData();}}><span>Moscow</span></td>
                    <td onClick={() => {cityRef.current.value="Barcelona"; sendData();}}><span>Barcelona</span></td>
                </tr>
                <tr>
                    <td onClick={() => {cityRef.current.value="Amsterdam"; sendData();}}><span>Amsterdam</span></td>
                    <td onClick={() => {cityRef.current.value="Sydney"; sendData();}}><span>Sydney</span></td>
                </tr>
            </tbody>
        </table>
        <hr />
      </div>
    </div>
  )

}

export default Form