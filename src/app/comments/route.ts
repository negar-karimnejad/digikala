import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newcomment);

  return new Response(JSON.stringify(newcomment), {
    headers: {
      "Content-Type": "applicationjson",
    },
    status: 201,
  });
}

export async function DELETE(request: Request) {
  const id = await request.json();
  const filteredComments = comments.filter((comment) => comment.id !== id);
  console.log(filteredComments);
}
