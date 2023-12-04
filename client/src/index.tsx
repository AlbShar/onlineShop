import { App } from '~/app';
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(
  document?.getElementById("root") ?? document.createElement("div")
);

if (!root) {
  throw new Error('There isn"t root in html file');
}

root.render(<App />);
