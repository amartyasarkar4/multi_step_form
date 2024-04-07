import { loadDescribeBestData } from "@/api/loadData";

import { DescribeType, TypesOfStages } from "@/lib/loadtypes";
import Image from "next/image";
import React, { useContext, useState } from "react";

import classes from "./forms.module.css";
import { ActiveStageContext, ActiveStageContextType } from "@/app/page";

const DescribeBest = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;

  const [descData, setDescData] = useState<DescribeType[]>([]);

  const [selectDesc, setselectDesc] = useState<DescribeType>();

  React.useEffect(() => {
    const res = loadDescribeBestData();
    setDescData(res);
  }, []);

  const gotoNext = () => {
    // console.log("selectDesc", selectDesc);
    if (selectDesc) {
      setActiveStage(TypesOfStages.MOST_INTERESTED);
    } else {
      alert("Please select first");
    }
  };

  return (
    <div>
      <div className="my-8 flex flex-col items-center">
        <h2 className="text-xl sm:text-3xl font-semibold">
          Which describes you best?
        </h2>
        <p className="text-xs mt-2">
          This will help us personalize your experience
        </p>
      </div>
      <ul className="flex w-full flex-col gap-8 items-center my-12 px-4 pl-2 justify-center">
        {descData.map((each, indx) => {
          return (
            <li
              key={indx}
              className={`flex w-72 sm:w-96 bg-slate-50 items-center justify-start text-xs sm:text-base font-medium pl-4 py-1 hover:bg-cyan-50 border-2 border-gray-200  rounded ${
                selectDesc == each ? classes.done : ""
              }`}
              onClick={() => setselectDesc(each)}
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

      <div className="flex items-center justify-center mt-2 mb-16">
        <button
          className={`${
            selectDesc == undefined
              ? "bg-gray-200 text-gray-300"
              : "bg-indigo-500"
          } px-4 py-2 rounded-lg text-slate-50 font-bold pointer`}
          onClick={gotoNext}
          disabled={selectDesc == undefined}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DescribeBest;
