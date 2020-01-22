import React from 'react';


const List = ({ weekState }) => {
    return (
        <ul>
            {weekState.map((item, idx) => {
                return (
                    <li key={idx}>{item.format('MMM Do YYYY')}</li>
                )
            })}
        </ul>
    )
}

export default List;