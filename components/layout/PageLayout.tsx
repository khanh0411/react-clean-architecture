interface PageLayoutProps {
    children: React.ReactNode;
  }
  
  export default function PageLayout({ children }: PageLayoutProps) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-500 p-4 text-white text-center">Ứng dụng</header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="bg-gray-800 p-4 text-white text-center">© 2025 Ứng dụng</footer>
      </div>
    );
  }
  