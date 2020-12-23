import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { IPub } from '../types/api';
import { latLng, LatLngExpression } from 'leaflet';
import PubThumbnail from './PubThumbnail';
import { colors } from '../styles/colors';

interface IProps {
    pubs: IPub[]
    selectedPubs : IPub[]
    addPub: (_id:string) => void
    removePub: (_id:string) => void
}

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const LeafletMap = ({ pubs, addPub, removePub, selectedPubs}: IProps): JSX.Element => {

    const createLatLngArr = (): LatLngExpression[] => {
        return selectedPubs.map((pub: IPub) => {
            return [pub.latlng.lat, pub.latlng.lng]
        })
    }

    return (
        <SMapContainer>
            <MapContainer
                center={[44.5667, 6.0833]}
                zoom={13}
                style={{
                    width: 320,
                    height: 200
                }}
            >
                <TileLayer
                    attribution={ATTRIBUTION}
                    url={TILE_LAYER}
                />
                {pubs.map((pub: IPub) => {
                    return(
                        <Marker position={[pub.latlng.lat, pub.latlng.lng]} key={pub._id}>
                            <Popup>
                                <PubThumbnail pub={pub} addPub={addPub} removePub={removePub}></PubThumbnail>
                            </Popup>
                        </Marker>
                    )
                })}

                <Polyline pathOptions={{'color' : colors.vibrant}} positions={createLatLngArr()} />
            </MapContainer>
        </SMapContainer>
    );
};

const SMapContainer = styled.div`
    margin-bottom: 15px;
`;

export default LeafletMap;