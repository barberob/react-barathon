import React, {useState, useEffect, useContext, createContext} from 'react'

import {IBarathon} from '../types/api'

interface IProps {
    children?: JSX.Element;
}

interface IBarathonsContext {
    barathons? : IBarathon[]
    selectedBarathon? : any
    setSelectedBarathon? : any
}

const BarathonsContext = createContext({} as IBarathonsContext);

export const BarathonsContextProvider = ({ children }: IProps): JSX.Element => {

    const [barathons, setBarathons] = useState<IBarathon[]>([])

    const [selectedBarathon, setSelectedBarathon] = useState({})

    useEffect(() => {
        const fetchBarathons = async (): Promise<void> => {
            const response = await fetch('http://localhost:3000/barathons')
            const barathons = await response.json()
            setBarathons(barathons)
        }
        fetchBarathons()
    }, [])
    
    const providerValues = {
        barathons,
        selectedBarathon,
        setSelectedBarathon
    }

    return <BarathonsContext.Provider value={providerValues}>{children}</BarathonsContext.Provider>;
}

export default function useBarathons() {
    return useContext(BarathonsContext);
}