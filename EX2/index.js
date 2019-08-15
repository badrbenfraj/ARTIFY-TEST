document.getElementById("btn").addEventListener("click", maxOnesIndex);

var arr = [0,1,0,1,0,1]; 

function maxOnesIndex(arr) 
    { 
        var max_count = 0; 
        var max_index=0;  
        var prev_zero = -1;  
        var prev_prev_zero = -1; 
   
        for (var i=0; i<arr.length; ++i) 
        { 
            if (arr[i] == 0) 
            { 
                if (i - prev_prev_zero > max_count) 
                { 
                    max_count = i - prev_prev_zero; 
                    max_index = prev_zero; 
                } 
   
                prev_prev_zero = prev_zero; 
                prev_zero = i; 
            } 
        } 
   
        if (arr.length-prev_prev_zero > max_count) 
            max_index = prev_zero; 
   
        return max_index; 
    } 
    document.getElementById("resultat").innerHTML = maxOnesIndex(arr)
    console.log(maxOnesIndex(arr));

