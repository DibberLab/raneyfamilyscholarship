import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ScholarshipCoverage from './components/ScholarshipCoverage';
import Eligibility from './components/Eligibility';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Mission />
        <ScholarshipCoverage />
        <Eligibility />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}
