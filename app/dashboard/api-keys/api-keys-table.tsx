"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { DeleteButton } from "./deleteButton";
import CopyButton from "@/components/copy-button";
import DateComponent from "./date";
import { type ApiKey } from "@/app/actions/apikey";

export function ApiKeysTable({ apiKeys }: { apiKeys: ApiKey[] }) {
  return (
    <div className="overflow-x-auto max-w-3xl">
      <Table>
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>API Key</TableColumn>
          <TableColumn>Created At</TableColumn>
          <TableColumn className="text-center">Actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"You do not have any API keys now"}>
          {apiKeys.map((apiKey) => (
            <TableRow key={apiKey.id} className="border-white hover:bg-white/5 transition-colors rounded-lg">
              <TableCell className="font-medium">
                {apiKey.keyName ?? "Secret Key"}
              </TableCell>
              <TableCell>
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-md flex items-center justify-between group">
                  <code className="font-mono text-sm text-gray-300 truncate max-w-[240px]">
                    {apiKey.key}
                  </code>
                  <CopyButton textToCopy={apiKey.key} />
                </div>
              </TableCell>
              <TableCell className="text-gray-400">
                <DateComponent dateString={apiKey.createdAt as unknown as string} />
              </TableCell>
              <TableCell className="text-center">
                <DeleteButton id={apiKey.key} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}