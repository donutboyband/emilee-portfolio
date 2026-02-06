import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import { PageTransitionProvider } from "../components/PageTransition";
import { InitialLoaderProvider } from "../components/InitialLoader";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <SmoothScroll>
      <InitialLoaderProvider>
        <PageTransitionProvider>
          <div className="min-h-screen bg-white text-black">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </PageTransitionProvider>
      </InitialLoaderProvider>
    </SmoothScroll>
  );
}
