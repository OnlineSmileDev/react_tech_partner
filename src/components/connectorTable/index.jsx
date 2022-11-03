import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FiArrowUp } from "react-icons/fi";
import { pipeLines } from "../../utils";

function ConnectorTable(props) {
  const [sortRef, setSortRef] = useState(false);
  const [pipeLineList, setPipeLineList] = useState(pipeLines);

  const handleSortTime = () => {
    let sorted = [...pipeLineList].sort((a, b) => {
      if (sortRef) {
        return new Date(a.last_synced) - new Date(b.last_synced);
      } else {
        return new Date(b.last_synced) - new Date(a.last_synced);
      }
    });
    setPipeLineList(sorted);
    setSortRef(!sortRef);
  };

  const handleSortName = (val) => {
    let firstVal;
    let secondVal;
    let sorted = [...pipeLineList].sort((a, b) => {
      if (val === "name") {
        firstVal = a.name;
        secondVal = b.name;
        if (sortRef) {
          return firstVal > secondVal ? -1 : 1;
        } else {
          return firstVal > secondVal ? 1 : -1;
        }
      } else if (val === "source") {
        firstVal = a.source;
        secondVal = b.source;
        if (sortRef) {
          return firstVal > secondVal ? -1 : 1;
        } else {
          return firstVal > secondVal ? 1 : -1;
        }
      } else {
        firstVal = a.status;
        secondVal = b.status;
        if (sortRef) {
          return firstVal > secondVal ? -1 : 1;
        } else {
          return firstVal > secondVal ? 1 : -1;
        }
      }
    });
    setPipeLineList(sorted);
    setSortRef(!sortRef);
  };

  return (
    <div class="flex w-full  flex-col">
      <Table>
        <TableHead class="h-[70px]">
          <TableCell align="left">
            <span
              class="text-[12px] text-[#757575] font-bold font-plex cursor-pointer"
              onClick={() => handleSortName("name")}
            >
              Name
            </span>
          </TableCell>
          <TableCell align="left">
            <span
              class="text-[12px] text-[#757575] font-bold font-plex cursor-pointer"
              onClick={() => handleSortName("source")}
            >
              Source
            </span>
          </TableCell>
          <TableCell align="left">
            <div class="flex flex-row items-center justify-around">
              <span
                class="text-[12px] text-[#757575] font-bold font-plex mr-2 cursor-pointer"
                onClick={() => handleSortName("status")}
              >
                Status
              </span>
              <FiArrowUp color="#757575" class="w-4 h-4" />
            </div>
          </TableCell>
          <TableCell>
            <span
              class="text-[12px] text-[#757575] font-bold font-plex cursor-pointer"
              onClick={handleSortTime}
            >
              Last synced
            </span>
          </TableCell>
        </TableHead>
        <TableBody>
          {pipeLineList.map((row) => (
            <TableRow class="h-[48px] my-2 hover:bg-[#F4F8FE]" key={row._id}>
              <TableCell>
                <span class="flex text-[14px] text-black font-medium font-plex">
                  {row.name}
                </span>
              </TableCell>
              <TableCell>
                <div class="flex flex-row items-center">
                  <img src={row.icon} alt="icon" class="w-5 h-5" />
                  <span class="flex text-[16px] text-black font-medium font-plex ml-4">
                    {row.source}
                  </span>
                </div>
              </TableCell>
              <TableCell align="center">
                <span
                  class={`text-[12px]  font-medium font-plex py-1 px-4 rounded-full ${
                    row.status === "ACTIVE"
                      ? "text-[#159600]"
                      : "text-[#9B1417]"
                  } ${
                    row.status === "ACTIVE"
                      ? "bg-[#159600]/25"
                      : "bg-[#9B1417]/25"
                  }`}
                >
                  {row.status}
                </span>
              </TableCell>
              <TableCell>
                <span class="flex text-[14px] text-[black] font-medium font-plex">
                  {row.last_synced}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ConnectorTable;
