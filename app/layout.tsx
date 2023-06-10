import './globals.css'
import {NextAuthProvider} from "@/app/providers";
export const metadata = {
  title: 'Server-Reboot',
  description: 'Reboot page for rebooting a Minecraft server',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="text-black dark:text-white bg-slate-200 dark:bg-slate-950">
      <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
