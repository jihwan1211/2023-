import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import { submitPerfumeRatingsRequest } from "../reducer/perfume";

import PerfumeItem from "../components/PerfumeItem";
import PerfumeSkeleton from "../components/PerfumeSkeleton";
import PerfumeColdStartDialog from "../components/PerfumeColdStartDialog";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import PerfumeRecommendModal from "../components/PerfumeRecommendModal";

const sortEmotion = (emotion) => {
  if (emotion === "기쁨") return 1;
  else if (emotion === "슬픔" || emotion === "상처") return 3;
  else return 2;
};

const PerfumeSurvey = () => {
  const dispatch = useDispatch();
  const { perfumeList } = useSelector((state) => state.perfume);
  const { emotion } = useSelector((state) => state.user);
  console.log(perfumeList);

  const submitVotedPerfumes = () => {
    const ratedPerfumes = perfumeList.filter((perfume) => {
      if (perfume.rating !== null && perfume.rating !== 0) {
        return perfume;
      }
    });
    console.log("ratedPerfume : ", ratedPerfumes);
    if (ratedPerfumes.length === 0) {
      alert("최소 1개 이상의 향수 평점을 매겨주세요");
      return;
    }
    const emotionCategory = sortEmotion(emotion);
    dispatch(submitPerfumeRatingsRequest({ ratedPerfumes, emotionCategory }));
  };

  return (
    <PerfumePageContainer>
      <PerfumeRecommendModal></PerfumeRecommendModal>
      <Navbar></Navbar>
      {/* <AppLayout> */}
      <PerfumeNav>
        <PerfumeColdStartDialog />
        <Button variant="contained" onClick={submitVotedPerfumes}>
          선호도 조사 완료하기
        </Button>
      </PerfumeNav>
      <Grid container>
        {perfumeList.map((it) => (
          <PerfumeItem key={it.perfumeId} perfume={it}></PerfumeItem>
        ))}
        {/* <PerfumeSkeleton></PerfumeSkeleton> */}
      </Grid>
      {/* </AppLayout> */}
    </PerfumePageContainer>
  );
};

const PerfumePageContainer = styled.div`
  max-width: 1400px;
  margin: auto;
`;

const PerfumeNav = styled.nav`
  top: 0;
  z-index: 10;
  position: sticky;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

export default PerfumeSurvey;
