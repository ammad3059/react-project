import React from "react";
import {
  Layers,
  Twitter,
  Facebook,
  Instagram,
  Mail,
} from "@mui/icons-material";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <Layers className="logo" />
        <h5>All Rights reserved by Ozen</h5>
      </div>
      <div className="footerRight">
        <div className="icons">
          <Twitter className="icon" />
          <Facebook className="icon" />
          <Instagram className="icon" />
          <Mail className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
