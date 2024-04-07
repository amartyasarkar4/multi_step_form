"use client";
import MainComponent from "@/components/main/MainComponent";
import React, { useContext } from "react";
import { ActiveStageContext, ActiveStageContextType } from "./layout";
import { TypesOfStages } from "@/lib/loadtypes";

const DisscussionPage = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;
  return (
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
  );
};

export default DisscussionPage;
