import * as React from "react";

import { HolidayDate } from "./Holidays";

export default function HolidayPick({ date }) {
    const [value, setValue] = React.useState(null);
    const [value1, setValue1] = React.useState(null);
    console.log(date);
    return (
        <div>
            <input
                type="date"
                onChange={(e) => {
                    console.log(e.target.value);
                    setValue([e.target.value]);
                    date[4](false);
                    date[3](HolidayDate(date[0], date[1], date[2], e.target.value, value1));
                }}
            />
            <input
                type="date"
                onChange={(e) => {
                    console.log(e.target.value);
                    setValue1([e.target.value]);
                    date[4](false);
                    date[3](HolidayDate(date[0], date[1], date[2], value, e.target.value));
                }}
            />
        </div>
    );
}