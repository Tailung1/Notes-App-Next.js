import Notes from "../../../../notes.json";
interface noteTypes {
  Title: string;
  Text: string;
  Date: string;
  id: string;
}
export async function DELETE(
  req: Request,
  params: { params: { id: string } }
) {
  console.log(params);
  const { id } = await params.params;

  const noteIndex = Notes.findIndex(
    (note: noteTypes) => parseInt(note.id) === parseInt(id)
  );
  if (noteIndex !== -1) {
    console.log(Notes);
    const deletedNote = Notes[noteIndex];
    Notes.splice(noteIndex, 1);
    return Response.json(
      {
        message: "Note deleted successfully",
        deletedNote,
      },
      { status: 200 }
    );
  }
  return Response.json(
    { message: "Failed to delete note" },
    { status: 400 }
  );
}
