"""     
State Name

recite the problem 

Ask questions:
 Do we need to account for non integers?
 Do we need to identify spikes in the data?


explain your code

type code

discuss complexity
Space and time both O(n) due to the reversing

run code and test cases
"""


import unittest

class Node:

    # Function to initialize the node object 
    def __init__(self, data): 
        self.data = data # Assign data 
        self.next = None # Initialize next as null 

# Linked List class 
class LinkedList:

    # Function to initialize the Linked List object 
    def __init__(self): 
        self.head = None

    def append(self, new_data):
        # 1. Create a new node
        # 2. Put in the data
        # 3. Set next as None
        new_node = Node(new_data)

        # 4. If the Linked List is empty, then make the
        # new node as head
        if self.head is None:
            self.head = new_node
            return

        # 5. Else traverse till the last node
        last = self.head
        while (last.next):
            last = last.next

        # 6. Change the next of last node
        last.next = new_node

    def isHealthRecordSymmetric(self):          
        if not self.head:
            return True  # An empty list is symmetric

        # Function to check if a list is symmetric
        def is_symmetric(node1, node2):
            while node1 and node2:
                if node1.data != node2.data:
                    return False
                node1 = node1.next
                node2 = node2.next
            return True

        # Function to reverse a linked list
        def reverse_list(node):
            prev = None
            current = node
            while current:
                next_node = current.next
                current.next = prev
                prev = current
                current = next_node
            return prev

        # Split the list into two halves
        split1 = self.head
        split2 = self.head

        while split2 and split2.next:
            split1 = split1.next
            split2 = split2.next.next

        # Reverse the second half of the list
        second_half = reverse_list(split1)

        # Compare the first half with the reversed second half
        return is_symmetric(self.head, second_half)

def createLinkedList(linked_list, input_array):
    if not isinstance(input_array, list):
        linked_list.append(input_array)
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
        testArray = [90,100,110,100,90]
        createLinkedList(bloodSugar, testArray)
        self.assertEqual(bloodSugar.isHealthRecordSymmetric(), True)

    def test3(self):
        testArray = [[120,80],[130,85],[125,82]]
        createLinkedList(bloodPressure, testArray)
        self.assertEqual(bloodPressure.isHealthRecordSymmetric(), False)

    def test4(self):
        testArray = [10,20,30,40,50]
        createLinkedList(edge1, testArray)
        self.assertEqual(edge1.isHealthRecordSymmetric(), False)

    def test5(self):
        testArray = [90,90,90,90,90]
        createLinkedList(edge2, testArray)
        self.assertEqual(edge2.isHealthRecordSymmetric(), True)

    def test6(self):
        testArray = 100
        createLinkedList(edge3, testArray)
        self.assertEqual(edge3.isHealthRecordSymmetric(), True)

if __name__ == '__main__':
    unittest.main()