"use server";

export async function generateMindfulActivity() {
  try {
    const res = await fetch("https://bored.api.lewagon.com/api/activity", { 
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      if (res.status === 429) throw new Error("Too many requests. Take a deep breath and try again.");
      throw new Error("Failed to fetch activity");
    }
    
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to generate activity");
  }
}
