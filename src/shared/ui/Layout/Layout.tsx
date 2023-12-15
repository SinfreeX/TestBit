import {Outlet} from "react-router-dom";
import {Box, Stack} from "@mui/material";
import {Header} from "../Header/Header";


export const Layout = () => (
  <Box >
    <Stack
      sx={(theme) => ({
        gap: '34px',
        [theme.breakpoints.down('md')]: {
          gap: '32px',
        },
        [theme.breakpoints.down('sm')]: {
          gap: '27px',
        }
      })}
    >
      <Header />
      <Outlet />
    </Stack>
  </Box>
)