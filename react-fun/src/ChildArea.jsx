import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  background: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  const data = [...Array(2000).keys()];
  console.log("childAreaがレンダリングされた");

  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
