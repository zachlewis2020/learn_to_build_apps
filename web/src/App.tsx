import React from 'react';
import './App.css';
import AppRouter from "./AppRouter";
import {AppProvider} from "./Context";

function App() {
  return (
    <div className="App">
    <AppProvider>
    <AppRouter/>
    </AppProvider>
    </div>
  );
}

export default App;
