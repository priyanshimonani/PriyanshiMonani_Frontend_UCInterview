var count=7;
const goal=Math.floor(Math.random()*100+1)
console.log(goal);
function checkValue()
{
    
    
    var uservalue=document.getElementById("inputValue").value;
    if (uservalue==""){
        alert("Enter a number!!")
    }
    else{
        document.getElementById("lives").innerText=count-1;
        count--;
    const ol=document.getElementById("guesslist");
			const li=document.createElement("li");
			const span=document.createElement("span");
    if(count >=1){
        if(uservalue==goal){
            document.getElementById("correctaudio").play();
            alert("Correct");
            span.textContent=uservalue;
			li.appendChild(span);
            ol.appendChild(li);
            document.getElementById("result").innerText="\nWINNER!!!\nEND OF GAME";
            document.getElementById("lives").innerText="0";
        }
        if(uservalue>goal){
            document.getElementById("wrongaudio").play();
            alert("Entered number is Higher.");
            span.textContent=uservalue+" (H)";
			li.appendChild(span);
            ol.appendChild(li);
            
            console.log(count)
        }
        if(uservalue<goal){
            document.getElementById("wrongaudio").play();
            alert("Entered number is Lower.");
            span.textContent=uservalue+" (L)";
			li.appendChild(span);
            ol.appendChild(li);
            
            console.log(count)
        }
    }
    else if(uservalue==goal&&count==0){
        document.getElementById("correctaudio").play();
            alert("Correct");
            span.textContent=uservalue;
			li.appendChild(span);
            ol.appendChild(li);
            document.getElementById("result").innerText="\nWINNER!!!\nEND OF GAME";
            document.getElementById("lives").innerText="0";
    }
    else{
        document.getElementById("endaudio").play();
        span.textContent=uservalue;
		li.appendChild(span);
        ol.appendChild(li);
		document.getElementById("result").innerText="\nEND OF GAME\nYou are out of lives. The number was:"+goal;	

    }
    document.getElementById("inputValue").value="";
    document.getElementById("inputValue").focus();
}
}