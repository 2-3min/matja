import './index.css';

import UserList from './components/UserList';

const App = () => {
  return (
    <div className="container">
    <div className="contents l-contents">
      <div className="l-contents__matZip">matzipList</div>
    </div>
    <div className="contents r-contents">
      <UserList></UserList>
      <div className="r-contents__map">map</div>
    </div>
  </div>
  );
}

export default App;
