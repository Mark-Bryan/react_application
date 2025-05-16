import React from 'react';

function DefaultListItem(props){
    const {id, name, description} = props.item

    return <div>
        <p>{id}.{name}</p>
        <p>{description}</p>
    </div>
}

export default DefaultListItem