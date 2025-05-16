import React from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
    const response = await axios.get('https://www.fruitmap.org/api/trees')
    return response.data
};

function Posts(){
    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isLoading) return <p>Loading Posts...</p>;
    if (error) return <p>Error fetching posts: {error.message}</p>

    return (
        <div>
            <h2>All Posts</h2>
            <button onClick={refetch}>Refetch Posts</button>
            <ul>
                {data.slice(0, 10).map(post=> (
                    <li key={post.id}>
                        <strong>{post.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;