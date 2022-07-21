import React, { useState, useEffect } from "react";

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
                `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=66de0d20&app_key=%20c50d2eae3c4c8260427bcddef5eb242f%09`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: Status ${response.status}`
                );
            }
            let data = await response.json();
            setData(data);
            setError(null);
          } catch(err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        }
        getData()
    }, [])

    return (
        <main>
            <div>
                <h1>Hi there</h1>
            </div>
        </main>
    )
}

export default Home;