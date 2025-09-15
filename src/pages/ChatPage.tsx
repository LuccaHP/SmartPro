import { ChatBox } from "../components/ui/ChatBox";

export function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* <Header /> */}

      <main className="flex-1 flex justify-center items-center p-6">
        <ChatBox />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
