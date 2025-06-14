
import React, { useState } from 'react';

const users = {
  admin: { cap: 1500000, role: 'admin' },
  gold: { cap: 1000000, role: 'gold' },
  standard: { cap: 0, role: 'standard' },
};

export default function App() {
  const [user, setUser] = useState(users.gold);

  return (
    <div className="p-4 text-yellow-300 bg-black min-h-screen font-mono">
      <h1 className="text-3xl mb-4">🚀 FlipFlow Dashboard</h1>
      <p>Role: <strong>{user.role}</strong></p>
      <p>Annual Revenue Cap: ${user.cap.toLocaleString()}</p>
      <p className="mt-4">You are now operating under AI-secured systems.</p>
    </div>
  );
}
