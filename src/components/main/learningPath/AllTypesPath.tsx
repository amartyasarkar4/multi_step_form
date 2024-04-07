import { load_choose_learning_path_data } from "@/api/loadData";
import { ChooseLearningPathType } from "@/lib/loadtypes";
import Image from "next/image";
import React, { useState } from "react";

import classes from "../Forms/forms.module.css";
const AllTypesPath = () => {
  const [learningPath, setLearningPath] = useState<ChooseLearningPathType[]>(
    []
  );

  const [selectLearnPath, setselectLearnPath] =
    useState<ChooseLearningPathType>();

  React.useEffect(() => {
    const res = load_choose_learning_path_data();
    setLearningPath(res);
  }, []);

  return (
    <div className="flex justify-center mt-12">
      <ul className="w-5/6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {learningPath.map((sng, idx) => {
          return (
            <li
              key={idx}
              className={`flex items-center mx-2 my-4 border border-gray-300 px-2 py-2 relative pt-4 ${
                selectLearnPath == sng ? classes.donePath : ""
              } `}
              onClick={() => setselectLearnPath(sng)}
            >
              {sng.type ? (
                <div className="absolute top-0 right-0 text-xs bg-yellow-500 rounded-full px-2 font-semibold">
                  {sng.type}
                </div>
              ) : null}
              <div className="w-4/6 text-start max-w-72">
                <p className="text-xs">
                  <span
                    className="font-semibold
                  "
                  >
                    {sng.title}
                    {"  "}
                  </span>
                  {sng.desc}
                </p>
              </div>

              <div className="w-2/6 max-w-28">
                <Image
                  src={sng.pic}
                  alt="pathPic"
                  width={500}
                  height={500}
                  style={{ width: "240px", height: "100px" }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllTypesPath;
