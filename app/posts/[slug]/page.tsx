import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import PostPreview from "../../../components/PostPreview";
import Image from "next/image";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <main className="flex flex-col md:flex-row pt-10">
            <div className="section-port h-auto min-h-screen md:w-3/4">

                <div className="pt-6">
                    <p className="text-center font-bold pt-10">{post.data.date}</p>
                    <h1 className="text-center text-6xl  font-bold">{post.data.title}</h1>
                    <p className="text-center font-bold">{post.data.subtitle}</p>
                    <div className="flex justify-center items-center">
                        <Image
                            src={post.data.img}
                            width={200}  // Ancho original (puedes ajustarlo según tus necesidades)
                            height={200} // Altura original (puedes ajustarlo según tus necesidades)
                            alt="img"
                            className="imgMarkdown pt-6"
                        />
                    </div>
                </div>

                <article className="prose lg:prose-xl flex-container p-6">
                    <Markdown>{post.content}</Markdown>
                </article>

            </div>
            {/* Sidebar */}
            <aside className="w-full md:w-1/4 p-4 bg-gray-200 md:bg-transparent pt-14">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Más Posts</h2>
                </div>
                <div className='p-8'>
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-1">
                            {postPreviews}
                        </div>
                    </div>
                </div>
            </aside>
        </main>


    );
};

export default PostPage;
