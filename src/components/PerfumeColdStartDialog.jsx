import React, { useState } from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PerfumeColdStartDialog = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEnterClose = (e) => {
    if (e.key === "Enter") {
      setOpen(false);
    }
  };
  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        향수 선호도 조사 방법?
      </Button>
      <Dialog open={open} onClose={handleClose} onKeyDown={handleEnterClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"향수 선호도 조사"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            향수 추천을 위해서는 사용자의 향수 선호도 정보가 필요합니다. <br />
            가까운 올리브영 매장에 방문해 향수 시향 후 평점 정보를 입력해주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ESC</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PerfumeColdStartDialog;
