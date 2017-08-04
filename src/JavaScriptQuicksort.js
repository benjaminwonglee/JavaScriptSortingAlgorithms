/**
 * This is a quicksort algorithm written in Javascript which takes an array of
 * integers and sorts them. The wallIndex should initially be the number of
 * elements from the left that are known to be sorted, else 0 if not known. The
 * finalList is a blank list filled out as the sorting progresses.
 * 
 * @author BenWL
 * 
 */
function quickSort(wallIndex, list, finalList) {
	//console.log("list (init): " + list);

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
		//console.log("Current final list: " + finalList);
		
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
		//console.log("list[i]: " + list[i] + " pivot " + pivot);
		/*
		 * Swap all elements <= the pivot with the element at the current wall
		 * index. If that happens to be the same element, don't do anything.
		 * Shift the wall across by 1 if swap occurs.
		 */
		if (list[i] <= pivot) {
			//console.log("Element: " + list[i] + " is <= " + pivot + ".");
			swap(wallIndex, i, list);
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
function swap(wallIndex, elemIndex, list) {
	if (wallIndex == elemIndex) {
		//console.log("Element is at wall index.");
		return;
	}
	//console.log("Swapping with wall index element.");
	var temp = list[elemIndex];
	list[elemIndex] = list[wallIndex];
	list[wallIndex] = temp;
	//console.log("list (after swap): " + list);
}

var finalist;
// The initial call
quickSort(0, [ 10, 2, 5, 4, 3, 8, 7, 1, 9, 6 ], []);
console.log(finalist.final);
console.log("_________________________________");
//quickSort(0, [ 102, 112, 145, 34, 23, 78, 137, 1111, 309, 226, 138 ], []);
//console.log("_________________________________");
//quickSort(0, [ 10, 10, 9, 9, 1, 2, 1, 2, 3, 3, 4, 10], []);
//console.log("_________________________________");
//quickSort(0, [ -101, -10, 9, 100, 1000, -2000, -1, -2, 3, 3, 401], []);
//console.log("_________________________________");
