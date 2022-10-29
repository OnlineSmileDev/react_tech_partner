import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Button from "../button";
import { AiFillCaretDown } from "react-icons/ai";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { pipleLines } from "../../utils";

function AddPipeModal(props) {
  const [showSelectSource, setShowSelectSource] = useState(false);

  const [selectedSourceConnector, setSelectedSourceConnector] = useState(null);

  useEffect(() => {
    setSelectedSourceConnector(null);
  }, []);

  const closeUsersModal = () => {
    props.closeModal();
  };

  const handleClick = (event) => {
    setShowSelectSource(event.currentTarget);
  };

  const handleClose = () => {
    setShowSelectSource(null);
  };

  const open = Boolean(showSelectSource);
  const id = open ? "simple-popover" : undefined;

  const onClickSourceConnector = (item) => {
    setSelectedSourceConnector(item);
    setShowSelectSource(null);
  };

  const showSourceConnectorItem = (item) => {
    return (
      <div
        class="flex flex-row items-center justify-between my-1 cursor-pointer w-full"
        onClick={() => onClickSourceConnector(item)}
      >
        <span>{item.name}</span>
        <div class="flex flex-row items-center">
          <img src={item.icon} alt="icon" class="w-5 h-5" />
          <span class="flex text-[16px] text-black font-medium font-plex ml-4">
            {item.destiation}
          </span>
        </div>
      </div>
    );
  };

  return (
    <Modal
      isOpen={props.isOpen}
      ariaHideApp={false}
      onRequestClose={closeUsersModal}
      style={{
        overlay: { background: "rgba(18, 31, 62, 0.6)" },
        content: { transform: "translate(0%, 20%)" },
      }}
      className="flex w-[944px] h-[616px] bg-white m-auto rounded-2xl border-none"
    >
      <div class="flex flex-col w-full border-none">
        <div class="flex h-[92px] w-full bg-white rounded-2xl absolute left-0 top-0">
          <div class="flex flex-row w-full px-6 justify-between items-center shadow-md">
            <div class="flex flex-row">
              <span class="text-[12px] text-white font-medium bg-[#3F51B5] flex w-6 h-6 rounded-full justify-center items-center">
                1
              </span>
              <span class="text-[16px] text-[#000]/80 font-medium font-plex ml-2">
                Source & Destination
              </span>
            </div>
            <hr class="w-[180px] h-0.5 bg-[#000]/10" />
            <div class="flex flex-row">
              <span class="text-[12px] text-[#000]/25 font-medium bg-[#000]/20 flex w-6 h-6 rounded-full justify-center items-center">
                2
              </span>
              <span class="text-[16px] text-[#000]/40 font-medium font-plex ml-2">
                Data
              </span>
            </div>
            <hr class="w-[180px] h-0.5 bg-[#000]/10" />
            <div class="flex flex-row">
              <span class="text-[12px] text-[#000]/25 font-medium bg-[#000]/20 flex w-6 h-6 rounded-full justify-center items-center">
                3
              </span>
              <span class="text-[16px] text-[#000]/40 font-medium font-plex ml-2">
                Ingestion Method
              </span>
            </div>
          </div>
        </div>

        <div class="flex w-full flex-col p-6 pb-[70px] mt-[83px]">
          <div class="flex flex-col w-full">
            <div class="flex flex-row w-full items-center">
              <span class="text-[20px] text-black font-normal font-plex">
                New Pipeline
              </span>
            </div>
            <div class="flex flex-row w-full items-center mt-12">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Pipeline Settings
              </span>
            </div>

            <div class="flex flex-row w-full items-center mt-8">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Pipeline Name
              </span>
              <div class="p-1 w-[350px] border border-gray-400 rounded ml-2">
                <input
                  type="text"
                  placeholder="give your pipeline a name (optional)"
                  class="bg-transparent ml-2 text-[16px] text-[#000]/50 w-full focus:outline-none"
                />
              </div>
            </div>

            <div class="flex flex-row w-full items-center mt-8">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Source Connector
              </span>
              <div
                class="flex flex-row items-center justify-between py-2 px-4 w-[350px] rounded ml-2 shadow-md border border-gray-100"
                onClick={handleClick}
              >
                {selectedSourceConnector ? (
                  showSourceConnectorItem(selectedSourceConnector)
                ) : (
                  <span class="text-[16px] text-[#000]/85 font-normal font-plex">
                    Select a Source
                  </span>
                )}

                <AiFillCaretDown
                  color={"rgba(0,0,0,0.54)"}
                  class="w-4 h-4 ml-6"
                />
              </div>
              <Popover
                id={id}
                open={open}
                anchorEl={showSelectSource}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2, width: 350 }}>
                  <div class="flex flex-col">
                    {pipleLines.map((row) => showSourceConnectorItem(row))}
                  </div>
                </Typography>
              </Popover>
            </div>

            <div class="flex flex-row w-full items-center mt-8">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Destination Connector
              </span>
              <div class="flex flex-row items-center justify-between py-2 px-4 w-[350px] rounded ml-2 shadow-md border border-gray-100">
                <span class="text-[16px] text-[#000]/85 font-normal font-plex">
                  Select a Destination
                </span>
                <AiFillCaretDown
                  color={"rgba(0,0,0,0.54)"}
                  class="w-4 h-4 ml-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col h-[85px] w-full bg-white rounded-2xl absolute left-0 bottom-0">
          <div class="flex flex-row w-full justify-start px-8">
            <Button
              name="CANCEL"
              class="bg-white text-black h-[36px] w-[110px] text-[14px] border-none mr-2"
              onClick={closeUsersModal}
            />
            <Button
              name="CONTINUE"
              class="bg-[#3F51B5] text-white h-[36px] w-[110px] text-[14px] border-none"
              // onClick={addUsersHandler}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AddPipeModal;
