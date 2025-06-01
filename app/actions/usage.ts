"use server";
import { cookies } from "next/headers";

export interface UsageData {
	api_key_usage:      APIKeyUsage[];
	top_model_usage:    TopModelUsage[];
	user_id:            string;
	user_input_tokens:  number;
	user_output_tokens: number;
	total_daily_usage:  TotalDailyUsage[];
}

export interface APIKeyUsage {
	created_at:   Date;
	id:           number;
	key:          string;
	key_name:     string;
	last_used_at: null;
	usage:        UsageElement[];
	user_id:      number;
}

export interface UsageElement {
	api_key_id:    number;
	date:          Date;
	input_tokens:  number;
	output_tokens: number;
	user_id:       number;
}

export interface TopModelUsage {
	model: Model;
	usage: TopModelUsageUsage;
}

export interface Model {
	category:   string;
	created:    number;
	id:         string;
	is_active:  boolean;
	name:       string;
	object:     string;
	owned_by:   string;
	parent:     null;
	permission: string[] | null;
	provider:   string;
	root:       string;
	updated_at: Date;
}

export interface TopModelUsageUsage {
	input_tokens:  number;
	output_tokens: number;
}

export interface TotalDailyUsage {
	date:          Date;
	input_tokens:  number;
	output_tokens: number;
}


export async function getUsage() {
  const cookieStore = cookies();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/usage`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: cookieStore.toString(),
      },
    }
  );

  if (res.ok) {
    const data = await res.json();
	console.log(JSON.stringify(data, null, 2));
    return data.data as UsageData;
  } else {
    throw new Error("Failed to fetch usage data " + res.status);
  }
}
