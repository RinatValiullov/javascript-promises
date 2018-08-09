function Promise_Race(){
    var a;
      var s=" ";
      document.getElementById("d").innerHTML="";
       var p1=new Promise(function(resolve,reject){
         a=Math.round(Math.random()*3+1);
       if (a%2===0){    
        resolve("It's an even number; the 1st promise won the race!<br>");}
    
    });
    var p2=new Promise(function(resolve,reject){
       a=Math.round(Math.random()*15+1);
      if (a%2===0){  
        resolve("It's an even number; the 2nd promise won the race!<br>");}
    });
    var p3=new Promise(function(resolve,reject){
       a=Math.round(Math.random()*47+1);
      if (a%2===0){
        resolve("It's an even number; the 3rd promise won the race!<br>");}
    });
    var x=Promise.race([p1,p2,p3])
    .then(function(res){
      s+="Success: " + "&#9786;" + "<hr>" +res;
      document.getElementById("d").innerHTML=s;
    })
    ;
      return x;
    };
    