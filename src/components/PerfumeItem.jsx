import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { changePerfumeRating } from "../reducer/perfume";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const PerfumeItem = ({ perfume }) => {
  const dispatch = useDispatch();

  const [point, setPoint] = useState(null);

  const onChangePoint = useCallback(
    (e, v) => {
      setPoint(v);
      if (v === null) setPoint(0);
    },
    [point]
  );

  useEffect(() => {
    if (point !== null) dispatch(changePerfumeRating({ pId: perfume.perfumeId, score: point }));
  }, [point]);

  const cardBorderColor = point !== null && point !== 0 ? "0 0 10px rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.1) 0px 4px 12px;";

  return (
    <PerfumeItemWrapper item xs={3}>
      <Card sx={{ maxWidth: 300, boxShadow: cardBorderColor, marginTop: 5 }}>
        <CardMedia sx={{ height: 300, width: 300 }} image={perfume.imgURL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {perfume.name}
          </Typography>
        </CardContent>
        <CardActions>
          <ToggleButtonGroup color="secondary" value={point} exclusive onChange={onChangePoint} aria-label="options">
            <ToggleButton value={1} aria-label="1 point">
              1점
              <BadIcon fontSize="large" />
            </ToggleButton>
            <ToggleButton value={2} aria-label="2 points">
              2점
              <NeutralIcon fontSize="large" />
            </ToggleButton>
            <ToggleButton value={3} aria-label="3 points">
              3점
              <GoodIcon fontSize="large" />
            </ToggleButton>
          </ToggleButtonGroup>
        </CardActions>
      </Card>
    </PerfumeItemWrapper>
  );
};

const GoodIcon = styled(SentimentSatisfiedAltIcon)`
  color: #2196f3;
`;

const NeutralIcon = styled(SentimentNeutralIcon)`
  color: #ffc107;
`;

const BadIcon = styled(SentimentVeryDissatisfiedIcon)`
  color: #e53935;
`;

const PerfumeItemWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export default PerfumeItem;
