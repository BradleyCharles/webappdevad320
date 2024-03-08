animals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] #List of animals to check
current_count = 0

for element in animals: #loop that checks all of the animals for selected values
    if element == 1 or element == 2 or element == 3 or element == 4:
        current_count += 1

print(current_count) #prints the result
