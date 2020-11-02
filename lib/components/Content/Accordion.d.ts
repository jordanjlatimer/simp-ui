import * as React from "react";
import "../../styles/accordion.sass";
import "../../styles/utility-classes.sass";
declare type AccordionProps = {
    items: {
        label: string;
        contents: string;
    }[];
    multiple?: boolean;
};
declare const Accordion: React.FC<AccordionProps>;
export { Accordion };
