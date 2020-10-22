import React from 'react';
import {FiPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Map,TileLayer, Marker, Popup} from 'react-leaflet';
import '../styles/pages/orphanages-map.css';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.svg';



const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize:[58,68],
    iconAnchor:[29,68]
})

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                <img src={mapMarkerImg} alt="Happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Bertioga</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map
                center={[-23.8258131,-46.1412139]}
                zoom={15}
                style={{width:'100%', height:'100%'}}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            
            
                <Marker
                    icon={mapIcon}
                    position={[-27.209252,-49.6401092]}

                    /*<Popup closeButton={false}>
                        </Popup>*/

                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#fff"/>
            </Link>
            
        </div>
    );

}

export default OrphanagesMap