"option explicit";
const shuffleArray = (arr) => {
	// returns a shuffled version of the array. Does not alter the input array
	// Tries to implement the Knuth Shuffle.
	let randomUpToN = (n) => {
		// does not return n, but numbers between 0 and n-1
		return (Math.floor(Math.random() * n));
	}

	let swapArrayElements = (arr, i, j) => {
		// swaps  the elements i and j or arr. Does  not return anything. It alters input array.
		if (i !== j) {
			let t = arr[i];
			arr[i] = arr[j];
			arr[j] = t;
		}
	}

	// clone the array
	let outputArr = arr.slice(0);
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let j = randomUpToN(n - i);
		// swap element i with the element at (i+j). max i+j value is i + (n-i) - 1 = n - 1

		swapArrayElements(outputArr, i, i + j)
		// console.log(outputArr)
	}
	return outputArr;
}


// module.exports.shuffleArray = shuffleArray;
export default shuffleArray;