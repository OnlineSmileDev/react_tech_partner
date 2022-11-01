import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Button from "../button";
import { AiFillCaretDown } from "react-icons/ai";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { pipleLines } from "../../utils";
import icons from "../../assets/png/icons";

function AddNewSourceConnectorModal(props) {
  const [showSelectSource, setShowSelectSource] = useState(false);
  const [selectedConnectorType, setSelectedConnectorType] = useState(null);

  const closeUsersModal = () => {
    props.closeModal();
  };

  const handleSourceConnector = (event) => {
    setShowSelectSource(event.currentTarget);
  };

  const handleCloseSourceConnector = () => {
    setShowSelectSource(null);
  };

  const onClickConnectorTypeItem = (item) => {
    setSelectedConnectorType(item);
    setShowSelectSource(null);
  };

  const showConnectorTypeItem = (item) => {
    return (
      <div
        class="flex flex-row items-center justify-between my-1 cursor-pointer w-full"
        onClick={() => onClickConnectorTypeItem(item)}
      >
        {/* <span>{item.name}</span> */}
        <div class="flex flex-row items-center">
          <img src={item.icon} alt="icon" class="w-5 h-5" />
          <span class="flex text-[16px] text-black font-medium font-plex ml-4">
            {item.destiation}
          </span>
        </div>
      </div>
    );
  };

  const open = Boolean(showSelectSource);
  const id = open ? "simple-popover" : undefined;
  
  return (
    <Modal
      isOpen={props.isOpen}
      ariaHideApp={false}
      onRequestClose={closeUsersModal}
      style={{
        overlay: { background: "rgba(18, 31, 62, 0.6)" },
        content: { transform: "translate(0%, 45%)", outline: 'none' },
      }}
      className="flex w-[750px] h-[492px] bg-white m-auto rounded-xl border-none"
    >
      <div class="flex flex-col w-full border-none">
        <div class="flex w-full flex-col p-6 pb-[70px]">
          <div class="flex flex-col w-full">
            <div class="flex flex-row w-full items-center">
              <span class="text-[14px] text-[#000]/60 font-normal font-plex">
                Source Connector Settings
              </span>
            </div>

            <div class="flex flex-row w-full items-center mt-5">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Connector Name
              </span>
              <div class="px-3 py-2 w-[350px] border border-gray-400 rounded ml-2">
                <input
                  type="text"
                  placeholder="give your connector a name (optional)"
                  class="bg-transparent text-[16px] text-[#000]/50 w-full focus:outline-none"
                />
              </div>
            </div>

            <div class="flex flex-row w-full items-center mt-6">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Connector Type
              </span>
              <div
                class="flex flex-row items-center justify-between py-2 px-4 w-[350px] rounded ml-2 shadow-md border border-gray-100 cursor-pointer"
                onClick={handleSourceConnector}
              >
                {selectedConnectorType ? (
                  showConnectorTypeItem(selectedConnectorType)
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
                onClose={handleCloseSourceConnector}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2, width: 350 }}>
                  <div class="flex flex-col">
                    {pipleLines.map((row) => showConnectorTypeItem(row))}
                  </div>
                </Typography>
              </Popover>
            </div>

            <div class="flex flex-row w-full items-center mt-6">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Host
              </span>
              <div class="px-3 py-2 w-[520px] border border-gray-400 rounded ml-2">
                <input
                  type="text"
                  placeholder="type in host url"
                  class="bg-transparent text-[16px] text-[#000]/50 w-full focus:outline-none"
                />
              </div>
              <span class="text-[14px] text-[#000]/85 font-normal font-plex ml-2">
                Port
              </span>
              <div class="px-3 py-2 border border-gray-400 ml-2 rounded">
                <span>prefilled</span>
              </div>
            </div>

            <hr class="w-full h-0.1 bg-gray-400 mt-6" />

            <div class="flex flex-row w-full items-center mt-5">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Username
              </span>
              <div class="px-3 py-2 w-[520px] border border-gray-400 rounded ml-2">
                <input
                  type="text"
                  placeholder="type in username"
                  class="bg-transparent text-[16px] text-[#000]/50 w-full focus:outline-none"
                />
              </div>
            </div>

            <div class="flex flex-row w-full items-center mt-5">
              <span class="text-[14px] text-[#000]/85 font-normal font-plex">
                Password
              </span>
              <div class="px-3 py-2 w-[520px] border border-gray-400 rounded ml-3">
                <input
                  type="text"
                  placeholder="type in password"
                  class="bg-transparent text-[16px] text-[#000]/50 w-full focus:outline-none"
                />
              </div>
            </div>
            
          </div>
        </div>

        <div class="flex flex-col h-[60px] w-full bg-white rounded-2xl absolute left-0 bottom-0">
          <div class="flex flex-row w-full justify-start px-8">
            <Button
              name="CANCEL"
              class="bg-white text-black h-[36px] w-[110px] text-[14px] border-none mr-2"
              onClick={closeUsersModal}
            />
            <Button
              name="SAVE"
              class="bg-[#3F51B5] text-white h-[36px] w-[90px] text-[14px] border-none"
              // onClick={addUsersHandler}
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AddNewSourceConnectorModal;