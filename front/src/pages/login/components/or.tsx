type OrProps = {};

export const Or = ({}: OrProps) => (
  <p>
    <span>or</span>
    <style jsx>
      {`
        p {
          margin-top: 10px;
          position: relative;
        }
        p::after {
          position: absolute;
          top: 50%;
          display: block;
          content: "";
          width: 100%;
          border-top: 1px solid #fff;
        }
        span {
          margin: 3px;
          background-color: #242424;
        }
      `}
    </style>
  </p>
);
