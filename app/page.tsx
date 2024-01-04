import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <section className="section-port h-auto min-h-screen pt-10">

      <h1 className="text-center font-bold text-6xl pt-8">Diario Markdown</h1>

      <div className='p-8'>
        <div className="container">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-8">
            {postPreviews}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;