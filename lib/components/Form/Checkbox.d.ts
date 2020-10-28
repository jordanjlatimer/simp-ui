import * as React from "react";
import "../../styles/checkbox.sass";
declare type CheckboxProps = {
    label: string;
    initChecked?: boolean;
    labelPosition?: string;
};
declare const Checkbox: React.FC<CheckboxProps>;
export { Checkbox };
