"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type UsageData } from "@/app/actions/usage";
import { Select, SelectItem } from "@nextui-org/react";
import { AreaChat } from "./area-chat";
import { ShortLineChart } from "./line-chart";

export default function UsagePage({ usageData }: { usageData: UsageData }) {
  const [selectedApiKey, setSelectedApiKey] = useState<number>(0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Usage</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle>Input Tokens</CardTitle>
          </CardHeader>
          <CardContent className="flex-col gap-2">
            <p className="text-4xl font-bold">
              {usageData.user_input_tokens.toLocaleString()}
            </p>
            <ShortLineChart
              data={usageData.total_daily_usage.map((usage) => ({
                date: usage.date,
                tokens: usage.input_tokens,
              }))}
            />
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle>Output Tokens</CardTitle>
          </CardHeader>
          <CardContent className="flex-col gap-2">
            <p className="text-4xl font-bold">
              {usageData.user_output_tokens.toLocaleString()}
            </p>
            <ShortLineChart
              data={usageData.total_daily_usage.map((usage) => ({
                date: usage.date,
                tokens: usage.output_tokens,
              }))}
            />
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle>Top Models</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {usageData.top_model_usage.map((model) => (
                <div key={model.model.id} className="flex gap-2 items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-xl font-bold">{model.model.name}</p>
                    <p className="text-gray-400">
                      {model.usage.input_tokens} inputs /{" "}
                      {model.usage.output_tokens} outputs
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-4xl font-bold"></p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-white/5 border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Daily Usage</CardTitle>
          <Select
            className="max-w-xs"
            label="Select an API Key"
            onChange={(e) =>
              setSelectedApiKey(
                e.target.value === "all" ? 0 : Number(e.target.value)
              )
            }
            defaultSelectedKeys={["all"]}
            items={[
              { key: "all", value: "all", label: "All Keys" },
              ...usageData.api_key_usage.map((apikey) => ({
                key: apikey.id.toString(),
                value: apikey.id.toString(),
                label: apikey.key_name ?? "Secret Key",
              })),
            ]}
          >
            {(item) => (
              <SelectItem key={item.key} className="text-white">
                {item.label}
              </SelectItem>
            )}
          </Select>
        </CardHeader>
        <CardContent>
          {selectedApiKey === 0 ? (
            <AreaChat
              data={usageData.total_daily_usage.map((usage) => ({
                date: usage.date,
                tokens: usage.output_tokens,
              }))}
            />
          ) : (
            <AreaChat
              data={usageData.api_key_usage
                .find((apikey) => apikey.id === selectedApiKey)
                ?.usage.map((usage) => ({
                  date: usage.date,
                  tokens: usage.output_tokens,
                }))}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
