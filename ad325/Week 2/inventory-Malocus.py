list1 = [4,0,1,3,0,2,5,0]
list2 = []
current_count = 0

for element in list1:
    if element == 0:
        list1.insert([element],0)
        list1.pop()

print(list1)
"""     else:
        if current_count > 0:
            list2.append(current_count)
            current_count = 0

if current_count > 0:
    list2.append(current_count)

if list2:
    print("List of consecutive 1's lengths:", list2)
    print("Maximum length of consecutive 1's:", max(list2))
else:
    print("No consecutive 1's found in the list.")


    # create a list of vowels
vowel = ['a', 'e', 'i', 'u']

# 'o' is inserted at index 3 (4th position)
vowel.insert(3, 'o')


print('List:', vowel)

# Output: List: ['a', 'e', 'i', 'o', 'u']

 """