require("dotenv").config();
import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  return res.result.map((movie) => ({ movie: toString(movie.id) }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  console.log(params);

  const imgPath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();

  return (
    <div>
      <h1>Movie Detail</h1>
      <h2 className=" text-2xl">{res.title}</h2>
      <h2 className=" text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className=" text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
        Release
      </h2>
      <Image
        className="my-12"
        src={imgPath + res.backdrop_path}
        width={1000}
        height={1000}
        property=""
      ></Image>
      <p>{res.overview}</p>
    </div>
  );
}
