import unittest

def selection_sort(data):
    length = len(data)

    for index in range(length - 1):
        # Assume the current index is the minimum
        min_index = index

        # Iterate through the unsorted part to find the minimum element
        for unsorted in range(index + 1, length):
            if data[unsorted] < data[min_index]:
                min_index = unsorted

        # Swap the found minimum element with the first element
        data[index], data[min_index] = data[min_index], data[index]



""" 
Analysis:

    When we think about time and space complexity we consider the worst case scenario. With a selection sort we are using a nested for loop where the second loop
    compares our index with all of the number contained within the unsorted list. This leads to the worst case in the inner loop being index + 1 to the end of 
    the array and the worst case of the outer loop being index 0 to length - 2. Going through each index of the array n times will give of a time complexity of
    n^2.

    The space complexity is O(1), which is constant. The algorithm doesn't use any additional arrays or allocate memory based on the input size.
    It performs all operations directly on the input.

    Selection Sort is not a stable sorting algorithm. Stability in sorting means that the relative order of equal elements is preserved.
    In Selection Sort, during the selection and swapping process, there is no guarantee that the order of equal elements will remain the same.

"""



class TestSelectionSort(unittest.TestCase):

    def test1(self):# Test case with random order array
        input_array = [184, 509, 762, 341, 628, 15, 487, 893, 246, 593, 724, 91, 33, 676, 534]
        expected_output = [15, 33, 91, 184, 246, 341, 487, 509, 534, 593, 628, 676, 724, 762, 893]

        selection_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test2(self):# Test case with ascending order array
        input_array = [108, 178, 219, 256, 321, 347, 435, 483, 592, 602, 674, 719, 765, 831, 894]
        expected_output = [108, 178, 219, 256, 321, 347, 435, 483, 592, 602, 674, 719, 765, 831, 894]

        selection_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test3(self):# Test case with decending order array
        input_array = [927, 826, 753, 749, 674, 654, 589, 518, 508, 486, 391, 362, 270, 215, 143]
        expected_output = [143, 215, 270, 362, 391, 486, 508, 518, 589, 654, 674, 749, 753, 826, 927]

        selection_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test4(self):# Test case with same numbers in array
      input_array = [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
      expected_output = [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]

      selection_sort(input_array)
      self.assertEqual(input_array, expected_output)#This results in an unchanged array since all of the elemets are the same

    def test5(self):# Test edge case with an empty array
        input_array = []
        expected_output = []

        selection_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in an unchanged array since there are no elements to arrange

    def test6(self):# Test edge case with 1 element in array
        input_array = [1]
        expected_output = [1]

        selection_sort(input_array)
        self.assertEqual(input_array, expected_output)#This results in an unchanged array since all of the elemets are the same

if __name__ == '__main__':
    unittest.main()
