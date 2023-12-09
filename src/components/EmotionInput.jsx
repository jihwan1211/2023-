import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getEmotionStatusRequest } from "../reducer/user";

import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import { Form, ButtonWrapper } from "./LoginForm";

const EmotionInput = () => {
  const dispatch = useDispatch();
  const [feelInput, setFeelInput] = useState("");
  const [inputError, setInputError] = useState(false);

  const onChangeFeelInput = useCallback(
    (e) => {
      if (feelInput.length >= 64) setInputError(true);
      else setInputError(false);
      setFeelInput(e.target.value);
    },
    [feelInput]
  );

  // 엔터키 눌렀을 때 폼 이벤트가 호출되도록
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      onSubmitForm(e);
    }
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (inputError) return;
    console.log("작성된 문장 : ", feelInput);
    dispatch(getEmotionStatusRequest(feelInput));
  };

  return (
    <Form onSubmit={onSubmitForm}>
      당신의 현재 감정을 입력해주세요!(64자 이내)
      <br />
      <TextFieldWrapper>
        <TextField
          id="feel-input"
          label="당신의 감정을 입력해주세요!"
          value={feelInput}
          onChange={onChangeFeelInput}
          error={inputError}
          helperText={inputError ? "64자 이내로 입력해주세요" : ""}
          variant="outlined"
          multiline
          rows={4}
          maxLength={100}
          fullWidth
          onKeyDown={handleKeyDown}
        ></TextField>
      </TextFieldWrapper>
      <ButtonWrapper>
        <Button variant="contained" type="submit" htmltype="submit" disabled={inputError}>
          제출
        </Button>
      </ButtonWrapper>
      {inputError ? <Alert severity="error">입력된 감정 분석 문장이 너무 깁니다. 64자 이내로 작성해주세요</Alert> : <></>}
    </Form>
  );
};

const TextFieldWrapper = styled.div`
  margin-top: 20px;
`;
export default EmotionInput;
