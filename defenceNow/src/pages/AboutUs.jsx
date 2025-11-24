const AboutUs = () => {
  const team = [
    {
      name: 'Admiral James Mitchell',
      role: 'Editor-in-Chief',
      bio: 'Former naval officer with 30 years of experience in strategic defence analysis.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Senior Defence Analyst',
      bio: 'PhD in International Relations, specializing in Asia-Pacific security affairs.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop'
    },
    {
      name: 'Colonel Marcus Rodriguez',
      role: 'Military Affairs Editor',
      bio: 'Retired air force officer with expertise in aerospace and tactical operations.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Emily Thompson',
      role: 'Geopolitics Editor',
      bio: 'Expert in global security dynamics and diplomatic relations.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop'
    }
  ];

  const values = [
    {
      title: 'Accuracy',
      description: 'We maintain the highest standards of journalistic integrity and fact-checking.',
      icon: 'A'
    },
    {
      title: 'Independence',
      description: 'Our editorial team operates free from political or commercial influence.',
      icon: 'I'
    },
    {
      title: 'Expertise',
      description: 'Our analysts bring decades of combined military and intelligence experience.',
      icon: 'E'
    },
    {
      title: 'Timeliness',
      description: 'Breaking news coverage with rapid response to developing situations.',
      icon: 'T'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About DefenceNow</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4">
              Your trusted source for comprehensive defence intelligence and strategic analysis since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              DefenceNow was established to bridge the gap between military affairs and public understanding. 
              We provide in-depth, accurate, and timely coverage of global defence developments, strategic 
              shifts, and geopolitical dynamics that shape our world.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Our team of experienced military professionals, intelligence analysts, and journalists work 
              tirelessly to deliver comprehensive coverage across all domains of modern defence – from naval 
              operations to space warfare, from cyber security to diplomatic relations.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We believe an informed public is essential for democratic oversight of defence policy. Through 
              rigorous reporting and expert analysis, we aim to make complex military and strategic issues 
              accessible to all readers, from policy makers to concerned citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-8 sm:mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-navy-900 to-navy-700 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-8 sm:mb-12 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-navy-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-400">Defence Frontline</h3>
              <p className="text-gray-300">Comprehensive coverage of naval, air, and aerospace operations worldwide.</p>
            </div>
            <div className="bg-navy-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-400">Cosmic Trail</h3>
              <p className="text-gray-300">Space defence, satellite warfare, and orbital security developments.</p>
            </div>
            <div className="bg-navy-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-400">GeoPolitics Desk</h3>
              <p className="text-gray-300">Strategic analysis of global power dynamics and regional conflicts.</p>
            </div>
            <div className="bg-navy-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-400">Think Tank</h3>
              <p className="text-gray-300">Expert insights, policy recommendations, and strategic forecasting.</p>
            </div>
            <div className="bg-navy-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-400">Global Game</h3>
              <p className="text-gray-300">Arms trade, defense economics, and international security cooperation.</p>
            </div>
            <div className="bg-navy-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-400">Truth Line</h3>
              <p className="text-gray-300">Fact-checking, verification, and countering misinformation in defence reporting.</p>
            </div>
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
