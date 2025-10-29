import Counter from "./components/counter";
import Githublink from "./components/githublink";

export default function Home() {
  return (
    <div>
      <Githublink />
      <Counter countBy={1} />
      <Counter countBy={2} />
    </div>
  );
}
