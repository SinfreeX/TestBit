import React, {useState} from "react";
import {Drawer} from "@mui/material";

import {UserTable, userTableDataGenerator} from "../../entities/user";
import {TransactionPanel} from "../../entities/transaction";
import {UserTableProps} from "../../entities/user/ui/userTable";


export const MyOrganizationPage = () => {
  const [tableData] = useState(userTableDataGenerator(500))
  const [selectedRow, setSelectedRow] = useState<Record<string, any> | null>(null)

  const onCloseHandler = () => {
    setSelectedRow(null)
  }

  const onClickRowHandler:UserTableProps['onClickRow'] = (row) => {
    setSelectedRow(row)
  }

  return (
    <>
      <UserTable
        tableData={tableData}
        onClickRow={onClickRowHandler}
      />
      <Drawer
        anchor="right"
        open={!!selectedRow}
        onClose={onCloseHandler}
      >
        <TransactionPanel
          email={selectedRow?.email || ''}
          onClose={onCloseHandler}
        />
      </Drawer>
    </>
  )
}