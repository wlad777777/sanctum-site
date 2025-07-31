import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-bone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gold/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-4xl font-serif text-obsidian text-center">
                  Impressum
                </CardTitle>
                <div className="w-24 h-1 bg-gradient-gold mx-auto mt-4"></div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Angaben gemäß § 5 TMG
                  </h2>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Sanctum</strong></p>
                    <p>[Vollständiger Name des Betreibers]</p>
                    <p>[Straße und Hausnummer]</p>
                    <p>[PLZ] Nürnberg</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Kontakt
                  </h2>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Telefon:</strong> +49 911 [XXX XXXX]</p>
                    <p><strong>E-Mail:</strong> contact@sanctum.com</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Umsatzsteuer-ID
                  </h2>
                  <p className="text-gray-700">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    [DE XXX XXX XXX]
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Berufsbezeichnung und berufsrechtliche Regelungen
                  </h2>
                  <div className="text-gray-700 space-y-2">
                    <p><strong>Berufsbezeichnung:</strong> Therapeutische Körperarbeit / Energetische Heilarbeit</p>
                    <p><strong>Zuständige Kammer:</strong> [Entsprechende Kammer]</p>
                    <p><strong>Verliehen durch:</strong> Deutschland</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Redaktionell verantwortlich
                  </h2>
                  <div className="text-gray-700">
                    <p>[Name]</p>
                    <p>[Adresse wie oben]</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    EU-Streitschlichtung
                  </h2>
                  <p className="text-gray-700">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 ml-1">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    <br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Verbraucherstreitbeilegung/Universalschlichtungsstelle
                  </h2>
                  <p className="text-gray-700">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherstreitbeilegungsstelle teilzunehmen.
                  </p>
                </div>

                <div className="border-t border-gold/20 pt-8">
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Haftung für Inhalte
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                      nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                      Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte
                      fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                      rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                      allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                      erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                      Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Haftung für Links
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                      Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                      Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                      Seiten verantwortlich.
                    </p>
                    <p>
                      Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                      überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    Urheberrecht
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                      dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                      der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                      Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                    <p>
                      Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                  </div>
                </div>

                <div className="bg-gold/10 border border-gold/30 rounded-lg p-6">
                  <p className="text-sm text-gray-600 italic">
                    <strong>Hinweis:</strong> Dieses Impressum ist ein Platzhalter und muss mit den
                    tatsächlichen Daten des Webseitenbetreibers ausgefüllt werden, bevor die Seite
                    öffentlich zugänglich gemacht wird.
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
