customerData1 = [101,104,107,0,0,0] 
m = 3
customerData2 = [102,105,108] 
n = 3






size1 = m - 1
size2 = n - 1
Merged = m + n - 1

# Merge arrays from the end to the beginning
while size1 >= 0 and size2 >= 0:
    if customerData1[size1] > customerData2[size2]:
        customerData1[Merged] = customerData1[size1]
        size1 -= 1
    else:
        customerData1[Merged] = customerData2[size2]
        size2 -= 1
    Merged -= 1

# If there are remaining elements in customerData2, add them to customerData1
while size2 >= 0:
    customerData1[Merged] = customerData2[size2]
    size2 -= 1
    Merged -= 1








print(customerData1)

"""     
State Name

recite the problem 

Ask questions:
How do we handle matching ID's
Do we need to anticipate numbers outside our range e.g. -100

explain your code

type code

discuss complexity

run code and test cases
"""