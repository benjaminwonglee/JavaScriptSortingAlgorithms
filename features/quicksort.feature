#quicksort.feature

Feature: Quicksort
  I should be able to sort an unsorted array 
  using my quicksort program
  and it returns as a sorted array
  
  Scenario Outline: User tries to sort a list using quicksort
    Given I have put in <list>
    Then I expect the list to be <result> 
  
  Examples:
    | list | result |
    |"[ 10, 2, 5, 4, 3, 8, 7, 1, 9, 6 ]" | "[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]"|