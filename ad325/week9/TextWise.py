def reverse(text):
    array = list(text)
    l = 0
    r = len(text) - 1
    print(r)
    if l >= r:
        return array

    def swap(l, r, array):
        if l < r:
            array[l], array[r] = array[r], array[l]
            swap(l + 1, r - 1, array)

    swap(l, r, array)
    return ''.join(array)


print(reverse("TestWise"))
