import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTABar from "@/components/StickyCTABar";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import { useLocation } from "react-router-dom";

interface PageShellProps {
  crumbs: Crumb[];
  children: ReactNode;
}

const PageShell = ({ crumbs, children }: PageShellProps) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs items={crumbs} />
      <main key={pathname} className="pb-24 md:pb-8">{children}</main>
      <Footer />
      <StickyCTABar />
    </div>
  );
};

export default PageShell;
