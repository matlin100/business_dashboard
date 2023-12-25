import React from 'react';
import CustomerInteractionGraph from './CustomerInteractionGraph';

const Graphs = ({ customerDetails }) => {
  return (
    <div>
      {customerDetails.map(customer => (
        <div key={customer._id}>
          <h3>{customer.name}</h3>
          {customer.chat.map((chat, index) => (
            <div key={index}>
              <h4>Interaction {index + 1}</h4>
              <CustomerInteractionGraph interaction={chat} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Graphs;
