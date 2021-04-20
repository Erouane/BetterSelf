import { getRandomInteger } from "../../utils/randomInteger";

export const Colors = {
  primaryColor: "#FFFFFF",
  primaryText: "#FFFFFF",
};

export const cardColors = [
  "#218B82",
  "#9AD9DB",
  "#E5DBD9",
  "#98D4BB",
  "#EB96AA",
];

export const getRandomCardColor = () => {
  const length = cardColors.length;
  const randomInt = getRandomInteger(0, length - 1);
  return cardColors[randomInt];
};
