import axios from "axios";

export type ApiResponseShape = {
  statusCode?: number;
  message?: string;
  data?: string | null;
};

export async function shortenUrl(originalUrl: string) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001";

  const response = await axios.post<ApiResponseShape>(`${apiBaseUrl}/api/url/`, { originalUrl });
  const payload = response.data;

  console.log("Payload is: ", payload);

  if (response.status !== 200 || !payload.data) {
    throw new Error(payload.message || "Failed to shorten the URL.");
  }

  return {
    shortCode: payload.data,
    shortUrl: `${apiBaseUrl}/${payload.data}`,
  };
}



interface ClickCountResult {
  count: number;
  createdAt?: string;
}

interface ClickCountApiResponse {
  success: boolean;
  message: string;
  data: ClickCountResult | null;
}


export async function clickCount(shortUrl: string): Promise<ClickCountResult>  {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001";

  console.log("Short URL is: ", shortUrl);

  const response = await axios.post<ClickCountApiResponse>(`${apiBaseUrl}/api/url/stats`, { url: shortUrl });
  console.log("Response is: ", response);
  const payload = response.data;

  if (!payload.data) {
    throw new Error(payload.message || "Failed to get click count.");
  }

  return payload.data
}