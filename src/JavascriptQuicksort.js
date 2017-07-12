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
			swap(i, leftList, rightList)
		}
	}
	quicksortPartition(partList1);
	quicksortPartition(partList2);
}

function swap(index, leftList, rightList){
	/*
	 * Add the element that is less than pivot to the left array. Replace the
	 * element at the old index with the first element of the right array
	 */
	leftList[leftList.length] = rightList[index];
	temp = rightList[0];
	for(int i = 0; i < index - 1; i++){
		rightList[i] = rightList[i+1];
	}
	rightList[index] = temp;
	// Too complicated??? ArrayLists in Javascript???
}

quicksortPartition([10, 2, 5, 4, 3, 8, 7, 1, 9, 6]);