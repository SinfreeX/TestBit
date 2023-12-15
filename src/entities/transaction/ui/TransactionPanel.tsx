import React, {useState} from "react";
import {Box, Divider, IconButton, Stack, Typography} from "@mui/material";
import {ReactComponent as CloseIcon} from "../../../shared/icons/close.svg"
import {SortableTable} from "../../../shared/ui/SortableTable.tsx/SortableTable";
import {transactionTableHeadCells} from "../model/model";
import {transactionsTableDataGenerator} from "../api/dataGenerator";
import {ChartStyled} from "../../../shared/ui/Chart/Chart.styled";


export type TransactionPanelProps = {
  email: string,
  onClose: () => void
}

export const TransactionPanel = (props: TransactionPanelProps) => {
  const {email, onClose} = props
  const [tableData, setTableData] = useState(transactionsTableDataGenerator())

  return (
    <Box
      sx={(theme) => ({
        padding: '56px 40px 56px 20px',
        width: '100%',
        maxWidth: '470px',
        [theme.breakpoints.down('sm')]: {
          width: '100vw',
          padding: '30px 16px'
        }
      })}
    >
      <Stack gap="18px">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography
            fontSize='1.25rem'
            fontWeight={600}
          >
            {email}
          </Typography>
          <IconButton onClick={() => onClose()}>
            <CloseIcon/>
          </IconButton>

        </Stack>
        <Typography
          fontSize='1.25rem'
          fontWeight={600}
        >
          Использование токенов
        </Typography>
        <ChartStyled />
        <Divider/>
        <Typography
          fontSize='1.25rem'
          fontWeight={600}
        >
          История операций
        </Typography>
        <SortableTable
          headCells={transactionTableHeadCells}
          tableData={tableData}
          isRowsActions={false}
        />
      </Stack>
    </Box>
  )
}