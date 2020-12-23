import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { IPub } from '../types/api';
import BarathonForm from './BarathonForm';
import PubThumbnail from './PubThumbnail';
import Section from './Section';

const SContainer = styled.div`
    background-color: ${colors.darkGrey};
    height: 100%;
    width: 100%;
    padding: 15px;
`;

const App = (): JSX.Element => {
    // Déclaration d'une nouvelle variable d'état interne : pubs
    // RAPPEL: un changement d'état du composant provoque
    //         son re-rendu
    const [pubs, setPubs] = useState<IPub[]>([]);

    // fonction executé au montage du composant
    // dans le DOM
    useEffect(() => {
        // obligé d'utiliser une fonction passe-plat pour le code asynchrone
        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('http://localhost:3000/pubs');
            const pubs = await response.json();
            setPubs(pubs);
        };

        fetchPubs();
    }, []);

    return (
        <SContainer>

            <Section>
                <BarathonForm pubs={pubs}/>
            </Section>
        </SContainer>
    );
};

const SPubsContainer = styled.div`
    display: flex; 
`;

export default App;
