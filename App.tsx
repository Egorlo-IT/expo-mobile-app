import { useState } from "react";

import Loading from "./components/Loading";
import Home from "./components/Home";

export default function App() {
  const [fetchingData, setFetchingDataState] = useState(true);
  setTimeout(() => {
    setFetchingDataState(false);
  }, 1000);

  if (fetchingData) {
    return <Loading />;
  } else {
    return <Home />;
  }
}
