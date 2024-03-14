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




class testDuplicates(unittest.TestCase):
    def test1(self):
        salesData = [200, 200, 300]
        self.assertEqual(removeDuplicate(salesData), 2)
        self.assertEqual(salesData, [200, 300, 0])

    def test2(self):
        salesData = [150, 150, 200, 200, 200, 250, 250, 300, 300, 350]
        self.assertEqual(removeDuplicate(salesData), 5)
        self.assertEqual(salesData, [150, 200, 250, 300, 350, 0, 0, 0, 0, 0])
    
    def test3(self):
        salesData = [100,200,300,400,500]
        self.assertEqual(removeDuplicate(salesData), 5)
        self.assertEqual(salesData, [100,200,300,400,500])

    def test4(self):
        salesData = [100,100,100,100,100]
        self.assertEqual(removeDuplicate(salesData), 1)
        self.assertEqual(salesData, [100, 0, 0, 0, 0])

    def test5(self):
        salesData = 100
        self.assertEqual(removeDuplicate(salesData), 0)

    def test6(self):
        salesData = []
        self.assertEqual(removeDuplicate(salesData), 0)

if __name__ == '__main__':
    unittest.main()