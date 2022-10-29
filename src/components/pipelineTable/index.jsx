import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FiArrowUp } from "react-icons/fi";
import { pipleLines } from "../../utils";

function PipelineTable(props) {
  return (
    <div class="flex w-full  flex-col">
      <Table>
        <TableHead class="h-[70px]">
          <TableCell align="left">
            <span class="text-[12px] text-[#757575] font-bold font-plex">
              Name
            </span>
          </TableCell>
          <TableCell align="left">
            <span class="text-[12px] text-[#757575] font-bold font-plex">
              Source
            </span>
          </TableCell>
          <TableCell align="left">
            <span class="text-[12px] text-[#757575] font-bold font-plex">
              Destination
            </span>
          </TableCell>
          <TableCell align="left">
            <div class="flex flex-row items-center justify-around">
              <span class="text-[12px] text-[#757575] font-bold font-plex mr-2">
                Status
              </span>
              <FiArrowUp color="#757575" class="w-4 h-4" />
            </div>
          </TableCell>
          <TableCell>
            <span class="text-[12px] text-[#757575] font-bold font-plex">
              Last synced
            </span>
          </TableCell>
        </TableHead>
        <TableBody>
          {pipleLines.map((row) => (
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
              <TableCell>
                <div class="flex flex-row items-center">
                  <img src={row.icon} alt="icon" class="w-5 h-5" />
                  <span class="flex text-[16px] text-black font-medium font-plex ml-4">
                    {row.destiation}
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

export default PipelineTable;
