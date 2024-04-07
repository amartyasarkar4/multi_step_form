"use client";
import MainComponent from "@/components/main/MainComponent";
import React, { useState } from "react";
import { ActiveStageContext, ActiveStageContextType } from "../page";
import { TypesOfStages } from "@/lib/loadtypes";

const DisscussionPage = () => {
  const [activeStage, setActiveStage] = useState<TypesOfStages>(
    TypesOfStages.DESCRIBE_BEST
  );

  const contextValue: ActiveStageContextType = {
    activeStage,
    setActiveStage,
  };
  return (
    <ActiveStageContext.Provider value={contextValue}>
      <div>
        <MainComponent />

        {/* <h1>Current Stage: {activeStage}</h1> */}
        {/* <button onClick={() => setActiveStage(TypesOfStages.MOST_INTERESTED)}>
        Change Stage
      </button>
      <button onClick={() => setActiveStage(TypesOfStages.RIGHT_PLACE)}>
        Change Stage 2
      </button>
      <button onClick={() => setActiveStage(TypesOfStages.COMFORT_LEVEL)}>
        Change Stage 3
      </button> */}
      </div>
    </ActiveStageContext.Provider>
  );
};

export default DisscussionPage;
