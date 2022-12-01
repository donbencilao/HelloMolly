import React from 'react';
import './App.css';
import Search from "./components/search/search";
import env from "react-dotenv";
function App() {
  return (
    <div className="w-500 mx-auto">
        <Search API_URL={env.API_URL} CLIENT_ID={env.CLIENT_ID} />
    </div>
  );
}

export default App;
