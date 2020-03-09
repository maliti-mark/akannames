// function on button
function akan(){

    var birthDate=document.getElementById("date").value;
    var dateEntered= birthDate.split("-");
    var day=parseInt(dateEntered[0]);
    var month=parseInt(dateEntered[1]);
    var year=parseInt(dateEntered[2]);

    //Century 
    var century=(year-1)/100+1;
    var dayWeek = ( century/4 -2*century-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;

    document.getElementById("result").innerHTML=Math.round(dayWeek);
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var gender=document.getElementById("gender").value;
    var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var weekDay = Math.round(dayWeek)

    //form  output
    if(dayWeek){
        if(gender=="male"){
            document.getElementById("result").innerHTML= "akan names is"+ maleNames[Math.round(dayWeek)]+" and you were born on "+ daysOfWeek[weekDay];
        }
        else if(gender==="female"){
            document.getElementById("result").innerHTML="You were born on "+daysOfWeek[weekDay]+ " and Your akan name is " + femaleNames[Math.round(dayWeek)];
        }else{
            alert("Enter valid date and choose gender");
            document.getElementById("result").innerHTML="";
        }
    }
            else{
                alert("Enter valid birthday and choose gender");
                document.getElementById("result").innerHTML="";
            }


    //reFresh
    formRefresh();
}
function formRefresh(){
    document.getElementById("form-d").reset();
}
