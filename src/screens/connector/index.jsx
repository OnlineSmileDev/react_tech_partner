import React from "react";
import Sidebar from "../../components/sidebar";
import { useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { MdFilterAlt } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import TablePagination from "@mui/material/TablePagination";
import ConnectorTable from "../../components/connectorTable";

function Connector() {
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div class="flex w-full p-4">
      <Sidebar navigate={navigate} sideIndex={2}/>
      <div class="flex w-full flex-col ml-4">
        <div class="flex flex-col border border-gray-200 rounded-md p-2">
          <span class="flex text-[24px]">Pipelines</span>
          <div class="flex flex-row">
            <div class="flex flex-row">
              <span class="flex text-[16px] text-[#000]/50">3 Active</span>
            </div>
            <div class="flex flex-row items-center ml-4">
              <BsDot color={"rgba(0,0,0,0.5)"} class="w-5 h-5" />
              <span class="flex text-[16px] text-[#000]/50">12 broken</span>
            </div>
            <div class="flex flex-row items-center ml-4">
              <BsDot color={"rgba(0,0,0,0.5)"} class="w-5 h-5" />
              <span class="flex text-[16px] text-[#000]/50">3 paused</span>
            </div>
            <div class="flex flex-row items-center ml-4">
              <BsDot color={"rgba(0,0,0,0.5)"} class="w-5 h-5" />
              <span class="flex text-[16px] text-[#000]/50 italic">
                last refreshed 2 hours ago
              </span>
              <IoMdRefresh color={"rgba(0,0,0,0.5)"} class="w-5 h-5 ml-1" />
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-6">
          <div class="flex justify-between px-4">
            <div class="flex flex-row items-center w-full">
              <HiSearch color={"rgba(0,0,0,0.54)"} class="w-5 h-5" />
              <div class="flex border rounded border-gray-400 h-[40px] w-full ml-2">
                <input
                  type="text"
                  placeholder="Search by name"
                  class="bg-transparent ml-2 w-full text-[16px] text-[#000]/50 focus:outline-none"
                />
              </div>
            </div>
            <div class="flex flex-row items-center w-full ml-6">
              <MdFilterAlt color={"rgba(0,0,0,0.54)"} class="w-5 h-5" />
              <div class="flex flex-row justify-between items-center border rounded border-gray-400 h-[40px] w-full ml-2 px-2">
                <input
                  type="text"
                  placeholder="All Sources"
                  class="bg-transparent ml-2 text-[16px] text-[#000]/50 w-full focus:outline-none"
                />
                <AiFillCaretDown color={"rgba(0,0,0,0.54)"} class="w-4 h-4" />
              </div>
            </div>
            <div class="flex flex-row items-center w-full ml-6">
              <MdFilterAlt color={"rgba(0,0,0,0.54)"} class="w-5 h-5" />
              <div class="flex flex-row justify-between items-center border rounded border-gray-400 h-[40px] w-full ml-2 px-2">
                <input
                  type="text"
                  placeholder="All Status"
                  class="bg-transparent ml-2 text-[16px] text-[#000]/50 w-full focus:outline-none"
                />
                <AiFillCaretDown color={"rgba(0,0,0,0.54)"} class="w-4 h-4" />
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-4 border border-gray-100 pb-2 shadow-md rounded-md">
            <ConnectorTable />
            <TablePagination
              class="justify-end mt-2"
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connector;
