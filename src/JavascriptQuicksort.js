/**
 * 
 * This is a quicksort algorithm written in Javascript which takes an array of
 * integers and sorts them.
 * 
 * @author BenWL
 * 
 */
function quicksortPartition(index, list) {
	console.log("list (init): " + list);

	// The case of the empty array
	if (list.length < 2) {
		console.log("Final: " + list);
		return list;
	}

	/*
	 * Choose a pivot value; in this case the last value is chosen but any value
	 * can be chosen; but really any value can be chosen as long as it is
	 * consistent. Better if the approx range of the values is known; since one
	 * can choose another value if the pivot is not 'central' enough.
	 */
	var pivot = list[list.length - 1];

	// Iterating through elements in the array
	for (i = 0; i < list.length; i++) {
		console.log("list[i]: " + list[i] + " pivot " + pivot);
		if (list[i] < pivot) {
			console.log("Element: " + list[i] + " is < " + pivot
					+ ". Swapping.");
			swap(index, list);
			index++;
		}
	}
	// Swap the pivot with first item of the right list
	swap(index, list);
	quicksortPartition(list);
}

/**
 * Swap when the item is less than the pivot value. Equivalent to swapping in
 * quicksort is to add to the left array, and remove the element from the right
 * array.
 */
function swap(index, list) {
	/*
	 * Add the element that is less than pivot to the left array. Replace the
	 * element at the old index with the first element of the right array
	 */
	leftList.push(element);
	// Remove the element from the array
	var index = list.indexOf(element);
	/*
	 * Splice: A way to remove a particular element from the array. The "1"
	 * removes 1 element from the array.
	 */
	list.splice(index, 1);
	console.log("leftList (after swap): " + leftList);
	console.log("list (after swap): " + list);
}

quicksortPartition(0, [ 10, 2, 5, 4, 3, 8, 7, 1, 9, 6 ]);