import * as React from "react";
import "../../styles/table.sass";
declare type TableProps = {
    headers: string[];
    initData: {
        [key: string]: string;
    }[];
    keyField: string;
    showKeyField?: boolean;
};
declare const Table: React.FC<TableProps>;
export { Table };
