import React from "react";

interface Props {
  headerComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  children: React.ReactNode;
}

export default function Hero({
  children,
  headerComponent,
  footerComponent,
  leftComponent,
}: Props) {
  return (
    <div className="flex h-full overflow-hidden">
      {leftComponent && (
        <nav className="hidden w-fit overflow-hidden border-r border-solid border-gray-200 md:flex">
          {leftComponent}
        </nav>
      )}
      <div className="flex w-full flex-col">
        {headerComponent && (
          <header className="h-12 border-b border-solid border-gray-200">
            {headerComponent}
          </header>
        )}
        <main className="w-full flex-1 flex-grow overflow-auto bg-sky-50">
          {children}
        </main>
        {footerComponent && <footer>{footerComponent}</footer>}
      </div>
    </div>
  );
}
