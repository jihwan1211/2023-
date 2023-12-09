import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import Intro from "../components/Intro";
import Loading from "../components/Loading";
import KoBERT from "../components/KoBERT";
import MainContentContainer from "../components/MainContentsContainer";

const Home = () => {
  const { loginLoading, loginDone } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Grid container>
        {/* <Grid item xs={4}>
          {loginDone ? <>로그인 완료!</> : loginLoading ? <Loading /> : <LoginForm />}
        </Grid> */}
        <Grid item xs={12}>
          {loginDone ? <MainContentContainer /> : <Intro />}
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default Home;
