stringarr=input("Enter array string")
stringarr=stringarr.upper()
stringarr1=list(stringarr)
count=0
for i in range (len(stringarr1)):
    if(stringarr[i])=="A" or stringarr[i]=="E" or stringarr[i]=="I" or stringarr[i]=="o" or stringarr[i]=="u"):
         count+=1
print(count)        