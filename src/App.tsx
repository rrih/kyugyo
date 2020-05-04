import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { KyugyoType } from './models/interfaces';
import HeaderBar from './components/HeaderBar';

// type Kyugyos = {
//   kyugyo: KyugyoType[];
// }

// url
const localUrl = 'http://localhost:8000';
const prodUrl = 'https://kyugyo-back.herokuapp.com';
const tmpUrl = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;
const apiUrl = `${tmpUrl}/api/kyugyos`;

const App = () => {
  const [kyugyos, setKyugyos] = useState<KyugyoType[]>([]);

  const getKyugyos = async () => {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    console.log(response.data[0].isClosed);
    setKyugyos(response.data);
  };

  useEffect(() => {
    console.log(process.env.NODE_ENV);
    getKyugyos();
  }, []);

  return (
    <div className="bg-dark pb-5">
      <HeaderBar />
      <div className="w-100 mx-auto my-4 px-sm-5">
        <ul className="list-unstyled px-sm-5">
          {kyugyos.map((k, i) => {
            return (
              <li className="h4 d-flex justify-content-between border border-white py-4 px-3 px-md-5">
                <div className="flex-fill text-white">{k.storeName} </div>
                <div className="border border-white text-white p-2 p-sm-3 rounded-pill text-nowrap my-3 my-sm-0">
                  {k.isClosed ? '休業中' : '開業中'}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;