import MainRenderer from "@/components/Home";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <MainRenderer />
      </main>
      <footer className=""></footer>
    </div>
  );
}
