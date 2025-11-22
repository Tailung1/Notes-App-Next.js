import Notes from "../../../components/Notes";

interface note {
  title: string;
  text: string;
  date: string;
}

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/notes");

  if (!response.ok) {
    console.log("failedd");
    return;
  }
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <Notes />
      <div className="flex flex-col gap-2">
        {data.map((note: note) => (
          <div className="bg-amber-400" key={Math.random() * 3}>
            <h1>{note.title}</h1>
            <h2>{note.text}</h2>
            <h3 className='italic'>{note.date}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
