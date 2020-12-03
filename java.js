let h=0;
function me(){
   let a=["RED","BLUE","YELLOW","PINK","GREEN","PURPLE","GOLD","ORANGE"]
   
   
    document.body.style.backgroundColor=a[h];
    h++;
    if(h>7)
    h=0;
} ;