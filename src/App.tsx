import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { KyugyoType } from './models/interfaces';
import './App.scss';
import HeaderBar from './components/HeaderBar';
import InputKyugyo from './components/InputKyugyo';
import KyugyoList from './components/KyugyoList';

const localUrl = 'http://localhost:8000';
const prodUrl = 'https://kyugyo-back.herokuapp.com';
const tmpUrl = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;
const apiUrl = `${tmpUrl}/api/kyugyos`;

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
      <HeaderBar />
      <div className="w-100 mx-auto my-4 px-sm-5">
        <InputKyugyo />
        <KyugyoList
          kyugyos={kyugyos}
        />
      </div>
    </div>
  );
}

export default App;