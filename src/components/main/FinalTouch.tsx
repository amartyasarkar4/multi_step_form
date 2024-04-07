import React, { useState } from "react";
import Loader from "../loader";
import AllTypesPath from "./learningPath/AllTypesPath";

const FinalTouch = () => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mt-24">
        <h2 className="text-sm font-semibold sm:text-xl">
          Learning paths based on your answers
        </h2>
        <p className="text-xs mt-4">
          Choose one to get started You can switch anytime
        </p>
      </div>
      <div>
        <AllTypesPath />
      </div>
    </div>
  );
};

export default FinalTouch;
