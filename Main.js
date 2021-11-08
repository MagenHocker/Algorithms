/*

  -------------------------------- Recursion ----------------------------------
  Recursive is when you call the function within the body of the code
  There are two states:
    1.) Calling the recursive function
    2.) Hitting the base case

   Divide and Conquer and Tree Traversal are when you should use recursions

 */

function inception(counter) {
  if (counter > 3) {
    console.log('done');
    return 'done';
  }
  counter++;
  return inception(counter);
}

inception(0);
inception(1);

/**
 * Write two functions to find the factorial of any number
 * 1.) With Recursion
 * 2.) Iterative
 */

let factorialRecursive = function(number) {
  let answer = number;
  if (number === 1) {
    return answer;
  }
  answer = number * factorialRecursive(number - 1);
  return answer;
}

console.log(factorialRecursive(3));
console.log(factorialRecursive(5));

let factorialIterative = function(number) {
  let answer = 1;
  for (let i = number; i >= 2; i--) {
    answer *= i;
  }
  return answer;
}
console.log(factorialIterative(2));
console.log(factorialIterative(3));
console.log(factorialIterative(5));

/**
 * Fibonacci Recursive vs Iterative
 * 0, 1, 1, 2, 3, 5, 6
 */

//O(2^n) -- exponential runtime
let fibonacciRecursive = function (number) {
  if (number <= 2) {
    return number;
  }

  number = fibonacciRecursive(number - 1)
      + fibonacciRecursive(number - 2);
  return number;
}

console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));

let fibonacciIterative = function(number) {
  let arr = [0, 1];
  for (let i = 2; i <= number; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[number];
}
console.log('---------------------------------------------------');
console.log(fibonacciIterative(0));
console.log(fibonacciIterative(1));
console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(4));
console.log(fibonacciIterative(5));
console.log(fibonacciIterative(6));

/**
 * reverse a string with recursion
 * @param string
 */
let stringReverseRecursive = function (string) {
  if (string === "") {
    return "";
  } else {
    return stringReverseRecursive(string.substr(1)) + string.charAt(0);
  }
}

let stringReverse = function (string) {
  let strArray = [...string];
  let l = 0;
  let r = string.length - 1;

  while (l < r) {
    let temp = strArray[l];
    strArray[l++] = strArray[r];
    strArray[r--] = temp;
  }

  return strArray.join('');
}

console.log(stringReverse('dog'));
console.log(stringReverseRecursive('dog'));

/*
  -------------------------------- Sorting ---------------------------------

  Sorting is not a big deal with small inputs but the larger the inputs the
  complex the function becomes

  .sort() -- function in JS

  The problem with .sort() --> Numbers are made into characters which means
  that lists with numbers are not always sorted correctly because of unicode

  [2, 65, 34, 2, 1, 7, 8].sort() = [1, 2, 2, 34, 65, 7, 8]

  Sorts you should know:
  1.) Bubble Sort: O(n^2) -- Runs on the bubble up principal

      [6, 5, 3, 1, 8, 7, 2, 4]
      [5, 6, 3, 1, 8, 7, 2, 4]
      [5, 3, 6, 1, 8, 7, 2, 4]
      [5, 3, 1, 6, 8, 7, 2, 4]
      [5, 3, 1, 6, 7, 8, 2, 4]
      [5, 3, 1, 6, 7, 2, 8, 4]
      [5, 3, 1, 6, 7, 2, 4, 8]
      [3, 5, 1, 6, 7, 2, 4, 8]
      [3, 1, 5, 6, 7, 2, 4, 8]
      [1, 3, 5, 6, 7, 2, 4, 8]
      [1, 3, 5, 6, 2, 7, 4, 8]
      [1, 3, 5, 6, 2, 4, 7, 8]
      [1, 3, 5, 2, 6, 4, 7, 8]
      [1, 3, 5, 2, 4, 6, 7, 8]
      [1, 3, 2, 5, 4, 6, 7, 8]
      [1, 3, 2, 4, 5, 6, 7, 8]
      [1, 2, 3, 4, 5, 6, 7, 8]

  2.) Selection Sort
      O(n^2) Find the smallest element and then swap it with the first position
      If the list is reversed this is faster doing only half the length of the
      array swaps

      [5, 4, 3, 2, 1]
      [1, 4, 3, 2, 5]
      [1, 2, 3, 4, 5]

  3.) Insertion Sort
      O(n) when list is already or almost sorted
      O(n^2) most of the time

      [6, 5, 3, 1, 8, 7, 2, 4]
      [5, 6, 3, 1, 8, 7, 2, 4]
      [3, 5, 6, 1, 8, 7, 2, 4]
      [1, 3, 5, 6, 8, 7, 2, 4]
      [1, 3, 5, 6, 7, 8, 2, 4]
      [1, 2, 3, 5, 6, 8, 7, 4]
      [1, 3, 4, 5, 6, 8, 7, 2]

  4.) Merge Sort -- Divide and Conquer
      O(n log n)

      [3, 2, 5, 4]
      [3, 2] [5, 4]
      [3] [2] [5] [4]
      [2,3] [4,5]
      [2, 3, 4, 5]

  5.) Quick Sort -- Divide and Conquer
    Unstable sorting algorithm
    O(n log n)

    1.) Pick a random pivot
    2.) Push pivot so all numbers less than pivot are on its left
    3.) Push pivot so all numbers greater than pivot are on its right
    4.) Then sort to the left and right of the pivots

    find value greater than pivot then swap with element less than pivot

    [10, 16, 8, 12, 15, 6, 3, 9, 5] pivot = 10, compare to 16, find value less than 10
    [10, 5, 8, 12, 15, 6, 3, 9, 16] compare to 8, 12
    [10, 5, 8, 9, 15, 6, 3, 12, 16] compare to 15
    [10, 5, 8, 9, 3, 6, 15, 12, 16] compare to 6, 15

    - as long as i < j; where j is pointing is the partition
    - run again


  ------------------ bonus algorithms ---------------------
  6.) Heap Sort
    Worried about both time and space but on average slower than quick sort

  7.) Radix Sort & Counting Sort
      Non-Comparison sorts

  8.) Bucket Sort
    - Place each element into bucket n * arr[i]
    - Sort each individual bucket w/ insertion sort quick sort etc
    - then place them in order of the buckets they are in
    ex. bucket 1 values .concat bucket 2 values . concat bucket n - 1 .concat bucket n

  When to Use What
  a.) Insertions Sort -- Most Sorted and Small Input
      [Uses little space, and easy to implement]
  b.) Bubble Sort -- Never
  c.) Selection Sort -- Never
  d.) Merge Sort -- If you are worried about consistency with time complexity use
      merge, but if you are worried about space -- don't use merge sort
  e.) Quick Sort -- slow algorithm if pivot isn't picked properly


 */

console.log('--------------- bubble sort ----------------');

const numbersA = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

bubbleSort(numbersA);
console.log(numbersA);

console.log('---------------- selection sort ----------------');

const numbersB = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array) {

  // keep track of the index of the min, not the value of the min
  for (let i = 0; i < array.length; i++) {
    let smallestValueIndex = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestValueIndex]) {
        smallestValueIndex = j;
      }
    }
    array[i] = array[smallestValueIndex];
    array[smallestValueIndex] = temp;
  }
  return array;
}

selectionSort(numbersB);
console.log(numbersB);

console.log('---------------- insertion sort ----------------');
const numbersC = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbersD = [3, 1, 2, 0];
function insertionSort(array) {
  let i, j, temp;
  for (i = 1; i < array.length; i++) {
    temp = array[i];
    for(j = i-1; j>=0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(numbersC));
console.log(insertionSort(numbersD));

console.log('---------------- merge sort ----------------');
const numbersE = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function mergeSort(array) {

  if (array.length === 1) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);

  return merge(
      mergeSort(left),
      mergeSort(right)
  );

}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length
  && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log('left ', left);
  // console.log('left slice ', left.slice(leftIndex));
  // console.log('right ', right);
  // console.log('right slice ', right.slice(rightIndex));
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(numbersE));

console.log('--------------- quick sort ----------------');

const numbersF = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function quickSort(array, left, right) {

  if (left < right) {
    let splitIndex = split(array, right, left, right);
    quickSort(array, left, splitIndex - 1);
    quickSort(array, splitIndex + 1, right);
  }
  return array;
}

function split(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let splitIndex = left;

  for (let i = left; i < right; i++) {
    if(array[i] < pivotValue) {
      let temp = array[i];
      array[i] = array[splitIndex];
      array[splitIndex++] = temp;
    }
  }

  let temp = array[right];
  array[right] = array[splitIndex];
  array[splitIndex] = temp;

  return splitIndex;

}

quickSort(numbersF, 0, numbersF.length - 1);
console.log(numbersF);

console.log('--------------- heap sort ----------------');

const numbersG = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function heapSort(arr) {

  let length = arr.length;
  let i = Math.floor(length/2 - 1);
  let k = length - 1;

  while (i >= 0) {
    toHeap(arr, length, i);
    i--;
  }

  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]];
    toHeap(arr, k, 0);
    k--;
  }

  return arr;

}

function toHeap(arr, length, i) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    toHeap(arr, length, largest);
  }

  return arr;

}

heapSort(numbersG)
console.log(numbersG);

console.log('--------------- sort interview ----------------');

/*
  ---- Which sorting algorithm would you use for each example ----

  1.) 10 School around your house and you want to sort them by distance
      Insertion sort - fast on small sorts, easy to code, and space complexity is O(1), might be nearly sorted

  2.) eBay sorts listings by the current Bid amount
      Radix Sort or Counting Sort - numbers with fixed length of integers and within a range of (0 - 100)

  3.) Sport scores on ESPN
      Quick Sort - scores are probably not sorted, low memory size

  4.) Massive database (can't fit all into memory) needs to sort through past year's user data
      Merge Sort - we won't be sorting in memory and a large amount means long runtime so I am concerned about runtime

  5.) Almost sorted Udemy review data needs to update and add 2 new reviews
      Insertion Sort

  6.) Temperature Records for the past 50 years in Canada
      Radix Counting sort - Integer Number in a small range -> if super detailed numbers quicksort

  7.) Large user name database needs to be sorted. Data is very random.
      Quick Sort - if I am not worried about mem or Merge Sort

  8.) You want to teach sorting for the first time
      Bubble or Selection Sort

 */