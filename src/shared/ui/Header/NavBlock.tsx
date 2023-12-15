import {Stack, Typography} from "@mui/material";
import {ReactComponent as CaseIcon} from '../../../shared/icons/case.svg'


export const NavBlock = () => {

  return (
    <Stack direction="row" gap={1}>
      <Stack direction="row" alignItems="center" gap={"10px"}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={({palette}) => ({
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            background: palette.grayScale.gray3
          })}>
          <CaseIcon/>
        </Stack>
        <Typography sx={{
          fontWeight: 500,
          width: 'auto',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
        >
          Моя организация
        </Typography>
      </Stack>
    </Stack>
  )
}