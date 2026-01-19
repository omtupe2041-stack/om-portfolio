import "./globals.css";

export const metadata = {
  title: "Om Tupe | Full Stack Developer",
  description: "Portfolio of Om Tupe"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
