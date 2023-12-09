import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Popper from "@mui/material/Popper";

import PerfumeSkeleton from "./PerfumeSkeleton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const PerfumeRecommendModal = () => {
  const { resultPerfumes, getRecommendResultLoading, getRecommendResultSuccess } = useSelector((state) => state.perfume);
  const [open, setOpen] = useState(false);
  const [mouseOverTitle, setMouseOverTitle] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 배열의 길이가 있다 => 추천이 완료됐다!
  useEffect(() => {
    if (getRecommendResultLoading === true || getRecommendResultSuccess) setOpen(true);
  }, [getRecommendResultLoading, getRecommendResultSuccess]);

  // 제목 길때 마우스 hover하면 제목 다 나오게하는 코드
  const openTitle = Boolean(anchorEl);

  const handleTitleMouseOver = (e) => {
    // console.log(e);
    setMouseOverTitle(e.target.innerText);
    console.log(e.target.innerText);
    console.log(e.target);
    setAnchorEl(e.target);
  };

  const handleTitleMouseOut = (e) => {
    setMouseOverTitle("");
    setAnchorEl(null);
  };
  // 여기까지

  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {resultPerfumes.length ? <>추천 결과</> : <>추천 결과 계산중...</>}
          </Typography>
          {/* {resultPerfumes.length ? resultPerfumes[0].name : "없어"} */}
          <Grid container justifyContent="center" alignItems="center">
            {resultPerfumes.length ? (
              resultPerfumes.map((perfume, idx) => {
                if (idx <= 3) {
                  return (
                    <Card key={idx} sx={{ maxWidth: 180 }} xs={3}>
                      <CardMedia sx={{ height: 180, width: 180 }} image={perfume.column2} title="green iguana" />
                      <CardContent>
                        <Typography gutterBottom onMouseOver={handleTitleMouseOver} onMouseOut={handleTitleMouseOut} component="div">
                          {idx + 1}위
                        </Typography>
                        <StyledTypograhy gutterBottom onMouseOver={handleTitleMouseOver} onMouseOut={handleTitleMouseOut} component="div">
                          {perfume.column3}
                        </StyledTypograhy>
                        <Popper sx={{ zIndex: 10000, borderColor: "red", paddingTop: 4 }} open={true} anchorEl={anchorEl} placement="bottom-start">
                          {mouseOverTitle}
                        </Popper>
                      </CardContent>
                    </Card>
                  );
                }
              })
            ) : (
              <>
                <PerfumeSkeleton xs={3} />
                <PerfumeSkeleton xs={3} />
                <PerfumeSkeleton xs={3} />
                <PerfumeSkeleton xs={3} />
              </>
            )}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

const StyledTypograhy = styled(Typography)`
  /* 제목이 너무 길면 ...으로 나타내기 */
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default PerfumeRecommendModal;
