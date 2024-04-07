import {
  ChooseLearningPathType,
  ComfortLevelType,
  DescribeType,
  TypesOfStages,
} from "@/lib/loadtypes";

export const Allstages = {
  stageOrder: [
    TypesOfStages.DESCRIBE_BEST,
    TypesOfStages.MOST_INTERESTED,
    TypesOfStages.RIGHT_PLACE,
    TypesOfStages.COMFORT_LEVEL,
    TypesOfStages.ON_THE_WAY,
  ],
};

export const DescribeYouBest_data: DescribeType[] = [
  {
    desc: "Student or soon to be enrolled",
    pic: "/student-studying.svg",
  },
  {
    desc: "Professional pursuing a carrer",
    pic: "/employee.svg",
  },
  {
    desc: "Parent of a school age child",
    pic: "/parent.svg",
  },
  {
    desc: "Lifelong Learner ",
    pic: "/learning.svg",
  },
  {
    desc: "Teacher",
    pic: "/teacher-female.svg",
  },
  {
    desc: "Other ",
    pic: "/business.svg",
  },
];

export const MostInterested_Data: DescribeType[] = [
  {
    desc: "Learning specific skills to advance my carrer",
    pic: "/graph.svg",
  },
  {
    desc: "Exploring new topics I'm interested in",
    pic: "/explore.svg",
  },
  {
    desc: "Refreshing my math foundations",
    pic: "/innovation.svg",
  },
  {
    desc: "Exercising my brain to stay sharp",
    pic: "/target.svg",
  },
  {
    desc: "Something else",
    pic: "/business-person.svg",
  },
];

export const Comfort_level_data: ComfortLevelType[] = [
  {
    desc: "Arithmetic",
    pic: "/math/arithmetic.png",
    type: "Introductory",
  },
  {
    desc: "Basic Algebra",
    pic: "/math/basicAlgebra.png",
    type: "Foundational",
  },
  {
    desc: "Intermediate Algebra",
    pic: "/math/intermediate.png",
    type: "Intermediate",
  },
  {
    desc: "Calculas",
    pic: "/math/calculus.png",
    type: "Advanced",
  },
];

export const ChooseLearningPath_data: ChooseLearningPathType[] = [
  {
    title: "Foundational Math",
    desc: "Build your foundational skills in algebra ,geometry, and probability",
    pic: "/math/Math_Foundations.gif",
    type: "Most Popular",
  },
  {
    title: "Mathematical Thinking",
    desc: "Build your Thinking into the next level in algebra, geometry and probability",
    pic: "/math/pissy.gif",
    type: null,
  },
  {
    title: "2 Foundational Math",
    desc: "Build your foundational skills in algebra ,geometry, and probability",
    pic: "/math/second.gif",
    type: "Most Popular",
  },
  {
    title: "3 Mathematical Thinking",
    desc: "Build your Thinking into the next level in algebra, geometry and probability",
    pic: "/math/third.gif",
    type: null,
  },
];
