customerData1 = [101,104,107,0,0,0]
m = 3
customerData2 = [102,105,108]
n = 3

customerData1 = customerData1[:m] + customerData2[:n]
customerData1.sort()

print(customerData1)