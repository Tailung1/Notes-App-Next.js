import notes from "../../../notes.json";

export async function GET(req: Request, res: Response) {
  return Response.json(notes);
}

export async function POST(req: Request, res: Response) {
  const note = await req.json();
  if (!note.Title || !note.Text) return;
  note.Date = new Date().toISOString().split("T")[0];
  note.id = Math.random()

  notes.push(note);
  console.log(note);
  return Response.json(note);
}
