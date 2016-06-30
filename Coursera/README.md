# Description

This folder contains my solutions to programming assingments given during the `Algorithms: Design and Analysis` course on [Coursera](https://www.coursera.org/learn/algorithm-design-analysis).

## Task 1

> Attached file `01_inversions.txt` contains all of the 100,000 integers between 1 and 100,000 (inclusive) in some order, with no integer repeated.
> Your task is to compute the number of inversions in the file given, where the ith row of the file indicates the ith entry of an array.
> Because of the large size of this array, you should implement the fast divide-and-conquer algorithm covered in the video lectures. Answer is the numeric value of all the inversions.

The second file `01_inversions_small.txt` contains a small set for testing purposes.

### javascript

To run the javascript solution, just type :

`node ./javascript/01_inversions.js ../01_inversions.txt`


## Task 2

> Attached file `02_quicksort.txt` contains all of the integers between 1 and 10,000 (inclusive, with no repeats) in unsorted order. The integer in the ith row of the file gives you the ith entry of an input array.
> Your task is to compute the total number of comparisons used to sort the given input file by QuickSort. As you know, the number of comparisons depends on which elements are chosen as pivots, so we'll ask you to explore three different pivoting rules.
> You should not count comparisons one-by-one. Rather, when there is a recursive call on a subarray of length m, you should simply add m−1 to your running total of comparisons. (This is because the pivot element is compared to each of the other m−1 elements in the subarray in this recursive call.)
> WARNING: The Partition subroutine can be implemented in several different ways, and different implementations can give you differing numbers of comparisons. For this problem, you should implement the Partition subroutine exactly as it is described in the video lectures (otherwise you might get the wrong answer).

The second file `02_quicksort_small.txt` contains a small set for testing purposes.

This task has three cases:

> For the first part of the programming assignment, you should always use the first element of the array as the pivot element.

And the correct answer is *162085*

> Compute the number of comparisons (as in Problem 1), always using the final element of the given array as the pivot element.

And the correct answer is *164123*

> Compute the number of comparisons using the "median-of-three" pivot rule. [The primary motivation behind this rule is to do a little bit of extra work to get much better performance on input arrays that are nearly sorted or reverse sorted.] 
> In more detail, you should choose the pivot as follows. Consider the first, middle, and final elements of the given array. (If the array has odd length it should be clear what the "middle" element is; for an array with even length 2k, use the kth element as the "middle" element. So for the array 4 5 6 7, the "middle" element is the second one ---- 5 and not 6!) 
> Identify which of these three elements is the median (i.e., the one whose value is in between the other two), and use this as your pivot.
> EXAMPLE: For the input array 8 2 4 5 7 1 you would consider the first (8), middle (4), and last (1) elements; since 4 is the median of the set {1,4,8}, you would use 4 as your pivot element.
> SUBTLE POINT: A careful analysis would keep track of the comparisons made in identifying the median of the three candidate elements. You should NOT do this. That is, as in the previous two problems, you should simply add m−1 to your running total of comparisons every time you recurse on a subarray with length m.

And the correct answer is *138382*

### javascript

There are separate files for each solution :

`node ./javascript/02_quicksort.js ../02_quicksort.txt`

`node ./javascript/02_quicksort_2.js ../02_quicksort.txt`

`node ./javascript/02_quicksort_3.js ../02_quicksort.txt`

There's also an implementation similar to the one shown by `Nicolas C. Zakas` years ago in his blog [post](https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/) and it handles the first case :

`node ./javascript/02_quicksort_first.js ../02_quicksort.txt`
