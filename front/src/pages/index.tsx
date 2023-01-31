import { useRouter } from "next/router";
import { Icon } from "./index/components/icon";
import { Loader } from "./index/components/loader";
import ImgReact from "@/assets/react.png";

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/welcome");
  }, 3000);
  return (
    <div className="container">
      <Loader />
      <div>
        <Icon IconImg={ImgReact} />
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            height: 100vh;
            place-content: center;
          }
        `}
      </style>
    </div>
  );
}
