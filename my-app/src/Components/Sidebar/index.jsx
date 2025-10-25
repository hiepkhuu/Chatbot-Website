import React from 'react';
import './styles.scss';

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div className="sidebar">
      <button onClick={() => setCurrentPage('/')}>Home</button>
      <button onClick={() => setCurrentPage('/apps')}>Apps</button>
      <button onClick={() => setCurrentPage('/documents')}>Documents</button>
    </div>
  );
};

export default Sidebar;
