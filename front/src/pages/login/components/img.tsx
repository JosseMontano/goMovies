import Image, { StaticImageData } from "next/image";
type ImgProps = {
  IconIMG: StaticImageData;
};



export const Img = ({ IconIMG }: ImgProps) => (
  <div>
    <Image className="img_login" src={IconIMG} alt="Icon" />
    <style jsx global>
      {`
        .img_login {
          height: 200px;
          width: 200px;
          border-radius: 100%;
          justify-self: center;
          margin-bottom: 10px;
        }
      `}
    </style>
  </div>
);
