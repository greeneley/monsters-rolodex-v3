import "./search-box.styles.css";
import { ChangeEventHandler } from "react";

type ISearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

// s

// type Canada = {
//   street: string;
//   province: string;
// };
//
// type US = {
//   street: string;
//   state: string;
// };
//
// type NorthAddress = Canada | US;
// interface INorthAddress {
//   street: string;
//   state?: string;
//   province?: string;
// }
// const Address: NorthAddress = {
//   street: "lo",
//   state: "tat",
//   province: "toto",
// };

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
