import React from "react";
import Header from './components/Header/Header';
import Subheader from "./components/Subbheader/Subheader";
import InfoCard from "./components/InfoCard/InfoCard";
import Search from "./components/Search/Search";
import Pages from "./Pages/Pages";
import styles from "./App.module.css";
import {BrowserRouter} from 'react-router-dom';


function App(){

  return(
    <div className="App">
    <BrowserRouter>
    <Header />
    <Subheader>
      <div className={styles.infoCardContainer}>
        <InfoCard />
      </div>
    </Subheader>
    
    <div className={styles.dashboardContent}>
        <div className={styles.dashboardContentContainer}>
          <Search />
          <Pages />
        </div>
    </div>
    </BrowserRouter>
  </div>
  );
}


export default App;