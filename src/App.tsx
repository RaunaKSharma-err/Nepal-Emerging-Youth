import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";

const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ProgramsPage = lazy(() => import("@/pages/ProgramsPage"));
const ProgramDetailPage = lazy(() => import("@/pages/ProgramDetailPage"));
const ImpactPage = lazy(() => import("@/pages/ImpactPage"));
const EventsPage = lazy(() => import("@/pages/EventsPage"));
const EventDetailPage = lazy(() => import("@/pages/EventDetailPage"));
const NewsPage = lazy(() => import("@/pages/NewsPage"));
const NewsDetailPage = lazy(() => import("@/pages/NewsDetailPage"));
const TeamPage = lazy(() => import("@/pages/TeamPage"));
const DepartmentsPage = lazy(() => import("@/pages/DepartmentsPage"));
const DepartmentDetailPage = lazy(() => import("@/pages/DepartmentDetailPage"));
const MediaPage = lazy(() => import("@/pages/MediaPage"));
const AchievementsPage = lazy(() => import("@/pages/AchievementsPage"));
const PartnersPage = lazy(() => import("@/pages/PartnersPage"));
const DocumentsPage = lazy(() => import("@/pages/DocumentsPage"));
const GetInvolvedPage = lazy(() => import("@/pages/GetInvolvedPage"));
const JoinPage = lazy(() => import("@/pages/JoinPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:slug" element={<ProgramDetailPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:slug" element={<EventDetailPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsDetailPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
