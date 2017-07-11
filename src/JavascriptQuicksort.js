/**
 * 
 * This is an attempt at a quicksort algorithm written in Javascript which takes
 * an array of integers and sorts them.
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
	 * Choose a pivot value; in this case the middle value is chosen but any
	 * value can be chosen. Better if the approx range of the values is known;
	 * can choose another value if the pivot is not central enough.
	 */
	var pivot = nList[nList.length/2];
	
	/*
	 * TODO: This is currently incorrect and will fix later. Sort items to be
	 * before the pivot value and after the pivot value.
	 */
	var partList1 = [];
	var partList2 = [];
	for(int i = 0; i < pivot; i++){
		partList1[i] = nList[i];
	}
	for(int i = pivot - 1; i < nList.length; i++){
		partList2[i] = nList[i];
	}
	quicksortPartition(partList1);
	quicksortPartition(partList2);
}

function quicksortMerge(nList) {
}

quicksortSplit([10, 2, 5, 4, 3, 8, 7, 1, 9, 6]);