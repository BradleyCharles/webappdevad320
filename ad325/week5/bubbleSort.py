import unittest

def bubble_sort(data):
    # Get the length of the input array
    length = len(data)

    # Iterate through the array elements
    for index in range(length - 1):
        # Boolean variable to check if the array is already sorted
        sorted = True

        # Iterate through the unsorted part of the array
        for swap in range(0, length - index - 1):
            # Compare adjacent elements and swap if necessary
            if data[swap] > data[swap + 1]:
                data[swap], data[swap + 1] = data[swap + 1], data[swap]
                # If a swap occurs, set the flag to False
                sorted = False

        # If the array is already sorted, break out of the loop
        if sorted:
            break



""" 
Analysis:

  Bubble Sort uses two nested loops to iterate through the array. The outer loop runs (n-1) times, where n is the number of elements in the array.
  The inner loop runs for each iteration of the outer loop, and it compares and swaps adjacent elements. In the worst case, it goes through the entire unsorted part of the array.

  It is considered an in-place sorting algorithm because it uses a constant amount of extra memory that is independent of the input size.
  There are no additional arrays that is needs to create and all of the sorting is done in the original array.

  When Bubble Sort encounters two adjacent elements with equal keys, it only swaps them if the order is not in the desired direction. 
  If the order is already correct or equal elements are adjacent, no swapping occurs. This behavior ensures that the relative order of equal elements is maintained.

  The additional boolean optimizations are meant to improve the efficiency of the Bubble Sort algorithm by introducing an early exit mechanism. 
  If the loop does not find a value to swap then it will allow the loop to end which can make the algorithm more effecient

"""



class TestBubbleSort(unittest.TestCase):

    def test1(self):# Test case with random order array
        input_array = [937, 684, 429, 195, 651, 876, 312, 567, 798, 254, 480, 719, 826, 163, 942]
        expected_output = [163, 195, 254, 312, 429, 480, 567, 651, 684, 719, 798, 826, 876, 937, 942]

        bubble_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test2(self):# Test case with ascending order array
        input_array = [108, 178, 219, 256, 321, 347, 435, 483, 592, 602, 674, 719, 765, 831, 894]
        expected_output = [108, 178, 219, 256, 321, 347, 435, 483, 592, 602, 674, 719, 765, 831, 894]

        bubble_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test3(self):# Test case with decending order array
        input_array = [927, 826, 753, 749, 674, 654, 589, 518, 508, 486, 391, 362, 270, 215, 143]
        expected_output = [143, 215, 270, 362, 391, 486, 508, 518, 589, 654, 674, 749, 753, 826, 927]

        bubble_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test4(self):# Test case with same numbers in array
      input_array = [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
      expected_output = [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]

      bubble_sort(input_array)
      self.assertEqual(input_array, expected_output)#This results in an unchanged array since all of the elemets are the same

    def test5(self):# Test edge case with an empty array
        input_array = []
        expected_output = []

        bubble_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in an unchanged array since there are no elements to arrange

    def test6(self):# Test edge case with 1 element in array
        input_array = [1]
        expected_output = [1]

        bubble_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in an unchanged array since all of the elemets are the same

if __name__ == '__main__':
    unittest.main()
