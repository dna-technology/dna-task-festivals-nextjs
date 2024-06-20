'use client';

import { useEffect, useState } from 'react';
import styles from "./page.module.css";
import { Festival } from '@/app/components/Festival';

export default function Home() {
    const [festivals, setFestivals] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${process.env.API_HOST}/graphql`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
            query {
                festivals {
                    id
                    name
                    price
                    duration {
                        end
                        start
                    }
                }
            }
            `
                }),
                method: 'POST'
            });
            const responseData = await response.json();

            setFestivals(responseData?.data?.festivals || []);
        }

        getData();
    }, []);


    return (
        <main>
            <div className={styles.festivals}>
                {festivals.map((festival: any) => (
                    <Festival
                        name={festival.name}
                        endDate={festival.duration.end}
                        startDate={festival.duration.start}
                        price={festival.price}
                    />
                ))}
            </div>
        </main>
    );
}
