import './UserList.css';

import UserProfile from '../UI/UserProfile';

import friend1 from '../img/friend1.JPG';
import friend2 from '../img/friend2.JPG';
import friend3 from '../img/friend3.JPG';

const UserList = () => {
  return (
    <div className="r-contents__userList">
      <UserProfile profileName={friend1}/>
      <UserProfile profileName={friend2}/>
      <UserProfile profileName={friend3}/>
    </div>
  );
}

export default UserList;