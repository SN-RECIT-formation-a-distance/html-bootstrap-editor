export {RecitEditor as HTMLBootstrapEditor} from './libs/reciteditor/RecitEditor';
import React from "react";
import { createRoot } from "react-dom/client";
import { HTMLBootstrapEditor } from "./index";

function render(container, props = {}) {
  const element =
    typeof container === "string"
      ? document.querySelector(container)
      : container;

  const root = createRoot(element);
  root.render(<HTMLBootstrapEditor {...props} />);
}

export { render };

if (typeof window !== "undefined") {
  window.HTMLBootstrapEditor = { render };
}