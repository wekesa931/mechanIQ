import React, {useEffect} from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";

import {getProfile} from '../../actions/profile'

export interface ProfileProps extends RouteComponentProps {}

const Profile: React.SFC<ProfileProps> = props => {
  !localStorage.loggedIn && props.history.push("/");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getProfile(userId))
},[dispatch, userId])
  return <div>Profile</div>;
};

export default Profile;