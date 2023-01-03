import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faCloud, faWind, faEye, faDroplet, faArrowsDownToLine} from '@fortawesome/free-solid-svg-icons';

const Information = (props)=>{
    
    const {main,wind,clouds,visibility} = props.info;

    return(
        <div>
            <hr />
            <p>WEATHER DETAILS</p>
                <table className='data-table'>
                    <tbody>
                        <tr>
                            <td><FontAwesomeIcon icon={faTemperatureHigh} />&emsp; Low/High</td>
                            <td>{Math.round(main.temp_min)}&deg;/{Math.round(main.temp_max)}&deg;</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faCloud} />&emsp;Clouds</td>
                            <td>{clouds.all}%</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faDroplet} />&emsp; &nbsp;Humidity</td>
                            <td>{main.humidity}%</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faWind} />&emsp; Wind</td>
                            <td>{wind.speed} km/h</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faArrowsDownToLine}></FontAwesomeIcon>&emsp; Pressure</td>
                            <td>{main.pressure} mb</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faEye}/>&emsp; Visibility</td>
                            <td>{visibility/1000} km</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
        </div>
    )
}

export default Information