import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

export const Counter = () => {
  const [data, setData] = useState(0);
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Button
          onClick={() => setData(data + 1)}
          disabled={data === 30}
          variant="contained"
          data-testid="incre"
          fullWidth
        >
          Increment
        </Button>
      </Grid>
      <Grid item xs={2}>
        <h1 data-testid="output">{data}</h1>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={() => setData(data - 1)}
          disabled={data === 0}
          variant="contained"
          fullWidth
          data-testid="decre"
        >
          Decrement
        </Button>
      </Grid>
    </Grid>
  );
};
