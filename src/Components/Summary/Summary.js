import React from 'react'

const Summary = (props) =>{
    const {name,main,weather,timezone} = props.info
    var date = new Date();
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    var offset = timezone/3600;
    var nd = new Date(utc + (3600000*offset));
    var dateOptions = { weekday:"long",day: '2-digit', month: 'short', year: '2-digit' };
    var timeOptions = { hour12: false, hour: '2-digit', minute:'2-digit' };
    var str=(nd.toLocaleTimeString('en-IN', timeOptions)+" - "+nd.toLocaleDateString('en-IN', dateOptions));
    const icon = `http://openweathermap.org/img/wn/${
        weather[0]["icon"]
      }@2x.png`;

      return(
         <div>
             <table className='summary-table'>
                <tbody>
                 <tr>
                   <td rowSpan={2}><h1 className='heading'>{Math.round(main.temp)}&deg;C</h1></td>
                   <td className='sub-heading'>{name}</td>
                   <td><img src={icon} alt='' width="50" height="50"/></td>
                 </tr>
                 <tr>
                   <td className='table-text'>{str}</td>
                   <td className='table-text'>{weather[0].main}</td>
                 </tr>
                </tbody>
             </table>
         </div>
      )
}

export default Summary