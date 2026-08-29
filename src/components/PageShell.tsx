import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTABar from "@/components/StickyCTABar";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

interface PageShellProps {
  crumbs: Crumb[];
  children: ReactNode;
}

const PageShell = ({ crumbs, children }: PageShellProps) => (
  <div className="min-h-screen bg-background">
    <Header />
    <Breadcrumbs items={crumbs} />
    <main className="pb-24 md:pb-8">{children}</main>
    <Footer />
    <StickyCTABar />
  </div>
);

export default PageShell;
