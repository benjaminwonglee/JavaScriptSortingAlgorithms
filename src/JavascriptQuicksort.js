/**
 * 
 * This is a quicksort algorithm written in Javascript which takes an array of
 * integers and sorts them.
 * 
 * @author BenWL
 * 
 */
function quicksortPartition(leftList, rightList) {
	// The case of the empty array
	if(rightList.length == 0){
		return leftList;
	}
	/*
	 * If the right array is empty or has 1 element, add the element to the end
	 * of the left array, return the sorted array (the left one); it has been
	 * sorted.
	 */
	if(rightList.length == 1){
		leftList.push(rightList[0]);
		return leftList;
	}
	
	/*
	 * Choose a pivot value; in this case the last value is chosen but any value
	 * can be chosen; but really any value can be chosen as long as it is
	 * consistent. Better if the approx range of the values is known; since one
	 * can choose another value if the pivot is not 'central' enough.
	 */
	var pivot = rightList[rightList.length - 1];
	
	// For left of pivot
	var leftList = [];
	// For right of pivot
	var rightList = [];
	// Iterating through elements
	for(int i = 0; i < pivot; i++){
		if(nList[i] < pivot) {
			swap(nList[i], leftList, rightList);
		}
	}
	// Swap the pivot with first item of the right list
	swap(pivot, leftList, rightList);
	quicksortPartition(leftList, rightList);
}

/**
 * Swap when the item is less than the pivot value. Equivalent to swapping in
 * quicksort is to add to the left array, and remove the element from the right
 * array.
 */
function swap(element, leftList, rightList){
	/*
	 * Add the element that is less than pivot to the left array. Replace the
	 * element at the old index with the first element of the right array
	 */
	leftList.push(element);
	// Remove the element from the array
	var index = rightList.indexOf(element);
	/*
	 * Splice: A way to remove a particular element from the array. The "1"
	 * removes 1 element from the array.
	 */
	rightList.splice(index, 1);
	
}

console.log(quicksortPartition([], [10, 2, 5, 4, 3, 8, 7, 1, 9, 6]));