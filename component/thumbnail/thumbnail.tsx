import { FC } from 'react';
import { forwardRef } from 'react'
import Image from "next/image";
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

type ThumbnailProps = {
  result: { backdrop_path: string, poster_path: string, overview: string, release_date: string, media_type: string, title: string, original_name: string, vote_count: number, first_air_date: string };

}

const Thumbnail: FC<ThumbnailProps> = forwardRef(({ result }, ref: any) => {

  return (
    <div ref={ref} className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 '>
      <Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} alt="" height={1080} width={1920} />
      <div className="p-2">
        <p className='truncate max-width-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>{result.media_type && `${result.media_type}. `}
          {result.release_date || result.first_air_date}
          <HandThumbUpIcon className='h-5 mx-2' />{result.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail;