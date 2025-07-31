import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-bone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-indigo-500/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-4xl font-serif text-obsidian text-center">
                  Datenschutzerklärung
                </CardTitle>
                <div className="w-24 h-1 bg-gradient-indigo mx-auto mt-4"></div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    1. Datenschutz auf einen Blick
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Allgemeine Hinweise</h3>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                      personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                      Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>

                    <h3 className="text-lg font-semibold">Datenerfassung auf dieser Website</h3>
                    <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                      Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle"
                      in dieser Datenschutzerklärung entnehmen.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    2. Hosting und Content Delivery Networks (CDN)
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Netlify</h3>
                    <p>
                      Diese Website wird auf Servern von Netlify gehostet. Anbieter ist die Netlify Inc.,
                      44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA.
                    </p>
                    <p>
                      Netlify erfasst in sog. Logfiles folgende Daten: IP-Adresse, Datum und Uhrzeit der
                      Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung,
                      HTTP-Status-Code, übertragene Datenmenge, Website, von der die Anforderung kommt
                      und Informationen zu Browser und Betriebssystem.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    3. Allgemeine Hinweise und Pflichtinformationen
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Datenschutz</h3>
                    <p>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                      Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                      gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    <h3 className="text-lg font-semibold">Hinweis zur verantwortlichen Stelle</h3>
                    <p>
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>Sanctum<br />
                      [Name des Betreibers]<br />
                      [Straße und Hausnummer]<br />
                      [PLZ] Nürnberg<br />
                      Deutschland</p>
                      <p>Telefon: +49 911 [XXX XXXX]<br />
                      E-Mail: contact@sanctum.com</p>
                    </div>

                    <h3 className="text-lg font-semibold">Speicherdauer</h3>
                    <p>
                      Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                      wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                      Datenverarbeitung entfällt.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    4. Datenerfassung auf dieser Website
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Kontaktformular</h3>
                    <p>
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                      dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                      Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                    </p>
                    <p>
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                      sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                      vorvertraglicher Maßnahmen erforderlich ist.
                    </p>

                    <h3 className="text-lg font-semibold">Anfrage per E-Mail, Telefon oder Telefax</h3>
                    <p>
                      Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
                      inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der
                      Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    5. Ihre Rechte
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Sie haben folgende Rechte:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                      <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
                      <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
                      <li>Recht auf Einschränkung der Datenverarbeitung</li>
                      <li>Recht auf Datenübertragbarkeit</li>
                      <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten bei uns</li>
                      <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    6. Besondere Vertraulichkeit bei therapeutischen Dienstleistungen
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold">Therapeutische Schweigepflicht</h3>
                    <p>
                      Als Anbieter therapeutischer Körperarbeit unterliegen wir einer besonderen
                      Schweigepflicht. Alle Informationen über Ihre Person, Ihre Gesundheit und
                      die durchgeführten Behandlungen werden streng vertraulich behandelt.
                    </p>

                    <h3 className="text-lg font-semibold">Zusätzliche Vertraulichkeitsvereinbarungen</h3>
                    <p>
                      Auf Wunsch stellen wir Ihnen gerne eine zusätzliche Vertraulichkeitsvereinbarung
                      (NDA) zur Verfügung, die über die gesetzlichen Bestimmungen hinausgeht.
                    </p>

                    <h3 className="text-lg font-semibold">Gesundheitsdaten</h3>
                    <p>
                      Die Verarbeitung von Gesundheitsdaten erfolgt ausschließlich auf Grundlage Ihrer
                      ausdrücklichen Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO oder zur Gesundheitsvorsorge
                      gemäß Art. 9 Abs. 2 lit. h DSGVO.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    7. SSL- bzw. TLS-Verschlüsselung
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                      Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                      Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt
                      und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                  </div>
                </div>

                <div className="border-t border-indigo-500/20 pt-8">
                  <h2 className="text-2xl font-serif font-semibold text-obsidian mb-4">
                    8. Änderungen dieser Datenschutzerklärung
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie an
                      geänderte Rechtslage oder bei Änderungen des Dienstes sowie der Datenverarbeitung
                      anzupassen. Für erneute Besuche gilt dann die neue Datenschutzerklärung.
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <p className="text-sm text-indigo-800">
                    <strong>Stand:</strong> Januar 2025<br />
                    <strong>Kontakt für Datenschutzfragen:</strong> contact@sanctum.com
                  </p>
                </div>

                <div className="bg-gold/10 border border-gold/30 rounded-lg p-6">
                  <p className="text-sm text-gray-600 italic">
                    <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Platzhalter und muss
                    von einem Rechtsanwalt oder Datenschutzexperten überprüft und an die spezifischen
                    Bedürfnisse des Unternehmens angepasst werden.
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
