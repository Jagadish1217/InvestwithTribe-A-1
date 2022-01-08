export function Share({ data }) {
    return (
        <div className="box">
            {data.map((e, index) => (
                <div className="table" key={index}>
                    <div>{e.title}</div> <div> {e.date}</div>{" "}
                </div>
            ))}
        </div>
    );
}