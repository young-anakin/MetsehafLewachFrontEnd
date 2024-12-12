t = int(input())
for _ in range(t):
    n, k = list(map(int, input().split(" ")))
    arr = list(map(int, input().split(" ")))

    # xx = arr.copy()
    # xx.sort()
    stack = []
    fl = True
    for ind in range(n):
        if stack and stack[-1] > ind:
            stack.append(ind)
            if len(stack) == k:
                pass
        else:
            if stack:
                pass
            else:
                stack.append(ind)
        # stack.append(ind)


    # print(arr, xx)
