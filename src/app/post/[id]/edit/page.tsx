import { strapiClient } from "@/lib/api-client";
import { redirect, RedirectType } from "next/navigation";

type Props = {
  params: { id: string };
};

const postCollection = strapiClient.collection("posts");

export default async function Page({ params }: Props) {
  const { id } = await params;

  const post = await postCollection.findOne(id);

  async function edit(formData: FormData) {
    "use server";

    await postCollection
      .update(formData.get("post-id")?.toString() ?? "", {
        content: formData.get("content"),
      })
      .catch((error) => {
        console.error(error);
        throw new Error(error);
      });

    redirect("/", RedirectType.replace);
  }

  return (
    <div>
      <h1>{id}</h1>
      <h2>{post.data.createdAt}</h2>
      <form
        action={edit}
        className="p-4 max-w-md mx-auto bg-gray-100 rounded shadow"
      >
        <label className="block mb-4" htmlFor="content">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Enter Content
          </span>
          <input
            id="post-id"
            name="post-id"
            type="text"
            defaultValue={post.data.documentId}
            hidden
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            name="content"
            id="content"
            placeholder="Type something..."
            defaultValue={post.data.content}
          />
        </label>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
