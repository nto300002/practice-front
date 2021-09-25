import "./styles.css";
import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
