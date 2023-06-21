import { getApp } from "./utils/helper";

const App = () => {
  const CurrentApp = getApp();

  return <CurrentApp />;
};
export default App;
