"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 max-w-4xl mx-auto">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          Datenschutzerklärung
        </h1>
        <p className="text-muted-foreground mb-8">
          Letzte Aktualisierung: 01.06.2024
        </p>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Diese Datenschutzerklärung informiert Sie darüber, wie Nations of Legends Ihre personenbezogenen Daten verarbeitet.
          </p>

          <Accordion type="single" collapsible className="w-full mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">1. Verantwortliche Stelle</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                <p>
                  Nations of Legends GmbH<br />
                  Techno Strasse 123<br />
                  10115 Berlin<br />
                  Deutschland<br /><br />
                  E-Mail: dns.energy@outlook.com<br />
                  Telefon: +49 (0) 30 123456789
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">2. Erhebung und Verarbeitung personenbezogener Daten</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">2.1 Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Kontaktdaten (Name, Adresse, E-Mail, Telefonnummer)</li>
                  <li>Zahlungsdaten (Kreditkartendaten, Bankverbindung)</li>
                  <li>Ticketinformationen (Ticketnummer, Ticketkategorie)</li>
                  <li>Nutzungsdaten (IP-Adresse, besuchte Seiten, Zugriffszeiten)</li>
                  <li>Kommunikationsdaten (E-Mail-Korrespondenz, Support-Anfragen)</li>
                  <li>Bei der Registrierung für den Newsletter: E-Mail-Adresse</li>
                  <li>Fotos und Videoaufnahmen während des Festivals</li>
                </ul>
                <p className="mb-4">2.2 Wir verarbeiten Ihre personenbezogenen Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sie haben uns Ihre Einwilligung erteilt (Art. 6 Abs. 1 lit. a DSGVO)</li>
                  <li>Die Verarbeitung ist für die Erfüllung eines Vertrags erforderlich (Art. 6 Abs. 1 lit. b DSGVO)</li>
                  <li>Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich (Art. 6 Abs. 1 lit. c DSGVO)</li>
                  <li>Die Verarbeitung ist zur Wahrung berechtigter Interessen erforderlich (Art. 6 Abs. 1 lit. f DSGVO)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">3. Zwecke der Datenverarbeitung</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Wir verarbeiten Ihre personenbezogenen Daten für folgende Zwecke:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verkauf und Bearbeitung von Tickets</li>
                  <li>Durchführung des Festivals und Betreuung der Teilnehmer</li>
                  <li>Abwicklung von Zahlungen</li>
                  <li>Beantwortung von Kundenanfragen und Support</li>
                  <li>Versand von Informationen zum Festival (z.B. Programmänderungen)</li>
                  <li>Versand von Newslettern (mit Ihrer Einwilligung)</li>
                  <li>Verbesserung unserer Dienstleistungen</li>
                  <li>Erfüllung gesetzlicher Verpflichtungen</li>
                  <li>Werbung und Marketing für zukünftige Veranstaltungen</li>
                  <li>Dokumentation des Festivals durch Foto- und Videoaufnahmen</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">4. Speicherdauer</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der oben genannten Zwecke erforderlich ist oder wie es gesetzlich vorgeschrieben ist. Konkret bedeutet dies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kundendaten werden in der Regel für die Dauer der Geschäftsbeziehung und danach für die Dauer der gesetzlichen Aufbewahrungsfristen (in der Regel 10 Jahre) gespeichert</li>
                  <li>Daten für Newsletter werden bis zum Widerruf Ihrer Einwilligung gespeichert</li>
                  <li>Nutzungsdaten der Website werden in der Regel für 14 Tage gespeichert</li>
                  <li>Foto- und Videoaufnahmen werden für die Dauer der Werbenutzung und Dokumentation des Festivals gespeichert</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">5. Weitergabe von Daten an Dritte</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">5.1 Wir geben Ihre personenbezogenen Daten nur an Dritte weiter, wenn eine der folgenden Bedingungen erfüllt ist:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Sie haben Ihre ausdrückliche Einwilligung dazu erteilt</li>
                  <li>Die Weitergabe ist für die Vertragserfüllung erforderlich</li>
                  <li>Die Weitergabe erfolgt zur Erfüllung einer rechtlichen Verpflichtung</li>
                  <li>Die Weitergabe ist zur Wahrung berechtigter Interessen erforderlich</li>
                </ul>
                <p className="mb-4">5.2 Wir arbeiten mit folgenden Dienstleistern zusammen, die Zugriff auf personenbezogene Daten haben können:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ticketing-Plattformen</li>
                  <li>Zahlungsdienstleister</li>
                  <li>IT-Dienstleister und Hosting-Provider</li>
                  <li>E-Mail- und Newsletter-Dienstleister</li>
                  <li>Sicherheitsdienste</li>
                  <li>Social-Media-Plattformen</li>
                  <li>Analyse-Tool-Anbieter</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">6. Cookies und Tracking</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">6.1 Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir unterscheiden zwischen:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Notwendigen Cookies: Diese sind für den Betrieb der Website erforderlich</li>
                  <li>Funktionalen Cookies: Diese ermöglichen erweiterte Funktionen und Personalisierung</li>
                  <li>Analytischen Cookies: Diese helfen uns, die Nutzung der Website zu verstehen</li>
                  <li>Marketing-Cookies: Diese werden verwendet, um Werbung anzuzeigen</li>
                </ul>
                <p className="mb-4">6.2 Sie können Ihre Cookie-Einstellungen jederzeit ändern oder Cookies in Ihrem Browser löschen. Bitte beachten Sie, dass dadurch einige Funktionen der Website möglicherweise nicht mehr verfügbar sind.</p>
                <p>6.3 Wir verwenden auf unserer Website folgende Analyse- und Tracking-Tools:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics</li>
                  <li>Facebook Pixel</li>
                  <li>Hotjar</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">7. Social Media</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">7.1 Unsere Website enthält Links zu unseren Social-Media-Profilen (Facebook, Instagram, Twitter). Wenn Sie diese Links anklicken, werden Sie auf die Seiten der jeweiligen Anbieter weitergeleitet.</p>
                <p className="mb-4">7.2 Auf einigen Seiten unserer Website können Social-Media-Plugins eingebunden sein. Wenn Sie eine solche Seite besuchen, kann der jeweilige Anbieter Daten über Ihr Nutzungsverhalten erheben, auch wenn Sie kein Konto bei diesem Anbieter haben.</p>
                <p>7.3 Für die Datenverarbeitung durch die Social-Media-Anbieter sind wir nicht verantwortlich. Bitte informieren Sie sich über die Datenschutzbestimmungen der jeweiligen Anbieter.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">8. Ihre Rechte</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Nach der DSGVO haben Sie folgende Rechte:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recht auf Auskunft (Art. 15 DSGVO): Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu erhalten.</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO): Unter bestimmten Umständen können Sie die Löschung Ihrer Daten verlangen.</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): Sie können verlangen, dass wir die Verarbeitung Ihrer Daten einschränken.</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format übermitteln.</li>
                  <li>Widerspruchsrecht (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
                  <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO): Sie können Ihre Einwilligung jederzeit widerrufen.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">9. Datensicherheit</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">9.1 Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.</p>
                <p className="mb-4">9.2 Unsere Sicherheitsmassnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.</p>
                <p>9.3 Die Übertragung von Daten über das Internet (z.B. per E-Mail) kann Sicherheitslücken aufweisen. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-medium">10. Änderungen der Datenschutzerklärung</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">10.1 Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden Datenschutzvorschriften zu ändern.</p>
                <p>10.2 Die aktuelle Version der Datenschutzerklärung ist auf unserer Website verfügbar. Wir empfehlen, diese Datenschutzerklärung regelmässig zu überprüfen.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="border-t border-border pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Beschwerde bei einer Aufsichtsbehörde</h2>
            <p className="mb-4">Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</p>
            <h2 className="text-2xl font-bold mb-4 mt-8">Kontakt zum Datenschutzbeauftragten</h2>
            <p className="mb-2">Bei Fragen zum Datenschutz können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden:</p>
            <p className="text-muted-foreground">
              Datenschutzbeauftragter<br />
              Nations of Legends GmbH<br />
              Techno Strasse 123<br />
              10115 Berlin<br />
              Deutschland<br /><br />
              E-Mail: dns.energy@outlook.com<br />
              Telefon: +49 (0) 30 123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}