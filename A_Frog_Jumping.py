t = int(input())
for _ in range(t):
    a, b, k = list(map(int, input().split(" ")))
    cp = 0

    if k%2 == 1:
        cp += a
    k = k//2
    # print(a * k, b* k//2)
    cp += (a * k)

    cp -= (b * k)

    print(cp) 