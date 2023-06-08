import Link from "next/link";
import Image from "next/image";
export default function Movie({ title, id, poster_path, release_date }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  console.log(id);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imgPath + poster_path}
          alt="poster"
          width={400}
          height={400}
        />
      </Link>
    </div>
  );
}
