import Link from "next/link";

type TextSignUpProps = {
  colorPrimary: string;
};


export const TextSignUp = ({ colorPrimary }: TextSignUpProps) => (
  <p className="container">
    Don't have an account?
    <Link href={"sign-up"}>
      <span>sign up</span>
    </Link>
    <style jsx>{`
      .container {
        margin-top: 10px;
      }
      span {
        color: ${colorPrimary};
      }
    `}</style>
  </p>
);
