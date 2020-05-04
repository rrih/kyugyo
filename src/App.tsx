import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { KyugyoType } from './models/interfaces';
import HeaderBar from './components/HeaderBar';

// type Kyugyos = {
//   kyugyo: KyugyoType[];
// }

const apiUrl = 'http://localhost:8000/api/kyugyos';

const App = () => {
  const [kyugyos, setKyugyos] = useState<KyugyoType[]>([]);
  // 開発環境であるかどうか
  // TODO ここの切り替えどうにかする
  // const isDevEnv = true;
  // const devUrl = "http://localhost:8080/";
  // const prodUrl = "https://kyugyo-back.herokuapp.com/";
  // const apiUrl = isDevEnv ? `${devUrl}/api/kyugyos` : `${prodUrl}/api/kyugyos`;

  const getKyugyos = async () => {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    console.log(response.data[0].isClosed);
    setKyugyos(response.data);
  };

  useEffect(() => {
    getKyugyos();
  }, []);

    return (
      <div>
        <HeaderBar />
        <div className="w-75 mx-auto my-4">
          <ul className="list-unstyled">
            {kyugyos.map((k, i) => {
              return (
                <li className="h4 d-flex justify-content-between">
                  <div>{k.storeName} </div>
                  <div>{k.isClosed ? '休業中' : '開業中'}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
}

export default App;