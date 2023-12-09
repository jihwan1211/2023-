import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const PerfumeSkeleton = () => {
  return (
    <Box sx={{ maxWidth: 300, marginLeft: 1 }}>
      <Skeleton variant="rectangular" animation="wave" width={180} height={118} />
      <Skeleton variant="rect" animation="wave" width={40} height={37.83} style={{ marginTop: 5, borderRadius: 4, marginBottom: 0 }} />
      <Skeleton variant="text" animation="wave" width={150} height={73} style={{ margin: 0 }} />
    </Box>
  );
};

export default PerfumeSkeleton;
