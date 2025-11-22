import notesData from "../../data/notesData.json";

export async function GET(req: Request, res: Response) {
  return Response.json(notesData);
}
