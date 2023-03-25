import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { Grid } from "@mui/material";

export const Calendar = (props) => {
  const formatter = (str) => {
    return str.split("/").reverse().join("-");
  };

  return (
    <Grid
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            defaultValue={dayjs(formatter(props.date.replaceAll("-", "/")))}
            inputFormat="dd/MM/yyyy"
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};
