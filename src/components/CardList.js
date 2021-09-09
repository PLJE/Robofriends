import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const cardComponent = robots.map((user, i) => { //map needs to return 
        return <Card 
        key={user.id} 
        id={user.id} 
        name={robots[i].name} 
        email={robots[i].email} />
    })
    return(
        <div>
           {cardComponent} 
        </div>
    );
}

export default CardList;