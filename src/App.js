import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Form from './Components/Form/Form'
import Information from './Components/Information/Information';
import axios from 'axios'
// import Nodata from './Components/NoData/NoData'
import Navbar from './Components/Navbar/Nav'
import Summary from './Components/Summary/Summary';

function App() {
    const [data,setData] = useState({})
    const [image, setImage] = useState("assets/clear.jpg");

    const getDataFromServer = (city)=>{
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11702baf246d607b706d12640ac7606f&units=metric`)
       .then((res)=>{
          setData(res.data);
          setImage("assets/"+res.data.weather[0].main+".jpg");
       },(error)=>{
         alert("Entered City data not found")
       })
    }
    
  return (
    <div className="App">
      <Navbar />
      <div className='outer-flex'>
        <div className='outer-flex-item1 image' style={{backgroundImage: `url(${image})`}}>
            {Object.keys(data).length===0?<div></div> :<Summary info={data} />}
        </div>
        <div className='outer-flex-item2'>
          <Form getDataFromServer={getDataFromServer} />
          {Object.keys(data).length===0?<div></div> :<Information info={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
