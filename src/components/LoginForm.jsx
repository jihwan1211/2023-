import React, { useState } from "react";
import { useDispatch } from "react-redux";

import useInput from "../hooks/useInput";
import styled from "styled-components";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { loginRequest } from "../reducer/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("email : ", email);
    console.log("password : ", password);
    dispatch(loginRequest());
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input id="email-input" variant="outlined" value={email} type="email" onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input id="password-input" variant="outlined" value={password} type="password" onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button variant="contained" type="primary" htmltype="submit">
          로그인
        </Button>
      </ButtonWrapper>
      <SignUpButtonWrapper>
        <Button variant="contained" type="primary" color="success">
          회원가입
        </Button>
      </SignUpButtonWrapper>
    </Form>
  );
};

export const Form = styled.form`
  position: relative;
  padding: 10px;
`;

const Input = styled(TextField)`
  height: 80%;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  margin-top: 5px;
`;

const SignUpButtonWrapper = styled.div`
  position: absolute;
  left: 10px;
  margin-top: 5px;
`;

export default LoginForm;
