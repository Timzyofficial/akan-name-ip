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

        

    let result = "Hi, your akan name : " + akanName + " and you were born on: " + days[dayOfWeek];
    document.getElementsByClassName("result")[0].innerHTML = result;

}
