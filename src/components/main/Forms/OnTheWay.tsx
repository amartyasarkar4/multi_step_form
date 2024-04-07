import {
  ActiveStageContext,
  ActiveStageContextType,
} from "@/app/disscussion/layout";
import { TypesOfStages } from "@/lib/loadtypes";
import Image from "next/image";
import React, { useContext } from "react";

const OnTheWay = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col sm:flex-row w-3/4 "
        style={{ height: "580px" }}
      >
        <div className="flex w-full sm:w-1/2 px-4 mt-2 h-full items-center">
          <Image
            src="/child.jpeg"
            alt="rlaceImg"
            width={500}
            height={500}
            style={{
              width: "300px",
              height: "190px",
            }}
          />
        </div>
        <div className="w-full sm:w-1/2 bg-slate-50 flex flex-col justify-center my-8 px-4 justify-center">
          <h2 className="text-lg sm:text-2xl font-semibold">
            You&apos;re on your way!
          </h2>
          {/* <star></star> */}
          <div className="flex gap-2 mt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/star-gold.svg"
                alt="starSvg"
                width={500}
                height={500}
                style={{ height: "30px", width: "30px" }}
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm mt-8">
            &ldquo;Though Its engaging and well-structured course, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations&rdquo;
          </p>

          <span className="mt-8 text-sm">--Jacob S.</span>
        </div>
      </div>
      <div className="flex items-center justify-center  mb-8">
        <button
          className="bg-indigo-500
         px-4 py-2 rounded-lg text-slate-50 font-bold pointer"
          onClick={() => setActiveStage(TypesOfStages.STRAT_JOURNEY)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OnTheWay;
