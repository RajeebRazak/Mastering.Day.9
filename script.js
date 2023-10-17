class Solution {
    getTable(N) {
      //code here
      let arr = [];
      for (let i = 1; i <= 10; i++){
          arr.push(N*i)
      }
       return arr;
    }
  }
  
  class Solution {
    seriesSum(n) {
        return Math.floor((n*(n+1))/2); // Calculate the sum of the series using the formula
    }
}  

class Solution{
    modify(s){
        //code here
        let res = '' ; 
        for (let i = 0 ; i < s.length ; i++)
        {
            if(s[i] != " "){
                res = res + s[i]
            }
        }
        return res
    }
}


class Solution{
    toLower(str){
        //converting the characters of the string to lowercase
        let lowerStr = str.toLowerCase();
        
        //returning the converted string
        return lowerStr;
    }
}

class Solution {
    revStr(s){   
        let str = "";
        for(let i = s.length-1;i>0;i--){
            str+=s[i]
        }
        return str;
    }
}

class Solution {

    longest(names,n){
        //code here
        let name = names[0];
        for(let i = 0; i < n; i++) {
            if(names[i].length > name.length) {
                name = names[i]
            }
        }
        return name
    }
}