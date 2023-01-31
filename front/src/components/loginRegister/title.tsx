
type TitleProps = {
  msg: string;
};

export const Title = ({ msg }: TitleProps) => (
  <div data-testid="title">
    <h2>{msg}</h2>
    <style jsx>
      {`
        h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        }
      `}
    </style>
  </div>
);
