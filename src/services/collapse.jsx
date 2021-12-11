import React from "react";
import { ArrowForward, ArrowDownward } from "@mui/icons-material";
import "./collapse.css";
import Collapsible from "react-collapsible";
const Item = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const renderIcon = () => {
    return open ? <ArrowDownward /> : <ArrowForward />;
  };
  return (
    <div onClick={() => setOpen(!open)} key={item.id}>
      <Collapsible
        trigger={[item.name.toUpperCase(), renderIcon()]}
        open={open}
      >
        <div>{item.description}</div>
      </Collapsible>
    </div>
  );
};

export default Item;
