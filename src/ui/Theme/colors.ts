import { getRandomInteger } from "../../utils/randomInteger";

export const Colors = {
	primaryColor: "#FFFFFF",
	secondaryColor: "#abd3ff",
	tertiaryColor: "#e0efff",
	primaryText: "#FFFFFF",
};

export const pastelColors = [
	"#218B82",
	"#9AD9DB",
	"#E5DBD9",
	"#98D4BB",
	"#EB96AA",
];

export const getRandomPastelColor = () => {
	const length = pastelColors.length;
	const randomInt = getRandomInteger(0, length - 1);
	return pastelColors[randomInt];
};

export const brightColors = [
	"#FDF634",
	"#FDB513",
	"#ED309C",
	" #5746B3",
	"#3BD5C9",
];

export const getRandomBrightColor = () => {
	const length = brightColors.length;
	const randomInt = getRandomInteger(0, length - 1);
	return brightColors[randomInt];
};
