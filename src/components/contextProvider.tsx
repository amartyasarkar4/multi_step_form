import { TypesOfStages } from "@/lib/loadtypes";
import { createContext } from "react";

export type ActiveStageContextType = {
  activeStage: TypesOfStages;
  setActiveStage: (update: TypesOfStages) => void;
};

export const ActiveStageContext = createContext<
  ActiveStageContextType | undefined
>(undefined);
