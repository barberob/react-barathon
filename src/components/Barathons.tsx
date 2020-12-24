import React from 'react'
import BarathonsList from './BarathonList'
import BarathonMap from './BarathonMap'
import {BarathonsContextProvider} from './BarathonsContext'
import LeafletMap from './LeafletMap'


const Barathons = ({pubs}):JSX.Element => {

    return (
        <BarathonsContextProvider>
            <>
                <BarathonMap pubs={pubs}/>
                <BarathonsList />
            </>
        </BarathonsContextProvider>
    )
}

export default Barathons