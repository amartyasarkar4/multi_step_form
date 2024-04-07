import { loadComfort_level_data } from "@/api/loadData";
import {
  ActiveStageContext,
  ActiveStageContextType,
} from "@/app/disscussion/layout";
import { ComfortLevelType, TypesOfStages } from "@/lib/loadtypes";
import Image from "next/image";
import React, { useContext, useState } from "react";
import classes from "./forms.module.css";

const Comfort_level = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;

  const [comfortData, setcomfortData] = useState<ComfortLevelType[]>([]);

  const [selectComfort, setselectComfort] = useState<ComfortLevelType>();

  React.useEffect(() => {
    const res = loadComfort_level_data();
    setcomfortData(res);
  }, []);

  const gotoNext = () => {
    // console.log("selectComfort Level", selectComfort);
    if (selectComfort) {
      setActiveStage(TypesOfStages.ON_THE_WAY);
    } else {
      alert("Please select first");
    }
  };

  return (
    <div>
      <div className="my-8 flex flex-col items-center">
        <h2 className="text-xl sm:text-3xl font-semibold">
          Which Are you most interested in?
        </h2>
        <div className="w-full flex justify-center mt-4 pl-4 ">
          <p className="text-xs">
            Choose just one.This will help us get you started(but won&apos;t
            limit your experience)
          </p>
        </div>
      </div>
      <ul className="flex flex-col sm:flex-row  gap-8 items-center mt-28 px-4 ml-2 justify-center mb-24 sm:mb-48">
        {comfortData.map((each, indx) => {
          return (
            <li
              key={indx}
              className={`flex flex-col w-72 sm:w-96 bg-slate-50 items-center justify-start text-xs sm:text-base font-medium pl-4 py-1  border-2 border-gray-200  rounded ${
                selectComfort == each ? classes.doneComfort : ""
              }`}
              onClick={() => setselectComfort(each)}
            >
              <Image
                src={each.pic}
                alt="pictureOfType"
                width={500}
                height={500}
                // style={{
                //   width: "50px",
                //   height: "50px",
                // }}
                className="w-16 h-12 sm:w-28 sm:h-16 mr-4"
              />
              <p className="text-sm my-2">{each.desc}</p>
              <p className="text-sm text-zinc-400 my-2">{each.type}</p>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-center  mb-12">
        <button
          className={`${
            selectComfort == undefined
              ? "bg-gray-200 text-gray-300"
              : "bg-indigo-500"
          } px-4 py-2 rounded-lg text-slate-50 font-bold pointer`}
          onClick={gotoNext}
          disabled={selectComfort == undefined}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Comfort_level;
