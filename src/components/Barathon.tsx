import React from 'react'
import styled from 'styled-components'
import {colors} from '../styles/colors'
import Button from './Button';



const Barathon = ({name, author}): JSX.Element => {
    
    return(
        <SBarathon>
            <h3>{name}</h3>
            <h3>Créé par: {author}</h3>
            <Button type={'button'} onClick={() => console.log('voir')}>Consulter</Button>
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