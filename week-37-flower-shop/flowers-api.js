const URL = "https://uvjualhhxcjwrhbjuxpp.supabase.co/rest/v1/flowers";

const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2anVhbGhoeGNqd3JoYmp1eHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDI1OTMsImV4cCI6MjAwOTU3ODU5M30.s9Q3pShvbvlxD713RunCvHWaa7wLcPetO51HL95_egs";

export async function fetchFlowers() {
  const response = await fetch(URL, {
    headers: {
      apikey: apikey,
    },
  });
  const body = await response.json();
  console.log(body);

  return body;
}

export async function postFlower(data) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      apikey: apikey,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(data),
  });
  console.log(response);

  const body = await response.json();
  console.log(body);

  //return body;
}
