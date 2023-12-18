import {ThemeOptions} from "@mui/material";

export const muiThemeRoot: Omit<ThemeOptions, 'palette'> = {
  typography: {
    fontFamily: [
      'IBM Plex Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 834,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: ({theme: {palette}}) => ({
          background: palette.grayScale.gray2,
          ' .MuiSvgIcon-root': {
            color: palette.text.primary
          }
        })
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: ({theme: {palette}}) => ({
          ' input': {
            height: '8px',
            '::placeholder': {
              color: palette.text.disabled,
              fontSize: '0.875rem',
              fontWeight: 400
            }
          },
          ' fieldset': {
            borderColor: palette.grayScale.gray2,
            borderRadius: '8px',
            height: '46px',
          },
          ' .MuiInputBase-root:hover': {
            ' fieldset': {
              borderColor: palette.grayScale.gray2,
            }
          }
        })
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({theme: {palette}}) => ({
          background: palette.background.default,
          borderRadius: '80px',
          ' .MuiTableCell-root': {
            color: palette.text.secondary,
            fontSize: '0.875rem',
            fontWeight: 500
          },
          ' tr': {
            position: 'sticky',
            ' th': {
              borderBottom: 'none'
            },
            ' th:first-of-type': {
              borderRadius: '8px 0 0 8px'
            },
            ' th:last-of-type': {
              borderRadius: '0 8px 8px 0'
            }
          }
        })
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: ({theme: {palette}}) => ({
          borderColor: palette.grayScale.gray3
        })
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: ({theme: {palette}}) => ({
          ' td': {
            borderBottom: `1px solid ${palette.grayScale.gray3}`,
            fontSize: '0.875rem'
          }
        })
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          height: '64px',
          padding: '10px'
        }
      }
    },
  }
}