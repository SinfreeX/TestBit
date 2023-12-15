import React, {useMemo, useState} from "react";

import {ContentCard} from "../../../shared/ui/ContentCard/ContentCard";
import {SortableTable, SortableTableProps} from "../../../shared/ui/SortableTable.tsx/SortableTable";
import {userTableHeadCells, UserTableRowModel} from "../model/model";
import {TablePaginator} from "../../../shared/ui/SortableTable.tsx/TablePaginator";
import {Stack} from "@mui/material";
import {SearchFiled} from "../../../shared/ui/SearchField/SearchFiled";

export type UserTableProps = {
  tableData: Record<keyof UserTableRowModel | 'id', any>[]
} & Partial<Pick<SortableTableProps<keyof UserTableRowModel>, 'onClickRow'>>

export const UserTable = (props: UserTableProps) => {
  const {onClickRow, tableData} = props

  const [pageNumber, setPageNumber] = useState(1)
  const [searchValue, setSearchValue] = useState('')

  const sortedData = useMemo(() => {
    if (!searchValue) return tableData
    return tableData.filter(row =>
      !!Object.values(row).find(cell => cell.includes(searchValue))
    )
  }, [searchValue])


  return (
    <ContentCard title="Моя организация">
      <Stack gap='24px'>
        <SearchFiled
          value={searchValue}
          setValue={setSearchValue}
        />
        <SortableTable
          tableData={sortedData}
          headCells={userTableHeadCells}
          pageNumber={pageNumber}
          pageSize={10}
          onClickRow={onClickRow}
        />
        <TablePaginator
          data={sortedData}
          pageSize={10}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Stack>
    </ContentCard>
  )
}