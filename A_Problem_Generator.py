t = int(input())
from collections import Counter
for _ in range(t):
    m, n = list(map(int, input().split(" ")))
    val = input()
    cp = Counter(val)

    tot = (7- len(cp)) * n

    for key, val in cp.items():
        if val < n:
            tot += abs(val  - n) 
    print(tot)
