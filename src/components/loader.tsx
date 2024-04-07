import React from "react";

import classes from "./main/Forms/forms.module.css";
const Loader: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ minHeight: "560px", height: "100%" }}
    >
      {/* <div className="animate-spin rounded-full h-16 w-16 border-8 border-amber-500"></div> */}
      <div className={`${classes.container}`}>
        <div className="rounded-full w-12 h-12 bg-slate-50"></div>
      </div>
      <div className="w-2/3 flex justify-center items-center">
        <h2 className="font-semibold text-sm sm:text-xl mt-8 text-center">
          Finding learning path recommendations for you based on your responses
        </h2>
      </div>
    </div>
  );
};

export default Loader;
