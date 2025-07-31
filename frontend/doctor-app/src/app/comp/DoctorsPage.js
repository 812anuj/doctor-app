"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import FilterBar from "./FilterBar";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  const location = params.get("location") || "";
  const query = params.get("query") || "";

  useEffect(() => {
    let url = `/api/doctor?location=${encodeURIComponent(
      location
    )}&query=${encodeURIComponent(query)}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .finally(() => setLoading(false));
  }, [location, query]);

  return (
    <div>
      <div className="bg-gray-100 ">
        <FilterBar />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">
          {doctors.length} {query}s available in {location}
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : doctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          <div className="space-y-6">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="border rounded-md p-4 shadow-sm flex flex-col md:flex-row gap-4 bg-white"
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={doc.imgUrl || "/avatar-placeholder.png"}
                    alt={doc.name}
                    className="w-24 h-24 rounded-full object-cover border"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-700">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-700">{doc.specialty}</p>
                  <p className="text-sm text-gray-500">
                    {doc.experience} years experience
                  </p>
                  <p className="text-sm text-gray-500">
                    {doc.location || location}
                  </p>
                  <p className="text-sm text-gray-600">
                    ₹{doc.consultationFee || "--"} Consultation Fee
                  </p>

                  {/* Rating and Stories */}
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
                      👍 {doc.rating || "--"}%
                    </span>
                    <span className="text-blue-600 underline cursor-pointer">
                      {doc.numPatientStories || 0} Patient Stories
                    </span>
                  </div>

                  {/* Availability */}
                  {doc.availableToday && (
                    <p className="mt-1 text-green-600 text-sm font-medium">
                      ✅ Available Today
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      Book Clinic Visit
                    </button>
                    <button className="px-4 py-2 border text-sm rounded border-gray-300 hover:bg-gray-100">
                      Contact Clinic
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
