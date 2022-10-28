import React, { useState } from "react";
import Logo from "../../assets/png/logo.png";

function Sidebar(props) {
  const [isPipeline, setIsPipeline] = useState(true);
  const [isConnector, setIsConnector] = useState(false);
  const [isTransformation, setIsTransformation] = useState(false);
  const [isUpload, setIsUpload] = useState(false);


  const onClickConnectors = () => {
    setTimeout(() => {
      setIsPipeline(false);
      setIsConnector(false);
      setIsTransformation(false);
      setIsUpload(false);
    }, 100);
  }

  return (
    <div class="flex flex-col w-[300px] h-screen bg-gray-100 p-2">
      <div class="flex w-full flex-row p-2">
        <img src={Logo} alt="icon" className="img-logo" class="w-[100px] h-auto auto-[100/75]"/>
      </div>
      <div class="flex flex-col mt-2">
        <div class="flex flex-row p-4 justify-between">
          <span>Pipelines</span>
          <span>42</span>
        </div>
        <div 
          class="flex flex-row p-4 justify-between cursor-pointer"
          onClick={onClickConnectors}
        >
          <span>Connectors</span>
          <span>14</span>
        </div>
        <div class="flex flex-row p-4 justify-between">
          <span>Transformations</span>
          <span>67</span>
        </div>
        <div class="flex flex-row p-4 justify-between">
          <span>Uploads</span>
        </div>
      </div>
    </div>
    
  )
}

export default Sidebar;