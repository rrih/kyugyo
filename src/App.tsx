import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { KyugyoType } from './models/interfaces';
import './App.scss';
import HeaderBar from './components/HeaderBar';
import InputKyugyo from './components/InputKyugyo';
import KyugyoList from './components/KyugyoList';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import TopPageContainer from './components/TopPageContainer';
import KyugyoPage from './components/KyugyoPage';
import About from './components/About';
import apiUrl from "./config";
import PostPageContainer from './components/PostPageContainer';

const App = () => {
  const [kyugyos, setKyugyos] = useState<KyugyoType[]>([]);

  const getKyugyos = async () => {
    const response = await axios.get(apiUrl);
    setKyugyos(response.data);
  };

  useEffect(() => {
    getKyugyos();
  }, []);

  return (
    <div className="bg-dark pb-5">
      <BrowserRouter>
        <HeaderBar />
        <div className="w-100 mx-auto my-4 px-sm-5">
          {/* <TopPageContainer kyugyos={kyugyos} /> */}
          <Route exact path='/' render={() => <TopPageContainer kyugyos={kyugyos} />} />
          <Route path='/about' render={() => <About />} />
          <Route path='/post' render={() => <PostPageContainer />} />
          <Route path='/kyugyos/:id' render={({match}) => <KyugyoPage kyugyos={kyugyos} match={match}/>}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;