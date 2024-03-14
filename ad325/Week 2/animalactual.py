array1 = [1,1,0,1,1,1] #3
array2 = []
count = 0

t1 = [1,1,1,1,1,1] #6
t2 = [0,0,0,0,0,0] #0
t3 = [1,1,2,0,0,0] #2

for index in t3:
    if index == 1:
        count +=1
    else:
        if count > 0:
            array2.append(count)
            count = 0

if count > 0:
    array2.append(count)

if array2:
    print("Number of rabbits:", max(array2))
else:
    print("No rabbits!")

