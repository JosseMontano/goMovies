"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";

type IconProps = {
  IconImg: StaticImageData;
};


export const Icon = ({ IconImg }: IconProps) => (
  <div className="container">
    <Image className="img_start" src={IconImg} alt="icon" />
    <style jsx global>
      {`
        .img_start {
          background-color: transparent;
          width: 150px;
          height: 150px;
          justify-self: center;
        }
      `}
    </style>
  </div>
);
