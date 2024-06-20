'use client';

import { ReactElement } from 'react';

type FestivalProps = {
    name: string;
    endDate: string;
    startDate: string;
    price: number;
}

export const Festival = ({
    name,
    endDate,
    startDate,
    price
}: FestivalProps): ReactElement => (
    <div style={{ padding: 16, border: '1px solid lightgray' }}>
        <h3>{name}</h3>
        <p>When: <strong>{startDate} - {endDate}</strong></p>
        <p>Price: {price} PLN</p>
    </div>
)
