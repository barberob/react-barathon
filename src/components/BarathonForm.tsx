import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import LeafletMap from './LeafletMap';
import {IPub} from '../types/api';

interface IProps {
    pubs : IPub[]
}
const BarathonForm = ({pubs}: IProps): JSX.Element => {
    const [selectedPubs, setSelectedPubs] = useState<IPub[]>([])
    const handleSubmit = async (e : any): Promise<void> => {
        e.preventDefault()
        const checkpoints = e.target.elements.namedItem('pubs').value.split(',')

        const values = {
            name : e.target.elements.namedItem('name').value,
            author : e.target.elements.namedItem('author').value,
            checkpoints
        }
        const response = await fetch('http://localhost:3000/barathons', {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(values)
        })
        const responseJSON = await response.json();
        console.log(responseJSON);
    }

    const addPub = (id:string): void => {
        const selectedPub = pubs.find((pub:IPub) => {
            if(pub._id === id) return true
            return false
        })
        setSelectedPubs([...selectedPubs, selectedPub])
    }

    const removePub = (id:string): void => {
        setSelectedPubs(selectedPubs.filter((pub:IPub) => {
            if (pub._id === id) return false
            return true
        }))
    }

    const removeLastPub = (): void => {
        const arr = [...selectedPubs]
        arr.pop()
        setSelectedPubs(arr)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label='Nom' name="name" type="text" placeholder='Nom de votre parcours' />
            <Input label='Auteur' name="author" type="text" placeholder='Votre pseudo' />
            <Input label='pubs' name="pubs" type="text" value={selectedPubs.map((pub: IPub) => pub._id).join(',')} />
            <Button type="button" onClick={removeLastPub}>Enlever le dernier bar</Button>
            <LeafletMap pubs={pubs} addPub={addPub} removePub={removePub} selectedPubs={selectedPubs}/>
            <Button type='submit'>Soumettre</Button>
        </form>
    )
}

export default BarathonForm;
