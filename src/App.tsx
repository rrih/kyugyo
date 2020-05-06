import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { KyugyoType } from './models/interfaces';
import './App.scss';
import HeaderBar from './components/HeaderBar';
import InputKyugyo from './components/InputKyugyo';
import KyugyoList from './components/KyugyoList';
import { Route, Router, BrowserRouter, HashRouter, Switch, Link } from 'react-router-dom';
import TopPageContainer from './components/TopPageContainer';
import KyugyoPage from './components/KyugyoPage';
import About from './components/About';
import apiUrl from "./config";
import PostPageContainer from './components/PostPageContainer';
import history from "./history";

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
      <Router history={history}>
        <HeaderBar />
        <div className="w-100 mx-auto my-4 px-sm-5">
          <Switch>
            <Route exact={true} path='/kyugyo-front' render={() => <TopPageContainer kyugyos={kyugyos} />} />
            <Route path='/kyugyo-front/about' render={() => <About />} />
            <Route path='/kyugyo-front/post' render={() => <PostPageContainer />} />
            <Route path='/kyugyo-front/kyugyos/:id' render={({match}) => <KyugyoPage kyugyos={kyugyos} match={match}/>}/>
          </Switch>
          <Link to='/kyugyo-front/about' className="text-white">休業.comについて</Link>
        </div>
      </Router>
    </div>
  );
}

export default App;