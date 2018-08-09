function Statistics(){
    var data=[Math.round(Math.random()*2+1),Math.round(Math.random()*6+1),Math.round(Math.random()*8+1),Math.round(Math.random()*10+1),Math.round(Math.random()*12+1)]; 
    var container=document.getElementById('b');
    container.innerHTML="";
    var total=0;
    var st="";
    var mean=0;
    // You may change the following array by adding more data;
    var variance, std;
    var temp=0;
    var p=new Promise(function(resolve,reject){
      resolve(data);
    }).then(function(value){
      st+="The <em>data</em>: </b>." +value.toString() +"  - from <b>promise 1<br>";
      container.innerHTML=st;
      data.map(function(map){
       total+=map; 
      });
     return total;
    }).then(function(value){
      st+="The <em>sum</em> = " + value+" - <b> from promise 2</b><br>"
       container.innerHTML=st;
      mean=Math.round((total/data.length*100))/100;
      return mean;
     }).then(function(value){
      st+="The <em>mean</em> = " +value+" - <b> from promise 3</b><br>";
       container.innerHTML=st;
      data.map(function(map){
        temp+=Math.pow(map-value,2);
        variance=Math.round(temp/data.length*100)/100;
      })
      return variance;
     }).then(function(value){
      st+="The <em>variance</em> = " + value +" - <b> from promise 4</b><br>";
       std=Math.round((Math.pow(value,0.5)*100))/100;
      container.innerHTML=st;
        return std;
    }).then(function(value){
      st+="<span style='color:#ffff00;font-size:large;font-weight:bold;'>The standard deviation =  " + value+" - <b> from promise 5</b></span><br><hr>";
      container.innerHTML=st;
    });
    };