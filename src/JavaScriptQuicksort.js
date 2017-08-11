/**
 * This is a quicksort algorithm written in Javascript which takes an array of
 * integers and sorts them. The wallIndex should initially be the number of
 * elements from the left that are known to be sorted, else 0 if not known. The
 * finalList is a blank list filled out as the sorting progresses.
 * 
 * @author BenWL
 * 
 */
function quickSort(wallIndex, list, finalList, verbose) {
	if(verbose){
		console.log("list (initial): " + list);
	}
	// The case of the empty array
	if (list.length == 0) {
		return list;
	}
	if (list.length == 1) {
		finalList.push(list[0]);
		finalist = {
			get final() {
				return finalList;
			}	
		};
		if(verbose){
			console.log("Current final list: " + finalList);
		}
		return finalList;
	}

	/*
	 * Choose a pivot value; in this case the last value is chosen but any value
	 * can be chosen; but really any value can be chosen as long as it is
	 * consistent. Better if the approx range of the values is known; since one
	 * can choose another value if the pivot is not 'central' enough.
	 */
	var pivot = list[list.length - 1];

	// Iterate through elements in the array
	for (i = 0; i < list.length; i++) {
		if(verbose){
			 console.log("list[i]: " + list[i] + " pivot " + pivot);
		}
		/*
		 * Swap all elements <= the pivot with the element at the current wall
		 * index. If that happens to be the same element, don't do anything.
		 * Shift the wall across by 1 if swap occurs.
		 */
		if (list[i] <= pivot) {
			if(verbose){
				console.log("Element: " + list[i] + " is <= " + pivot + ".");
			}
			swap(wallIndex, i, list, verbose);
			wallIndex++;
		}
	}
	var leftList = [];
	var rightList = [];
	// Elements < the pivot in the left array.
	for (i = 0; i < wallIndex - 1; i++) {
		leftList.push(list[i]);
	}
	// Elements >= the pivot in the right array.
	for (i = wallIndex - 1; i < list.length; i++) {
		rightList.push(list[i]);
	}
	// Call on both left and right sides until final list is complete
	quickSort(0, leftList, finalList);
	quickSort(0, rightList, finalList);
}

/**
 * Swap when the item is less than the pivot value. Swap the wall index element
 * with the current element that is <= the pivot. If the element is already at
 * wall index; return.
 */
function swap(wallIndex, elemIndex, list, verbose) {
	if (wallIndex == elemIndex) {
		if(verbose){
			console.log("Element is at wall index.");
		}
		return;
	}
	if(verbose){
		 console.log("Swapping with wall index element.");
	}
	var temp = list[elemIndex];
	list[elemIndex] = list[wallIndex];
	list[wallIndex] = temp;
	if(verbose){ 
		console.log("list (after swap): " + list);
	}
}

var finalist;
var verbose;

if(process.argv.length<3){
	// Do default
	verbose = true;
	// The initial call
	quickSort(0, [ 10, 2, 5, 4, 3, 8, 7, 1, 9, 6 ], [], verbose); 
	console.log("_________________________________");
	quickSort(0, [ 102, 112, 145, 34, 23, 78, 137, 1111, 309, 226, 138 ], [], verbose);
	console.log("_________________________________");
	quickSort(0, [ 10, 10, 9, 9, 1, 2, 1, 2, 3, 3, 4, 10], [], verbose);
	console.log("_________________________________");
	quickSort(0, [ -101, -10, 9, 100, 1000, -2000, -1, -2, 3, 3, 401], [], verbose);
	console.log("_________________________________");
	console.log('Usage: 2 arguments: 1st argument is an unsorted array in the format of \"[5,10,2,3,5]\" or similar');
	console.log('2nd argument is to type any character if verbose output is desired');
	console.log('Used default examples');
	
}else{
	var array = JSON.parse(process.argv[2]);
	var verbose = process.argv[3];
	quickSort(0, array, [], verbose);
	console.log(finalist.final);
	console.log("_________________________________");
}
