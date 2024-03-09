animals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  # List of animals to check
legs = [1, 2, 3, 4]  # List of animals with 4 legs
count = 0

t1 = [0,0,0,0]


for index in animals:  # Loop that checks all animals for selected values
    if index in legs:
        count += 1

print("Number of animals with 4 legs:",count)  # Prints the result

"""     

State Name

recite the problem 

Ask questions:
Do we need an array for each list of animal
So we need to list which animals match

explain your code

type code

discuss complexity

run code and test cases


"""