import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IBarathon } from '../types/api'
import Barathon from './Barathon'


const BarathonList = (): JSX.Element => {

    const [barathons, setBarathons] = useState<IBarathon[]>([])

    useEffect(() => {
        const fetchBarathons = async (): Promise<void> => {
            const response = await fetch('http://localhost:3000/barathons')
            const barathons = await response.json()
            setBarathons(barathons)
            console.log(barathons)
        }

        fetchBarathons()
    }, [])


    return (
        <>
            <h2>Liste des barathons</h2>
            <SBarathonList>
                {barathons.map((barathon:IBarathon) => {
                    return(
                        <Barathon 
                            name={barathon.name}
                            author={barathon.author}
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