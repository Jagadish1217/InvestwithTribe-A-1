export function HolidayDate(data, time, select) {
    let count;
    if (select === "elgland") {
        count = 0;
    } else if (select === "scotland") {
        count = 1;
    } else {
        count = 2;
    }
    let set;
    if (arguments[3]) {
        const day1 = new Date(arguments[3]);
        const day2 = new Date(arguments[4]);
        const difference = day2 - day1;
        const days = difference / (1000 * 3600 * 24);
        console.log(days);

        set = days;
    } else {
        set = time;
    }
    let date = new Date().toJSON().slice(0, 10);
    let filter = data[count].filter((e) => {

        const day1 = new Date(e.date);
        const day2 = new Date(date);
        const difference = day1 - day2;
        const days = difference / (1000 * 3600 * 24);

        if (set > 0) {
            return days > 0 && days <= set;
        }
        return days < 0 && days >= set;
    });

    if (filter.length === 0) {
        filter = [{ title: "No data found", date: "" }];
        console.log(filter);
    }
    return filter;
}
