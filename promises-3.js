function Promise_All(){
    var a=(document.getElementById('pall').value);
    if (a=="" || a==null){return;}
    var container=document.getElementById("c");
      var s=" ";
      container.innerHTML="";
       var p1=new Promise(function(resolve,reject){
       if (a%3===0){    
        resolve("It's a multiple of 3.<br>");}
        else{
          reject("It's not a multiple of 3.<br>");}
    });
    var p2=new Promise(function(resolve,reject){
      if (a%4===0){  
        resolve("It's a multiple of 4.<br>");}
        else{ 
          reject("It's not a multiple of 4.<br>");}
    });
    var p3=new Promise(function(resolve,reject){
      if (a%5===0){
        resolve("It's a multiple of 5.<br>");}
        else{
          reject("It's not a multiple of 5.<br>");}
    });
    var x=Promise.all([p1,p2,p3])
    .then(function(res){
      s+="Success: " + "&#9786;" + "<hr>" + res[0] + "<br>" + res[1]+ "<br>" + res[2];
      container.innerHTML=s;
    })
    .catch(function(res){
       container.innerHTML="Failure: " + "&#9787;" + "<hr>" + res;
    });
      return x;
    };