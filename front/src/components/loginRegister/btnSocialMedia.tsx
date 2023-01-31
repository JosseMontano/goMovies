import GoogleImg from "../../assets/google.png";
import FacebookImg from "../../assets/Facebook.png";
import Image from "next/image";

type BtnSocialMediaProps = {};

export const BtnSocialMedia = ({}: BtnSocialMediaProps) => (
  <div className="container">
    <button>
      <div className="container_img">
        <Image width={30} height={30} src={FacebookImg} alt="" />
      </div>
    </button>
    <button>
      <div className="container_img">
        <Image width={30} height={30} src={GoogleImg} alt="" />
      </div>
    </button>
    <style jsx>
      {`
        .container {
          margin: 10px 10px;
          display: flex;
          justify-content: center;
        }
        button {
          border: none;
          border-radius: 5px;
          background-color: #2e2e2e;
          margin: 0px 10px;
          width: 70px;
          height: 50px;

        }
      `}
    </style>
  </div>
);
