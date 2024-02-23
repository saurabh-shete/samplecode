import React from 'react';

const SalesOrderPanel = ({ salesOrderData, onClose }) => {
  return (
    <div className="sales-order-panel">
      <div className="sales-order-panel-content">
        {/* Add your side panel content here */}
        <h2>Sales Order Details</h2>
        {/* Display sales order information */}
        <pre>{JSON.stringify(salesOrderData, null, 2)}</pre>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SalesOrderPanel;
