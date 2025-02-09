import Header from "./components/Header";
import Conten from "./components/Content";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        {
          <Conten />
        }
      </main>
    </div>
  );
}
