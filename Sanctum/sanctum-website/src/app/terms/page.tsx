import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-bone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gold/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-4xl font-serif text-obsidian text-center">
                  Terms of Service
                </CardTitle>
                <div className="w-24 h-1 bg-gradient-gold mx-auto mt-4"></div>
                <p className="text-center text-gray-600 mt-4">
                  Allgemeine Geschäftsbedingungen
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-8">

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    1. Scope of Application
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      These Terms of Service apply to all services provided by Sanctum, including
                      individual ceremonies, couple sessions, transformational packages, and related
                      therapeutic bodywork services.
                    </p>
                    <p>
                      By booking and attending a session, you agree to these terms and conditions.
                      Any deviating terms and conditions of the client are not recognized unless
                      expressly agreed to in writing.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    2. Nature of Services
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Professional Therapeutic Work</h3>
                    <p>
                      Sanctum provides professional therapeutic bodywork focused on transformation,
                      healing, and personal growth. Our services are not sexual in nature and maintain
                      strict professional boundaries at all times.
                    </p>

                    <h3 className="text-lg font-semibold">Medical Disclaimer</h3>
                    <p>
                      Our services are complementary wellness practices and do not replace medical
                      treatment. We are not medical doctors and do not diagnose, treat, or cure
                      medical conditions. Clients are advised to consult with medical professionals
                      for health concerns.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    3. Booking and Payment
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Intake Process</h3>
                    <p>
                      All new clients must complete an intake application and consultation call before
                      booking sessions. This ensures mutual alignment and appropriate service provision.
                    </p>

                    <h3 className="text-lg font-semibold">Payment Terms</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Full payment is required before sessions unless payment plan is arranged</li>
                      <li>Payment plans available for package bookings upon approval</li>
                      <li>Payments are non-refundable except in cases of practitioner cancellation</li>
                      <li>All prices are in Euros and include applicable taxes</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    4. Cancellation and Rescheduling
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Client Cancellations</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>48+ hours notice: Full credit for rescheduling</li>
                      <li>24-48 hours notice: 50% charge applies</li>
                      <li>Less than 24 hours: Full session fee applies</li>
                      <li>No-show: Full session fee applies</li>
                    </ul>

                    <h3 className="text-lg font-semibold">Practitioner Cancellations</h3>
                    <p>
                      In rare cases where we must cancel, full refund or rescheduling will be offered
                      with no penalty to the client.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    5. Consent and Boundaries
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Informed Consent</h3>
                    <p>
                      All clients must provide informed consent before sessions. The nature of the work,
                      boundaries, and expectations are clearly discussed and agreed upon beforehand.
                    </p>

                    <h3 className="text-lg font-semibold">Right to Withdraw</h3>
                    <p>
                      Clients have the absolute right to withdraw consent, modify boundaries, or stop
                      a session at any time. Clear communication is essential and respected.
                    </p>

                    <h3 className="text-lg font-semibold">Practitioner Boundaries</h3>
                    <p>
                      The practitioner reserves the right to refuse service or end a session if
                      boundaries are not respected or if the client's behavior is inappropriate.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    6. Confidentiality
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Professional Confidentiality</h3>
                    <p>
                      All client information, session content, and personal details are kept strictly
                      confidential. We do not share client information with third parties except as
                      required by law.
                    </p>

                    <h3 className="text-lg font-semibold">Additional Privacy Protection</h3>
                    <p>
                      Non-disclosure agreements (NDAs) are available upon request for clients requiring
                      additional privacy protection.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    7. Health and Safety
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Health Disclosure</h3>
                    <p>
                      Clients must disclose relevant health conditions, medications, or concerns that
                      might affect the session. This includes physical, mental, and emotional health status.
                    </p>

                    <h3 className="text-lg font-semibold">Age Requirement</h3>
                    <p>
                      Services are only provided to adults 18 years and older. Valid identification
                      may be requested.
                    </p>

                    <h3 className="text-lg font-semibold">Substance Use</h3>
                    <p>
                      Clients under the influence of alcohol or drugs will not be served. Sessions
                      will be cancelled without refund in such cases.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    8. Liability and Insurance
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Limitation of Liability</h3>
                    <p>
                      Our liability is limited to the amount paid for services. We are not liable for
                      indirect, incidental, or consequential damages.
                    </p>

                    <h3 className="text-lg font-semibold">Professional Insurance</h3>
                    <p>
                      Sanctum maintains appropriate professional liability insurance as required by law.
                    </p>

                    <h3 className="text-lg font-semibold">Client Responsibility</h3>
                    <p>
                      Clients participate in sessions at their own risk and are responsible for
                      communicating their limits and needs clearly.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    9. Intellectual Property
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      All content, techniques, and materials used in sessions are proprietary to Sanctum.
                      Recording of sessions is strictly prohibited without written consent.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    10. Governing Law and Disputes
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Applicable Law</h3>
                    <p>
                      These terms are governed by German law. Place of jurisdiction is Nuremberg, Germany.
                    </p>

                    <h3 className="text-lg font-semibold">Dispute Resolution</h3>
                    <p>
                      We encourage direct communication to resolve any concerns. If formal dispute
                      resolution is needed, mediation will be attempted before legal proceedings.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-8">
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    11. Changes to Terms
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      These terms may be updated periodically. Clients will be notified of significant
                      changes, and continued use of services constitutes acceptance of updated terms.
                    </p>
                  </div>
                </div>

                <div className="bg-gold/10 border border-gold/30 rounded-lg p-6">
                  <div className="text-sm text-gray-700">
                    <p><strong>Contact for Terms Questions:</strong></p>
                    <p>Email: contact@sanctum.com</p>
                    <p>Phone: +49 911 XXX XXXX</p>
                    <p><strong>Last Updated:</strong> January 2025</p>
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <p className="text-sm text-indigo-800 italic">
                    <strong>Legal Notice:</strong> These terms are template content and must be
                    reviewed by a qualified attorney before use. Specific legal requirements may
                    vary based on jurisdiction and nature of services provided.
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
