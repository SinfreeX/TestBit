import React from "react";
import {
  Box,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel
} from "@mui/material";

import {ReactComponent as EditIcon} from '../../../shared/icons/edit.svg'
import {ReactComponent as RemoveIcon} from '../../../shared/icons/remove.svg'

export type RowData = Record<string | 'id', any>

export type TableData = {
  isError: boolean,
  isLoading: boolean,
  totalPages: number,
  pagesData: Record<number, RowData[]> | null
}

export type renderCellFn<Keys extends string> = (props: {
  row: Record<Keys, any>
  cell: unknown
}) => React.ReactElement

export type HeadCell<Keys extends string> = {
  accessorKey: Keys,
  label: string
  isSort?: boolean
  sort?: 'asc' | 'desc'
  width?: string
  renderCell?: renderCellFn<Keys>
}

export type SortableTableProps<T extends string> = {
  headCells: HeadCell<T | 'actions'>[]
  tableData: RowData[]
  isLoading?: boolean
  isRowsActions?: boolean
  onClickRow?: (row: Record<T, any>) => void
  maxHeight: string
}

export const SortableTable = <T extends string>(props: SortableTableProps<T>) => {
  const {
    headCells,
    tableData,
    maxHeight,
    isLoading = false,
    isRowsActions = true,
    onClickRow
  } = props

  const defaultRenderCell = (key: string, value: string) => (
    <TableCell key={key} align="center">
      {value || '-'}
    </TableCell>
  )

  return (
    <TableContainer
      sx={{maxHeight}}
    >
      <Table sx={{minWidth: 240}}>
        <TableHead>
          <TableRow>
            {headCells.map(({accessorKey, sort, isSort, label, width}) => (
              <TableCell key={accessorKey} width={width || undefined}>
                <Stack direction="row" alignItems="center" justifyContent="center"
                       paddingLeft={isSort ? '25px' : undefined}>
                  {label}
                  {isSort && <TableSortLabel direction={sort} active={!!sort}/>}
                </Stack>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {isLoading ?

          <TableBody>
            {Array.from({ length: 15 }, (_, i) => i).map(id => (
              <TableRow key={`loader-${id}-row`}>
                {headCells.map(({accessorKey}) => (
                  <TableCell key={`loader-${accessorKey}-cell`}>
                    <Skeleton />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>

          : <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} onClick={() => onClickRow && onClickRow(row as Record<T, any>)}>
                {headCells.map(({accessorKey, renderCell}) =>
                  (accessorKey !== 'actions' && (renderCell
                    ? (renderCell as renderCellFn<T>)({cell: row[accessorKey], row: row as Record<T, any> })
                    : defaultRenderCell(accessorKey, row[accessorKey])
                  )))}
                {isRowsActions && (
                  <TableCell>
                    <Stack direction="row" justifyContent="center" gap="10px">
                      <Box width="18px" height="18px">
                        <EditIcon/>
                      </Box>
                      <Box width="18px" height="18px">
                        <RemoveIcon/>
                      </Box>
                    </Stack>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        }
      </Table>
    </TableContainer>
  )
}