module.exports = getDate;

function getDate(){

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
    }

    let day = today.toLocaleDateString("en-UK", options);
    return day;

}

