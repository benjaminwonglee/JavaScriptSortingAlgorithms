/**
 * An implementation of merge sort in JavaScript.
 */
function mergeSort(list) {
	if (list.length == 2) {
		merge(list);
	}
	listA = [];
	listB = [];
	for (i = 0; i < list.length / 2; i++) {
		listA.push(list[i]);
	}
	for (i = list.length / 2; i++) {
		listB.push(list[i]);
	}
	divide(listA);
	divide(listB);
}

function merge(list) {
	comparison = compare(list[0], list[1]);
	if(comparison == 1){
		swap(list);
	}
}

function swap(list) {
	var temp = list[1];
	list[1] = list[0];
	list[0] = temp;
}


function compare(current, other) {
	if(current < other){
		return -1;
	} else if(current > other){
		return 1;
	} else {
		return 0;
	}
}