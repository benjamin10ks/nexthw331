import Counter from "./components/counter";
import Githublink from "./components/githublink";
import Storetable from "./components/storetable";

export default function Home() {
  return (
    <div>
      <Githublink />
      <Counter countBy={1} />
      <Counter countBy={2} />

      <Storetable />
    </div>
  );
}
