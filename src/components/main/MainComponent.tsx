import React, { useContext } from "react";
import ProgressBar from "../progeressBar/Bar";
import FormHandler from "./FormHandler";

import { TypesOfStages } from "@/lib/loadtypes";
import FinalTouch from "./FinalTouch";
import { ActiveStageContext, ActiveStageContextType } from "../contextProvider";

const MainComponent = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;

  // React.useEffect(() => {
  //   setActiveStage(TypesOfStages.STRAT_JOURNEY);
  // }, []);
  return (
    <div
      className=" bg-slate-50"
      style={{
        width: "100vw",
      }}
    >
      {activeStage == TypesOfStages.STRAT_JOURNEY ? (
        <div>
          <FinalTouch />
        </div>
      ) : (
        <div className="">
          <ProgressBar />
          <FormHandler />
        </div>
      )}
    </div>
  );
};

export default MainComponent;
