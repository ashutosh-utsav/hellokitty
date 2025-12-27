const AboutUs = () => {
  const coverageAreas = [
    'Defence and national security policies',
    'Global geopolitics and strategic affairs',
    'Defence industry developments and market trends',
    'New military platforms, technologies, and innovation',
    'Interviews and perspectives from defence experts and strategic thinkers',
    'Military modernisation programmes and force restructuring',
    'Defence budgets, procurement, and policy dynamics',
    'Commentary, opinion pieces, and strategic analysis',
    'Special reports on emerging technologies, regional security challenges, and major defence programmes'
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4 italic">
              Decoding Modern Warfare and Strategy
            </p>
          </div>
        </div>
      </section>

      {/* About Defence Wings */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Defence Wings is a global defence and strategic affairs platform dedicated to delivering timely, credible, and insightful coverage of military, security, and geopolitical developments. Our content reaches senior leaders, policymakers, defence professionals, industry stakeholders, researchers, and strategic analysts across the world.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Through DefenceWings.com, we provide up-to-date reporting, in-depth analysis, and expert commentary on breaking developments in defence, national security, and global military affairs. Our platform is optimised for seamless access across desktop and mobile devices, ensuring readers stay informed anytime, anywhere.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our newsletters and special briefings deliver focused, curated insights directly to our subscribers, helping decision-makers track critical trends, policy shifts, and emerging technologies shaping the defence ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Our Coverage */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-8 sm:mb-12 text-center">Our Coverage Includes</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coverageAreas.map((area, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-primary-600 rounded-full mr-4"></div>
                  <p className="text-gray-700">{area}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
              Defence Wings also offers tailored opportunities for organisations to engage with a highly targeted and influential audience through digital advertising, sponsored content, and strategic collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-200">
              Our mission is to inform, analyse, and engage- bridging the gap between defence policy, industry, and strategic thought. We strive to uphold the highest standards of journalistic integrity, accuracy, and relevance, contributing meaningfully to informed discourse on defence and security matters.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-center font-semibold text-primary-400">
              Defence Wings stands as a trusted voice in defence journalism- connecting ideas, insights, and institutions across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have a story tip, feedback, or inquiry? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-navy-900 font-semibold rounded-lg transition transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
