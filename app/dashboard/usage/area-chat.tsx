"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface AreaChatProps {
  data:
    | {
        date: Date;
        tokens: number;
      }[]
    | undefined;
}

const chartConfig = {
  tokens: {
    label: "Output Tokens",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AreaChat({ data }: AreaChatProps) {
  if (!data?.length) {
    return (
      <Card className="w-full border-none shadow-none">
        <CardContent className="flex h-[300px] items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <TrendingUp className="h-8 w-8" />
            <p>No Usage</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value.toLocaleString()}`}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ paddingTop: "15px" }} />
              <defs>
                <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="tokens"
                name="Output Tokens"
                stroke="hsl(var(--chart-1))"
                fillOpacity={1}
                fill="url(#colorTokens)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start justify-between gap-4 text-sm">
          <div className="grid gap-1">
            <div className="font-medium">Total Tokens</div>
            <div className="text-2xl font-bold">
              {data.reduce((sum, day) => sum + day.tokens, 0).toLocaleString()}
            </div>
          </div>
          <div className="grid gap-1">
            <div className="font-medium">Daily Average</div>
            <div className="text-2xl font-bold">
              {Math.round(
                data.reduce((sum, day) => sum + day.tokens, 0) / data.length
              ).toLocaleString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
