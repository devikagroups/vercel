import { motion } from 'framer-motion'
import { Star, Quote, User } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      name: 'Rahul Sharma',
      role: 'Property Investor',
      rating: 5,
      text: 'Devika Group truly stands out in Delhi\'s real estate market. Their construction quality is excellent, and you can clearly see their experience in every detail. They delivered exactly what they promised, and that too on time.',
    },
    {
      name: 'Priya Verma',
      role: 'Home Buyer',
      rating: 5,
      text: 'I had a great experience with Devika Group. Their team is very knowledgeable and transparent. No fake promises—just solid work and timely delivery. Highly reliable developers.',
    },
    {
      name: 'Amit Gupta',
      role: 'Business Owner',
      rating: 5,
      text: 'What impressed me most about Devika Group is their professionalism. The project was completed on schedule, and the construction quality speaks for itself. They focus on execution, not just words.',
    },
    {
      name: 'Neha Singh',
      role: 'Investor',
      rating: 5,
      text: 'Devika Group delivers what they commit. The builders are experienced and guide you properly throughout the process. You can trust their work and their timelines.',
    },
    {
      name: 'Vikas Mehta',
      role: 'Property Owner',
      rating: 5,
      text: 'I appreciate their honesty and skill. Devika Group doesn\'t rely on flashy marketing—they show their expertise through high-quality construction and timely completion.',
    },
    {
      name: 'Sneha Kapoor',
      role: 'Home Buyer',
      rating: 5,
      text: 'Very satisfied with Devika Group. Their team is knowledgeable, and the project quality is top-notch. They proved their credibility by delivering everything as promised.',
    },
    {
      name: 'Rohit Jain',
      role: 'Commercial Investor',
      rating: 5,
      text: 'A trustworthy developer in Delhi. Devika Group combines experience with strong execution. They don\'t make unrealistic claims—they simply deliver results.',
    },
    {
      name: 'Anjali Bansal',
      role: 'Property Investor',
      rating: 5,
      text: 'From planning to delivery, everything was smooth. Devika Group\'s construction quality is impressive, and their commitment to timelines is commendable.',
    },
    {
      name: 'Karan Malhotra',
      role: 'Business Owner',
      rating: 5,
      text: 'Devika Group shows real expertise in their projects. Their work reflects experience and skill rather than marketing hype. Delivered on time with great quality.',
    },
    {
      name: 'Pooja Arora',
      role: 'Home Buyer',
      rating: 5,
      text: 'Highly professional team. Devika Group kept all their promises and delivered a well-constructed project on schedule. Their knowledge and experience really stand out.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full border border-yellow-500/30 mb-6">
              Testimonials
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              What Our <span className="gold-gradient-text">Customers</span> Say
            </h1>
            <p className="text-xl text-gray-300">
              Real experiences from real customers who have trusted Devika Group with their real estate investments.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '13.4K+', label: 'Happy Customers' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '46+', label: 'Projects Delivered' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="review-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 gold-gradient rounded-xl flex items-center justify-center opacity-20">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-yellow-600">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Promise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built on <span className="gold-gradient-text">Trust & Transparency</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Devika Group, we believe that every customer deserves honesty, quality, and timely delivery. Our 70+ years of legacy is built on the trust of thousands of satisfied customers who have chosen us for their real estate needs. We don&apos;t just build properties—we build lasting relationships.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { value: '70+', label: 'Years of Trust' },
                { value: '6.5M+', label: 'Sq Ft Delivered' },
                { value: '46+', label: 'Completed Projects' },
                { value: '100%', label: 'Commitment' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-display text-3xl font-bold gold-gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="gold-gradient-text">Satisfied Customers</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Experience the Devika Group difference. Let us help you find your perfect space with the same commitment to quality and service that has earned us the trust of thousands.
            </p>
            <button className="gold-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Get In Touch
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
      </section>
    </div>
  )
}

export default Reviews