import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import { FaAngleDoubleDown, FaSkull} from "react-icons/fa";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { BsFillPersonFill} from "react-icons/bs";
import { FaBookSkull } from "react-icons/fa6";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <section className="section-port h-auto min-h-screen">
        <div className="port relative">
          <div>
            <h1 className="title-port font-bold text-6xl md:text-8xl p-5">Diario-MK</h1>
            <hr />
            <p className="subtitle text-xl md:text-2xl">¡Bienvenidos a mi blog personal! Este espacio está dedicado a compartir artículos de mi interés.</p>
            <Link href={"#blog"}>
              <p><FaAngleDoubleDown className="icon-down text-4xl md:text-6xl" /></p>
            </Link>
          </div>
          <div className="flex items-center absolute top-0 right-0">
            <Link href="/ruta-del-icono-1">
              <p className="mr-4">
                <FaReact className="text-3xl md:text-4xl" />
              </p>
            </Link>
            <Link href="/ruta-del-icono-2">
              <p className="mr-4">
                <BsFillPersonFill className="text-3xl md:text-4xl" />
              </p>
            </Link>
            <Link href="/newshack">
              <p>
                <FaBookSkull  className="text-3xl md:text-4xl" />
              </p>
            </Link>
          </div>
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