forest = [1, 1, 0, 1, 1, 1] #array of rabbits and rocks
number_of_rabbits = [] #array to store the consecutive number of rabbits
current_count = 0

for element in forest: #loop that counts the number of consecutive rabbits and appends them to a second array
    if element == 1:
        current_count += 1
    else:
        if current_count > 0:
            number_of_rabbits.append(current_count)
            current_count = 0

if current_count > 0:
    number_of_rabbits.append(current_count)

if number_of_rabbits:
    print("Maximum length of consecutive rabbits's:", max(number_of_rabbits)) #Prints the result of the number of consecutive rabbits counted
else:
    print("No consecutive rabbits's found in the list.") #Prints the result if no rabbits are found