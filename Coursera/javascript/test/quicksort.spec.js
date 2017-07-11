/* global describe:false, it:false, beforeEach:false */

const expect = require('chai').expect;
const quickSortFst = require('../lib/quicksort_first.js').default;
const quickSortLast = require('../lib/quicksort_last.js').default;
const quickSortMedian = require('../lib/quicksort_median.js').default;

describe('Sorting an unsorted Array using quicksort with first element as pivot', () => {
  let unsortedLength = null;
  let sortedArray = null;

  beforeEach(() => {
    const unsortedArray = [10, 8, 1, 3, 5, 7, 6, 9];
    unsortedLength = unsortedArray.length;
    quickSortFst(unsortedArray);
    sortedArray = unsortedArray;
  });

  it('the sorted array will not be null.', () => {
    expect(sortedArray).to.not.equal(null);
  });

  it('a sorted array of the same length will be returned.', () => {
    expect(sortedArray.length).to.equal(unsortedLength);
  });

  it('the first element will be 1', () => {
    expect(sortedArray[0]).to.equal(1);
  });

  it('the last element will be 10', () => {
    expect(sortedArray[sortedArray.length - 1]).to.equal(10);
  });
});

describe('Sorting an unsorted Array using quicksort with the last element as pivot', () => {
  let unsortedLength = null;
  let sortedArray = null;

  beforeEach(() => {
    const unsortedArray = [10, 8, 1, 3, 5, 7, 6, 9];
    unsortedLength = unsortedArray.length;
    quickSortLast(unsortedArray);
    sortedArray = unsortedArray;
  });

  it('the sorted array will not be null.', () => {
    expect(sortedArray).to.not.equal(null);
  });

  it('a sorted array of the same length will be returned.', () => {
    expect(sortedArray.length).to.equal(unsortedLength);
  });

  it('the first element will be 1', () => {
    expect(sortedArray[0]).to.equal(1);
  });

  it('the last element will be 10', () => {
    expect(sortedArray[sortedArray.length - 1]).to.equal(10);
  });
});

describe('Sorting an unsorted Array using quicksort with the median of 3 elements as pivot', () => {
  let unsortedLength = null;
  let sortedArray = null;

  beforeEach(() => {
    const unsortedArray = [10, 8, 1, 3, 5, 7, 6, 9];
    unsortedLength = unsortedArray.length;
    quickSortMedian(unsortedArray);
    sortedArray = unsortedArray;
  });

  it('the sorted array will not be null.', () => {
    expect(sortedArray).to.not.equal(null);
  });

  it('a sorted array of the same length will be returned.', () => {
    expect(sortedArray.length).to.equal(unsortedLength);
  });

  it('the first element will be 1', () => {
    expect(sortedArray[0]).to.equal(1);
  });

  it('the last element will be 10', () => {
    expect(sortedArray[sortedArray.length - 1]).to.equal(10);
  });
});