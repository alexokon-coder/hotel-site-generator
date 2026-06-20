import Link from "next/link";

export default function PreviewNotFound() {
  return (
    <main className="theme-page flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="theme-eyebrow mb-3 text-sm uppercase">Preview</p>
      <h1 className="theme-heading theme-h2 theme-heading-light">Hotel preview not found</h1>
      <p className="mt-4 max-w-md text-muted">
        This preview URL does not match any configured property. Check the slug and try again.
      </p>
      <Link href="/" className="theme-btn-primary mt-8 inline-block">
        Back to demo homepage
      </Link>
    </main>
  );
}
