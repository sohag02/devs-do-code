import { Suspense } from "react";
import { getAPIKeys } from "@/app/actions/apikey";
import { ApiKeysTable } from "./api-keys-table";
import { CreateApiKeyDialog } from "./api-key-dialog";
import AlertComponent from "@/components/ui/AlertComponent";

export default async function ApiKeysPage() {
  const apiKeys = await getAPIKeys();
  const limitReached = apiKeys.length >= 5;
  return (
    <>
      <div className="flex justify-between items-center mb-8 max-w-3xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            API Keys
          </h1>
          <p className="text-gray-400 text-sm">
            Manage your API keys for accessing the API
          </p>
        </div>
        <CreateApiKeyDialog disabled={limitReached} />
      </div>

      {limitReached && (
        <div className="flex justify-center my-2 max-w-3xl">
          <AlertComponent
            title="API Keys Limit Reached"
            description="You can have a maximum of 5 API keys."
            color="warning"
            classname="my-20"
          />
        </div>
      )}

      <div className="rounded-lg  overflow-hidden">
        <Suspense fallback={<TableSkeleton />}>
          <ApiKeysTable apiKeys={apiKeys} key={Math.random()} />
        </Suspense>
      </div>
    </>
  );
}

function TableSkeleton() {
  return (
    <div className="p-6 space-y-4">
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex space-x-4">
            <div className="w-1/4 h-12 bg-white/5 rounded-lg animate-pulse" />
            <div className="w-1/2 h-12 bg-white/5 rounded-lg animate-pulse" />
            <div className="w-1/4 h-12 bg-white/5 rounded-lg animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
