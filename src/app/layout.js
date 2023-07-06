import "../styles/globals.css";

export const metadata = {
  title: "ZeeK",
  description:
    "A website created using Next.js and Tailwind CSS to list user video games across all platforms and load notes, documents, goals, and track progress. Utilizing Flask, Python, and PostgreSQL with Faker to create back-end database.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
