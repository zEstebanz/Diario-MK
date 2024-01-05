import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
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
    return (
        <main className="flex flex-col md:flex-row pt-10">
            <div className="section-port h-auto min-h-screen md:w-3/4">

                <div className="pt-10">
                    <h1 className="text-center text-6xl pt-10 font-bold">{post.data.title}</h1>
                    <p className="text-center font-bold">{post.data.date}</p>
                    <div className="flex justify-center items-center">
                        <Image
                            src={post.data.img}
                            width={200}
                            height={200}
                            alt="img"
                            className="imgMarkdown"
                        />
                    </div>
                </div>

                <article className="prose lg:prose-xl flex-container p-6">
                    <Markdown>{post.content}</Markdown>
                </article>

            </div>
        </main>

    );
};

export default PostPage;
