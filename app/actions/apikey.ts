'use server';
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import axios from "axios";

export interface ApiKey {
  id: string;
  createdAt: Date;
  userid: string;
  key: string;
  keyName: string;
  lastUsedAt: Date | null;
}

export async function getAPIKeys() {
	const cookieStore = cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/apikeys`, {
    method: 'GET',
    credentials: 'include',
		headers: {
			Cookie : cookieStore.toString(),
		}
  });

  if (res.ok) {
    const data = await res.json();
    return data.keys as ApiKey[];
  } else {
    throw new Error('Failed to fetch API keys' + res.status);
  }
}


export async function createAPIKey(name: string) {
  const cookieStore = cookies();

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/apikeys`,
      { name }, // Body payload
      {
        headers: {
          'Content-Type': 'application/json',
          Cookie: cookieStore.toString(),
        },
        withCredentials: true, // Ensures cookies are included
      }
    );

    // Revalidate cache after API key creation
    revalidatePath('/dashboard/api-keys');

    return res.data;
  } catch (error) {
    throw new Error(`Failed to create API key`);
  }
}


export async function deleteAPIKey(id: string) {
	const cookieStore = cookies();
  const res = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/apikeys`, {
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieStore.toString(),
    },
    withCredentials: true,
    params: {
      apikey: id,
    },
  });

  if (res.status === 200) {
    const data = await res.data;
		revalidatePath('/dashboard/api-keys');
    return data;
  } else {
    throw new Error('Failed to delete API key');
  }
}