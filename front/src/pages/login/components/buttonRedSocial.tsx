import Image, { StaticImageData } from "next/image";

type Props = {
  img: StaticImageData;
  msg: string;
  singIn: () => void;
};

export const ButtonRedSocial = ({ img, msg, singIn }: Props) => (
  <button onClick={singIn}>
    <Image className="img_btn_login" src={img} alt="" />
    <span>{msg}</span>
    <style jsx>
      {`
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5px;
          border: none;
          border-radius: 15px;
          border: 1px solid #f2f2f2;
          padding: 15px;
          width: 300px;
          background-color: transparent;
        }
      `}
    </style>
    <style jsx global>{`
      .img_btn_login {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }
      img_btn_login:hover {
        background-color: #f2f2f2;
        color: #000;
        cursor: pointer;
      }
    `}</style>
  </button>
);
