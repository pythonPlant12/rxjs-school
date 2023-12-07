import { displayLog } from "./utils";
import { from } from "rxjs";

export default () => {
	/** start coding */
	const myArray = [1, 2, 3, 4, 5];
	const myPromise = new Promise((resolve) =>
		setTimeout(() => {
			resolve("Hello World");
		}, 2000)
	);
	const observable = from(myArray);
	const observable1 = from(myPromise);
	// val => displayLog(val) es una versión reducida del observer
	const subscription = observable.subscribe((val) => displayLog(val));
	observable1.subscribe((val) => displayLog(val));
	/** end coding */
};
