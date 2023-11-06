import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default async function Content() {

  const img = 'https://picsum.photos/200/300'
  const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev', {
    cache: 'no-store'
  });
  const fetchedData = await response.json();

  return (
    <div className='flex gap-8 w-full justify-center'>
      <img className='w-80' src={img} alt="random" />
      <div className='flex flex-col relative w-96'>
        <span className='text-white text-xl'>{fetchedData.value}</span>
        <Link href={"/"}
          className='"text-white flex border-white border-solid border-2 p-4 hover:scale-105 transition-all duration-150 absolute bottom-0'>
          New Quote
        </Link>
      </div>
    </div>
  );
}
