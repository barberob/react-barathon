import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    children: JSX.Element;
}

const Section = ({ children }: IProps): JSX.Element => {
    return (
        <SSection>
            {children}
        </SSection>
    );
};

const SSection = styled.div`
    border-radius: 4px;
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.grey};
    margin: 0 auto;
`;

export default Section;