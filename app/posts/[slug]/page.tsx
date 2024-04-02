import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import PostPreview from "../../../components/PostPreview";
import Image from "next/image";
import SidebarPreview from "../../../components/SidebarPreview";
import ChangeTheme from "../../../components/UI/ChangeTheme";

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
    const sidebarPreview = postMetadata.map((post) => (
        <SidebarPreview key={post.slug} {...post} />
    ));

    return (
        <main className="section-posts bg-white dark:bg-[#000] flex flex-col md:flex-row">
            <div className="h-auto min-h-screen md:w-3/4">

                <div className="pt-6">
                    <p className="text-center font-bold pt-10 text-black dark:text-gray-300">{post.data.date}</p>
                    <h1 className="text-center text-6xl  font-bold text-black dark:text-gray-300">{post.data.title}</h1>
                    <p className="text-center font-bold text-black dark:text-gray-300">by {post.data.subtitle}</p>
                    <div className="flex justify-center items-center">
                        <Image
                            src={post.data.img}
                            width={0}  // Ancho original (puedes ajustarlo según tus necesidades)
                            height={0} // Altura original (puedes ajustarlo según tus necesidades)
                            alt="img"
                            className="imgMarkdown pt-6"
                        />
                    </div>
                </div>

                <article className="prose lg:prose-xl flex-container p-6">
                    <Markdown
                        className="text-black dark:text-gray-300"
                        options={{
                            overrides: {
                                h1: {
                                    props: {
                                        className: "dark:text-white text-4xl font-bold" // Estilos para los títulos h1 en modo oscuro
                                    }
                                },
                                h2: {
                                    props: {
                                        className: "dark:text-white text-3xl font-bold" // Estilos para los títulos h2 en modo oscuro
                                    }
                                },
                                h3: {
                                    props: {
                                        className: "dark:text-white text-2xl font-bold" // Estilos para los títulos h3 en modo oscuro
                                    }
                                },
                                h4: {
                                    props: {
                                        className: "dark:text-white text-xl font-bold" // Estilos para los títulos h4 en modo oscuro
                                    }
                                },
                                h5: {
                                    props: {
                                        className: "dark:text-white text-lg font-bold" // Estilos para los títulos h5 en modo oscuro
                                    }
                                },
                                h6: {
                                    props: {
                                        className: "dark:text-white text-base font-bold" // Estilos para los títulos h6 en modo oscuro
                                    }
                                },
                                p: {
                                    props: {
                                        className: "dark:text-gray-400 text-gray-700 font-medium" // Estilos para los elementos de párrafo en modo oscuro
                                    }
                                },
                                strong: {
                                    props: {
                                        className: "font-bold dark:text-gray-400 text-gray-700" // Estilos para el texto en negrita
                                    }
                                },
                                a: {
                                    props: {
                                        className: "text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400" // Estilos para los enlaces
                                    }
                                },
                                blockquote: {
                                    props: {
                                        className: "border-l-4 border-gray-400 pl-4 italic" // Estilos para citas
                                    }
                                },
                                hr: {
                                    props: {
                                        className: "border-gray-600 dark:border-gray-400" // Estilos para líneas horizontales
                                    }
                                },
                                th: {
                                    props: {
                                        className: "dark:text-gray-300 p-2 font-semibold" // Estilos para encabezados de tabla en modo oscuro
                                    }
                                },

                            },
                        }}
                    >
                        {post.content}
                    </Markdown>
                </article>

            </div>

            <ChangeTheme />


            <aside className="w-full md:w-1/4 p-4 dark:bg-[#111] text-black
            bg-gray-100 dark:text-white sidebar">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Más Posts</h2>
                </div>
                <div className="p-8">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-1">
                            {sidebarPreview}
                        </div>
                    </div>
                </div>
            </aside>

        </main >

    );
};

export default PostPage;
