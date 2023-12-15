import React from "react";
import {Box, Stack} from "@mui/material";


export type TablePaginatorProps = {
  data: any[]
  pageSize: number
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

export const TablePaginator = (props: TablePaginatorProps) => {
  const { data, pageSize, pageNumber, setPageNumber } = props;
  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageClick = (page: number) => {
    setPageNumber(page);
  };

  const PageButton = ({ page, isCurrent }: { page: number; isCurrent?: boolean }) => (
    <Box
      key={page}
      onClick={() => handlePageClick(page)}
      padding="6px 14px"
      sx={(theme) => ({
        background: isCurrent ? theme.palette.primary.main : 'transparent',
        borderRadius: '8px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: isCurrent ? theme.palette.primary : theme.palette.grayScale.gray3,
        },
        '&:active': {
          backgroundColor: theme.palette.action.selected,
        },
        color: isCurrent ? theme.palette.primary.contrastText : 'inherit',
      })}
    >
      {page}
    </Box>
  );

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="center">
        {pageNumber > 3 && (
          <>
            <PageButton page={1} />
            <Box padding="6px 14px">...</Box>
          </>
        )}
        {pageNumber > 1 && <PageButton page={pageNumber - 1} />}
        <PageButton page={pageNumber} isCurrent />
        {pageNumber < totalPages && <PageButton page={pageNumber + 1} />}
        {pageNumber < totalPages - 2 && (
          <>
            <Box padding="6px 14px">...</Box>
            <PageButton page={totalPages} />
          </>
        )}
        <Box
          onClick={() => pageNumber > 1 && handlePageClick(pageNumber - 1)}
          padding="6px 14px"
          sx={(theme) => ({
            cursor: pageNumber > 1 ? 'pointer' : 'default',
            '&:hover': {
              backgroundColor: pageNumber > 1 ? theme.palette.action.hover : 'inherit',
            },
          })}
        >
        </Box>
        <Box
          onClick={() => pageNumber < totalPages && handlePageClick(pageNumber + 1)}
          padding="6px 14px"
          sx={(theme) => ({
            cursor: pageNumber < totalPages ? 'pointer' : 'default',
            '&:hover': {
              backgroundColor: pageNumber < totalPages ? theme.palette.action.hover : 'inherit',
            },
            transform: 'rotate(180deg)',
          })}
        >
        </Box>
      </Stack>
    </Stack>
  );
}