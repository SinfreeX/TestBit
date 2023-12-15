import React from "react";
import {Box, TextField} from "@mui/material";
import {ReactComponent as SearchIcon} from "../../icons/search-circle.svg"

export type SearchFiledProps = {
  value: string
  setValue: React.Dispatch<string>
}

export const SearchFiled = ({value, setValue}: SearchFiledProps) => (
  <TextField
    value={value}
    onChange={({target:{value}}) => setValue(value)}
    InputProps={{
      startAdornment: (
        <Box width="16px" height="16px" mr={1}><SearchIcon /></Box>
      )
    }}
    placeholder="Поиск"
  />
)