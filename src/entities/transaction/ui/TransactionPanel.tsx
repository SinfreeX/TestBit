import React, {useEffect, useState} from "react";
import {Box, Divider, IconButton, Stack, Theme, Typography, useMediaQuery} from "@mui/material";
import {ReactComponent as CloseIcon} from "../../../shared/icons/close.svg"
import {SortableTable, TableData} from "../../../shared/ui";
import {transactionTableHeadCells} from "../model/model";
import {ChartStyled} from "../../../shared/ui";
import {getTransactionsById} from "../api/getTransaction/getTransactionsById";
import {TransactionMapper} from "../api/getTransaction/mapper";


export type TransactionPanelProps = {
  email: string,
  id: string,
  onClose: () => void
}

export const TransactionPanel = (props: TransactionPanelProps) => {
  const {email, id, onClose} = props
  const [tableData, setTableData] = useState<TableData>({
    isLoading: false,
    isError: false,
    totalPages: 1,
    pagesData: {}
  })

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  useEffect(() => {

    if (!id) return

    (async () => {
      setTableData(prevState => ({
        ...prevState,
        isError: false,
        isLoading: true
      }))
      try {
        const {data} = await getTransactionsById({id})
        setTableData(prevState => ({
          ...prevState,
          isLoading: false,
          isError: false,
          pagesData: {
            1: TransactionMapper(data)
          }
        }))
      }catch (e) {
        console.error(e)
        setTableData(prevState => ({
          ...prevState,
          isError: true,
          isLoading: false
        }))
      }
    })()
  }, [id])

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
          tableData={(tableData.pagesData && tableData.pagesData[1]) ? tableData.pagesData[1] : []}
          isLoading={tableData.isLoading}
          isRowsActions={false}
          maxHeight={`calc(100vh - ${isMobile ? '550px' : '690px'})`}
        />
      </Stack>
    </Box>
  )
}