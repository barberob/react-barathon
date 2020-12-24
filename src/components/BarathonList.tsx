import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { IBarathon } from '../types/api'
import Barathon from './Barathon'

import useBarathons from './BarathonsContext'


const BarathonList = (): JSX.Element => {

    const {barathons} = useBarathons()

    return (
        <>
            <SBarathonList>
                {barathons.map((barathon:IBarathon, i) => {                    
                    return(
                        <Barathon key={i}
                            name={barathon.name}
                            author={barathon.author}
                            checkpoints={barathon.checkpoints}
                        />
                    )
                })}
            </SBarathonList>
        </>
    )
}

const SBarathonList = styled.div`
    display : flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`



export default BarathonList