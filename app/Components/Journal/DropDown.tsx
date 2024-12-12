import * as React from 'react';
import { 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  createTheme, 
  ThemeProvider, 
  SelectChangeEvent 
} from "@mui/material";

export default function DropDown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  // Create a dark theme
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#37FF8B", // Light blue for primary color
      },
      secondary: {
        main: "#37FF8B", // Light pink for secondary color
      },
    },
    typography: {
      allVariants: {
        color: "#fff", // Ensure text is white
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ backgroundColor: "black" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            <span className="text-[#9ca3af]">Tags</span>
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Categories"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
