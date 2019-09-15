import React from "react";
import './fomantic/dist/semantic.css';
import { AppRouter } from "./components/Router";

const App: React.FC = () => {
  return (
    <div className='App'>
        <AppRouter />
    </div>
  );
};

export default App;
