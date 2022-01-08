import { useEffect, useState } from "react";
import { HolidayDate } from "./Holidays";
import { Share } from "./share";
import  HolidayPick  from "./HolidaysPick";
import "./style.css";
export function Landing() {
    const [data, setData] = useState([[], [], []]);
    const [select, setSelect] = useState();
    const [show, setShow] = useState(true);
    const [cal, setCal] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await fetch("https://www.gov.uk/bank-holidays.json");
            const res = await data.json();
            const setdata = [];
            for (const key in res) {
                setdata.push(res[key].events);
            }
            console.log(res);
            setData(setdata);
        }
        getData();
    }, []);

    return (
        <div>
            <div className="navbar">
                <select
                    name=""
                    id="country-s"
                    onChange={(e) => {
                        setSelect(e.target.value);
                        setShow(true);
                        console.log(e.target.value);
                    }}
                >
                    <option value="elgland">England</option>
                    <option value="ireland">Northern-ireland</option>
                    <option value="scotland">Scotland</option>
                </select>
                <select
                    name=""
                    id="country-s"
                    onChange={(e) => {
                        if (e.target.value === "1") {
                            setCal(HolidayDate(data, -1, select));
                        } else if (e.target.value === "7") {
                            setCal(HolidayDate(data, -7, select));
                        } else {
                            setCal(HolidayDate(data, -30, select));
                        }
                        setShow(false);
                    }}
                >
                    <option value="1">Yesterday</option>
                    <option value="7">Last week</option>
                    <option value="30">Last month</option>
                </select>
            </div>
            <div id="cal">
                {" "}
                <HolidayPick date={[data, 7, select, setCal, setShow]} />
            </div>

            {show ? (
                select === "scotland" ? (
                    <Share data={data[1]} />
                ) : select === "ireland" ? (
                    <Share data={data[2]} />
                ) : (
                    <Share data={data[0]} />
                )
            ) : (
                <Share data={cal} />
            )}
        </div>
    );
}