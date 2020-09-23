
import React from 'react';
import { GasPriceData } from '../types';
import { GasPriceCard } from './';

interface GasPriceRowProps { 
    data: GasPriceData
}

export const GasPriceRow = (props: GasPriceRowProps) => {
    return (
        <>
            <div className="card-deck mt-5">
                <GasPriceCard title="Slow" values={props.data.slow} />
                <GasPriceCard title="Normal" values={props.data.normal} />
                <GasPriceCard title="Fast" values={props.data.fast} />
                <GasPriceCard title="Instant" values={props.data.instant} />
            </div>
        </>
    )
}