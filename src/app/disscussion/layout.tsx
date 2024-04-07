"use client";
import { TypesOfStages } from "@/lib/loadtypes";
import React, { createContext, useState } from "react";

export type ActiveStageContextType = {
  activeStage: TypesOfStages;
  setActiveStage: (update: TypesOfStages) => void;
};

export const ActiveStageContext = createContext<
  ActiveStageContextType | undefined
>(undefined);

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  React.useEffect(() => {}, []);
  const [activeStage, setActiveStage] = useState<TypesOfStages>(
    TypesOfStages.DESCRIBE_BEST
  );

  const contextValue: ActiveStageContextType = {
    activeStage,
    setActiveStage,
  };

  return (
    <ActiveStageContext.Provider value={contextValue}>
      {children}
    </ActiveStageContext.Provider>
  );
}
