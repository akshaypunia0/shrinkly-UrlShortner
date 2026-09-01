export type ApiResponseShape = {
  statusCode?: number;
  message?: string;
  data?: string | null;
};

export async function shortenUrl(originalUrl: string) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

  const response = await fetch(`${apiBaseUrl}/api/url/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ originalUrl }),
  });

  const payload = (await response.json()) as ApiResponseShape;

  console.log("Payload is: ", payload);
  

  if (!response.ok || (payload.statusCode != null && payload.statusCode >= 400)) {
    throw new Error(payload.message ?? "Unable to generate short link. Please try again.");
  }

  if (!payload.data || typeof payload.data !== "string") {
    throw new Error("The server did not return a valid short URL.");
  }

  return {
    shortCode: payload.data,
    shortUrl: `${apiBaseUrl}/${payload.data}`,
  };
}
