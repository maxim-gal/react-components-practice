import { Greeting } from "./components/Greeting";
import { TaskList } from "./components/TaskList";
import { ActionButton } from "./components/ActionButton";
import { ProfileCard } from "./components/ProfileCard";
import { ImageGallery } from "./components/ImageGallery";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "30px" }}>
      <section>
        <h2>Задание 1: Компонент «Приветствие»</h2>
        <Greeting />
      </section>

      <section>
        <h2>Задание 2: Компонент со списком задач</h2>
        <TaskList />
      </section>

      <section>
        <h2>Задание 3: Компонент с кнопкой</h2>
        <ActionButton />
      </section>

      <section>
        <h2>Задание 4: Компонент карточки профиля</h2>
        <ProfileCard />
      </section>

      <section>
        <h2>Задание 5: Компонент галереи из картинок</h2>
        <ImageGallery />
      </section>
    </div>
  );
}

export default App;
