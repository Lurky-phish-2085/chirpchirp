import { ApiClient } from "@/lib/api-client";
import { PostApi } from "@/lib/cms-api";

const api = ApiClient.use(PostApi);

export default async function Home() {
    const posts = await (await api.getPosts()).data;

    return <>
    {posts.data?.map(post => <p key={post.documentId}>{post.content}:{post.createdAt}</p>)}
    </>
}
