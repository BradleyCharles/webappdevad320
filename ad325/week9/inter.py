class ListNode:
    def __init__(self, ssn=None, age=None, patient_info=None) -> None:
        self.ssn = ssn
        self.age = age
        self.patient_info = patient_info
        self.next = None

    def combine_lists(self, second_list):
        if second_list is None:
            return self

        merged_list = ListNode()
        current = merged_list

        while self is not None and second_list is not None:
            if self.ssn <= second_list.ssn:
                current.next = self
                self = self.next
            else:
                current.next = second_list
                second_list = second_list.next
            current = current.next

        if self is not None:
            current.next = self

        if second_list is not None:
            current.next = second_list

        return merged_list.next


list1 = ListNode(444, 30, "Info 1")
list1.next = ListNode(333, 34, "Info 2")

list2 = ListNode(222, 31, "Info 3")
list2.next = ListNode(222, 44, "Info 4")
list2.next.next = ListNode(2232, 44, "Info 4")

merged_list = list1.combine_lists(list2)

current = merged_list
while current is not None:
    print(f"SSN: {current.ssn}, Age: {
          current.age}, Patient Info: {current.patient_info}.")
    current = current.next
