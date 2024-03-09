import unittest

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        
    def append(self, new_data):
        
        new_node = Node(new_data)
        if self.head is None:
            self.head = new_node
            return
        
        last = self.head
        while (last.next):
            last = last.next
            
        last.next = new_node

    def isHealthRecordSymmetric(self):
        if not self.head:
            return False
        
        def is_symmetric(node1, node2):
            while node1 and node2:
                if node1.data != node2.data:
                    return False
                
                node1 = node1.next
                node2 = node2.next
            return True
                
        def reverse_list(node):
            prev = None
            current = node
            while current:
                next_node = current.next
                current.next = prev
                prev = current
                current = next_node
            return prev

        split1 = self.head
        split2 = self.head
        
        while split2 and split2.next:
            split1 = split1.next
            split2 = split2.next.next
            
        second_half = reverse_list(split1)
        
        return is_symmetric(self.head, second_half)

def createLinkedList(linked_list, input_array):
    if not isinstance(input_array, list):
        return False
    else:
        for index in input_array:
            linked_list.append(index)


heartRate = LinkedList()
bloodSugar = LinkedList()
bloodPressure = LinkedList()
edge1 = LinkedList()
edge2 = LinkedList()
edge3 = LinkedList()

class testSymmetry(unittest.TestCase):
        
    def test1(self):
        testArray = [70, 80, 80, 70]
        createLinkedList(heartRate, testArray)
        self.assertEqual(heartRate.isHealthRecordSymmetric(), True)
        
    def test2(self):
        testArray = [90, 100, 110, 100, 90]
        createLinkedList(bloodSugar, testArray)
        self.assertEqual(bloodSugar.isHealthRecordSymmetric(), True)
        
    def test3(self):
        testArray = [[120,80], [130,85], [125,82]]
        createLinkedList(bloodPressure, testArray)
        self.assertEqual(bloodPressure.isHealthRecordSymmetric(), False)
        
    def test4(self):
        testArray = [10,20,30,40,50]
        createLinkedList(edge1, testArray)
        self.assertEqual(edge1.isHealthRecordSymmetric(), False)
        
    def test5(self):
        testArray = [10,10,10,10,10]
        createLinkedList(edge2, testArray)
        self.assertEqual(edge2.isHealthRecordSymmetric(), True)
        
    def test6(self):
        testArray = 100
        createLinkedList(edge3, testArray)
        self.assertEqual(edge3.isHealthRecordSymmetric(), False)
        
if __name__ == '__main__':
    unittest.main()