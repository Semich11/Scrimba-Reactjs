// import { Entry } from "./components/entry";
import { Header } from "./components/header";
import data from "./components/EntryData.js";
import Ternary from "./components/ternary.jsx";

export const App = () => {
  const entryData = data.map((entry) => {
    // return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <div>
      <Header />
      {/* {entryData} */}
      <Ternary />
    </div>
  );
};
