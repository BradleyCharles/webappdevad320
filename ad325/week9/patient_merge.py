"""     
State Name


recite the problem-----------


Ask questions:---------------


explain your code------------


type code--------------------


discuss complexity-----------


run code with test cases-----
"""


class ListNode:
    def __init__(self, ssn=None, age=None, patient_info=None):
        self.ssn = ssn
        self.age = age
        self.patient_info = patient_info
        self.next = None

    def combine_lists(self, second_list):
        if second_list is None:
            return self  # If the second list is empty, return the first list

        merged_list = ListNode()  # Dummy node for the merged list
        current = merged_list

        while self is not None and second_list is not None:
            if self.ssn <= second_list.ssn:
                current.next = self
                self = self.next
            else:
                current.next = second_list
                second_list = second_list.next

            current = current.next

        # If any elements are left in the first list
        if self is not None:
            current.next = self

        # If any elements are left in the second list
        if second_list is not None:
            current.next = second_list

        return merged_list.next  # Skip the dummy node


list1 = ListNode(111, 30, "PatientInfo1")
list1.next = ListNode(222, 34, "PatientInfo2")


list2 = ListNode(111, 30, "PatientInfo3")
list2.next = ListNode(333, 48, "PatientInfo4")


# Merge the lists
merged_list = list1.combine_lists(list2)

# Print the merged list
current = merged_list
while current is not None:
    print(f"SSN: {current.ssn}, Age: {
          current.age}, Patient Info: {current.patient_info}")
    current = current.next
