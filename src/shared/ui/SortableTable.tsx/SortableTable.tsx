import React, {useMemo} from "react";
import {
  Box, CircularProgress,
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
  tableData: Record<T | 'id', any>[]
  isLoading?: boolean
  pageNumber?: number
  pageSize?: number
  isRowsActions?: boolean
  onClickRow?: (row: Record<T, any>) => void
}

export const SortableTable = <T extends string>(props: SortableTableProps<T>) => {
  const {
    headCells,
    tableData,
    isLoading = false,
    pageNumber = 1,
    pageSize = 10,
    isRowsActions = true,
    onClickRow
  } = props

  const currentPageData = useMemo(() => {
    if (!tableData.length) return []
    const startIndex = (pageNumber - 1) * pageSize
    return tableData.slice(startIndex, startIndex + pageSize)
  }, [pageNumber, pageSize, tableData])

  const renderCells = useMemo(() => {
    return headCells.reduce((acc, cell) => {
      if (!('renderCell' in cell)) return acc
      return {
        ...acc,
        [cell.accessorKey]: cell.renderCell
      }
    }, {}) as Record<string, HeadCell<T>['renderCell']>
  }, headCells)

  const defaultRenderCell = (key: string, value: string) => (
    <TableCell key={key} align="center">
      {value || '-'}
    </TableCell>
  )

  return (
    <TableContainer>
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
        {isLoading ? <CircularProgress/> :
          <TableBody>
            {currentPageData.map(({id, ...cellsData}) => (
              <TableRow key={id} onClick={() => onClickRow && onClickRow(cellsData as Record<T, any>)}>
                {Object.entries(cellsData).map(([key, value]: [string, any]) =>
                  (renderCells[key]
                    ? (renderCells[key] as renderCellFn<T>)({cell: value, row: cellsData as Record<T, any> })
                    : defaultRenderCell(key, value)
                  ))}
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