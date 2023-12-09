import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { changeEmotionStatusRequest } from "../reducer/user";

import EmotionInput from "./EmotionInput";
import Loading from "./Loading";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const emotions = ["기쁨", "불안", "분노", "슬픔", "놀람", "상처"];

const KoBERT = () => {
  const dispatch = useDispatch();
  const { emotion, getEmotionStatusDone, getEmotionStatusLoading } = useSelector((state) => state.user);
  console.log(emotion);

  const handleEmotionChange = (e) => {
    dispatch(changeEmotionStatusRequest(e.target.value));
  };

  return (
    <KoBERTContainer>
      <EmotionInput />
      {getEmotionStatusDone ? (
        <>
          <EmotionResult>
            당신의 현재 감정은{" "}
            <Select labelId="emotion-label" id="emotion-select" value={emotion} onChange={handleEmotionChange}>
              {emotions.map((emotion) => (
                <MenuItem key={emotion} value={emotion}>
                  {emotion}
                </MenuItem>
              ))}
            </Select>
            으로 예상됩니다
          </EmotionResult>
          <StyledLink to="/perfume-survey">다음 단계 : 향수 추천하러 이동</StyledLink>
        </>
      ) : getEmotionStatusLoading ? (
        <Loading />
      ) : (
        <></>
      )}
    </KoBERTContainer>
  );
};

const KoBERTContainer = styled.div`
  /* border: 1px solid black; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1976d2;
  font-weight: bold;
  transition: color 0.3s ease;
`;

const EmotionResult = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 10px;
`;

export default KoBERT;
