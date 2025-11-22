import notes from "../../../notes.json";

export async function GET(req: Request, res: Response) {
  return Response.json(notes);
}

export async function POST(req: Request, res: any) {
  const note = await req.json();
  note.date = new Date().toISOString().split("T")[0];

  notes.push(note);

  return Response.json(note);
}
