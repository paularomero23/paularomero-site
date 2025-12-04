import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Users, Target } from 'lucide-react';
import { useEffect } from 'react';
const screenshot2 = '/images/shuttle-screenshot-2.png';
const screenshot4 = '/images/shuttle-screenshot-4.png';
const screenshot5 = '/images/shuttle-screenshot-5.png';
const screenshot7 = '/images/shuttle-screenshot-7.png';
const hifiStops = '/images/shuttle-hifi-stops.png';
const hifiStopDetails = '/images/shuttle-hifi-stop-details.png';
const hifiRoutes = '/images/shuttle-hifi-routes.png';
const hifiOnCall = '/images/shuttle-hifi-oncall.png';
const welcomeStops = '/images/shuttle-welcome-stops.png';
const routesView = '/images/shuttle-routes-view.png';
const onCallView = '/images/shuttle-oncall-view.png';
const heroStops = '/images/shuttle-stops.png';
const heroRoutes = '/images/shuttle-routes.png';
const heroOnCall = '/images/shuttle-oncall.png';

interface CaseStudy2Props {
  onBack: () => void;
}

export function CaseStudy2({ onBack }: CaseStudy2Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-black hover:text-[#A8D8EA] transition-colors"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}>
          Back to Portfolio
        </span>
      </motion.button>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="text-[#A8D8EA] text-4xl" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}>
              *
            </span>
          </motion.div>
          
          <h1 
            className="text-3xl md:text-6xl mb-6 text-black font-medium"
            style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
          >
            Brown University Shuttle: A Unified Transit Experience
          </h1>
          
          <p className="text-xl text-black/70 mb-12 max-w-3xl mx-auto">
            The case study below is a product design exploration that unifies
             TransLoc and PassioGo into a single, campus-specific app to streamline shuttle
              information and improve the Brown University student transit experience.
          </p>

          {/* Hero Image - 3 Main Screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl p-12 bg-white"
          >
            <div className="w-full flex items-center justify-center gap-6 bg-white">
              <motion.div 
                className="flex-1 max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <img src={heroStops} alt="Stops screen with search and route list" className="w-full h-auto rounded-2xl shadow-lg" />
              </motion.div>
              <motion.div 
                className="flex-1 max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <img src={heroRoutes} alt="Routes screen with live tracking" className="w-full h-auto rounded-2xl shadow-lg" />
              </motion.div>
              <motion.div 
                className="flex-1 max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <img src={heroOnCall} alt="OnCall confirmation screen" className="w-full h-auto rounded-2xl shadow-lg" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          {/* Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-[#A8D8EA]/10 p-8 rounded-3xl border-2 border-[#A8D8EA]/30">
              <h2 
                className="text-2xl mb-4"
                style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
              >
                Context
              </h2>
              <p className="text-black/80 leading-relaxed">
                This project was part of our capstone for the Brown Product Management Fellowship. 
                For our capstone, we had to use PM principles and apply them to an existing product. 
                We chose the Brown University Shuttle (BUS) system, and I took this as an opportunity 
                to explore designing an app that unifies TransLoc and PassioGo, the two apps Brown uses 
                for the OnCall Shuttle and Shuttle Routes, into one streamlined app that 
                makes it easier for Brown students to navigate the shuttle system.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-white p-8 rounded-3xl border-2 border-black">
              <Calendar className="w-6 h-6 mb-4 text-[#A8D8EA]" />
              <h3 className="mb-2">Timeline</h3>
              <p className="text-black/70 text-[16px]">October - November 2025</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border-2 border-black">
              <Users className="w-6 h-6 mb-4 text-[#3D2817]" />
              <h3 className="mb-2">Role</h3>
              <p className="text-black/70">Product Manager & Designer: drove research, product definition, and feature prioritization while also designing 
              all UI/UX for the unified shuttle app.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border-2 border-black">
              <Target className="w-6 h-6 mb-4 text-[#A8D8EA]" />
              <h3 className="mb-2">Team</h3>
              <p className="text-black/70">3 Product Management Fellows collaborating on research, strategy, and concept development.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h2 
                className="text-3xl mb-4"
                style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
              >
                The Problem
              </h2>
              <div className="h-1 w-16 bg-[#3D2817] rounded-full mb-6" />
              <p className="text-black/80 leading-relaxed">
                Brown offers a robust shuttle system with fixed routes, late-night on-call service, and wide campus coverage.
                But students rarely take full advantage of it because the experience is fragmented across two separate apps;
                PassioGo handles fixed routes, while TransLoc handles on-call rides, <strong>but most students don’t understand which app is for what.</strong> In our research,
                students described the system as confusing, cluttered, and unreliable. They bounce between apps, mix up shuttle times, or give up entirely, resulting in missed shuttles, 
                unnecessary walking late at night, and a general lack of trust in campus transportation.
              </p>
            </div>

            <div>
              <h2 
                className="text-3xl mb-4"
                style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
              >
                The Solution
              </h2>
              <div className="h-1 w-16 bg-[#A8D8EA] rounded-full mb-6" />
              <p className="text-black/80 leading-relaxed">
                Users shouldn't have to navigate two separate apps to navigate transportation at Brown. Our solution was <strong>a unified, Brown-specific shuttle app that brings fixed routes, real-time tracking, and on-call booking into one clear, intuitive interface. </strong>
                The redesigned experience consolidates features from PassioGo and TransLoc, removes confusion around routes and agencies, and gives students a single platform
                 with their on-campus transportation options. With simplified flows, clearer maps, and reliable real-time updates, 
                 students can quickly see what’s running, where to go, and how to get to their destination safely.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
          >
            Research & Discovery
          </h2>
          <div className="h-2 w-24 bg-[#A8D8EA] rounded-full mb-12" />

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl mb-4">User Research</h3>
              <p className="text-black/80 leading-relaxed mb-8">
                We conducted interviews with 24 Brown students to understand their current shuttle usage patterns, 
                pain points, and behavioral motivations. Instead of asking leading and/or biased questions, we used open-ended, 
                behavior-focused prompts like “Tell me about the last time you used a Brown shuttle” and
                “What factors influenced your decision?” When students naturally brought up confusion or issues,
                we followed up with more questions to uncover the root causes and impact on their transportation choices on campus.
               
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Top Issues Identified by Students</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#A8D8EA]/10 p-6 rounded-2xl border-2 border-[#A8D8EA]/30">
                  <p className="text-[16px] text-[rgba(0,0,0,0.8)]">
                    <strong>76.5% of students reported confusion between the two  apps: </strong> Students are unsure which 
                    app is for onCall vs fixed routes, and often bounce back and forth between them. Many try 
                    to request rides in the wrong app, assume one app replaced the other, or don't know what 
                    "agencies" mean in TransLoc.
                  </p>
                </div>
                <div className="bg-[#3D2817]/10 p-6 rounded-2xl border-2 border-[#3D2817]/30">
                  <p className="text-[16px] text-[rgba(0,0,0,0.8)]">
                    <strong>75.0% - Unclear schedules, routes, and service coverage:</strong> onCall shuttles,
                    times, and which of the three bus routes goes where are all difficult to keep straight.
                    Students frequently say they don't know if a shuttle will be operating, so they default 
                    to other methods.
                  </p>
                </div>
                <div className="bg-[#A8D8EA]/10 p-6 rounded-2xl border-2 border-[#A8D8EA]/30">
                  <p className="text-[16px] text-[rgba(0,0,0,0.8)]">
                    <strong>68.8% - Unreliable or confusing live tracking and wait times:</strong> Bus 
                    icons freeze, jump, or disappear on the map; ETAs feel inaccurate; zones turn on 
                    and off with no explanation. Students don't feel confident that a shuttle is actually 
                    coming or how long they'll wait.
                  </p>
                </div>
                <div className="bg-[#3D2817]/10 p-6 rounded-2xl border-2 border-[#3D2817]/30">
                  <p className="text-[16px] text-[rgba(0,0,0,0.8)]">
                    <strong>56.3% - Cluttered and unintuitive UI:</strong> Both apps feel "messy" or "cluttered," 
                    with too many lines, dots, and options that don't clearly map to real actions. Requesting, 
                    changing, or canceling an onCall ride, choosing the right agency/zone, or adjusting rider 
                    counts is confusing.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Design Patterns & Industry Standards</h3>
              <p className="text-black/80 leading-relaxed mb-8">
                We analyzed three leading transit apps to identify effective patterns for real-time tracking, 
                route visualization, and overall user experience. We wanted to understand established conventions 
                and design practices that consistently help users navigate transportation systems—practices 
                we could apply to a unified shuttle experience at Brown.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border-2 border-black/10 shadow-sm">
                  <h4 className="text-lg mb-3"><strong>Transit</strong></h4>
                  <p className="text-black/70 text-sm mb-3">Real-time bus/shuttle tracking</p>
                  <ul className="space-y-2 text-black/80 text-sm">
                    <li>• Predictable loops visualized cleanly</li>
                    <li>• “Nearby routes” feature that works well with university shuttles</li>
                    <li>• Strong color-coding for quick route scanning</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-black/10 shadow-sm">
                  <h4 className="text-lg mb-3"><strong>Uber</strong></h4>
                  <p className="text-black/70 text-sm mb-3">On-demand ride booking</p>
                  <ul className="space-y-2 text-black/80 text-sm">
                    <li>• Streamlined booking with minimal steps</li>
                    <li>• Live tracking with accurate ETAs</li>
                    <li>• Clear pickup/dropoff visual confirmation</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-black/10 shadow-sm">
                  <h4 className="text-lg mb-3"><strong>Lyft</strong></h4>
                  <p className="text-black/70 text-sm mb-3">On-demand ride booking</p>
                  <ul className="space-y-2 text-black/80 text-sm">
                    <li>• Clean, minimalist interface with intuitive journey steps</li>
                    <li>• Accessible design (large tap targets, simple visuals)</li>
                    <li>• Easy ride modification and cancellation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
            >
              Design Process
            </h2>
            <div className="h-2 w-24 bg-[#3D2817] rounded-full mb-12" />

            <div className="space-y-16">
              {/* User Persona */}
              <div>
                <h3 className="text-2xl mb-4">User Persona & Journey Map</h3>
                <p className="text-black/80 leading-relaxed mb-8">
                  Based on our research, we developed a primary persona representing the typical Brown student's 
                  shuttle experience and mapped their current journey to identify key pain points and opportunities 
                  for improvement.
                </p>
                <div className="rounded-3xl overflow-hidden bg-white max-w-6xl mx-auto relative z-10 shadow-sm p-8">
                  {/* Profile Section */}
                  <div className="mb-10">
                    <div className="bg-[#A8D8EA]/10 p-6 rounded-2xl border-2 border-[#A8D8EA]/30">
                      <h4 className="text-lg mb-3"><strong>Meet Oliver, Junior at Brown</strong></h4>
                      <div className="space-y-2 text-sm text-black/80">
                        <p><strong>Age:</strong> 20, lives off-campus on Thayer Street, works @ a lab in Brown School of Public Health (25 minute downhill walk!) </p>
                        <p><strong>Goals:</strong> Get home safely and quickly after shifts, especially during the winter months.</p>
                        <p><strong>Frustrations:</strong> Never knows which app to use, misses shuttles due to inaccurate timing</p>
                        <p><strong>Behaviors:</strong> Checks multiple apps, often walks instead of risking shuttle confusion</p>
                      </div>
                    </div>
                  </div>

                  {/* Journey Map - 2 Rows */}
<div className="space-y-8">
  {/* Row 1: Steps 1-4 */}
  <div className="grid grid-cols-4 gap-8 relative">
    
    {/* Step 1 */}
    <div className="relative px-2">
      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-sm overflow-hidden h-full">
        <div className="h-1.5 bg-[#A8D8EA]"></div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
            <h5 className="font-semibold text-sm">Open app</h5>
          </div>
          <p className="text-xs text-black/70">Oliver opens TransLoc to search for shuttle times</p>
        </div>
      </div>
    </div>

    {/* Arrow 1-2 */}
    <div className="absolute left-[calc(25%-1rem)] top-1/2 -translate-y-1/2 text-2xl text-[#FF6B6B] mx-[-4px] my-[0px]">→</div>

    {/* Step 2 - Pain Point */}
    <div className="relative px-2">
      <div className="bg-white border-2 border-[#FF6B6B]/30 rounded-lg shadow-sm overflow-hidden h-full">
        <div className="h-1.5 bg-[#FF6B6B]"></div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
            <h5 className="font-semibold text-sm text-[#FF6B6B]">Inaccurate info</h5>
          </div>
          <p className="text-xs text-black/70 mb-2">No routes within 1.5 miles</p>
          <div className="w-full bg-gray-100 rounded border border-gray-300">
            <img src={screenshot2} alt="TransLoc showing no active routes" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>

    {/* Arrow 2-3 */}
    <div className="absolute left-[calc(50%-1rem)] top-1/2 -translate-y-1/2 text-2xl text-gray-600 mx-[4px] my-[0px]">→</div>

    {/* Step 3 */}
    <div className="relative px-2">
      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-sm overflow-hidden h-full">
        <div className="h-1.5 bg-gray-400"></div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
            <h5 className="font-semibold text-sm">Search continues</h5>
          </div>
          <p className="text-xs text-black/70">Pivots to onCall routes</p>
        </div>
      </div>
    </div>

    {/* Arrow 3-4 */}
    <div className="absolute left-[calc(75%-1rem)] top-1/2 -translate-y-1/2 text-2xl text-[#FF6B6B] mx-[12px] my-[0px]">→</div>

    {/* Step 4 - Pain Point */}
    <div className="relative px-2">
      <div className="bg-white border-2 border-[#FF6B6B]/30 rounded-lg shadow-sm overflow-hidden h-full">
        <div className="h-1.5 bg-[#FF6B6B]"></div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
            <h5 className="font-semibold text-sm text-[#FF6B6B]">Irrelevant routes</h5>
          </div>
          <p className="text-xs text-black/70 mb-2">Shows RISD rides, which Brown students can't use</p>
          <div className="w-full bg-gray-100 rounded border border-gray-300">
            <img src={screenshot4} alt="TransLoc showing RISD rides error" className="w-full h-20 object-cover object-top" />
          </div>
        </div>
      </div>
    </div>

  </div>

  {/* Row 2: Steps 5-8 */}
  <div className="grid grid-cols-4 gap-8 relative">

    {/* Step 5 - Pain Point */}
    <div className="relative px-2">
      <div className="bg-white border-2 border-[#FF6B6B]/30 rounded-lg shadow-sm overflow-hidden h-full">
        <div className="h-1.5 bg-[#FF6B6B]"></div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
            <h5 className="font-semibold text-sm text-[#FF6B6B]">Inconsistent zone booking accurary</h5>
          </div>
          <p className="text-xs text-black/70 mb-2">OnCall not active despite Oliver being within the zone</p>
          <div className="w-full bg-gray-100 rounded border border-gray-300">
            <img src={screenshot5} alt="Booking failed error message" className="w-auto h-full object-contain" />
          </div>
        </div>
      </div>
    </div>

    {/* Arrow 5-6 */}
    <div className="absolute left-[calc(25%-1rem)] top-1/2 -translate-y-1/2 text-2xl text-gray-600 mx-[-4px] my-[0px]">→</div>

    {/* Step 6 */}
    <div className="relative px-2">
      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-sm overflow-hidden h-full">
        <div className="h-1.5 bg-gray-400"></div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">6</div>
            <h5 className="font-semibold text-sm">Switch apps</h5>
          </div>
          <p className="text-xs text-black/70">Frustrated, Oliver pivots to PassioGo</p>
        </div>
      </div>
    </div>

    {/* Arrow 6-7 */}
    <div className="absolute left-[calc(50%-1rem)] top-1/2 -translate-y-1/2 text-2xl text-[#FF6B6B] mx-[4px] my-[0px]">→</div>

    {/* Step 7 - Pain Point */}
    <div className="relative px-2">
      <div className="bg-white border-2 border-[#FF6B6B]/30 rounded-lg shadow-sm overflow-hidden h-full">
        <div className="h-1.5 bg-[#FF6B6B]"></div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">7</div>
            <h5 className="font-semibold text-sm text-[#FF6B6B]">Confusing UI</h5>
          </div>
          <p className="text-xs text-black/70 mb-2">PassioGo route confusion</p>
          <div className="w-full bg-gray-100 rounded border border-gray-300">
            <img src={screenshot7} alt="PassioGo confusing route map" className="w-full h-25 object-cover object-bottom" />
          </div>
        </div>
      </div>
    </div>

    {/* Arrow 7-8 */}
    <div className="absolute left-[calc(75%-1rem)] top-1/2 -translate-y-1/2 text-2xl text-[#FF6B6B] mx-[12px] my-[0px]">→</div>

    {/* Step 8 - Final Outcome */}
    <div className="relative px-2">
      <div className="bg-[#FF6B6B]/5 border-2 border-[#FF6B6B] rounded-lg shadow-md overflow-hidden h-full">
        <div className="h-1.5 bg-[#FF6B6B]"></div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">8</div>
            <h5 className="font-semibold text-sm">Gives up</h5>
          </div>
          <p className="text-xs text-black/80">
            Exits both apps and decides to walk, despite it being a cold winter night :(
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

                </div>
              </div>


              {/* Design Goals in Action - HMW Format */}
              <div>
                <h3 className="text-2xl md:text-3xl mb-8 text-[24px]">
                  How might we redesign the shuttle app experience to be faster, clearer, and easier to use?
                </h3>
                
                <div className="rounded-3xl overflow-hidden bg-white relative z-10 shadow-sm p-8">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Left side - Text content */}
                    <div className="space-y-8">
                      {/* Our Solution */}
                      <div>
                        <h4 className="text-xl mb-4"><strong>Our solution:</strong></h4>
                        <p className="text-black/80 leading-relaxed">
                          Consolidate the two apps into one unified, Brown-specific shuttle app that brings fixed routes, 
                          real-time tracking, and on-call booking into one clear, intuitive interface designed specifically 
                          for Brown students.
                        </p>
                      </div>

                      {/* Why this solution */}
                      <div>
                        <h4 className="text-xl mb-4"><strong>Why this solution?</strong></h4>
                        <ul className="space-y-3 text-black/80">
                          <li className="flex items-start gap-3">
                            <span className="text-[#A8D8EA] mt-1">•</span>
                            <span><strong>Directly addresses top pain points</strong> by removing app-switching confusion and making routes, stops, and OnCall accessible in one place.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#A8D8EA] mt-1">•</span>
                            <span><strong>Significantly improves clarity</strong> with clean route toggles, searchable stops, and real-time tracking all in a single interface.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#A8D8EA] mt-1">•</span>
                            <span><strong>Enhances safety + reliability</strong> through a smoother OnCall flow, streamlined pickup selection, and clear ETAs.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#A8D8EA] mt-1">•</span>
                            <span><strong>Reduces wait time and uncertainty</strong> by consolidating shuttle info and on-demand options.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Wireframes */}
                    <div className="space-y-4">
                      <div className="grid grid-flow-row grid-cols-[auto_auto] gap-3 justify-center">
                        <div className="inline-flex rounded-lg overflow-hidden border-2 border-gray-200">
                          <img src={hifiStops} alt="Stops screen wireframe" className="max-w-[110px] w-auto h-auto" />
                        </div>
                        <div className="inline-flex rounded-lg overflow-hidden border-2 border-gray-200">
                          <img src={hifiRoutes} alt="Routes screen wireframe" className="max-w-[110px] w-auto h-auto" />
                        </div>
                        <div className="inline-flex rounded-lg overflow-hidden border-2 border-gray-200">
                          <img src={hifiStopDetails} alt="Details screen wireframe" className="max-w-[110px] w-auto h-auto" />
                        </div>
                        <div className="inline-flex rounded-lg overflow-hidden border-2 border-gray-200">
                          <img src={hifiOnCall} alt="On-Call screen wireframe" className="max-w-[110px] w-auto h-auto" />
                        </div>
                      </div>
                      <p className="text-center text-sm text-black/60 mt-4">Medium-Fidelity Wireframes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Design */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
          >
            Final Design
          </h2>
          <div className="h-2 w-24 bg-[#A8D8EA] rounded-full mb-8" />
          
          <p className="text-black/80 leading-relaxed mb-12">
            After multiple rounds of iteration and user testing, we created a unified shuttle experience 
            that eliminates confusion while maintaining all the functionality students need. No more having
            to switch between two apps and missing late-night shuttles!
          </p>

          {/* Welcome & Stops */}
          <div className="mb-10">
            <h3 className="text-2xl mb-6">Welcome & Stops</h3>
            <p className="text-black/70 mb-6 leading-relaxed">
              We focused on reducing cognitive load when users first open the app by avoiding text-heavy UI and prioritizing
              visual hierarchy. Students can immediately see any service alerts, search for stops, view routes.
            </p>
            <div className="bg-white p-6 rounded-3xl relative z-10 shadow-sm w-[85%] mx-auto">
              <img src={welcomeStops} alt="Welcome and Stops screens showing onboarding, service alerts, search, and stop details" className="w-full h-auto" />
            </div>
          </div>

          {/* Routes */}
          <div className="mb-10">
            <h3 className="text-2xl mb-6">Routes</h3>
            <p className="text-black/70 mb-6 leading-relaxed">
              This section addresses the confusion around which routes are currently active by providing real-time bus locations and clear route information, 
              eliminating the guesswork that caused students to miss shuttles or wait unnecessarily.
            </p>
            <div className="bg-white p-6 rounded-3xl relative z-10 shadow-sm w-[85%] mx-auto">
              <img src={routesView} alt="Routes screens showing active buses, route list, and stop details with ETA" className="w-full h-auto" />
            </div>
          </div>

          {/* Redesigned OnCall */}
          <div className="mb-10">
            <h3 className="text-2xl mb-6">Redesigned OnCall</h3>
            <p className="text-black/70 mb-6 leading-relaxed">
              We streamlined the OnCall shuttle booking experience to address safety concerns by making pickup/dropoff selection intuitive, 
              providing clear confirmation details, and offering real-time tracking so students always know their ride status.
            </p>
            <div className="bg-white p-6 rounded-3xl relative z-10 shadow-sm w-[85%] mx-auto">
              <img src={onCallView} alt="OnCall booking flow showing pickup selection, confirmation, tracking, and shuttle details" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>
      </section>

      

      {/* Reflections */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', sans-serif" }}
          >
            Reflections & Learnings
          </h2>
          <div className="h-2 w-24 bg-[#A8D8EA] rounded-full mb-12" />

          <div className="space-y-6">
            <div className="bg-[#A8D8EA]/10 p-8 rounded-3xl border-2 border-[#A8D8EA]/30">
              <h3 className="text-xl mb-3">Product management thinking shapes the design process</h3>
              <div className="text-black/80 leading-relaxed space-y-4">
                <p>
                  This project taught me how PM principles—user research, competitive analysis, and feature 
                  prioritization—directly inform design decisions. Rather than starting with visual concepts, 
                  we began with user problems and business constraints.

                  This project helped me understand how PM visuals, like user research, competitive analysis, and feature prioritization, 
                  shape the entire design process. Instead of jumping into visuals, we started by understanding real user problems and
                  looking closely at how the current system works.
                </p>
                
                <p>
                  As we compared PassioGo and TransLoc, we realized that their overall information structure wasn’t actually the issue; 
                  the real problem was how certain elements competed with each other and how small details were overlooked, which made the
                  experience feel confusing and very overwhelming for many students.
                </p>

                <p>
                  Throughout the project, I learned how important it is to check assumptions early. A lot of our initial ideas 
                  about what students wanted/needed ended up being off, and talking to actual users helped us shift direction before
                  going too far down the wrong path. Taking into account these principles made the final solution more intentional and much easier to justify.
                </p>
                
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={onBack}
            className="bg-[#3D2817] text-white px-8 py-4 rounded-full hover:bg-[#2a1a0f] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}