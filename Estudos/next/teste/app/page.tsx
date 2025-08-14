"use client";

import { useEffect, useState } from "react";
import  Link  from "next/link";

interface MovieRequest {
  description: string;
  director: string;
  id: string;
  image: string;
  locations: string;
  movie_banner: string;
  original_title: string;
  original_title_romanised: string;
  people: string;
  producer: string;
  release_date: string;
  rt_score: string;
  running_time: string;
  species: string;
  url: string;
  vehicles: string;
}



export default function Home() {
  const [movie, setMovie] = useState<MovieRequest[]>([]);

  useEffect(() => {
    const userData = async () => {
      const res = await fetch("https://ghibliapi.vercel.app/films");
      const data = await res.json();
      setMovie(data);
    };
    userData();
  }, []);

  console.log("nome", movie);

  return (
    <div className="text-white flex flex-col gap-10">
      {movie.map((mo) => (
        <div key={mo.id} className="flex-colum">
        <img src={mo.image} alt={mo.original_title_romanised} className="h-auto w-52" />
        <h1 className="text-green-400">{mo.original_title_romanised}</h1>
          <p  className="text-white pb-10">
          {mo.description}
        </p>
        <Link href={mo.url}target="_blank" className="bg-amber-600 py-4 px-8">acessar</Link>
        
        </div>
      ))}
      
    </div>
     
  );
}
