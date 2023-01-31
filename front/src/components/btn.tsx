import React from "react";

type BtnProps = {
  colorPrimary: string;
  msg: string;
};

export const Btn = ({ colorPrimary, msg }: BtnProps) => (
  <>
    <button type="submit">{msg}</button>
    <style jsx>
      {`
        button {
          background-color: ${colorPrimary};
          border: none;
          border-radius: 25px;
          width: 300px;
          height: 50px;
          margin-top: 10px;
        }
        button:hover {
            cursor: pointer;
          }
      `}
    </style>
  </>
);
