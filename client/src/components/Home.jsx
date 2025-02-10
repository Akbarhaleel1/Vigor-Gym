// import React from 'react';
// import { ChevronRight, Dumbbell, Heart, Mail, MapPin, Phone, Star, Users, Calendar, Trophy, Quote } from 'lucide-react';

// const PremiumGymLandingPage = () => {
//   const features = [
//     { icon: <Dumbbell className="w-10 h-10 text-amber-400" />, title: "Elite Equipment", description: "Luxury state-of-the-art fitness equipment from premium brands" },
//     { icon: <Star className="w-10 h-10 text-amber-400" />, title: "Expert Coaching", description: "World-class personal trainers with proven track records" },
//     { icon: <Users className="w-10 h-10 text-amber-400" />, title: "Exclusive Community", description: "Join an elite community of dedicated fitness enthusiasts" },
//     { icon: <Trophy className="w-10 h-10 text-amber-400" />, title: "Proven Results", description: "Transform your lifestyle with our signature methods" }
//   ];

//   const classes = [
//     { type: "ELITE TRAINING", title: "PRECISION STRENGTH", image: "/api/placeholder/400/300" },
//     { type: "CARDIO MASTER", title: "POWER CYCLING", image: "/api/placeholder/400/300" },
//     { type: "ADVANCED", title: "ELITE PERFORMANCE", image: "/api/placeholder/400/300" }
//   ];

//   const plans = [
//     { 
//       title: "SIGNATURE ACCESS",
//       price: "199",
//       period: "PER MONTH",
//       featured: false
//     },
//     { 
//       title: "ELITE MEMBERSHIP",
//       price: "299",
//       period: "PER MONTH",
//       featured: true
//     },
//     { 
//       title: "VIP EXPERIENCE",
//       price: "499",
//       period: "PER MONTH",
//       featured: false
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Alexandra Rivers",
//       role: "CEO & Fitness Enthusiast",
//       image: "/api/placeholder/100/100",
//       quote: "ELITE•FIT has redefined my understanding of premium fitness. The attention to detail and personalized approach is unmatched.",
//     },
//     {
//       name: "Michael Chen",
//       role: "Professional Athlete",
//       image: "/api/placeholder/100/100",
//       quote: "Training here has elevated my performance to new heights. The facilities and expertise of the trainers are world-class.",
//     },
//     {
//       name: "Sarah Martinez",
//       role: "Wellness Influencer",
//       image: "/api/placeholder/100/100",
//       quote: "The perfect blend of luxury and performance. ELITE•FIT delivers an exceptional fitness experience every single time.",
//     },
//     {
//       name: "James Thompson",
//       role: "Executive Coach",
//       image: "/api/placeholder/100/100",
//       quote: "The personalized attention and premium amenities at ELITE•FIT have made my fitness journey both enjoyable and highly effective.",
//     },
//     {
//       name: "Dr. Emily Wong",
//       role: "Sports Medicine Specialist",
//       image: "/api/placeholder/100/100",
//       quote: "As a medical professional, I'm impressed by ELITE•FIT's commitment to proper form and injury prevention while pushing for excellence.",
//     },
//     {
//       name: "Robert Maxwell",
//       role: "Former Olympic Athlete",
//       image: "/api/placeholder/100/100",
//       quote: "Even after competing at the highest levels, ELITE•FIT continues to challenge and inspire me. Their approach to fitness is truly revolutionary.",
//     }
//   ];

//   const stats = [
//     { number: "15+", label: "YEARS OF EXCELLENCE" },
//     { number: "50+", label: "ELITE TRAINERS" },
//     { number: "1000+", label: "SUCCESS STORIES" },
//     { number: "25+", label: "SIGNATURE PROGRAMS" }
//   ];

//   return (
//     <div className="min-h-screen bg-zinc-900 text-white">
//       {/* Hero Section */}
//       <header className="relative h-screen">
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
//         <img src="/api/placeholder/1920/1080" alt="Luxury Gym" className="object-cover w-full h-full" />
//         <div className="absolute top-0 left-0 right-0 z-20 p-8">
//           <nav className="flex items-center justify-between max-w-7xl mx-auto">
//             <div className="text-3xl font-bold tracking-wider">ELITE<span className="text-amber-400">•</span>FIT</div>
//             <div className="hidden md:flex space-x-12 text-sm tracking-widest">
//               <a href="#" className="hover:text-amber-400 transition-colors">HOME</a>
//               <a href="#" className="hover:text-amber-400 transition-colors">EXPERIENCE</a>
//               <a href="#" className="hover:text-amber-400 transition-colors">TRAINING</a>
//               <a href="#" className="hover:text-amber-400 transition-colors">MEMBERSHIP</a>
//               <a href="#" className="hover:text-amber-400 transition-colors">CONNECT</a>
//             </div>
//           </nav>
//         </div>
//         <div className="absolute bottom-1/3 left-0 right-0 z-20 px-8">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">ELEVATE YOUR<br /><span className="text-amber-400">EXCELLENCE</span></h1>
//             <p className="text-xl md:text-2xl mb-12 tracking-wide max-w-2xl">Where luxury meets performance. Transform your life in an environment designed for the extraordinary.</p>
//             <button className="bg-amber-400 text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-amber-300 transition-colors tracking-wider">
//               BEGIN YOUR JOURNEY
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <section className="py-32 px-8 bg-zinc-800">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//             <div className="relative">
//               <div className="relative z-10">
//                 <img src="/api/placeholder/600/800" alt="Luxury Gym Interior" className="rounded-2xl object-cover w-full h-[600px]" />
//               </div>
//               <div className="absolute top-8 -right-8 bottom-8 w-full border-2 border-amber-400 rounded-2xl"></div>
//             </div>
//             <div>
//               <h2 className="text-5xl font-bold mb-8">ELEVATE YOUR<br />POTENTIAL</h2>
//               <p className="text-zinc-400 text-lg leading-relaxed mb-12">
//                 At ELITE•FIT, we believe in transcending the ordinary. Our state-of-the-art facility spans over 25,000 square feet of thoughtfully designed space, featuring cutting-edge equipment and luxurious amenities. Every detail has been meticulously crafted to deliver an unparalleled fitness experience.
//               </p>
//               <div className="grid grid-cols-2 gap-8">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="border border-zinc-700 rounded-xl p-6 text-center">
//                     <div className="text-3xl font-bold text-amber-400 mb-2">{stat.number}</div>
//                     <div className="text-sm tracking-wider text-zinc-400">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       {/* <section className="py-32 px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-24">THE ELITE DIFFERENCE</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//             {features.map((feature, index) => (
//               <div key={index} className="p-8 bg-zinc-800 rounded-2xl hover:bg-zinc-700 transition-colors">
//                 <div className="flex justify-center mb-6">{feature.icon}</div>
//                 <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
//                 <p className="text-zinc-400 text-center leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Classes Section */}
//       <section className="py-32 px-8 bg-zinc-800">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-24">SIGNATURE PROGRAMS</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {classes.map((class_, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-2xl">
//                 <img src={class_.image} alt={class_.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
//                   <span className="text-amber-400 tracking-wider mb-2">{class_.type}</span>
//                   <h3 className="text-3xl font-bold mb-4">{class_.title}</h3>
//                   <div className="flex items-center space-x-2 text-sm tracking-wider">
//                     <span>EXPLORE PROGRAM</span>
//                     <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       {/* <section className="py-32 px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-24">SUCCESS STORIES</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-zinc-800 p-12 rounded-2xl relative hover:bg-zinc-700 transition-colors">
//                 <Quote className="w-12 h-12 text-amber-400 mb-8" />
//                 <p className="text-zinc-300 text-lg leading-relaxed mb-8">
//                   {testimonial.quote}
//                 </p>
//                 <div className="flex items-center">
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name} 
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h4 className="font-bold">{testimonial.name}</h4>
//                     <p className="text-zinc-400 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Pricing Section */}
//       {/* <section className="py-32 px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-24">MEMBERSHIP TIERS</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {plans.map((plan, index) => (
//               <div key={index} className={`${plan.featured ? 'bg-amber-400 text-black' : 'bg-zinc-800'} p-12 rounded-2xl relative overflow-hidden group`}>
//                 {plan.featured && (
//                   <div className="absolute top-6 right-6">
//                     <Star className="w-6 h-6" />
//                   </div>
//                 )}
//                 <h3 className="text-2xl font-bold mb-8 tracking-wider">{plan.title}</h3>
//                 <div className="text-5xl font-bold mb-4">
//                   <span className="text-3xl">$</span>{plan.price}
//                 </div>
//                 <p className={`${plan.featured ? 'text-black/70' : 'text-zinc-400'} mb-12 tracking-wider`}>{plan.period}</p>
//                 <ul className={`space-y-6 mb-12 ${plan.featured ? 'text-black/80' : 'text-zinc-400'}`}>
//                   <li className="flex items-center">
//                     <ChevronRight className="w-5 h-5 mr-2" />
//                     Unlimited Access
//                   </li>
//                   <li className="flex items-center">
//                     <ChevronRight className="w-5 h-5 mr-2" />
//                     Premium Equipment
//                   </li>
//                   <li className="flex items-center">
//                     <ChevronRight className="w-5 h-5 mr-2" />
//                     Elite Training
//                   </li>
//                   <li className="flex items-center">
//                     <ChevronRight className="w-5 h-5 mr-2" />
//                     Spa Access
//                   </li>
//                   <li className="flex items-center">
//                     <ChevronRight className="w-5 h-5 mr-2" />
//                     VIP Events
//                   </li>
//                 </ul>
//                 <button className={`w-full ${plan.featured ? 'bg-black text-white' : 'bg-amber-400 text-black'} py-4 rounded-full font-semibold tracking-wider hover:opacity-90 transition-opacity`}>
//                   SELECT PLAN
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//       {/* Footer */}
//       <footer className="bg-zinc-800 py-24 px-8">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
//           <div>
//             <h2 className="text-3xl font-bold mb-8">ELITE<span className="text-amber-400">•</span>FIT</h2>
//             <p className="text-zinc-400 leading-relaxed">Redefining the boundaries of premium fitness experiences through unparalleled service and expertise.</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-8 tracking-wider">CONNECT</h3>
//             <div className="space-y-6 text-zinc-400">
//               <p className="flex items-center"><MapPin className="w-5 h-5 mr-4 text-amber-400" /> 888 Luxury Avenue</p>
//               <p className="flex items-center"><Phone className="w-5 h-5 mr-4 text-amber-400" /> +1 888.ELITE.FIT</p>
//               <p className="flex items-center"><Mail className="w-5 h-5 mr-4 text-amber-400" /> concierge@elitefit.com</p>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-8 tracking-wider">QUICK LINKS</h3>
//             <ul className="space-y-6 text-zinc-400">
//               <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-amber-400 transition-colors">Our Programs</a></li>
//               <li><a href="#" className="hover:text-amber-400 transition-colors">Success Stories</a></li>
//               <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-8 tracking-wider">NEWSLETTER</h3>
//             <p className="text-zinc-400 mb-6">Join our exclusive community</p>
//             <div className="flex">
//               <input 
//                 type="email" 
//                 placeholder="Your email" 
//                 className="bg-zinc-900 px-6 py-4 rounded-l-full w-full focus:outline-none focus:ring-2 focus:ring-amber-400" 
//               />
//               <button className="bg-amber-400 text-black px-8 rounded-r-full hover:bg-amber-300 transition-colors">
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumGymLandingPage;










import React from 'react';
import { ChevronRight, Dumbbell, Heart, Mail, MapPin, Phone, Star, Users, Calendar, Trophy, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiumGymLandingPage = () => {
  const features = [
    {
      icon: <Dumbbell className="w-12 h-12 text-amber-400" />,
      title: "Elite Equipment",
      description: "State-of-the-art fitness technology and premium equipment for optimal performance."
    },
    {
      icon: <Users className="w-12 h-12 text-amber-400" />,
      title: "Expert Trainers",
      description: "World-class personal trainers dedicated to your fitness journey."
    },
    {
      icon: <Heart className="w-12 h-12 text-amber-400" />,
      title: "Wellness Focus",
      description: "Comprehensive approach to health, combining fitness with wellness services."
    },
    {
      icon: <Trophy className="w-12 h-12 text-amber-400" />,
      title: "Results Driven",
      description: "Proven methods and personalized programs for achieving your goals."
    }
  ];

  const classes = [
    {
      type: "STRENGTH",
      title: "Power Elite",
    },
    {
      type: "CARDIO",
      title: "Endurance Max",
    },
    {
      type: "FLEXIBILITY",
      title: "Elite Flow",
    }
  ];

  const plans = [
    {
      title: "CLASSIC",
      price: "99",
      period: "per month",
      featured: false
    },
    {
      title: "ELITE",
      price: "199",
      period: "per month",
      featured: true
    },
    {
      title: "ULTIMATE",
      price: "299",
      period: "per month",
      featured: false
    }
  ];

  const testimonials = [
    {
      quote: "Joining ELITE•FIT was the best decision I've made for my fitness journey. The facilities and trainers are world-class.",
      name: "Sarah Johnson",
      role: "Executive Member"
    },
    {
      quote: "The attention to detail and personalized approach sets ELITE•FIT apart. It's more than a gym, it's a lifestyle.",
      name: "Michael Chen",
      role: "Elite Member"
    },
    {
      quote: "Incredible facilities, exceptional service, and amazing results. ELITE•FIT has transformed my approach to fitness.",
      name: "Emma Thompson",
      role: "Premium Member"
    }
  ];

  const stats = [
    {
      number: "25,000",
      label: "SQUARE FEET"
    },
    {
      number: "50+",
      label: "EXPERT TRAINERS"
    },
    {
      number: "1,000+",
      label: "ELITE MEMBERS"
    },
    {
      number: "100%",
      label: "SATISFACTION"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Gym" 
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 right-0 z-20 p-8">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-wider"
            >
              WIGER<span className="text-amber-400">•</span>GYM
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex space-x-12 text-sm tracking-widest"
            >
              {["HOME", "EXPERIENCE", "TRAINING", "MEMBERSHIP", "CONNECT"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-amber-400 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </nav>
        </div>
        <div className="absolute bottom-1/3 left-0 right-0 z-20 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="block"
              >
                ELEVATE YOUR
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-amber-400 block"
              >
                EXCELLENCE
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-xl md:text-2xl mb-12 tracking-wide max-w-2xl"
            >
              Where luxury meets performance. Transform your life in an environment designed for the extraordinary.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-400 text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-amber-300 transition-colors tracking-wider group relative overflow-hidden"
            >
              <span className="relative z-10">BEGIN YOUR JOURNEY</span>
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 px-8 bg-zinc-800">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Luxury Gym Interior" 
                  className="rounded-2xl object-cover w-full h-[600px]"
                />
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-8 -right-8 bottom-8 w-full border-2 border-amber-400 rounded-2xl"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl font-bold mb-8">ELEVATE YOUR<br />POTENTIAL</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                At ELITE•FIT, we believe in transcending the ordinary. Our state-of-the-art facility spans over 25,000 square feet of thoughtfully designed space, featuring cutting-edge equipment and luxurious amenities. Every detail has been meticulously crafted to deliver an unparalleled fitness experience.
              </p>
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-2 gap-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="border border-zinc-700 rounded-xl p-6 text-center transform transition-transform duration-300 hover:border-amber-400"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-3xl font-bold text-amber-400 mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm tracking-wider text-zinc-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl font-bold text-center mb-24"
          >
            THE ELITE DIFFERENCE
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-8 bg-zinc-800 rounded-2xl hover:bg-zinc-700 transition-all duration-300 transform hover:shadow-2xl hover:shadow-amber-400/20"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="flex justify-center mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-zinc-400 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Classes Section */}
      <section className="py-32 px-8 bg-zinc-800">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl font-bold text-center mb-24"
          >
            SIGNATURE PROGRAMS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {classes.map((class_, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <motion.img 
                  src={
                    index === 0
                      ? "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                      : index === 1
                      ? "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                      : "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  }
                  alt={class_.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8"
                >
                  <span className="text-amber-400 tracking-wider mb-2">{class_.type}</span>
                  <h3 className="text-3xl font-bold mb-4">{class_.title}</h3>
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="flex items-center space-x-2 text-sm tracking-wider"
                  >
                    <span>EXPLORE PROGRAM</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl font-bold text-center mb-24"
          >
            SUCCESS STORIES
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-800 p-12 rounded-2xl relative hover:bg-zinc-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-amber-400/20"
              >
                <Quote className="w-12 h-12 text-amber-400 mb-8" />
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <img 
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl font-bold text-center mb-16"
          >
            MEMBERSHIP TIERS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className={`${
                  plan.featured ? 'bg-amber-400 text-black' : 'bg-zinc-800'
                } p-12 rounded-2xl relative overflow-hidden group transform transition-all duration-300 hover:shadow-2xl ${
                  plan.featured ? 'hover:shadow-amber-400/50' : 'hover:shadow-zinc-700/50'
                }`}
              >
                {plan.featured && (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-6 right-6"
                  >
                    <Star className="w-6 h-6" />
                  </motion.div>
                )}
                <h3 className="text-2xl font-bold mb-8 tracking-wider">{plan.title}</h3>
                <div className="text-5xl font-bold mb-4">
                  <span className="text-3xl">$</span>{plan.price}
                </div>
                <p className={`${
                  plan.featured ? 'text-black/70' : 'text-zinc-400'
                } mb-12 tracking-wider`}>
                  {plan.period}
                </p>
                <ul className={`space-y-6 mb-12 ${
                  plan.featured ? 'text-black/80' : 'text-zinc-400'
                }`}>
                  {['Unlimited Access', 'Premium Equipment', 'Elite Training', 'Spa Access', 'VIP Events'].map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center"
                    >
                      <ChevronRight className="w-5 h-5 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${
                    plan.featured ? 'bg-black text-white' : 'bg-amber-400 text-black'
                  } py-4 rounded-full font-semibold tracking-wider hover:opacity-90 transition-all duration-300`}
                >
                  SELECT PLAN
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-800 py-24 px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">ELITE<span className="text-amber-400">•</span>FIT</h2>
            <p className="text-zinc-400 leading-relaxed">
              Redefining the boundaries of premium fitness experiences through unparalleled service and expertise.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-8 tracking-wider">CONNECT</h3>
            <div className="space-y-6 text-zinc-400">
              <motion.p 
                whileHover={{ x: 10 }}
                className="flex items-center cursor-pointer"
              >
                <MapPin className="w-5 h-5 mr-4 text-amber-400" /> 888 Luxury Avenue
              </motion.p>
              <motion.p 
                whileHover={{ x: 10 }}
                className="flex items-center cursor-pointer"
              >
                <Phone className="w-5 h-5 mr-4 text-amber-400" /> +1 888.ELITE.FIT
              </motion.p>
              <motion.p 
                whileHover={{ x: 10 }}
                className="flex items-center cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-4 text-amber-400" /> concierge@elitefit.com
              </motion.p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-8 tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-6 text-zinc-400">
              {['About Us', 'Our Programs', 'Success Stories', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 10, color: '#fbbf24' }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-8 tracking-wider">NEWSLETTER</h3>
            <p className="text-zinc-400 mb-6">Join our exclusive community</p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex"
            >
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-zinc-900 px-6 py-4 rounded-l-full w-full focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300" 
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-amber-400 text-black px-8 rounded-r-full hover:bg-amber-300 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
};

export default PremiumGymLandingPage;