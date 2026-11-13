import type { Vacancy } from "../types/vacancy";
import { VacancyCard } from "./VacancyCard";

interface VacancyListProps{
    vacancies: Vacancy[];
}

export const VacancyList = ({vacancies}: VacancyListProps) => {
  return (
    <div className="vacancy-list">
        {vacancies.map((vacancy) => (
            <VacancyCard key={vacancy.id} vacancy={vacancy}/>
        ))}
    </div>
  )
}