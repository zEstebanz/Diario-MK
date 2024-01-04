import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Image from "next/image";
import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
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
            <section className="section-port h-auto min-h-screen md:w-3/4">
                <div>
                    <h1 className="text-center text-6xl pt-8 font-bold">{post.data.title}</h1>
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
                    <Markdown
                        options={{
                            overrides: {
                                h1: { component: 'h1', props: { className: '' } },
                                h2: { component: 'h2', props: { className: '' } },
                                h3: { component: 'h3', props: { className: 'font-bold' } },
                                h4: { component: 'h4', props: { className: 'font-bold' } },
                                h5: { component: 'h5', props: { className: 'font-bold' } },
                                h6: { component: 'h6', props: { className: '' } },
                                p: { component: 'p', props: { className: '' } },
                                strong: { component: 'strong', props: { className: '' } },
                                th: { component: 'th', props: { className: '' } },
                                img: { component: 'img', props: { className: 'w-full h-100' } },
                            },
                        }}
                    >
                        {post.content}
                    </Markdown>
                </article>
            </section>

            {/* Sidebar */}
            <aside className="w-full md:w-1/4 p-4 bg-gray-200 md:bg-transparent pt-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Otras Noticias</h2>
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
