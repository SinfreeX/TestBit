import React from "react";
import {Box, Divider, Typography} from "@mui/material";

export type ContentCardProps = {
  title: string
  children: React.ReactElement
}

export const ContentCard = (props: ContentCardProps) => {
  const {title, children} = props

  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.background.paper,
        minHeight: '300px',
        borderRadius: '18px',
        margin: '0 25px',
        [theme.breakpoints.down('md')]: {
          margin: '0 40px',
        },
        [theme.breakpoints.down('sm')]: {
          margin: '0',
          borderRadius: 'unset',
        }
      })}
    >
      <Box
        sx={(theme) => ({
          padding: '24px 34px',
          [theme.breakpoints.down('md')]: {
            padding: '24px 24px',
          },
          [theme.breakpoints.down('sm')]: {
            padding: '18px 16px',
          }
        })}
      >
        <Typography
          fontWeight={600}
          fontSize="1.375rem"
        >
          {title}
        </Typography>
      </Box>
      <Divider/>
      <Box
        sx={(theme) => ({
          padding: '29px 34px',
          [theme.breakpoints.down('md')]: {
            padding: '29px 24px',
          },
          [theme.breakpoints.down('sm')]: {
            padding: '26px 16px',
          }
        })}
      >
        {children}
      </Box>
    </Box>
  )
}