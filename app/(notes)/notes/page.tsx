import NoteForm from "@/components/Notes";

interface Note {
  Title: string;
  Text: string;
  Date: string;
}

const NotesPage = async () => {
  const response = await fetch("http://localhost:3000/api/notes");
  const notes: Note[] = await response.json();

  return (
    <div>
      <NoteForm />
      <h2 className='mb-2'>Notes</h2>
      <div className='flex flex-wrap gap-2 '>
        {notes.map((note) => (
          <div
            className='bg-amber-400 p-3 rounded-md'
            key={Math.random() * 2}
          >
            <h1>{note.Title}</h1>
            <h2 className='italic'>{note.Text}</h2>
            <h3 className='italic'>{note.Date}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
