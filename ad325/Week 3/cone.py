stockPrices1 = [120, 180, 180] #false
stockPrices2 = [100, 129, 120, 190] #true
stockPrices3 = [0,0,0,0,0,0] #false
stockPrices4 = [1,2,3,4,5,6] #false
stockArray = [stockPrices1,stockPrices2,stockPrices3,stockPrices4]

def coneCheck(stock):
    length = len(stock)

    if length < 3:
        return False

    for index in range(1, length - 1):
        if stock[index] > stock[index - 1] and stock[index] > stock[index + 1]:
            return True    
    return False

def test():
    for index in stockArray:
        count = coneCheck(index)
        print(count)

test()