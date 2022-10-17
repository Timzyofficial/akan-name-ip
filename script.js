function getAkanName() {

    let gender = document.getElementsByName("gender")[0].value;
    let day = document.getElementsByName("day")[0].value;
    let month = document.getElementsByName("month")[0].value;
    let year = document.getElementsByName("year")[0].value;


    days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    maleNames= ["Kwasi","Kwadwo","Kwabena","Kwako","Yaw","Kofi","Kwame"];
    femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    var date = new Date(year + "-" + month + "-" + day);
    let dayOfWeek = date.getDay()
    let akanName;

    if (gender === "male"){
        akanName = maleNames[dayOfWeek];
    }else{
        akanName = femaleNames[dayOfWeek];
    }

    // An invalid day should be (d<=0) or (d>31)

    if ((day<=0) || (day>31)){
        document.getElementsByClassName("dayWarning")[0].innerHTML = "Day Should be between 1st and 31st";
        return;
    }
    
    if ((month<= 0) || (month > 12) ){
        document.getElementsByClassName("monthWarning")[0].innerHTML = "Month Should be between 1 and 12";
        return;
    }else {
        document.getElementsByClassName("monthWarning")[0].innerHTML = "";
    }
    
    
    if (year <= 0 || year > new Date().getFullYear()){
        document.getElementsByClassName("yearWarning")[0].innerHTML = "You can't be born in the future";
        return;
    }else {
        document.getElementsByClassName("yearWarning")[0].innerHTML = "";
    }

    // An invalid month should be (m<= 0) or (m > 12)  
    

    let result = "Hi, your akan name : " + akanName + " and you were born on: " + days[dayOfWeek];
    document.getElementsByClassName("result")[0].innerHTML = result;

}
