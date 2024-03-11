class Order:
    def __init__(self, order_id, customer_details, order_details, other_info=None):
        self.order_id = order_id
        self.customer_details = customer_details
        self.order_details = order_details
        self.other_info = other_info


class Node:
    # Function to initialize the node object
    def __init__(self, data):
        self.data = data  # Assign data
        self.next = None  # Initialize next as null

# Linked List class


class LinkedList:

    # Function to initialize the Linked List object
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

    def display(self):
        current = self.head
        while current:
            print("Order ID:", current.data.order_id)
            print("Customer Details:", current.data.customer_details)
            print("Order Details:", current.data.order_details)
            print("Other Info:", current.data.other_info)
            print("-----------------------------")
            current = current.next

    def reverse(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev


order1 = Order(1, "Customer1", "Item1")
order2 = Order(2, "Customer2", "Item2", "Additional Info")
order3 = Order(3, 'Customer3', "Item3",)
order4 = Order(4, 'Customer4', "Item4", "Additional Info")
order5 = Order(5, 'Customer5', "Item5", "Additional Info")
order6 = Order(6, 'Customer6', "Item6", "Additional Info")

order_list = LinkedList()
order_list.append(order1)
order_list.append(order2)
order_list.append(order3)
order_list.append(order4)
order_list.append(order5)
order_list.append(order6)

order_list.display()
order_list.reverse()
order_list.display()
