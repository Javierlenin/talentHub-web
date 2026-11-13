import './VacancyCard.css';

interface VacancyCardProps {
    title: string;
    company: string;
    modality: string;
    salary: number;
}

export const VacancyCard = ({title, company, modality, salary} : VacancyCardProps) => {
  return (
    <article className='vacancy-card'>
        <h2>{title}</h2>
        <p>{company}</p>
        <p>Modalidad: {modality}</p>
        <p>Salario: {salary}</p>
    </article>
  );
};