import React, { useState } from "react";
import icons from "../../assets/png/icons";
import AddPipeModal from "../addPipeModal";

function Sidebar(props) {
  const [isPipeline, setIsPipeline] = useState(true);
  const [isConnector, setIsConnector] = useState(false);
  const [isModalAddPipe, setIsModalAddPipe] = useState(false);

  const onClickPipelines = () => {
    setTimeout(() => {
      setIsPipeline(true);
      setIsConnector(false);
    }, 100);
  };

  const onClickConnectors = () => {
    setTimeout(() => {
      setIsPipeline(false);
      setIsConnector(true);
    }, 100);
  };

  const onClickAddPipeLine = () => {
    setIsModalAddPipe(true);
  }

  const closeAddPipeModal = () => {
    setIsModalAddPipe(false);
  };

  return (
    <div class="flex flex-col w-[300px] h-screen bg-gray-100 p-4">
      <div class="flex w-full flex-row p-2">
        <img
          src={icons.logoIcon}
          alt="icon"
          className="img-logo"
          class="w-[100px] h-auto auto-[100/75]"
        />
      </div>
      <div class="flex flex-col mt-2 px-1">
        <div
          class={`flex flex-col p-3 rounded-md ${isPipeline ? "border-2" : null} ${
            isPipeline ? null : "pr-8"
          }
          `}
          onClick={onClickPipelines}
        >
          <div class="flex flex-row justify-between">
            <span
              class={`${isPipeline ? "text-[20px]" : "text-[16px]"} ${
                isPipeline ? "font-bold" : "font-normal"
              }`}
            >
              Pipelines
            </span>
            <span
              class={`${isPipeline ? "text-[20px]" : "text-[16px]"} ${
                isPipeline ? "font-bold" : "font-normal"
              }`}
            >
              42
            </span>
          </div>
          {isPipeline && (
            <div class={`flex mx-3 mt-3 bg-[#3F51B5] justify-center p-1 rounded-md cursor-pointer`} onClick={onClickAddPipeLine}>
              <span class="text-white font-normal text-[14px]">
                + ADD PIPELINE
              </span>
            </div>
          )}
        </div>

        <div
          class={`flex flex-col p-3 rounded-md ${isConnector ? "border-2" : null} ${
            isConnector ? null : "pr-8"
          }
          `}
          onClick={onClickConnectors}
        >
          <div class="flex flex-row justify-between">
            <span
              class={`${isConnector ? "text-[20px]" : "text-[16px]"} ${
                isConnector ? "font-bold" : "font-normal"
              }`}
            >
              Connectors
            </span>
            <span
              class={`${isConnector ? "text-[20px]" : "text-[16px]"} ${
                isConnector ? "font-bold" : "font-normal"
              }`}
            >
              15
            </span>
          </div>
          {isConnector && (
            <div class={`flex mx-3 mt-3 bg-[#3F51B5] justify-center p-1 rounded-md`}>
              <span class="text-white font-normal text-[14px]">
                + ADD CONNECTOR
              </span>
            </div>
          )}
        </div>

        <div class="flex flex-row p-3 justify-between cursor-pointer pr-8">
          <span>Transformations</span>
          <span>64</span>
        </div>
        <div class="flex flex-row p-3 justify-between cursor-pointer pr-8">
          <span>Uploads</span>
        </div>
      </div>

      <AddPipeModal
        isOpen={isModalAddPipe}
        closeModal={closeAddPipeModal}
      />
    </div>
  );
}

export default Sidebar;
