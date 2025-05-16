import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchFruits = async () => {
    const response = await axios.get("https://www.fruitmap.org/api/trees");
    return response.data;
};

function FruitList(){
    const [fetched, setFetched] = useState(false);

    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['fruits'],
        queryFn: fetchFruits,
        enabled: false,
    });

    const handleShowFruits = async () => {
        await refetch();
        setFetched(true);
    };
    if (isLoading) return <p>Loading Fruits...</p>;
    if (error) return <p>Error fetching fruits: {error.message}</p>
    


    return (
        <div>
            <h2>Fruits available</h2>
            <button onClick={handleShowFruits}>Show Fruits</button>

            {!fetched && <p>No fruits available</p>}
            

            

          {data && (
            <ul>
                {data.map((fruit, index) => (
                    <li key={index}>
                    <strong>Name:</strong>{fruit.name}
                    </li>
                ))}
            </ul>
          )}  
        </div>
    );
}

export default FruitList;