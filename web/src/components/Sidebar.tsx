import React from 'react';
import { FiArrowUpLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg'
import '../styles/components/sidebar.css'

export default function Sidebar(){
    const {goBack} = useHistory()
    
    return(
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy"/>

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowUpLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    )
}