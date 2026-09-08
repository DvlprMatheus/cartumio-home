import type { ApiResponse } from "@/features/shared/types/action";

const GATE_API_BASE_URL = process.env.GATE_API_BASE_URL ?? "http://localhost:8080";

type ServerFetchMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ServerFetchOptions {
  path: string;
  method: ServerFetchMethod;
  body?: unknown;
  headers?: Record<string, string>;
}

async function readData<TData>(response: Response): Promise<TData[] | undefined> {
  const raw = await response.text();

  if (raw.length === 0) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(raw) as TData | TData[];
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return undefined;
  }
}

export async function serverFetch<TData = never>({
  path,
  method,
  body,
  headers,
}: ServerFetchOptions): Promise<ApiResponse<TData>> {
  try {
    const response = await fetch(`${GATE_API_BASE_URL}${path}`, {
      method,
      headers: {
        ...(body === undefined ? {} : { "Content-Type": "application/json" }),
        ...headers,
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      cache: "no-store",
    });

    if (!response.ok) {
      return { success: false, error: "REQUEST_FAILED" };
    }

    const data = await readData<TData>(response);

    return data === undefined ? { success: true } : { success: true, data };
  } catch {
    return { success: false, error: "NETWORK_ERROR" };
  }
}
