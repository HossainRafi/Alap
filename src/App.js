import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-200 mt-10 shadow-xl border relative`,
};

function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        <Chat />
      </section>
    </div>
  );
}

export default App;
