import React, {useState} from 'react';
import './UserProfile.css';

const UserProfile = (props) => {
  const [state, activate] = useState(0);
  let className = "r-contents__userList-profile";

  const clickProfile = () => {
    console.log("click!");
    console.log(state);
    if(state) {
      activate(0); //off
      className = "r-contents__userList-profile";
      console.log("0로직")
    } else {
      activate(1); //on
      className = "r-contents__userList-profile-activate";
      console.log("1로직")
    }
  }

  return(
    <img src={props.profileName} className={className} onClick={clickProfile}/>
  );
}


export default UserProfile;