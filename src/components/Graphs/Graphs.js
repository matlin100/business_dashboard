import React from 'react';
import CustomerInteractionGraph from './CustomerInteractionGraph';

const calculateAverages = (customerDetails) => {
  let totals = { urgency: 0, importance: 0, customerSatisfaction: 0, customerStrength: 0, satisfaction: 0, friendly: 0 };
  let count = 0;

  customerDetails.forEach(customer => {
    customer.chat.forEach(interaction => {
      count++;
      totals.urgency += interaction.urgency;
      totals.importance += interaction.importance;
      totals.customerSatisfaction += interaction.customerSatisfaction;
      totals.customerStrength += interaction.customerStrength;
      totals.satisfaction += interaction.satisfaction;
      totals.friendly += interaction.friendly;
    });
  });

  return {
    urgency: totals.urgency / count,
    importance: totals.importance / count,
    customerSatisfaction: totals.customerSatisfaction / count,
    customerStrength: totals.customerStrength / count,
    satisfaction: totals.satisfaction / count,
    friendly: totals.friendly / count,
  };
};

const Graphs = ({ customerDetails, isLoading }) => {
  // Handling loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handling when there's no data
  if (!customerDetails || customerDetails.length === 0) {
    return <div>No customer data available</div>;
  }

  const averages = calculateAverages(customerDetails);

  return (
    <div>
      <h3>Customer Interaction Averages</h3>
      <CustomerInteractionGraph interaction={averages} />
    </div>
  );
};

export default Graphs;
