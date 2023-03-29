import { type FC, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EastIcon from "@mui/icons-material/East";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface SearchBarProps {
  area: string;
  setArea: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ area, setArea }) => {
  const [isFocuse, setIsFocuse] = useState(false);

  return (
    <Box width={400} bgcolor="#fff" zIndex="10" position="fixed">
      <TextField
        fullWidth
        color="secondary"
        placeholder={isFocuse ? "جستجو" : "جستجو در شهر تهران"}
        onFocus={() => setIsFocuse(true)}
        value={area}
        onChange={(e) => setArea(e.target.value)}
        focused={isFocuse}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {isFocuse ? (
                <EastIcon
                  onClick={() => {
                    setArea("");
                    setIsFocuse(false);
                  }}
                />
              ) : (
                <SearchOutlinedIcon />
              )}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {isFocuse && area ? (
                <HighlightOffIcon
                  onClick={() => {
                    setArea("");
                  }}
                />
              ) : null}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
