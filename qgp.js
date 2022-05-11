function send(){
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    a=parseInt(n1)*parseInt(n2);
    q=document.getElementById.innerHTML="question"
    qn=q+n1+"X"+n2+"q;
i="<br>Answer:<input type'text' id='input_check_box'>";
cb = "<br><br><button class='btn btn-info' onclick="check();">Check</button>";
row=qn+i+cb;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";
}
