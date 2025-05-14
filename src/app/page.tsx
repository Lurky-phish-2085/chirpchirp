import { StrapiClient } from "@/lib/api-client";
import { Post } from "@/lib/types";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const postCollection = new StrapiClient<Post>("posts");

export default async function Home() {
  const posts = await postCollection.findAll({ sort: "createdAt:desc" });

  async function create(formData: FormData) {
    "use server";

    await postCollection.create({
      content: formData.get("content")?.toString() ?? "",
    });

    revalidatePath("/");
  }
  async function remove(formData: FormData) {
    "use server";

    const documentId = formData.get("post-id");

    await postCollection.delete({
      id: documentId?.toString() ?? "",
    });

    revalidatePath("/");
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div>
        <form
          action={create}
          className="p-4 max-w-md mx-auto bg-gray-100 rounded shadow"
        >
          <label className="block mb-4" htmlFor="content">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Enter Content
            </span>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              name="content"
              id="content"
              placeholder="Type something..."
            />
          </label>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
      <div>
        {posts.map((post) => (
          <div
            key={post.documentId}
            className="p-4 mb-3 bg-gray-100 border border-gray-300 rounded shadow-sm flex flex-col gap-3"
          >
            <div>
              <p className="text-base font-medium text-gray-800">
                {post.content}
              </p>
              <p className="text-sm text-gray-600">{post.createdAt}</p>
            </div>
            <form action={remove}>
              <input
                id="post-id"
                name="post-id"
                type="text"
                defaultValue={post.documentId ?? ""}
                hidden
              />
              <div className=" flex gap-4">
                <Link href={`/post/${post.documentId}/edit`}>
                  <button className="w-28 px-3 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-600 focus:outline-none focus:ring focus:ring-red-300">
                    Edit
                  </button>
                </Link>
                <button
                  type="submit"
                  className="w-28 px-3 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
