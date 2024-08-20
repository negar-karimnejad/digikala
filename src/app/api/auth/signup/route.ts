import connectToDB from "configs/db";

export async function GET(req: Request) {
  connectToDB();

  return Response.json({ message: "Success Response :))" }, { status: 201 });
}
