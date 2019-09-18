import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {

    let cardList = robots.map((robot,i)=>{
        return (
            <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        );
    });

    return (cardList);
};

export default Cardlist;
