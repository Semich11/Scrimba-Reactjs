import { Entry } from "./components/entry";
import { Header } from "./components/header";
import data from "./components/EntryData.js";

export const App = () => {
  const entryData = data.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <div>
      <Header />
      {entryData}
    </div>
  );
};
