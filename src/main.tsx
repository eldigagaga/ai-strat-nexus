import { Buffer } from "buffer";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// gray-matter (used to parse blog post frontmatter) expects Node's Buffer global.
window.Buffer = window.Buffer ?? Buffer;

createRoot(document.getElementById("root")!).render(<App />);
