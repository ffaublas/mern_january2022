let strToWordArr =(str)=>{
    let arr = [];
    let start = 0;
   
   
   
       while(str[start]==" "){        
           start++;       
       }
    
    for(let i=start; i<str.length; i++){    
       
       if(str[start]==' ' && str[i]==' '){
           start++;
           continue;
       }
       
       if(str[i]==" " || i==str.length-1){   
           arr=arr.concat(str.substring(start,i));
           start=i+1;   
    }
   }
   return arr
   }
   
   
   console.log(strToWordArr("       welcome to the Jungle baby!        "));