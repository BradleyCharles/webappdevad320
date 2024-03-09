def reverse(text):
    array = list(text)
    left = 0
    right = len(text) - 1
    if left >= right:
        return array

    def swap(left, right, array):
        if left < right:
            array[left], array[right] = array[right], array[left]
            swap(left + 1, right - 1, array)

    swap(left, right, array)
    return ''.join(array)


print("TestWise")
print(reverse("TestWise"))
