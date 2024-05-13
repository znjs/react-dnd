import { useState } from "react";
import { NavBar } from "./components/Navbar";
import { filesConfig } from "./utils/config";

function App() {
  const [files, setFiles] = useState(filesConfig);
  console.log(files);
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <NavBar />
      <div className="w-full bg-[#ecf0fb] grow">
        <div className="max-w-7xl w-full mx-auto bg-blue-300 p-2 rounded-md">
          <h1>test</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
