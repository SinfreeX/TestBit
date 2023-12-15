import {Stack, Typography, useMediaQuery} from "@mui/material";

import {UserBlock} from "./UserBlock";
import {NavBlock} from "./NavBlock";

export const Header = () => {
  const mediaQuery = useMediaQuery('(min-width:700px)')


  return (
    <Stack
      height="58px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={(theme) => ({
        height: '82px',
        background: theme.palette.background.paper,
        padding: '0 24px',
        margin: '34px 25px 0 25px',
        borderRadius: '17px',
        [theme.breakpoints.down('md')]: {
          margin: '34px 40px 0 40px',
          padding: '0 18px',
          height: '78px',
        },
        [theme.breakpoints.down('sm')]: {
          height: '49px',
          margin: '24px 16px 0 16px',
          padding: '0 16px',
          borderRadius: '10px'
        },
      })}
    >
      <Stack direction="row" gap="70px">
        <Typography
          fontWeight={600}
          fontSize={'1.375rem'}
        >
          BitTest
        </Typography>
        <NavBlock />
      </Stack>
      {mediaQuery && <UserBlock />}
    </Stack>
  )
}