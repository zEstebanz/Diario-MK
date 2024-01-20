import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <section className="section-port h-auto min-h-screen">
        <div className="port">
          <h1 className="title-port font-bold text-6xl md:text-8xl p-5">Diario-MK</h1>
          <hr />
          <p className="subtitle text-xl md:text-2xl">¡Bienvenidos a mi blog personal! Este espacio está dedicado a compartir artículos de mi interes.</p>
          <Link href={"#blog"}><FaAngleDoubleDown className="icon-down text-4xl md:text-6xl" /></Link>
        </div>
      </section>

      <section className="section-blog" id="blog">
        <div className='p-8'>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-8">
              {postPreviews}
            </div>
          </div>
        </div>
      </section>

    </>

  );
};

export default HomePage;