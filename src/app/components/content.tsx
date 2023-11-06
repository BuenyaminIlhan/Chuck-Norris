/* eslint-disable @next/next/no-img-element */
"use client"
// Import required modules
import { useEffect, useState } from "react";

// Define the Content component
export default function Content() {
  // Define the URL for the image
  const img = 'https://picsum.photos/200/300';
  
  // Create a state variable 'quote' using the 'useState' hook
  const [quote, setQuote] = useState([]);
  
  // Define a function to fetch a new Chuck Norris joke from the API
  const fetchData = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev', {
      cache: 'no-store'
    });

    const fetchedData = await response.json();
    
    // Update the 'quote' state with the fetched joke
    setQuote(fetchedData.value);
  };

  // Use the 'useEffect' hook to fetch data when the component loads
  useEffect(() => {
    fetchData();
  }, []);

  // Define a function to fetch a new quote when the button is clicked
  const newQuote = () => {
    fetchData();
  };

  return (
    <div className='flex gap-8 w-full justify-center'>
      <img className='w-80' src={img} alt="random" />
      <div className='flex flex-col relative w-96'>
        <div>
          <span className='text-white text-xl'>{quote}</span>
        </div>
        <button onClick={newQuote}
          className='text-white flex border-white border-solid border-2 p-4 hover:scale-105 transition-all duration-150 absolute bottom-0'>
          New Quote
        </button>
      </div>
    </div>
  );
}
