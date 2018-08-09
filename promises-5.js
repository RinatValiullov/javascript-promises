//You may change the two initial numbers in the following array;
function Promise_Fibonacci(){
    var a=eval(document.getElementById('n1').value);
    var b=eval(document.getElementById('n2').value);
    if(a==null || b==null){return;}
    var s=[];
    s.push(a);s.push(b);
    var total=0;
    var str;
    var container=document.getElementById('e');
    var p=new Promise(function(resolve){
     total+=s[0]+s[1];  
      s.push(total);
      resolve(s);
    }).then(function(val){
     total=s[1]+s[2];
      s.push(total);
      return s;
    }).then(function(val){
      total=s[2]+s[3];
      s.push(total);
      return s;
    }).then(function(val){
      total=s[3]+s[4];
      s.push(total);
      return s.toString(); 
    }).then(function(val){
      str="The Fibonacci Sequence: " + val +"...";
     container.innerHTML=str; 
    });
    return p;
    };
    