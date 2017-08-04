#quicksort.feature

Feature: Quicksort
  I should be able to pass in an unsorted array
  and my program returns it as a sorted array
  
Scenario: User tries to sort a list using quicksort
  Given I have put in "[ 10, 2, 5, 4, 3, 8, 7, 1, 9, 6 ]"
  When I run the quicksort algorithm
  Then I expect the list to be "[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]"