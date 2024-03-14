def selection_sort(data):
    length = len(data)

    for index in range(length - 1):
        # Assume the current index is the minimum
        min_index = index

        # Iterate through the unsorted part to find the minimum element
        for unsorted in range(index + 1, length):
            if data[unsorted] < data[min_index]:
                min_index = unsorted

        # Swap the found minimum element with the first element
        data[index], data[min_index] = data[min_index], data[index]

# Example usage:
selectArray = [184, 509, 762, 341, 628, 15, 487, 893, 246, 593, 724, 91, 357, 602, 819, 104, 431, 678, 240, 590, 865, 126, 374, 751, 30, 482, 927, 695, 258, 543, 808, 178, 611, 954, 423, 789, 156, 691, 362, 531, 847, 208, 456, 683, 140, 578, 819, 264, 625, 907, 375, 635, 854, 193, 519, 762, 329, 597, 836, 101, 447, 694, 245, 508, 883, 148, 382, 729, 496, 862, 209, 572, 758, 326, 691, 954, 413, 676, 131, 468, 704, 255, 591, 848, 30, 374, 621, 189, 534, 781, 467, 723, 980, 856, 290, 628, 905, 154, 492, 749, 418, 773]
print("Original array:", selectArray)

selection_sort(selectArray)

print("Sorted array:", selectArray)
