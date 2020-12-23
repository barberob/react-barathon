import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { IPub } from '../types/api'
import {colors} from '../styles/colors'

const PubsList = ():JSX.Element => {
    const [pubs, setPubs] = useState<IPub[]>([])

    // componentdidmount
    useEffect(() => {

        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('http://localhost:3000/pubs')
            const pubs     = await response.json()
            console.log(pubs);
            setPubs(pubs)
        }
        fetchPubs()
    }, [])

    const StyledPub = styled.div`
        border: 2px solid ${colors.darkGrey};
        display : flex; 
        justify-content : center;
        align-items : center; 
        flex-direction : column;
        width : 50%;
        margin : 10px;
        font-family : sans-serif;
        border-radius : 5px;
        img {
            width : 100%
        }
        h2 {
            text-align : center;
        }
    `
    const StyledList = styled.div`
        display: flex;
        align-items : center;
        margin : 45px 0;
    `
    const formatDescription = (str:string):string => {

        if(str.length > 80) return str.slice(0, 77) + '...'
        else return str
    }
    return (
        <StyledList>
            {pubs.map((pub: IPub) => {
                return (
                    <StyledPub>
                        <img src={pub.img} alt={'thumbnail' + pub.name}/>
                        <h2>{pub.name}</h2>
                        <p>{formatDescription(pub.description)}</p>
                    </StyledPub>
                )
            })}
        </StyledList>
    )
}


export default PubsList