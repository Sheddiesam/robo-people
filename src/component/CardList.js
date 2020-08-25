import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  console.log(robots)
  return (
    <div>
      {
        robots.map((item) => {
          return (
            <Card 
              key={ item.id } 
              name={ item.name } 
              email={ item.email }
            />
          );
        })
      }
    </div>
  );
}

export default CardList;