import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="header">
        {/* LOGO */}
        <div className="logo-box">
          <svg alt="logo" className="logo" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }}>
            <path d="M79.938,20.01c-18.213-18.317-47.83-18.4-66.146-0.186c-18.316,18.214-18.4,47.828-0.184,66.146l8.672-8.625
			C15.756,70.977,11.702,62.09,11.7,52.253c0-0.003,0-0.005,0-0.008c-0.002-19.372,15.703-35.081,35.076-35.082
			c19.373-0.003,35.082,15.702,35.084,35.076c0,0.002,0,0.005,0,0.005c0.002,9.914-4.116,18.862-10.727,25.242l8.619,8.67
			C98.068,67.942,98.152,38.329,79.938,20.01z"/>
            <polygon points="28.852,87.326 44.042,58.593 15.208,87.224 		" />
            <polygon points="64.311,87.326 77.954,87.224 49.118,58.593 		" />
          </svg>
        </div>

        {/* Header text */}

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Nature</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>
        </div>

      </header>
    </div>
  );
}

export default App;
