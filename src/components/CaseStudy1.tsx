import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Users, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect } from 'react';
const wireframesImage = '/images/mona-wireframes.png';
const lofiPrototypeImage = '/images/mona-lofi.png';
const finalScreen1 = '/images/mona-welcome.png';
const finalScreen2 = '/images/mona-home.png';
const finalScreen3 = '/images/mona-ai.png';
const finalScreen4 = '/images/mona-budget.png';
const finalScreen5 = '/images/mona-trips.png';
const finalScreen6 = '/images/mona-spending.png';
const finalScreen7 = '/images/mona-challenges.png';
const onboardingScreen1 = '/images/mona-settings.png';
const onboardingScreen2 = '/images/mona-create-account.png';
const onboardingScreen3 = '/images/mona-onboarding-question.png';
const onboardingScreen4 = '/images/mona-bank-connection.png';
const heroScreen1 = '/images/mona-welcome.png';
const heroScreen2 = '/images/mona-home.png';
const heroScreen3 = '/images/mona-ai.png';

interface CaseStudy1Props {
  onBack: () => void;
}

export function CaseStudy1({ onBack }: CaseStudy1Props) {
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
            Mona: Your Personal Finance Agent
          </h1>
          
          <p className="text-xl text-black/70 mb-12 max-w-3xl mx-auto">
            An AI-powered financial companion that learns your habits and supports you with the right guidance at the right time.
          </p>

          {/* Hero Image - 3 Main Screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl p-12 bg-white"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="w-full flex items-center justify-center gap-6 bg-white">
              <motion.div 
                className="flex-1 max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ImageWithFallback
                  src={heroScreen1}
                  alt="Mona welcome screen"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
              <motion.div 
                className="flex-1 max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <ImageWithFallback
                  src={heroScreen2}
                  alt="Mona home screen"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
              <motion.div 
                className="flex-1 max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <ImageWithFallback
                  src={heroScreen3}
                  alt="Mona AI agent screen"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-white p-8 rounded-3xl border-2 border-black">
              <Calendar className="w-6 h-6 mb-4 text-[#A8D8EA]" />
              <h3 className="mb-2">Timeline</h3>
              <p className="text-black/70 text-[16px]">4 months</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border-2 border-black">
              <Users className="w-6 h-6 mb-4 text-[#3D2817]" />
              <h3 className="mb-2">Role</h3>
              <p className="text-black/70">Lead UX/UI Designer, leading visual design, flows, and overall product feel.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border-2 border-black">
              <Target className="w-6 h-6 mb-4 text-[#A8D8EA]" />
              <h3 className="mb-2">Team</h3>
              <p className="text-black/70">2 Designers</p>
              <p className="text-black/70">2 Project Leads overseeing both designers and developers</p>
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
                Most personal finance apps are passive observers, not active partners. 
                Users only check their apps when something goes wrong, generic advice doesn't fit individual needs, 
                and information overload prevents informed decisions.
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
                Mona is an AI-powered personal finance agent that proactively supports users. 
                It learns from their behavior, checks in at the right moments, and adapts to their unique financial journey with timely,
                context-aware guidance.
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
                We conducted 22 user interviews with college-aged students to understand 
                their financial management habits and pain points. We formulated interview 
                questions and led the data analysis, synthesizing insights across key themes: 
                validation of the core problem, behavioral patterns, motivations, and feature preferences.. We also ran a competitive analysis 
                of major personal finance apps (Rocket Money, Fidelity, etc.) to identify gaps in the market and where Mona could stand out.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Key Insights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#A8D8EA]/10 p-6 rounded-2xl border-2 border-[#A8D8EA]/30">
                  <p className="text-[16px] text-[rgba(0,0,0,0.8)]">
                    <strong>Guilt, not support, dominates the relationship with money:</strong> Many users avoided their finances because checking their spending felt "mentally draining." The emotional weight and "shame" mattered more than the actual numbers.
                  </p>
                </div>
                <div className="bg-[#3D2817]/10 p-6 rounded-2xl border-2 border-[#3D2817]/30">
                <strong>Visual progress drives motivation:</strong> Multiple users emphasized being "visual people" who wanted to see savings progress through bars and trackers. Gamification could increase engagement.
                </div>
                <div className="bg-[#A8D8EA]/10 p-6 rounded-2xl border-2 border-[#A8D8EA]/30">
                <strong>Users wanted actionable guidance, not <em>just</em> charts:</strong> Participants could see their spending charts but didn't know what to <em>do</em> with that info. They needed proactive suggestions tailored to their behavior.
                </div>
                <div className="bg-[#3D2817]/10 p-6 rounded-2xl border-2 border-[#3D2817]/30">
                <strong>Short-term progress feels more motivating than long-term planning:</strong> Students connected more with goals they could act on today or this week/month. 
                  Long-term savings felt too abstract, so the product needed to focus on immediate, tangible wins.
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
              {/* Ideation */}
              <div>
                <h3 className="text-2xl mb-4">Ideation & Sketches</h3>
                <p className="text-black/80 leading-relaxed mb-8">
                  Using our research insights, I began sketching initial concepts exploring different approaches 
                  for a proactive AI financial companion. We met with our project leads to discuss desired features
                  and functionalities, as we were still in the process of defining the app's scope.
                </p>
                <div className="rounded-3xl overflow-hidden bg-white max-w-3xl mx-auto relative z-10 shadow-sm">
                  <ImageWithFallback 
                    src={wireframesImage} 
                    alt="Initial wireframes and sketches for Mona app"
                    className="w-2/3 h-auto mx-auto bg-white"
                  />
                </div>
              </div>

              {/* Iterations */}
              <div>
                <h3 className="text-2xl mb-4">Initial Lo-Fi Prototype</h3>
                <p className="text-black/80 leading-relaxed mb-8">
                 We each created our own explorations before coming together to finalize our route. After experimenting with different layouts for a while, 
                  we decided to present these six low fidelity screens to our team.
                </p>
                <div className="rounded-3xl overflow-hidden bg-white relative z-10 shadow-sm">
                  <ImageWithFallback 
                    src={lofiPrototypeImage} 
                    alt="Initial lo-fi prototype screens for Mona app"
                    className="w-full max-w-2xl mx-auto h-auto bg-white"
                  />
                </div>
              </div>

              {/* Feedback & Refinement */}
              <div>
                <h3 className="text-2xl mb-4">Feedback & Refinement</h3>
                <p className="text-black/80 leading-relaxed mb-8">
                  After sharing initial lo-fi wireframes with users and project leads, we iterated on several major areas to better support real user needs and align with product goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[rgba(168,216,234,0.1)] p-6 rounded-2xl border-2 border-[#2B5FA6]/20 relative z-10">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">*</span>
                      <div>
                        <h4 className="mb-2"><strong>Simplified Home Screen Hierarchy</strong></h4>
                        <p className="text-black/80">Users felt the home screen was overwhelming and wanted a clearer hierarchy. 
                          At the same time, our project leads wanted quick access to most pages directly from home. We reworked the layout to balance both needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[rgba(168,216,234,0.1)] p-6 rounded-2xl border-2 border-[#2B5FA6]/20 relative z-10">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">*</span>
                      <div>
                        <h4 className="mb-2"><strong>Proactive AI Chat Suggestions</strong></h4>
                        <p className="text-black/80">The AI chat was well-received, 
                          but users didn't always know where to start. Instead of hiding topics behind a
                          "Topics" button, we surfaced suggested prompts directly in the chat view.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[rgba(168,216,234,0.1)] p-6 rounded-2xl border-2 border-[#2B5FA6]/20 relative z-10">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">*</span>
                      <div>
                        <h4 className="mb-2"><strong>Enhanced Budget Visualizations</strong></h4>
                        <p className="text-black/80">Users requested better visual breakdowns of their spending across
                          months, categories, and habits. We explored different comparisons and clearer ways to visualize remaining budgets.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[rgba(168,216,234,0.1)] p-6 rounded-2xl border-2 border-[#2B5FA6]/20 relative z-10">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">*</span>
                      <div>
                        <h4 className="mb-2"><strong>Integrated Goals View</strong></h4>
                        <p className="text-black/80">Project leads didn't want a separate Goals page, preferring instead to see goals 
                          integrated within the budget view for better connection between spending and savings objectives.</p>
                      </div>
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
            After multiple rounds of iteration and user feedback, we landed on a high-fidelity prototype 
            that balances simplicity with functionality. My goal was to create an experience
            that makes financial management feel approachable, even fun, for Gen Z users.
          </p>

          <div className="bg-white p-8 -mx-8 rounded-3xl relative z-10 shadow-sm">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
              <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                <ImageWithFallback 
                  src={finalScreen1} 
                  alt="Mona app home screen showing savings overview"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                <ImageWithFallback 
                  src={finalScreen2} 
                  alt="Mona AI Agent chat interface"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                <ImageWithFallback 
                  src={finalScreen3} 
                  alt="Mona budget overview screen"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                <ImageWithFallback 
                  src={finalScreen4} 
                  alt="Mona trips and events budget screen"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                <ImageWithFallback 
                  src={finalScreen5} 
                  alt="Mona spending overview screen"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                <ImageWithFallback 
                  src={finalScreen6} 
                  alt="Mona challenges screen"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                <ImageWithFallback 
                  src={finalScreen7} 
                  alt="Mona settings screen"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Onboarding Screens */}
          <div className="mt-12">
            <h3 className="text-2xl mb-6">Welcome & Onboarding</h3>
            <p className="text-black/80 leading-relaxed mb-8">
              I designed an onboarding flow that introduces users to Mona's core features while gathering 
              key information to personalize their financial journey from day one.
            </p>
            
            <div className="bg-white p-8 rounded-3xl relative z-10 shadow-sm">
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                    <ImageWithFallback 
                      src={onboardingScreen1} 
                      alt="Mona welcome screen"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                    <ImageWithFallback 
                      src={onboardingScreen2} 
                      alt="Mona create account screen"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                    <ImageWithFallback 
                      src={onboardingScreen3} 
                      alt="Mona onboarding question screen"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                    <ImageWithFallback 
                      src={onboardingScreen4} 
                      alt="Mona bank connection screen"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Prototype */}
          <div className="mt-16">
            <h3 className="text-2xl mb-6">Interactive Prototype</h3>
            
            <div className="bg-white p-8 rounded-3xl relative z-10 shadow-sm">
              <div className="w-full flex justify-center">
                <iframe 
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
                  width="800" 
                  height="450" 
                  src="https://embed.figma.com/proto/QId9TFI5mUa81o4xUsi4SL/Mona-APP--Copy-?page-id=0%3A1&node-id=2060-163&viewport=-456%2C-6449%2C0.73&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2043%3A177&show-proto-sidebar=1&hotspot-hints=0&embed-host=share" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Handoff & Next Steps */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-10 rounded-3xl">
              <div className="space-y-6 text-black/80 leading-relaxed">
                <p>
                  Through extensive user research, wireframing, and iterative design, we created a 
                  prototype that directly addresses our users' biggest financial pain points. The design 
                  balances simplicity with powerful features, making financial literacy accessible without feeling 
                  too overwhelming.
                </p>
                
                <p>
                  Each screen was built with intention, grounded in user insights, and supported by a consistent visual language.
                </p>

                <div className="mt-8 pt-8 border-t-2 border-black/10">
                  <p className="text-[#3D2817]">
                    <strong>This design is now ready to be handed off to the development team,</strong> 
                    with full documentation, component specs, and interaction details to ensure a smooth handoff.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
              <h3 className="text-xl mb-3">Design starts with what users actually need</h3>
              <div className="text-black/80 leading-relaxed space-y-4">
                <p>
                  At the beginning of this process, we got caught up in the excitement of all the potential 
                  features we could add. It was very tempting to build every feature we brainstormed, 
                  but it became clear that not everything belonged in the first version..
                </p>
                
                <p>
                  Working with our project leads, we prioritized all features into: <strong>P0 (must-have, top priority)</strong>, <strong>P1 
                  (should-have, second top priority)</strong>, and <strong>P2 (nice-to-have, first update of the app)</strong>. For this initial design, 
                  We focused mostly on P0 features for this prototype: the core functionality that would provide immediate value 
                  to users and validate our product direction.
                </p>

                <p>
                  This prioritization framework forced us to make tough decisions, but it kept the design focused and 
                  achievable. By starting with the essentials, we ensured that every feature in the prototype 
                  served a clear user need backed by our research.
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