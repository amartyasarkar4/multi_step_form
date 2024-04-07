import { loadSatges } from "@/api/loadData";

import { TypesOfStages } from "@/lib/loadtypes";
import React, { useContext, useState } from "react";

import classes from "./bar.module.css";
import { ActiveStageContext, ActiveStageContextType } from "../contextProvider";

const ProgressBar = () => {
  const activeStageContext = useContext(ActiveStageContext);

  let { activeStage, setActiveStage } =
    activeStageContext as ActiveStageContextType;

  const [stageOrder, setStageOrder] = useState<TypesOfStages[]>([]);

  const [completeUpto, setCompleteUpto] = useState<number>(0);

  React.useEffect(() => {
    const res = loadSatges();

    // console.log("coming res::", res);
    setStageOrder(res.stageOrder);
    res.stageOrder.map((each, indx) => {
      if (each == activeStage) {
        setCompleteUpto(indx);
      }
    });
  }, [activeStage]);

  return (
    <div className="w-full bg-slate-50 px-1 py-2">
      <div className="flex w-full m-auto px-0 sm:px-8 font-semibold">
        {/* every single stage */}
        {/* <div className="flex">
          <div className="bg-rose-600 w-60 h-2 m-auto"></div>
          <div
            className="border-2 px-1.5 py-.5 bg-rose-200 text-sm"
            style={{
              borderRadius: "50%",
            }}
          >
            <h2 className="">1</h2>
          </div>
        </div>

        <div className="flex">
          <div className="bg-rose-600 w-60 h-2 m-auto"></div>
          <div
            className="border-2 px-1.5 py-.5 bg-rose-200 text-sm"
            style={{
              borderRadius: "50%",
            }}
          >
            <h2 className="">2</h2>
          </div>
        </div>

        <div className="flex w-1/12">
          <div className="bg-lime-600 w-11/12 h-1 m-auto"></div>
          <div
            className="border-2 px-1.5 py-.5 bg-lime-200 text-sm"
            style={{
              borderRadius: "50%",
            }}
          >
            <h2 className="">3</h2>
          </div>
        </div> */}
        {stageOrder?.map((each, i) => {
          const tot = stageOrder.length;
          return (
            <div
              key={i}
              className="flex "
              style={{
                width: `${100 / tot}%`,
              }}
            >
              {activeStage == each ? (
                <div className="flex w-full">
                  <div
                    className="bg-indigo-300 flex-1 h-1 m-auto"
                    style={{ borderRadius: "15px", padding: "3px" }}
                  ></div>
                  <div className=" mx-0 flex">
                    <div
                      className="border-2 border-indigo-600 px-1.5 py-.5 bg-indigo-400 text-slate-50 font-bold text-sm"
                      style={{
                        borderRadius: "50%",
                      }}
                    >
                      <div className={classes.tooltipcontainer}>
                        <h2 className="">{i + 1}</h2>
                        <span
                          className={classes.tooltiptext}
                          style={{
                            backgroundColor: "#818cf8",
                          }}
                        >
                          {each}
                        </span>
                      </div>

                      {/* <span className="relative">{each}</span> */}
                    </div>
                  </div>
                </div>
              ) : i <= completeUpto ? (
                <div className="flex w-full">
                  <div
                    className="bg-emerald-500 flex-1 h-1 m-auto"
                    style={{ borderRadius: "15px", padding: "3px" }}
                  ></div>
                  <div
                    className=" mx-0 sm:mx-1 flex"
                    onClick={() => setActiveStage(each)}
                  >
                    <div
                      className="border-2 border-emerald-700 px-1.5 py-.5 bg-emerald-500 text-slate-50 text-sm font-bold"
                      style={{
                        borderRadius: "50%",
                      }}
                    >
                      <div className={classes.tooltipcontainer}>
                        <h2 className="">{i + 1}</h2>
                        <span
                          className={classes.tooltiptext}
                          style={{
                            backgroundColor: "#34d399",
                          }}
                        >
                          {each}
                        </span>
                      </div>

                      {/* <span className="relative">{each}</span> */}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex w-full">
                  <div
                    className="bg-gray-400 flex-1 h-1 m-auto"
                    style={{ borderRadius: "15px", padding: "3px" }}
                  ></div>
                  <div className="mx-0 sm:mx-1 flex">
                    <div
                      className=" border-2 border-slate-950 px-1.5 py-.5 bg-gray-200 text-sm font-bold"
                      style={{
                        borderRadius: "50%",
                      }}
                    >
                      <div className={classes.tooltipcontainer}>
                        <h2 className="">{i + 1}</h2>
                        <span className={classes.tooltiptext}>{each}</span>
                      </div>

                      {/* <span className="relative">{each}</span> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
