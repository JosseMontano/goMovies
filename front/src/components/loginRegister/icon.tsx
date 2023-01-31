import Image from "next/image";
import IconImg from "../../assets/React.png";

type IconProps = {};

export const Icon = ({}: IconProps) => {
  return (
    <div className="img">
      <Image
        width={150}
        height={150}
        src={IconImg}
        alt="Icon app"
      />

      <style jsx>
        {`
          @keyframes rotateImg {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .img {
            background-color: transparent;
            justify-self: center;
            animation: rotateImg 10s infinite linear;
          }
        `}
      </style>
    </div>
  );
};
