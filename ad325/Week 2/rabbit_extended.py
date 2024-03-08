rabbits_and_rocks = [1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1]
number_of_rabbits = []
current_count = 0

for element in rabbits_and_rocks:
    if element == 1:
        current_count += 1
    else:
        if current_count > 0:
            number_of_rabbits.append(current_count)
            current_count = 0

if current_count > 0:
    number_of_rabbits.append(current_count)

if number_of_rabbits:
    print("List of consecutive 1's lengths:", number_of_rabbits)
    print("Maximum length of consecutive 1's:", max(number_of_rabbits))
else:
    print("No consecutive 1's found in the list.")