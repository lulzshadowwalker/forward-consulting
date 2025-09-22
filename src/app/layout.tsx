import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <>
      {children}
      <GoogleAnalytics
        gaId="G-6KR0BLFJ0B"
        debugMode={process.env.NODE_ENV !== "production"}
      />
    </>
  );
}
