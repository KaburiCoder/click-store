import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-center h-screen bg-blue-50">
      <div className="cst-card bg-white p-6">{children}</div>
    </main>
  );
}
