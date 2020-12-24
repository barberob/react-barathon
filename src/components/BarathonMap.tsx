import React, { useContext } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { IPub } from '../types/api';
import { latLng, LatLngExpression } from 'leaflet';
import PubThumbnail from './PubThumbnail';
import { colors } from '../styles/colors';
import useBarathons from './BarathonsContext';

interface IProps {
    pubs: IPub[]
}

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const BarathonMap = ({pubs}:IProps): JSX.Element => {

    const {selectedBarathon} = useBarathons()

    console.log('selected' , selectedBarathon);
    
    
    const createJourney = (): IPub[] => {
        return pubs.filter((pub : IPub) => selectedBarathon.indexOf(pub._id) >= 0, 0)
    }

    const createLatLngArr = (): LatLngExpression[] => {
        return createJourney().map((pub: IPub) => {
            return [pub.latlng.lat, pub.latlng.lng]
        })
    }

    const journey = selectedBarathon.length > 0 ? createJourney() : null

    return (
        <SMapContainer>
            <MapContainer
                center={[44.5667, 6.0833]}
                zoom={13}
                style={{
                    width: 420,
                    height: 300
                }}
            >
                <TileLayer
                    attribution={ATTRIBUTION}
                    url={TILE_LAYER}
                />

                {journey && journey.map((pub: IPub) => {
                    return(
                        <Marker position={[pub.latlng.lat, pub.latlng.lng]} key={pub._id}>
                            <Popup>
                                <PubThumbnail pub={pub} simpleDisplay={true}></PubThumbnail>
                            </Popup>
                        </Marker>
                    )
                })}

                {selectedBarathon.length > 0 && 
                    <Polyline pathOptions={{'color' : colors.vibrant}} positions={createLatLngArr()} />
                }
            </MapContainer>
        </SMapContainer>
    );
};

const SMapContainer = styled.div`
    margin : 0 auto;
    margin-bottom: 15px;
`;

export default BarathonMap;