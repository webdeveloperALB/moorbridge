import HeroSection from './components/HeroSection';
import ExpertSection from './components/ExpertSection';
import RecoveryProcessSection from './components/RecoveryProcessSection';
import WhyChooseSection from './components/WhyChooseSection';
import ComprehensiveInvestigationSection from './components/ComprehensiveInvestigationSection';
import NoWinNoFeeSection from './components/NoWinNoFeeSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/svg/2.svg" alt="Moorbidge Cyber" className="h-24" />
            </div>

            <div className="flex items-center space-x-8">
              <a href="#about" className="text-[#172963] hover:text-[#2d5a8f] transition-colors tracking-wide text-lg font-normal">ABOUT</a>
              <a href="#why" className="text-[#172963] hover:text-[#2d5a8f] transition-colors tracking-wide text-lg font-normal">WHY</a>
              <a href="#process" className="text-[#172963] hover:text-[#2d5a8f] transition-colors tracking-wide text-lg font-normal">OUR PROCESS</a>
              <a href="#faqs" className="text-[#172963] hover:text-[#2d5a8f] transition-colors tracking-wide text-lg font-normal">FAQs</a>
              <a href="#footer-bottom">
                <button className="border-2 border-[#172963] text-[#172963] hover:bg-[#172963] hover:text-white transition-all px-8 py-3 tracking-widest text-lg font-normal rounded-lg">
                  FILE A NEW CASE
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      <div id="about">
        <ExpertSection />
      </div>
      <RecoveryProcessSection />
      <div id="why">
        <WhyChooseSection />
      </div>
      <div id="process">
        <ComprehensiveInvestigationSection />
      </div>
      <div id="contact">
        <NoWinNoFeeSection />
      </div>
    </div>
  );
}

export default App;
