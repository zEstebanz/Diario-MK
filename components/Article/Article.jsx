import React from 'react'
import getPostMetadata from "../getPostMetadata";
import PostPreview from "../PostPreview";

function Article() {

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <section className="section-blog" id="blog">
            <div className='p-8'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {postPreviews}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article