import unittest
import time

def insertion_sort(data):
    # Get the length of the input array
    length = len(data)

    # Traverse through the array starting from the second element
    for index in range(1, length):
        key = data[index]
        unsorted = index - 1

        # Move elements of data[0..index-1] that are greater than key to one position ahead of their current position
        while unsorted >= 0 and key < data[unsorted]:
            data[unsorted + 1] = data[unsorted]
            unsorted -= 1

        data[unsorted + 1] = key



class TestInsertionSort(unittest.TestCase):
    
    def measure_time(self, function, *args, **kwargs):
        start_time = time.time()
        function(*args, **kwargs)
        end_time = time.time()
        elapsed_time = end_time - start_time
        return elapsed_time

    def test1(self):  # Test case with random order array
        input_array = [621, 874, 308, 562, 197, 843, 489, 736, 125, 891, 624, 971, 356, 708, 243]
        expected_output = [125, 197, 243, 308, 356, 489, 562, 621, 624, 708, 736, 843, 874, 891, 971]

        elapsed_time = self.measure_time(insertion_sort, input_array)
        print(f"Test 1 Execution Time: {elapsed_time} seconds")
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test2(self):# Test case with ascending order array
        input_array = [108, 178, 219, 256, 321, 347, 435, 483, 592, 602, 674, 719, 765, 831, 894]
        expected_output = [108, 178, 219, 256, 321, 347, 435, 483, 592, 602, 674, 719, 765, 831, 894]

        elapsed_time = self.measure_time(insertion_sort, input_array)
        print(f"Test 2 Execution Time: {elapsed_time} seconds")
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test3(self):# Test case with decending order array
        input_array = [927, 826, 753, 749, 674, 654, 589, 518, 508, 486, 391, 362, 270, 215, 143]
        expected_output = [143, 215, 270, 362, 391, 486, 508, 518, 589, 654, 674, 749, 753, 826, 927]

        elapsed_time = self.measure_time(insertion_sort, input_array)
        print(f"Test 3 Execution Time: {elapsed_time} seconds")
        self.assertEqual(input_array, expected_output)#This results in a sorted array in non decending order

    def test4(self):# Test case with same numbers in array
      input_array = [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
      expected_output = [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]

      elapsed_time = self.measure_time(insertion_sort, input_array)
      print(f"Test 4 Execution Time: {elapsed_time} seconds")
      self.assertEqual(input_array, expected_output)#This results in an unchanged array since all of the elemets are the same

    def test5(self):# Test edge case with an empty array
        input_array = []
        expected_output = []

        elapsed_time = self.measure_time(insertion_sort, input_array)
        print(f"Test 5 Execution Time: {elapsed_time} seconds")
        self.assertEqual(input_array, expected_output)#This results in an unchanged array since there are no elements to arrange

    def test6(self):# Test edge case with 1 element in array
        input_array = [1]
        expected_output = [1]

        elapsed_time = self.measure_time(insertion_sort, input_array)
        print(f"Test 6 Execution Time: {elapsed_time} seconds")
        self.assertEqual(input_array, expected_output)#This results in an unchanged array since all of the elemets are the same

if __name__ == '__main__':
    unittest.main()
