import { colorPrimary } from "@/styles/colors";
type FooterProps = {
  signIn: () => void;
};

export const Footer = ({ signIn }: FooterProps) => (
  <div>
    Already have an account?{" "}
    <span data-testid="btn" onClick={signIn}>
      Sign In
    </span>
    <style jsx>
      {`
        span {
          cursor: pointer;
          color: ${colorPrimary};
        }
      `}
    </style>
  </div>
);
