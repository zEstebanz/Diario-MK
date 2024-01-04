import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`} className="border border-slate-300 p-4 rounded-md shadow-sm">
      <p className="text-sm text-slate-800 pb-2">{props.date}</p>
      <h2 className="text-center text-black hover:underline mb-4 h-10">{props.title}</h2>
      <div className="relative h-48 w-full mb-4">
        <Image
          src={String(props.img)}
          alt="img"
          layout="fill"
          objectFit="cover"  // Puedes cambiar a "contain" si prefieres
        />
      </div>
    </Link>
  );
};

export default PostPreview;
