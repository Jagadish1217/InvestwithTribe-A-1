export function ShowDate(data, time, select) {
    //console.log(data,"Ddd")
    let count;
    if (select === "elgland") {
        count = 0;
    } else if (select === "scotland") {
        count = 1;
    } else {
        count = 2;
    }

    const filter = data[count].filter((e) => {
        var day1 = new Date(e.date);
        var day2 = new Date("2022-01-07");
        var difference = Math.abs(day2 - day1);
        var days = difference / (1000 * 3600 * 24);

        return days <= time;
    });
    console.log(filter);
    return filter;
}
