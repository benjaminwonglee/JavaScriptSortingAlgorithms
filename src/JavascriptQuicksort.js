/**
 * 
 * This is a quicksort algorithm written in Javascript which takes an array of
 * integers and sorts them.
 * 
 * @author BenWL
 * 
 */
function quicksortPartition(nList) {
	// if the array is empty or has 1 element, return the array
	if(nList.length < 2){
		return nList;
	}
	
	/*
	 * Choose a pivot value; in this case the last value is chosen but any value
	 * can be chosen; but really any value can be chosen as long as it is
	 * consistent. Better if the approx range of the values is known; since one
	 * can choose another value if the pivot is not 'central' enough.
	 */
	var pivot = nList[nList.length - 1];
	
	/*
	 * TODO: This is currently incorrect and will fix later. Sort items to be
	 * before the pivot value and after the pivot value.
	 */
	// For left of pivot
	var leftList = [];
	// For right of pivot
	var rightList = [];
	// Iterating through elements
	for(int i = 0; i < pivot; i++){
		if(nList[i] < pivot) {
			swap(nList[i], leftList, rightList)
		}
	}
	quicksortPartition(leftList);
	quicksortPartition(rightList);
}

function quicksortMerge(nList) {
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

quicksortPartition([10, 2, 5, 4, 3, 8, 7, 1, 9, 6]);