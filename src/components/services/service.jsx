import React from "react";
import "./service.css";
import { CardGiftcard, AccessTime, Computer } from "@mui/icons-material";
import Box from "../box/box";
const Service = () => {
  return (
    <div className="service">
      <h2 className="service-head">SERVICES WE OFFER</h2>
      <div className="service-boxes">
        <Box
          topColor="green"
          icon={<CardGiftcard />}
          heading="Mails that you got"
          paragraph="A box-shadow CSS generator that helps you quickly generate box-shadow CSS declarations for your website"
        />
        <Box
          topColor="orange"
          icon={<AccessTime />}
          heading="Mails that you got"
          paragraph="A box-shadow CSS generator that helps you quickly generate box-shadow CSS declarations for your website"
        />
        <Box
          topColor="purple"
          icon={<Computer />}
          heading="Mails that you got"
          paragraph="A box-shadow CSS generator that helps you quickly generate box-shadow CSS declarations for your website"
        />
      </div>
    </div>
  );
};

export default Service;
