import * as React from "react";
import "../styles/table.sass";

export const Table: React.FC<{}> = ({ children }) => <table className="table">{children}</table>;
