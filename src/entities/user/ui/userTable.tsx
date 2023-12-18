import React, {Dispatch, SetStateAction, useState} from "react";

import {Stack, Theme, useMediaQuery} from "@mui/material";

import {userTableHeadCells, UserTableRowModel} from "../model/model";
import {ContentCard} from "../../../shared/ui";
import {SortableTable, SortableTableProps, TableData} from "../../../shared/ui";
import {TablePaginator} from "../../../shared/ui";
import {SearchFiled} from "../../../shared/ui";

export type UserTableProps = {
  tableData: TableData,
  pageNumber: number,
  setPageNumber: Dispatch<SetStateAction<number>>
} & Partial<Pick<SortableTableProps<keyof UserTableRowModel>, 'onClickRow'>>

export const UserTable = (props: UserTableProps) => {
  const {onClickRow, tableData, pageNumber, setPageNumber} = props
  const [searchValue, setSearchValue] = useState('')

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))


  return (
    <ContentCard title="Моя организация">
      <Stack gap='24px'>
        <SearchFiled
          value={searchValue}
          setValue={setSearchValue}
        />
        <SortableTable
          tableData={(tableData.pagesData && tableData.pagesData[pageNumber]) ? tableData.pagesData[pageNumber] : []}
          headCells={userTableHeadCells}
          onClickRow={onClickRow}
          isLoading={tableData.isLoading}
          maxHeight={`calc(100vh - ${isMobile ? '350px' : '450px'})`}
        />
        <TablePaginator
          totalPages={tableData.totalPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Stack>
    </ContentCard>
  )
}