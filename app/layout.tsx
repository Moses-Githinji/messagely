import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";

import "./globals.css";

export const metadata = {
  title: "Mjumbe",
  description: "Chats With Lightning Fast Activity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
