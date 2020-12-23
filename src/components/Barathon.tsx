import React from 'react'
import styled from 'styled-components'
import {colors} from '../styles/colors'



const Barathon = ({name, author}): JSX.Element => {
    console.log(author);
    
    return(
        <SBarathon>
            <h3>{name}</h3>
            <h3>Créé par: {author}</h3>
        </SBarathon>
    )
}


const SBarathon = styled.div`

    padding : 10px;
    background-color: ${colors.lightGrey};
    margin : 15px 5px;
    width : calc(100% / 4);
    text-align: center;

`

export default Barathon