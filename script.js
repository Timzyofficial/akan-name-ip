function getAkanName() {
    let day = document.getElementsByName("day")[0].value;
    let month = document.getElementsByName("month")[0].value;
    let year = document.getElementsByName("year")[0].value;


    days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var date = new Date(year + "-" + month + "-" + day);
    let dayOfWeek = date.getDay()


    console.log(days[dayOfWeek]);


    

}