// pages/api/doctors.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);

  // Map frontend query params to backend params
  const city = searchParams.get('location') || '';
  const specialty = searchParams.get('query') || '';

  // Construct backend query string
  const params = new URLSearchParams({ city, specialty }).toString();

  // Call  Spring Boot backend
  const response = await fetch(`http://localhost:8080/api/doctors?${params}`);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}


