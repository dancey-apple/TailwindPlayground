import NavBar from "./navBar";
import QuestCards from "./questCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar/>
      <QuestCards/>
    </main>
  );
}
