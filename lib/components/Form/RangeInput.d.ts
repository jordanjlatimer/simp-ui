import * as React from "react";
import "../../styles/range-input.sass";
declare type RangeInputProps = {
    initial?: number;
    label: string;
    prefix?: string;
    suffix?: string;
    min: number;
    max: number;
    step?: number;
};
declare const RangeInput: React.FC<RangeInputProps>;
export { RangeInput };
