import {TableCell, Typography} from "@mui/material";
import {TransactionTableRowModel} from "../model/model";
import {priceSlicer} from "../../../shared/utils/priceSlicer";

export type RenderSumCellProps = {
  row: TransactionTableRowModel
  cell: unknown
}

export const RenderSumCell = ({cell, row}: RenderSumCellProps) => {
  const [sum, token] = (cell as string).split(' ')
  return (
    <TableCell align="center">
      <Typography
        fontWeight={500}
        fontSize={'0.875rem'}
        sx={({palette}) => ({
          color: (row.type === 'Пополнение' ? palette.success.main : palette.error.main) + '!important'
        })}
      >
        {`${row.type === 'Пополнение' ? '+' : '-'}${priceSlicer(sum)} ${token}`}
      </Typography>
    </TableCell>
  )
}