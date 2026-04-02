import { useState } from 'react';
import { FaEnvelope, FaReply, FaTrash } from 'react-icons/fa';

export default function ManageMessages() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Great Portfolio!', message: 'Love your work...', date: '2024-01-20', read: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'Project Inquiry', message: 'Interested in collaboration...', date: '2024-01-19', read: true },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', subject: 'Job Opportunity', message: 'We would like to offer you...', date: '2024-01-18', read: false },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleMarkAsRead = (id) => {
    setMessages(messages.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((m) => m.id !== id));
    setSelectedMessage(null);
  };

  const handleReply = () => {
    if (replyText.trim()) {
      alert(`Reply sent to ${selectedMessage.email}: ${replyText}`);
      setReplyText('');
      setSelectedMessage(null);
    }
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="space-y-6 text-[#f5efe6]">
      <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
        <h1 className="text-3xl font-black">Messages</h1>
        <p className="mt-1 text-sm text-[#b9afa3]">
          Manage contact form submissions. {unreadCount > 0 && <span className="font-semibold text-[#d4a373]">{unreadCount} unread</span>}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card overflow-hidden lg:col-span-1">
          <div className="divide-y divide-white/10">
            {messages.length === 0 ? (
              <div className="p-6 text-center text-[#8a7f75]">
                <FaEnvelope className="mx-auto mb-2 text-2xl opacity-50" />
                <p>No messages</p>
              </div>
            ) : (
              messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => {
                    handleMarkAsRead(msg.id);
                    setSelectedMessage(msg);
                  }}
                  className={`w-full border-l-4 px-4 py-4 text-left transition-colors hover:bg-white/5 ${
                    !msg.read ? 'border-[#c21f2e] bg-white/5' : 'border-transparent'
                  } ${selectedMessage?.id === msg.id ? 'bg-white/10' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-white">{msg.name}</p>
                      <p className="truncate text-sm text-[#b9afa3]">{msg.subject}</p>
                      <p className="mt-1 text-xs text-[#8a7f75]">{msg.date}</p>
                    </div>
                    {!msg.read && <div className="mt-2 h-2 w-2 rounded-full bg-[#c21f2e]" />}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="card p-6">
              <div className="mb-6">
                <h2 className="mb-1 text-2xl font-bold text-white">{selectedMessage.subject}</h2>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">{selectedMessage.name}</p>
                    <p className="text-sm text-[#b9afa3]">{selectedMessage.email}</p>
                  </div>
                  <p className="text-sm text-[#8a7f75]">{selectedMessage.date}</p>
                </div>
              </div>

              <div className="mb-6 border-t border-white/10 pt-6">
                <p className="whitespace-pre-wrap text-[#b9afa3]">{selectedMessage.message}</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Send Reply</h3>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="dark-input min-h-32 resize-none"
                  rows="4"
                  placeholder="Type your reply here..."
                />
                <div className="mt-4 flex flex-wrap gap-3">
                  <button onClick={handleReply} className="btn-primary">
                    <FaReply /> Send Reply
                  </button>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="btn-secondary text-red-100 hover:bg-red-500/20"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="card p-12 text-center">
              <FaEnvelope className="mx-auto mb-4 text-5xl text-[#8a7f75]" />
              <p className="text-[#b9afa3]">Select a message to view details and reply</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
