t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split(" ")))
    odd, even = 0, 0
    for ind in arr: 
        if ind % 2 == 0:
            even +=1
        else:
            odd +=1
    
    if even > odd:
        print(odd)
    else:
        print(even)