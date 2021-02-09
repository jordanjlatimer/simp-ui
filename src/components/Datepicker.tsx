import * as React from "react";
import "../styles/datepicker.sass";

type DatepickerProps = {
  label: string;
  placeholder?: string;
};

export const Datepicker: React.FC<DatepickerProps> = ({ label, placeholder }: DatepickerProps) => {
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState(0);
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());
  const picker = React.useRef<HTMLDivElement>(null);
  const control = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.addEventListener("mousedown", toggle);
    return () => {
      document.removeEventListener("mousedown", toggle);
    };
  }, [open]);

  const toggle = (e: MouseEvent) => {
    if (!open && control.current?.contains(e.target as Node)) {
      setOpen(true);
    } else if (open && !picker.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const generateTable = () => {
    let monthDays = new Date(year, month + 1, 0).getDate();
    let returnArray = [];
    for (let i = 0; i <= monthDays; i++) {
      if (i === 0) {
        let weekDays = new Date(year, month, i).getDay();
        if (weekDays !== 6) {
          for (let j = 0; j <= weekDays; j++) {
            returnArray.push(<div key={j + "p"} className="datepicker-picker-days-day" />);
          }
        }
      } else {
        returnArray.push(
          <div
            key={i + "d"}
            onClick={() => setDay(i)}
            className={"datepicker-picker-days-day" + (day === i ? " active" : "")}
          >
            {i}
          </div>
        );
      }
    }
    return returnArray;
  };

  return (
    <div className="datepicker">
      <div className="datepicker-label">{label}</div>
      <div>
        <div className={"datepicker-control" + (day > 0 ? " selected" : "")} tabIndex={0} ref={control}>
          {day < 1
            ? placeholder
            : new Date(year, month, day).toLocaleString("default", { month: "long", year: "numeric", day: "numeric" })}
        </div>
        <div ref={picker} className={"datepicker-picker" + (open ? " open" : "")}>
          <div className="datepicker-picker-navbar">
            <div className="datepicker-picker-navbar-header">
              {day === 0
                ? new Date(year, month).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })
                : new Date(year, month, day).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                  })}
            </div>
          </div>
          <div className="datepicker-picker-days">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(label => {
              return (
                <div key={label} className="datepicker-picker-days-header">
                  {label}
                </div>
              );
            })}
            {generateTable()}
          </div>
        </div>
      </div>
    </div>
  );
};