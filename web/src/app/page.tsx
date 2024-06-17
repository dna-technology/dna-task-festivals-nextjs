import styles from "./page.module.css";

export default async function Home() {
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
                }
            }
            `
        }),
        method: 'POST'
    });
    const responseData = await response.json();

    return (
        <main className={styles.main}>
            {(responseData.data?.festivals || []).map((festival: any) => (
                <p>{festival.name}</p>
            ))}
        </main>
    );
}
