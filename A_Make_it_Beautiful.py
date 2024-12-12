import heapq
t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split(" ")))
    
    arr.sort(reverse=True)
    # print(arr)

    x = []
    og = [arr[0]]
    for ind in range(1, len(arr)):
        if arr[ind] == arr[ind-1]:
            x.append(arr[ind])
            continue
        else:
            og.append(arr[ind])
    
    og.extend(x)
    if len(set(og)) == 1:
        print("NO")
    else:
        print("YES")
        print(*og)
    # print(og, x)
