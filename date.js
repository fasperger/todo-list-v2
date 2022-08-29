exports.getDate = function(){

    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
    }

    return today.toLocaleDateString("en-UK", options);
}

