t = int(input())
for _ in range(t):
    n = int(input())
    val = input()
    
    ans = ""

    for ind in range(n):
        if val[ind] == "U":
            ans += "D"
        elif val[ind] == "D":
            ans += "U"
        
        else:
            ans += val[ind]
    
    print(ans)