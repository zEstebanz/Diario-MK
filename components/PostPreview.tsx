import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-400 p-4 rounded-md shadow-sm
      bg-white post-preview"
    >
      <p className="text-sm text-slate-600">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-black font-bold mb-4">{props.title}</h2>
        <div className="relative h-48 w-full mb-4">
          <Image
            src={String(props.img)}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>

      <p className="text-slate-700">by {props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
