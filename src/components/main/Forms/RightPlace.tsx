import { ActiveStageContext, ActiveStageContextType } from "@/app/page";
import { TypesOfStages } from "@/lib/loadtypes";
import Image from "next/image";
import React, { useContext } from "react";

const RightPlace = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row w-3/4 ">
        <div className="w-full sm:w-1/2 px-4 mt-12">
          <Image
            src="/reason.svg"
            alt="rightPlaceImg"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full sm:w-1/2 bg-slate-50 flex flex-col justify-center my-8 px-4">
          <h2 className="text-lg sm:text-2xl font-semibold">
            You&apos;re in the right place
          </h2>
          <p className="text-xs sm:text-sm">
            Brilliant gets you hands-on to help improve your pofessional skills
            and knowledge, You&apos;ll interact with concepts and solve fun
            problem in math ,science and computer science
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center  mb-8">
        <button
          className="bg-indigo-500
         px-4 py-2 rounded-lg text-slate-50 font-bold pointer"
          onClick={() => setActiveStage(TypesOfStages.COMFORT_LEVEL)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RightPlace;
