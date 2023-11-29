import ScienceTable from "@/components/Table/ScienceTable";

export default function ScienceAndResearch() {
  return (
    <main className="main">
      <div className={`container`}>
        <h1 className="h-1 page-heading">Науково-дослідна робота</h1>
        <h2 className="h-2 page-subheading">
          Наукові студентські гуртки кафедри КНІТ на 2023-24 н.р.
        </h2>
        <ScienceTable />
      </div>
    </main>
  );
}
