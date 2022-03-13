import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => (
  <div>
    {cats.map((cat) => (
      <Card key={cat.id} id={cat.id} name={cat.name} email={cat.email} />
    ))}
  </div>
);

export default CardList;
