import React, {useEffect, useState} from "react";
import {Drawer} from "@mui/material";

import {UserTable} from "../../entities/user";
import {TransactionPanel} from "../../entities/transaction";
import {UserTableProps} from "../../entities/user";
import {getUserList} from "../../entities/user";
import {userListMapper} from "../../entities/user";
import { TableData } from "../../shared/ui";


export const MyOrganizationPage = () => {
  const [tableData, setTableData] = useState<TableData>({
    isError: false,
    isLoading: false,
    totalPages: 0,
    pagesData: {}
  })
  const [selectedRow, setSelectedRow] = useState<Record<string, any> | null>(null)
  const [pageNumber, setPageNumber] = useState(1)


  const onCloseHandler = () => {
    setSelectedRow(null)
  }

  const onClickRowHandler:UserTableProps['onClickRow'] = (row) => {
    setSelectedRow(row)
  }

  useEffect(() => {
    if (tableData.pagesData && tableData.pagesData[pageNumber]) return

    (async () => {
      setTableData(prevState => ({
        ...prevState,
        isError: false,
        isLoading: true
      }))
      try {
        const {data: {data, pages}} = await getUserList({page: pageNumber})
        setTableData(prevState => ({
          isError: false,
          isLoading: false,
          totalPages: pages,
          pagesData: {
            ...prevState.pagesData,
            [pageNumber]: userListMapper(data)
          }
        }))
      }catch (e) {
        setTableData(prevState => ({
          ...prevState,
          isError: true,
          isLoading: false
        }))
        console.error(e)
      }
    })()
  }, [pageNumber])

  return (
    <>
      <UserTable
        tableData={tableData}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        onClickRow={onClickRowHandler}
      />
      <Drawer
        anchor="right"
        open={!!selectedRow}
        onClose={onCloseHandler}
      >
        <TransactionPanel
          id={selectedRow?.id || ''}
          email={selectedRow?.email || ''}
          onClose={onCloseHandler}
        />
      </Drawer>
    </>
  )
}