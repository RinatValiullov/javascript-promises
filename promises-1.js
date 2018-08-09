function Even_Promise(){
    var s="";
    var container=document.getElementById("a");
    var color=['red','magenta','cyan','yellow','orange'];
    var count=0;
    container.innerHTML=""
    container.innerHTML="Programme Started. &#x1f44d;<br><hr>";
      s="";
      var clr=Math.round(Math.random()*4+1)
      var p=new Promise(function(resolve, reject){
    s+="Promise Started.<br>"
      a=Math.round(Math.random()*11+1);
      if (a%2===0){resolve('Resolved! Here is the even number: '+a)}
      else{reject('Rejected! No even number.')}
    });
    var x=p.then(function(res){
    s+=res+"<br><hr>";
    container.style.color=color[clr];
      container.innerHTML=s;
                        
    }).catch(function(res){
    s+=res +"<br><hr>";
       container.innerHTML=s;
                        
    });
     s+="Awaiting asynchronously the promise - resolve or reject.<br>"
    container.innerHTML=s;
      return x;
    };