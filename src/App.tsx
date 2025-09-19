import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { HomePage } from './pages/home';
import { CorporatePage } from './pages/corporate';
import { AboutPage } from './pages/about';
import { VisionMissionPage } from './pages/vision-mission';
import { KVKPage } from './pages/kvk';
import { SustainabilityPage } from './pages/sustainability';
import { CatalogPage } from './pages/catalog';
import { AuthPage } from './pages/auth';
import { RoadTransportPage } from './pages/road-transport';
import { SeaTransportPage } from './pages/sea-transport';
import { AirTransportPage } from './pages/air-transport';
import { WarehouseServicesPage } from './pages/warehouse-services';
import { ContainerSalesPage } from './pages/container-sales';
import { OpenShipDischargePage } from './pages/open-ship-discharge';
import { ServicesPage } from './pages/services';
import { FTLTransportDetailPage } from './pages/services/ftl-transport-detail';
import { ContainerTransportDetailPage } from './pages/services/container-transport-detail';
import { HeavyTransportDetailPage } from './pages/services/heavy-transport-detail';
import { InternationalTransportDetailPage } from './pages/services/international-transport-detail';
import { PressRoomPage } from './pages/press-room';
import { PressPage } from './pages/press';
import { PressNewsDetailPage } from './pages/press-news-detail';
import { EventsPage } from './pages/events';
import { EventDetailPage } from './pages/event-detail';
import { WorkMethodPage } from './pages/work-method';
import { HumanResourcesPage } from './pages/human-resources';
import { JobDetailPage } from './pages/job-detail';
import { ContactPage } from './pages/contact';
import { TrackingPage } from './pages/tracking';
import { LanguageProvider } from './contexts/LanguageContext';
import { useScrollToTop } from './hooks/useScrollToTop';
import './styles/animations.css';
import './styles/catalog.css';
import './styles/advanced-catalog.css';
import './styles/human-resources.css';

function AppRoutes() {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vision-mission" element={<VisionMissionPage />} />
            <Route path="/kvk" element={<KVKPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/road" element={<RoadTransportPage />} />
            <Route path="/services/sea" element={<SeaTransportPage />} />
            <Route path="/services/air" element={<AirTransportPage />} />
            <Route path="/services/warehouse" element={<WarehouseServicesPage />} />
            <Route path="/services/container" element={<ContainerSalesPage />} />
            <Route path="/services/ship" element={<OpenShipDischargePage />} />
            <Route path="/services/road/ftl" element={<FTLTransportDetailPage />} />
            <Route path="/services/road/container" element={<ContainerTransportDetailPage />} />
            <Route path="/services/road/heavy" element={<HeavyTransportDetailPage />} />
            <Route path="/services/road/international" element={<InternationalTransportDetailPage />} />
            <Route path="/press-room" element={<PressRoomPage />} />
            <Route path="/press-room/news" element={<PressPage />} />
            <Route path="/press-room/news/:id" element={<PressNewsDetailPage />} />
            <Route path="/press-room/events" element={<EventsPage />} />
            <Route path="/press-room/events/:id" element={<EventDetailPage />} />
            <Route path="/work-method" element={<WorkMethodPage />} />
            <Route path="/human-resources" element={<HumanResourcesPage />} />
            <Route path="/human-resources/job/:id" element={<JobDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            {/* Diğer route'lar buraya eklenecek */}
          </Routes>
        </Layout>
      } />
    </Routes>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;
