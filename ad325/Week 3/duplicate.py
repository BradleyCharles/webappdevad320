import unittest


def removeDuplicate(data):
    if not isinstance(data, list) or not data:
        return 0

    try:
        length = len(data)
        k = 1
        index = 1

        while index < length:
            if data[index] == data[index -1]:
                data.pop(index)
                data.append(0)
                length -=1
            else:
                k +=1
                index +=1
        return k
    except: 0




class TestDuplicates(unittest.TestCase):

    def test_empty_data(self):
        salesData = []
        self.assertEqual(removeDuplicate(salesData), 0)

    def test_non_array(self):
        salesData = 4
        self.assertEqual(removeDuplicate(salesData), 0)

    def test_no_duplicates(self):
        salesData = [150, 150, 200, 200, 200, 250, 250, 300, 300, 350]
        self.assertEqual(removeDuplicate(salesData), 5)
        self.assertEqual(salesData, [150, 200, 250, 300, 350, 0, 0, 0, 0, 0])

    def test_all_duplicates(self):
        salesData = [1,1,1,1,1]
        self.assertEqual(removeDuplicate(salesData), 1)
        self.assertEqual(salesData, [1, 0, 0, 0, 0])

    def test_mixed_data(self):
        salesData = [1,2,3,4,5,6,7,8,9,0]
        self.assertEqual(removeDuplicate(salesData), 10)
        self.assertEqual(salesData, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

if __name__ == '__main__':
    unittest.main()




"""     
State Name

recite the problem 

Ask questions:
IS there a specific value for duplicates?
Do we need to sort the new array

explain your code

type code

discuss complexity

run code and test cases
"""