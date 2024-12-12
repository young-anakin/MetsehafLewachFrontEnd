n, m = list(map(int, input().split(" ")))
cp = 0
for ind in range(1, n+1):
    if m % ind == 0:
        if m // ind <= n:
            cp +=1

print(cp)