import * as React from "react";
import "./datepicker.sass";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

type DatepickerProps = {
  label: string;
  placeholder?: string;
};

const Datepicker: React.FC<DatepickerProps> = ({
  label,
  placeholder,
}: DatepickerProps) => {
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState(0);
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());
  const picker = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.addEventListener("mousedown", toggle);
    return () => {
      document.removeEventListener("mousedown", toggle);
    };
  }, []);

  const toggle = (e: MouseEvent) => {
    const { current } = picker;
    if (current && !current.contains(e.target as Node)) {
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
            returnArray.push(
              <div key={j} className="datepicker-picker-days-day" />
            );
          }
        }
      } else {
        returnArray.push(
          <div
            onClick={() => setDay(i)}
            className={
              "datepicker-picker-days-day" + (day === i ? " active" : "")
            }
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
      <p className="datepicker-label">{label}</p>
      <div>
        <p
          className={"datepicker-control" + (day > 0 ? " selected" : "")}
          onClick={() => setOpen(true)}
          tabIndex={0}
        >
          {day < 1
            ? placeholder
            : new Date(year, month, day).toLocaleString("default", {
                month: "long",
                year: "numeric",
                day: "numeric",
              })}
        </p>
        <div
          ref={picker}
          className={"datepicker-picker" + (open ? " open" : "")}
        >
          <div className="datepicker-picker-navbar">
            <FaAngleDoubleLeft
              onClick={() => {
                setDay(0);
                setYear(year - 1);
              }}
            />
            <FaAngleLeft
              onClick={() =>
                month === 0
                  ? (setDay(0), setMonth(11), setYear(year - 1))
                  : (setDay(0), setMonth(month - 1))
              }
            />
            <div>
              {day > 0
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
            <FaAngleRight
              onClick={() =>
                month === 11
                  ? (setDay(0), setMonth(0), setYear(year + 1))
                  : (setDay(0), setMonth(month + 1))
              }
            />
            <FaAngleDoubleRight
              onClick={() => {
                setDay(0);
                setYear(year - 1);
              }}
            />
          </div>
          <div className="datepicker-picker-days">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label) => {
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

Datepicker.displayName = "Datepicker";

export { Datepicker };
