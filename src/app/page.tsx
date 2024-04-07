"use client";
import {
  ActiveStageContext,
  ActiveStageContextType,
} from "@/components/contextProvider";
import MainComponent from "@/components/main/MainComponent";
import { TypesOfStages } from "@/lib/loadtypes";
import Image from "next/image";
import React, { createContext, useState } from "react";

export default function Home() {
  const [activeStage, setActiveStage] = useState<TypesOfStages>(
    TypesOfStages.DESCRIBE_BEST
  );

  const contextValue: ActiveStageContextType = {
    activeStage,
    setActiveStage,
  };

  return (
    <ActiveStageContext.Provider value={contextValue}>
      <MainComponent />
    </ActiveStageContext.Provider>
  );
}
