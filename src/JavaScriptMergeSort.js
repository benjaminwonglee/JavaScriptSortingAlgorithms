/**
 * An implementation of merge sort in JavaScript.
 */
function mergeSort(list) {
	listA = [];
	listB = [];
	for (i = 0; i < list.length; i++) {
		if (i < list.length / 2) {
			listA.push(list[i]);
		} else {
			listB.push(list[i]);
		}
	}
	if (list.length > 1) {
		console.log("listA: " + listA);
		console.log("listB: " + listB);
		mergeSort(listA);
		console.log("listA: point 1: " + listA);
		mergeSort(listB);
		console.log("listB: point 1: " + listB);
		merge(listA, listB);
	}
}

function merge(listA, listB) {
	console.log("listA[0]: point 2: " + listA[0]);
	console.log("listA[1]: point 2: " + listA[1]);
	comparison = compare(listA[0], listA[1]);
	console.log(comparison);
	if (comparison == 1) {
		swap(listA);
	}
	comparison = compare(listB[0], listB[1]);
	console.log(comparison);
	if (comparison == 1) {
		swap(listB);
	}
}

function swap(list) {
	var temp = list[1];
	list[1] = list[0];
	list[0] = temp;
}

function compare(current, other) {
	if (current < other) {
		return -1;
	} else if (current > other) {
		return 1;
	} else {
		return 0;
	}
}

mergeSort([ 10, 2, 5, 4, 3, 8, 7, 1, 9, 6 ]);
console.log("_________________________________");
