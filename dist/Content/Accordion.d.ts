import * as React from "react";
import "../styles/accordion.sass";
declare type AccordionProps = {
    items: {
        label: string;
        contents: string;
    }[];
    multiple?: boolean;
};
declare const Accordion: React.FC<AccordionProps>;
export { Accordion };
