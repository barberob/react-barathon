import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { IPub } from '../types/api';
import Button from '../components/Button'

interface IProps {
    pub: IPub
    addPub?: (_id:string) => void
    removePub?: (_id:string) => void
    simpleDisplay? : boolean
}

const PubThumbnail = ({ pub, addPub, removePub, simpleDisplay}: IProps): JSX.Element => {
    const { name, img, description, _id } = pub;
    return (
        <SThumbnail>
            <SImg src={img} />
            <SContent>
                <STitle>{name}</STitle>
                <SDescription>{description}</SDescription>
            </SContent>
            {!simpleDisplay &&
                <>
                    <Button type='button'
                    onClick={
                        ():void => {
                            console.log('addpub');
                            
                            addPub(_id)
                        }}>Add</Button>
        
                    <Button type='button'
                    onClick={
                        ():void => {
                            
                            removePub(_id)
                        }}>Remove</Button>
                </>
            }

        </SThumbnail>
    );
};

const THUMBNAIL_WIDTH = '80%';
const THUMBNAIL_MAX_HEIGHT = 150;

const SDescription = styled.p`
    font-size: 14px;
    color: ${colors.white};
`;

const SContent = styled.div`
    padding: 10px 15px;
    box-sizing: border-box;
`;

const STitle = styled.span`
    display: block;
    width: 100%;
    color: ${colors.white};
    font-family: ${fonts.title};
    text-align: center;
    margin-top: 5px;
    font-weight: bold;
`;

const SImg = styled.div<any>`
    height: 50px;
    background-image: url('${(props: any): string => props.src}');
    background-size: cover;
    background-position: center center;
`;

const SThumbnail = styled.a`
    display: block;
    border-radius: 4px;
    background: ${chroma(colors.veryDarkGrey).alpha(0.5).css()};
    width: ${THUMBNAIL_WIDTH};
    max-height: ${THUMBNAIL_MAX_HEIGHT}px;
    overflow: auto;
    margin-left: auto
`;

export default PubThumbnail;