import {
  Allstages,
  ChooseLearningPath_data,
  Comfort_level_data,
  DescribeYouBest_data,
  MostInterested_Data,
} from "@/dummyData/stages";

export const loadSatges = () => {
  return Allstages;

  // const res = await fetch("http://localhost:5000/load");

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // const myData = await res.json();

  // return myData.data;
};
export const loadDescribeBestData = () => {
  return DescribeYouBest_data;
};

export const loadMostInterestedData = () => {
  return MostInterested_Data;
};

export const loadComfort_level_data = () => {
  return Comfort_level_data;
};

export const load_choose_learning_path_data = () => {
  return ChooseLearningPath_data;
};
