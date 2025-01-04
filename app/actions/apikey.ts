'use server';
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export interface ApiKey {
  id: string
  key: string
	user_id: string
  key_name: string | null
  created_at: string
	last_used_at : string | null
}

export async function getAPIKeys() {
	const cookieStore = cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/me`, {
    method: 'GET',
    credentials: 'include',
		headers: {
			Cookie : cookieStore.toString(),
		}
  });

  if (res.ok) {
    const data = await res.json();
    return data.data.api_keys as ApiKey[];
  } else {
    throw new Error('Failed to fetch API keys' + res.status);
  }
}

// Create a new API key
export async function createAPIKey(name: string) {
	const cookieStore = cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/create/key`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
			Cookie : cookieStore.toString(),
    },
    credentials: 'include',
    body: JSON.stringify({
      'key_name': name,
    }),
  });

  if (res.ok) {
    const data = await res.json();
		revalidatePath('/dashboard/api-keys');
    return data;
  } else {
    throw new Error('Failed to create API key');
  }
}

export async function deleteAPIKey(id: string) {
	const cookieStore = cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/delete/key`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
			Cookie : cookieStore.toString(),
    },
    credentials: 'include',
    body: JSON.stringify({
      'key_id' : id,
    }),
  });

  if (res.ok) {
    const data = await res.json();
		revalidatePath('/dashboard/api-keys');
    return data;
  } else {
    throw new Error('Failed to delete API key');
  }
}