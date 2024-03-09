inventory = [4, 0, 1, 3, 0, 2, 5, 0]

index = 0
length = len(inventory)
while index < length:
    if inventory[index] == 0:
        inventory.insert(index + 1, 0)
        index += 2  # Skip the next position as we've just inserted a 0
        """ inventory.pop() """
    else:
        index += 1

print(inventory)

"""     

State Name

recite the problem 

Ask questions:
Do we need to account for negative numbers?

explain your code

type code

discuss complexity

run code and test cases


"""