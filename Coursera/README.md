# Description

This folder contains my solutions to programming assingments given during the `Algorithms: Design and Analysis` course on [Coursera](https://www.coursera.org/learn/algorithm-design-analysis).

## Task 1

> Attached file `01_inversions.txt` contains all of the 100,000 integers between 1 and 100,000 (inclusive) in some order, with no integer repeated.
> Your task is to compute the number of inversions in the file given, where the ith row of the file indicates the ith entry of an array.
> Because of the large size of this array, you should implement the fast divide-and-conquer algorithm covered in the video lectures. Answer is the numeric value of all the inversions.

And the correct answer is *2407905288*

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


## Task 3

> Attached file `03_min_cut.txt` contains the adjacency list representation of a simple undirected graph. There are 200 vertices labeled 1 to 200. The first column in the file represents the vertex label, and the particular row (other entries except the first column) tells all the vertices that the vertex is adjacent to. So for example, the 6th row looks like : "6  155 56  52  120 ......". 
> This just means that the vertex with label 6 is adjacent to (i.e., shares an edge with) the vertices with labels 155, 56, 52, 120, ......, etc

> Your task is to code up and run the randomized contraction algorithm for the min cut problem and use it on the above graph to compute the min cut. 
> (HINT: Note that you'll have to figure out an implementation of edge contractions. Initially, you might want to do this naively, creating a new graph from the old every time there's an edge contraction. But you should also think about more efficient implementations.) 
> (WARNING: As per the video lectures, please make sure to run the algorithm many times with different random seeds, and remember the smallest cut that you ever find.) Write your numeric answer in the space provided. So e.g., if your answer is 5, just type 5 in the space provided.

And the correct answer is *17*

The second file `03_min_cut_small.txt` contains a small set for testing purposes.

### javascript

To run the javascript solution, just type :

`cd ./javascript && npm install` 

and then

`node ./javascript/03_min_cut.js ../03_min_cut.txt`


## Task 4

> Attached file `04_connected_components.txt` contains the edges of a directed graph. Vertices are labeled as positive integers from 1 to 875714. Every row indicates an edge, the vertex label in first column is the tail and the vertex label in second column is the head (recall the graph is directed, and the edges are directed from the first column vertex to the second column vertex). So for example, the 11th row looks liks : "2 47646". This just means that the vertex with label 2 has an outgoing edge to the vertex with label 47646

> Your task is to code up the algorithm from the video lectures for computing strongly connected components (SCCs), and to run this algorithm on the given graph.

> Output Format: You should output the sizes of the 5 largest SCCs in the given graph, in decreasing order of sizes, separated by commas (avoid any spaces). So if your algorithm computes the sizes of the five largest SCCs to be 500, 400, 300, 200 and 100, then your answer should be "500,400,300,200,100" (without the quotes). If your algorithm finds less than 5 SCCs, then write 0 for the remaining terms. Thus, if your algorithm computes only 3 SCCs whose sizes are 400, 300, and 100, then your answer should be "400,300,100,0,0" (without the quotes). (Note also that your answer should not have any spaces in it.)

And the correct answer is *434821,968,459,313,211*

As always the second file `04_connected_components_small.txt` contains a small set for testing purposes.

## Task 5

> attached file `05_dijkstra.txt` contains an adjacency list representation of an undirected weighted graph with 200 vertices labeled 1 to 200. Each row consists of the node tuples that are adjacent to that particular vertex along with the length of that edge. For example, the 6th row has 6 as the first entry indicating that this row corresponds to the vertex labeled 6. The next entry of this row "141,8200" indicates that there is an edge between vertex 6 and vertex 141 that has length 8200. The rest of the pairs of this row indicate the other vertices adjacent to vertex 6 and the lengths of the corresponding edges.

> Your task is to run Dijkstra's shortest-path algorithm on this graph, using 1 (the first vertex) as the source vertex, and to compute the shortest-path distances between 1 and every other vertex of the graph. If there is no path between a vertex v and vertex 1, we'll define the shortest-path distance between 1 and v to be 1000000.

> You should report the shortest-path distances to the following ten vertices, in order: 7,37,59,82,99,115,133,165,188,197. You should encode the distances as a comma-separated string of integers. So if you find that all ten of these vertices except 115 are at distance 1000 away from vertex 1 and 115 is 2000 distance away, then your answer should be 1000,1000,1000,1000,1000,2000,1000,1000,1000,1000. Remember the order of reporting DOES MATTER, and the string should be in the same order in which the above ten vertices are given. The string should not contain any spaces. Please type your answer in the space provided.
