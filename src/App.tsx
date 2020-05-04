import * as React from 'react';
import axios from "axios";
// import { render } from 'react-dom';
// import { KyugyoType } from './models/interfaces';
// import { render } from '@testing-library/react';

// type Kyugyos = {
//   kyugyo: KyugyoType[];
// }

// export const KyugyoContext = React.createContext<Partial<ContextProps>>({});
const apiUrl = 'http://localhost:8000/api/kyugyos';

class App extends React.Component {
  constructor() {
    super({});
    this.state = {
      kyugyos: [],
    };
  }
  // 開発環境であるかどうか
  // TODO ここの切り替えどうにかする
  // const isDevEnv = true;
  // const devUrl = "http://localhost:8080/";
  // const prodUrl = "https://kyugyo-back.herokuapp.com/";
  // const apiUrl = isDevEnv ? `${devUrl}/api/kyugyos` : `${prodUrl}/api/kyugyos`;

  getKyugyos = async () => {
    axios.get(apiUrl)
      .then((response) => {
        this.setState({
          kyugyos: response.data
        })
        console.log('以下、this.state');
        console.log(this.state);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  render() {
    return (
      <div>
          <button onClick={this.getKyugyos} className="btn btn-primary">get kyugyos</button>
          <div>
            {/* {this.state.kyugyos} */}
          </div>
      </div>
    );
  }  
}

export default App;
