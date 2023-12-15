import {Avatar, Stack, Typography} from "@mui/material";


export const UserBlock = () => {

  return (
    <Stack
      direction="row"
      gap="12px"
      alignItems="center"
      justifyContent="center"
      sx={({palette}) => ({
        border: `1px solid ${palette.grayScale.gray3}`,
        borderRadius: '6px',
        padding: '8px 14px'
      })}
    >
      <Avatar sx={{width: '32px', height: '32px'}} />
      <Stack>
        <Typography
          fontWeight={400}
          fontSize="0.75rem"
          sx={({palette}) => ({
            color: palette.grayScale.gray1
          })}
        >
          Вы авторизованы
        </Typography>
        <Typography
          fontWeight={500}
          fontSize="0.875rem"
        >
          Администратор
        </Typography>
      </Stack>
    </Stack>
  )
}