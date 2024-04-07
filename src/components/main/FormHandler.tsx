import { loadSatges } from "@/api/loadData";

import { TypesOfStages } from "@/lib/loadtypes";
import React, { useContext, useState } from "react";
import DescribeBest from "./Forms/DescribeBest";
import MostInterested from "./Forms/MostInterested";
import RightPlace from "./Forms/RightPlace";
import Comfort_level from "./Forms/Comfort_level";
import OnTheWay from "./Forms/OnTheWay";
import { ActiveStageContext, ActiveStageContextType } from "@/app/page";

const FormHandler = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;

  const [stageOrder, setStageOrder] = useState<TypesOfStages[]>([]);

  const [nextStage, setNextStage] = useState<TypesOfStages>();

  React.useEffect(() => {
    const res = loadSatges();

    // console.log("coming res::", res);
    setStageOrder(res.stageOrder);
    res.stageOrder.map((each, indx) => {
      if (each == activeStage) {
        // console.log("next stage will be::", res.stageOrder[indx + 1]);
        if (
          res.stageOrder[indx + 1] == undefined &&
          each == TypesOfStages.ON_THE_WAY
        ) {
          // console.log("actually it will be::", TypesOfStages.STRAT_JOURNEY);
          setNextStage(TypesOfStages.STRAT_JOURNEY);
        } else {
          setNextStage(res.stageOrder[indx + 1]);
        }
      }
    });
  }, [activeStage]);

  return (
    <div>
      <div>
        {activeStage == TypesOfStages.DESCRIBE_BEST && <DescribeBest />}
        {activeStage == TypesOfStages.MOST_INTERESTED && <MostInterested />}
        {activeStage == TypesOfStages.RIGHT_PLACE && <RightPlace />}
        {activeStage == TypesOfStages.COMFORT_LEVEL && <Comfort_level />}
        {activeStage == TypesOfStages.ON_THE_WAY && <OnTheWay />}
      </div>
      {/* <div className="flex items-center justify-center  ">
        <button
          className="bg-indigo-500 px-4 py-2 rounded-lg text-slate-50 font-bold pointer"
          onClick={() =>
            setActiveStage(nextStage || TypesOfStages.DESCRIBE_BEST)
          }
        >
          Continue
        </button>
      </div> */}
    </div>
  );
};

export default FormHandler;
