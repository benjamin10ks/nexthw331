import Counter from "./components/counter";

export default function Home() {
  return (
    <div>
      <Counter countBy={1} />
      <Counter countBy={2} />
    </div>
  );
}
