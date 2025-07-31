import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-obsidian text-bone py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="sanctum-gold">Our Philosophy</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Understanding the sacred nature of transformation through conscious touch and breath
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-bone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Core Beliefs */}
            <Card className="border-gold/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-obsidian mb-6">
                  The Sacred Science of Transformation
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p>
                    At Sanctum, we understand that emotional blocks are not merely psychological concepts
                    but dense energetic formations stored within the body. These blocks create barriers
                    to our full expression, joy, and connection to our authentic selves.
                  </p>
                  <p>
                    To dissolve these deep-seated patterns requires an equally powerful flow of healing energy.
                    We work with conscious sexual energy as a natural catalyst—not in a sexual context,
                    but as the most potent life force available to facilitate profound transformation.
                  </p>
                  <p>
                    Through this sacred work, we guide the harmonization of all chakras, creating a state
                    of energetic coherence that allows for authentic self-expression and deep healing.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Methodology */}
            <Card className="border-indigo-500/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-obsidian mb-6">
                  Our Methodology
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-4">Ritual Touch</h3>
                    <p className="text-gray-700">
                      Conscious, intentional touch that honors the body as a sacred temple.
                      Every contact is made with presence, respect, and therapeutic intention.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-4">Breathwork</h3>
                    <p className="text-gray-700">
                      Guided breathing techniques that activate the body's natural healing
                      mechanisms and facilitate the movement of stuck energy.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-4">Sound Healing</h3>
                    <p className="text-gray-700">
                      Vibrational frequencies that help dissolve energetic blocks and
                      create harmonic resonance throughout the body.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-4">Energy Work</h3>
                    <p className="text-gray-700">
                      Subtle energy techniques that work with the body's natural energetic
                      systems to promote healing and integration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ethics & Safety */}
            <Card className="border-gold/20 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-obsidian mb-6">
                  Ethics & Safety
                </h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-3">Strict Boundaries</h3>
                    <p>
                      All sessions maintain clear, professional boundaries. This is therapeutic work
                      conducted with the highest standards of professional ethics.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-3">Confidentiality</h3>
                    <p>
                      Complete discretion and confidentiality are paramount. NDA agreements are
                      available for clients requiring additional privacy assurance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-3">Consent & Comfort</h3>
                    <p>
                      Every aspect of the session is discussed and consented to beforehand.
                      Clients maintain complete autonomy over their experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Practitioner */}
            <Card className="border-indigo-500/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-obsidian mb-6">
                  The Sanctum Practitioner
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-serif font-bold text-obsidian">S</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-indigo-600">
                      Master of Sacred Arts
                    </h3>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        With over a decade of experience in sacred bodywork, our practitioner brings
                        together training in multiple healing modalities including tantric practices,
                        somatic therapy, and energy healing.
                      </p>
                      <p>
                        Committed to the highest standards of professional ethics and continuous learning,
                        they provide a safe, sacred container for profound transformation.
                      </p>
                      <p>
                        Each session is approached with reverence, skill, and deep respect for the
                        client's journey and unique needs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-8">
                Ready to experience this sacred transformation?
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-indigo hover:opacity-90 text-bone font-semibold px-8 py-4 shadow-lg"
              >
                <Link href="/contact">Begin Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
