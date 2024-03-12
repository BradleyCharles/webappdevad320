def reverse(text):
    array = list(text)
    start = 0
    end = len(text) - 1
    if start >= end:
        return array

    def swap(left, right, array):
        if left < right:
            array[left], array[right] = array[right], array[left]
            swap(left + 1, right - 1, array)

    swap(start, end, array)
    return ''.join(array)


print("TestWise")
print(reverse("TestWise"))
