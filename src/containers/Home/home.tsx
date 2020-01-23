import React, { Fragment } from "react";

import LandingPics from "../landingPage/landingPic/LandingPic";
import AppDetail from '../landingPage/appDetail/AppDetail'

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Fragment>
      <LandingPics />
      <AppDetail />
    </Fragment>
  );
};

export default Home;
