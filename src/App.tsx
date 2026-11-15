import { Header } from "./components/Header";
import { VacanciesPage } from "./page/VacanciesPage";
const App = () => {
  return (
    <div>
      <Header/>
      <main className="container">
        <VacanciesPage/>
      </main>
    </div>
  )
}
export default App;