import {
  ActiveStageContext,
  ActiveStageContextType,
} from "@/app/disscussion/layout";
import Image from "next/image";
import React, { useContext, useState } from "react";

import classes from "./forms.module.css";
import { DescribeType, TypesOfStages } from "@/lib/loadtypes";
import { loadMostInterestedData } from "@/api/loadData";

const MostInterested = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;

  const [descData, setDescData] = useState<DescribeType[]>([]);

  const [selectInterested, setselectInterested] = useState<DescribeType>();

  React.useEffect(() => {
    const res = loadMostInterestedData();
    setDescData(res);
  }, []);

  const gotoNext = () => {
    // console.log("selectInterested", selectInterested);
    if (selectInterested) {
      setActiveStage(TypesOfStages.RIGHT_PLACE);
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
      <ul className="flex flex-col gap-8 items-center my-12 px-4 ml-2 justify-center">
        {descData.map((each, indx) => {
          return (
            <li
              key={indx}
              className={`flex w-72 sm:w-96 bg-slate-50 items-center justify-start text-xs sm:text-base font-medium pl-4 py-1 hover:bg-cyan-50 border-2 border-gray-200  rounded ${
                selectInterested == each ? classes.done : ""
              }`}
              onClick={() => setselectInterested(each)}
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
                className="w-9 h-9 sm:w-12 sm:h-12 mr-4"
              />
              <p>{each.desc}</p>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-center  mb-12">
        <button
          className={`${
            selectInterested == undefined
              ? "bg-gray-200 text-gray-300"
              : "bg-indigo-500"
          } px-4 py-2 rounded-lg text-slate-50 font-bold pointer`}
          onClick={gotoNext}
          disabled={selectInterested == undefined}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MostInterested;
