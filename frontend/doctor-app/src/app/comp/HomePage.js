'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [location, setLocation] = useState('Bangalore');
  const [query, setQuery] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    router.push(`/doctors?location=${encodeURIComponent(location)}&query=${encodeURIComponent(query)}`);
  }

  const popular = ['Dermatologist', 'Pediatrician', 'Gynecologist', 'Cardiologist'];

  return (
    <>
    <div className="min-h-screen bg-[#2b2d8a] text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">Your home for health</h1>
       <form
  onSubmit={handleSearch}
  className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-2xl mx-auto"
>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 rounded-md bg-white text-black focus:outline-none"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
          </select>
          <input
            type="text"
            placeholder="Search doctors, clinics, hospitals, etc."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md w-full md:w-auto text-black"
          />
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 ">
            Search
          </button>
        </form>
        <div className="flex flex-wrap justify-center gap-2">
          {popular.map((text) => (
            <button
              key={text}
              onClick={() => setQuery(text)}
              className="px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
