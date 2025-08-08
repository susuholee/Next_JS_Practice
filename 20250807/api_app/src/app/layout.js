import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata = {
  title: '날씨 앱',
  description: '간단한 날씨 조회 앱',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        <main style={{ padding: '2rem' }}>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
