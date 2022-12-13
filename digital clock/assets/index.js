function clock() {
    let date = new Date();

    // none calculate time
    let nc_hours = date.getHours();
    let nc_minutes = date.getMinutes();
    let nc_seconds = date.getSeconds();

    // actual time
    let h;
    let m = nc_minutes <= 10 ? "0" + nc_minutes : nc_minutes;
    let s = nc_seconds <= 10 ? "0" + nc_seconds : nc_seconds;
    let ampm = nc_hours > 12 ? "PM" : "AM";

    //hour calculate
    if (nc_hours > 12) {
        h = "0" + nc_hours - 12;
    } else
    if (nc_hours === 0) {
        h = 12;
    } else {
        h = nc_hours;
    }
    //----------------------------------------hms end----------------------------------//

    //days
    let days_arr = [
        "Sun", "Mon", "Tue", "Wed",
        "Thu", "Fri", "Sat"
    ];
    //months
    let months_arr = [
        "Jan", "Feb", "March", "Apr",
        "May", "John", "July", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];

    //counting day month year
    let count_date = date.getDate();
    let count_month = months_arr[date.getMonth()];
    let count_year = date.getFullYear();
    let count_day = days_arr[date.getDay()];
    console.log(count_date);
    console.log(count_month);
    console.log(count_year);


    document.querySelector(".hms").innerHTML = `<p>${h} : ${m} : ${s} <span>${ampm}</span></p>`;
    document.querySelector(".dmy").innerHTML = `<p>${count_date},${count_month},${count_year} | ${count_day}</p>`;

    //-------------------------------------dms end-----------------------------------------//
}

setInterval(clock, 1000);