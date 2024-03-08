import unittest

def removeOutdated(data,id):

    if not data or not id or not isinstance(data, list):
        return None

    length = len(data)
    count = 0
    index = 0

    while index < length:
        if data[index] == id:
            data.pop(index)
            data.append(0)
            length -= 1
        else:
            count += 1
            index += 1
    return count

class testOutdated(unittest.TestCase):

    def test1(self):
        productCatalog = [1003,1002,1002,1003]
        discontinuedID = 1003
        self.assertEqual(removeOutdated(productCatalog,discontinuedID), 2)
        self.assertEqual(productCatalog, [1002,1002,0,0])

    def test2(self):
        productCatalog = [1000,1001,1002,1002,1003,1000,1004,1002]
        discontinuedID = 1002
        self.assertEqual(removeOutdated(productCatalog,discontinuedID), 5)
        self.assertEqual(productCatalog, [1000,1001,1003,1000,1004,0,0,0])

    def test3(self):
        productCatalog = [1001,1002,1003,1004]
        discontinuedID = 1005
        self.assertEqual(removeOutdated(productCatalog,discontinuedID), 4)
        self.assertEqual(productCatalog, [1001,1002,1003,1004])

    def test4(self):
        productCatalog = []
        discontinuedID = None
        self.assertEqual(removeOutdated(productCatalog,discontinuedID), None)
        self.assertEqual(productCatalog, [])

    def test5(self):
        productCatalog = 4
        discontinuedID = 4
        self.assertEqual(removeOutdated(productCatalog,discontinuedID), None)
        self.assertEqual(productCatalog, 4)

    def test6(self):
        productCatalog = None
        discontinuedID = 0
        self.assertEqual(removeOutdated(productCatalog,discontinuedID), None)
        self.assertEqual(productCatalog, None)

if __name__ == '__main__':
    unittest.main()



