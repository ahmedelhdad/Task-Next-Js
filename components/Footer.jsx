import React from "react";
import Image from "next/image";
import IconPremium from "../image/Premium.png";
import IconAuthorised from "../image/Authorised.png";
import IconService from "../image/services.png";
import IconExpert from "../image/expert.png";
const Footer = () => {
  return (
    <div className="bg-black text-white  text-center space-y-8 pt-8 pb-6 ">
      <div className="container flex justify-around">
        <Image src={IconPremium} alt="IconPremium" />
        <Image src={IconAuthorised} alt="IconAuthorised" />
        <Image src={IconService} alt="IconService" />
        <Image src={IconExpert} alt="IconExpert" />
      </div>
      <div>Copyright&#169; 2022 - All rights reserved</div>
    </div>
  );
};

export default Footer;
