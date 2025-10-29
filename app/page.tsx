import Counter from "./components/counter";

export default function Home() {
  return (
    <div>
      <Counter count={1} />
      <Counter count={2} />
    </div>
  );
}
