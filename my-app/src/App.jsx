import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import './App.scss';

const paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.';

const Home = () => <div>Welcome to Chatbox!</div>;
const Apps = () => (
  <div>
    <h3>Apps Page</h3>
    <p>{paragraph}</p>
    <p>{paragraph}</p>
    <p>{paragraph}</p>
    <p>{paragraph}</p>
    <p>{paragraph}</p>
    <p>{paragraph}</p>
    <p>{paragraph}</p>
  </div>
);
//TODO: add paragraphs to Documents and refactor Apps + Documents
const Documents = () => <div>Documents Page</div>;

const App = () => {
  const [currentPage, setCurrentPage] = useState('/');

  //TODO: move to ReactBrowser for complex route handling
  const renderPage = () => {
    switch (currentPage) {
      case '/apps':
        return <Apps />;
      case '/documents':
        return <Documents />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='main'>
        <Sidebar setCurrentPage={setCurrentPage} />
        <div className='content'>
          {renderPage()}
          {/* TODO: create the chatbox component!!! :(  */}
          <button className='chatbox-btn'>open chat</button>
        </div>
      </div>
    </div>
  );
};

export default App;
