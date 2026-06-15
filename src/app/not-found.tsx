import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-accent text-sm font-mono font-medium mb-2 tracking-widest uppercase">
          404
        </p>
        <h1 className="text-3xl font-bold text-text mb-4">Page not found</h1>
        <p className="text-text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
