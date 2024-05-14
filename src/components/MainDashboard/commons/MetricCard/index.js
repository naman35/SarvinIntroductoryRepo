import React, { Children } from 'react';

function MetricCard({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        padding: '28px 16px 48px 16px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        flex: '1 0 0',
        borderRadius: '20px 20px 0px 0px',
        borderBottom: '4px solid #F2BFAF',
        background: '#FFF',
        boxShadow: '34.85415px 29.62603px 48.34px 0px rgba(51, 102, 255, 0.05)',
      }}
    >
      {children}
    </div>
  );
}

export default MetricCard;
