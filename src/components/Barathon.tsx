import React from 'react'
import styled from 'styled-components'
import {colors} from '../styles/colors'
import useBarathons from './BarathonsContext';
import Button from './Button';



const Barathon = ({name, author, checkpoints}): JSX.Element => {
    
    const {setSelectedBarathon} = useBarathons()
    
    const handleClick = () => {
        setSelectedBarathon(checkpoints)
    }


    return(
        <SBarathon>
            <h3>{name}</h3>
            <h3>Créé par: {author}</h3>
            <Button type={'button'} onClick={handleClick}>Consulter</Button>
        </SBarathon>
    )
}


const SBarathon = styled.div`

    padding : 25px 0;
    background-color: ${colors.lightGrey};
    margin : 15px 5px;
    width : calc(100% / 4);
    text-align: center;

`

export default Barathon