import { ChatArea } from "../../components/ChatArea"

export default async function Page({
  params,
}: {
  params: Promise<{ chatid: string }>
}) {
  const chat_id = (await params).chatid
  return <ChatArea key={chat_id} />
}