import "./App.css";
import { Box } from "@mui/material";
import { Calendar } from "./Calendar";

function App() {
  return (
    <Box sx={{ height: "100%" }}>
      <Calendar date="19/02/1999" />
    </Box>
  );
}

export default App;
