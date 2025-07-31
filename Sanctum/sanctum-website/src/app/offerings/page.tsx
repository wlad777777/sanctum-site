import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Heart, Repeat, Users, Clock, Star, Shield } from "lucide-react";

export default function OfferingsPage() {
  const offerings = [
    {
      id: "individual",
      icon: Sparkles,
      title: "1:1 Dedicated Ceremony",
      duration: "90-120 minutes",
      price: "Individual consultation",
      description: "A private ritual session designed for profound individual transformation.",
      features: [
        "Personalized ritual design",
        "Sacred space preparation",
        "Guided breathwork and energy activation",
        "Conscious touch healing",
        "Integration support",
        "Follow-up consultation"
      ],
      ideal: "Perfect for first-time clients or those seeking deep personal healing"
    },
    {
      id: "couple",
      icon: Heart,
      title: "Couple's Sacred Journey",
      duration: "150-180 minutes",
      price: "Couple consultation",
      description: "A sacred experience for partners to explore connection and transformation together.",
      features: [
        "Relationship healing focus",
        "Communication enhancement",
        "Sacred intimacy exploration",
        "Energetic harmonization",
        "Couple's breathwork",
        "Relationship integration guidance"
      ],
      ideal: "For couples seeking deeper connection and healing together"
    },
    {
      id: "packages",
      icon: Repeat,
      title: "Transformational Packages",
      duration: "3, 7, or 13 sessions",
      price: "Package consultation",
      description: "Immersive packages for comprehensive transformation and growth.",
      features: [
        "Progressive healing journey",
        "Customized session flow",
        "Integration periods",
        "Level Circle access",
        "Ongoing support",
        "Transformation tracking"
      ],
      ideal: "For those committed to deep, lasting transformation"
    },
    {
      id: "circles",
      icon: Users,
      title: "Level Circles",
      duration: "Monthly gatherings",
      price: "Included with packages",
      description: "Exclusive group circles for integration and community support.",
      features: [
        "Group integration work",
        "Shared wisdom circles",
        "Community building",
        "Continuing education",
        "Peer support network",
        "Advanced practices"
      ],
      ideal: "Available after 1st, 3rd, and 7th ceremony completions"
    }
  ];

  const additionalServices = [
    {
      title: "Pre-Session Consultation",
      description: "30-minute intake call to ensure alignment and prepare for your journey",
      included: "Included with all offerings"
    },
    {
      title: "Integration Support",
      description: "Follow-up guidance to help integrate your experience into daily life",
      included: "2 weeks post-session"
    },
    {
      title: "Confidentiality Agreement",
      description: "Complete privacy protection with NDA available upon request",
      included: "Always included"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-obsidian text-bone py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="sanctum-gold">Sacred Offerings</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Each pathway is crafted to meet you where you are and guide you to where you're meant to be
            </p>
          </div>
        </div>
      </section>

      {/* Main Offerings */}
      <section className="py-20 bg-bone">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={offering.id} className="max-w-6xl mx-auto">
                  <Card className={`border-2 ${isEven ? 'border-gold/30' : 'border-indigo-500/30'} overflow-hidden shadow-xl`}>
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Content */}
                      <div className={`p-8 lg:p-12 ${!isEven ? 'lg:col-start-2' : ''}`}>
                        <CardHeader className="p-0 mb-6">
                          <div className={`w-16 h-16 ${isEven ? 'bg-gradient-gold' : 'bg-gradient-indigo'} rounded-full flex items-center justify-center mb-4`}>
                            <IconComponent className={`w-8 h-8 ${isEven ? 'text-obsidian' : 'text-bone'}`} />
                          </div>
                          <CardTitle className="text-3xl font-serif text-obsidian mb-2">
                            {offering.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className={`px-3 py-1 rounded-full ${isEven ? 'bg-gold/20 text-gold' : 'bg-indigo-100 text-indigo-600'}`}>
                              <Clock className="w-4 h-4 inline mr-1" />
                              {offering.duration}
                            </span>
                            <span className={`px-3 py-1 rounded-full ${isEven ? 'bg-gold/20 text-gold' : 'bg-indigo-100 text-indigo-600'}`}>
                              <Star className="w-4 h-4 inline mr-1" />
                              {offering.price}
                            </span>
                          </div>
                        </CardHeader>

                        <CardContent className="p-0">
                          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            {offering.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-semibold text-obsidian mb-3">What's Included:</h4>
                            <ul className="space-y-2">
                              {offering.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                  <div className={`w-2 h-2 ${isEven ? 'bg-gold' : 'bg-indigo-500'} rounded-full mr-3 flex-shrink-0`}></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className={`p-4 rounded-lg ${isEven ? 'bg-gold/10' : 'bg-indigo-50'} mb-6`}>
                            <p className="text-sm text-gray-600 italic">
                              <strong>Ideal for:</strong> {offering.ideal}
                            </p>
                          </div>

                          <Button
                            asChild
                            className={`${isEven ? 'bg-gradient-gold hover:opacity-90 text-obsidian' : 'bg-gradient-indigo hover:opacity-90 text-bone'} font-semibold px-6 py-3`}
                          >
                            <Link href="/contact">Learn More</Link>
                          </Button>
                        </CardContent>
                      </div>

                      {/* Visual Element */}
                      <div className={`${isEven ? 'bg-gradient-to-br from-gold/20 to-gold/5' : 'bg-gradient-to-br from-indigo-500/20 to-indigo-500/5'} p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                        <div className="text-center">
                          <div className={`w-32 h-32 ${isEven ? 'bg-gradient-gold' : 'bg-gradient-indigo'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                            <IconComponent className={`w-16 h-16 ${isEven ? 'text-obsidian' : 'text-bone'}`} />
                          </div>
                          <h3 className="text-2xl font-serif font-semibold text-obsidian mb-2">
                            {offering.title}
                          </h3>
                          <p className="text-gray-600">
                            {offering.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-obsidian to-gray-900 text-bone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 sanctum-gold">
              Included Support Services
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Every journey includes comprehensive support for your transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-bone/10 border-gold/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-serif font-semibold mb-3 sanctum-gold">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                    {service.included}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-bone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-obsidian mb-8">
              Investment in Your Transformation
            </h2>
            <div className="bg-white border-2 border-gold/30 rounded-lg p-8 mb-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Due to the bespoke and deeply personal nature of our work, all offerings are
                individually priced based on specific needs, duration, and level of support required.
              </p>
              <p className="text-xl font-semibold text-indigo-600 mb-6">
                "This is a high-end, premium experience for those truly committed to their transformation."
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Shield className="w-4 h-4 mr-2 text-gold" />
                  Payment plans available
                </div>
                <div className="flex items-center justify-center">
                  <Star className="w-4 h-4 mr-2 text-indigo-500" />
                  Satisfaction guarantee
                </div>
                <div className="flex items-center justify-center">
                  <Heart className="w-4 h-4 mr-2 text-gold" />
                  Limited availability
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-indigo hover:opacity-90 text-bone font-semibold px-8 py-4 shadow-lg"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
