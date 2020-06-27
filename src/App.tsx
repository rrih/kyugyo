import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { KyugyoType, CommentPostType } from './models/interfaces';
import './App.scss';
import { Route, Router, Switch, Link, HashRouter } from 'react-router-dom';
import TopPageContainer from './components/TopPageContainer';
import KyugyoPage from './components/KyugyoPage';
import About from './components/About';
import apiUrl, { commentUrl } from "./config";
import PostPageContainer from './components/PostPageContainer';
import history from "./history";
import HeaderBar from './components/HeaderBar';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [kyugyos, setKyugyos] = useState<KyugyoType[]>([]);
  const [comments, setComments] = useState<CommentPostType[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getKyugyos = async () => {
    const response = await axios.get(apiUrl);
    setKyugyos(response.data);
  };

  const getAllComments = async () => {
    await axios.get('https://kyugyo-back.herokuapp.com/api/comments')
    .then((res) => {
      setComments(res.data);
    });
  }

  useEffect(() => {
    getKyugyos();
    getAllComments();
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-dark pb-5">
      <HashRouter>
        <HeaderBar />
        <div className="w-100 mx-auto my-4 px-sm-5">
          <Switch>
            <Route exact path='/' render={() => <TopPageContainer kyugyos={kyugyos} />} />
            <Route exact path='/about' render={() => <About />} />
            <Route exact path='/post' render={() => <PostPageContainer />} />
            <Route exact path='/kyugyos/:id' render={({match}) => <KyugyoPage kyugyos={kyugyos} match={match} getKyugyos={getKyugyos} comments={comments}/>} />
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/register' render={() => <Register />} />
          </Switch>
          <div className="text-center mt-5 pt-5">
            <Link to='/post' className="text-white border p-3 rounded-pill kg-post bg-dark d-block d-md-none"><i className="fas fa-pen fa-lg pt-2"></i></Link>
            <Link to='/about' className="text-white">休業.comについて</Link>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;