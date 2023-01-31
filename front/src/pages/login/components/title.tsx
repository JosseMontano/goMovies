type TitleProps = {};

export const Title = ({}: TitleProps) => (
  <>
    <h2>{"Let's you in"}</h2>
    <style jsx>
      {`
        h2 {
          font-size: 38px;
          margin-bottom: 10px;
        }
      `}
    </style>
  </>
);
