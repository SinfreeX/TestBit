import {TableCell, Typography} from "@mui/material";
import {TransactionTableRowModel} from "../model/model";

export type RenderSumCellProps = {
  row: TransactionTableRowModel
  cell: unknown
}

export const RenderSumCell = ({cell, row}: RenderSumCellProps) => {
  return (
    <TableCell align="center" key={(row as any)?.id || 'unic'}>
      <Typography
        fontWeight={500}
        fontSize={'0.875rem'}
        sx={({palette}) => ({
          color: (row.type === 'Пополнение' ? palette.success.main : palette.error.main) + '!important'
        })}
      >
        {`${row.type === 'Пополнение' ? '+' : '-'}${cell as string || ''}`}
      </Typography>
    </TableCell>
  )
}