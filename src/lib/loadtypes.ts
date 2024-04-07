export enum TypesOfStages {
  DESCRIBE_BEST = "Describe_best",
  MOST_INTERESTED = "Most_interested",
  RIGHT_PLACE = "Right_place",
  COMFORT_LEVEL = "Comfort_level",
  ON_THE_WAY = "On_The_way",
  STRAT_JOURNEY = "Completed Finding Path Start New Journey",
}

export interface DescribeType {
  desc: string;
  pic: string;
}
export interface ComfortLevelType {
  desc: string;
  pic: string;
  type: string;
}

export interface ChooseLearningPathType {
  title: string;
  desc: string;
  pic: string;
  type: string | null;
}
