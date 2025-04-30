"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CookiesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 max-w-4xl mx-auto">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          Cookie-Richtlinie
        </h1>
        <p className="text-muted-foreground mb-8">
          Letzte Aktualisierung: 01.06.2024
        </p>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            Diese Cookie-Richtlinie erklärt, wie Nations of Legends Cookies und ähnliche Technologien auf unserer Website verwendet.
          </p>

          <Accordion type="single" collapsible className="w-full mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">1. Was sind Cookies?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie unsere Website besuchen. Sie dienen dazu, Ihren Browser oder Ihr Gerät zu identifizieren und Informationen über Ihre Nutzung unserer Website zu sammeln.</p>
                <p>Cookies sind weit verbreitet und werden von fast allen Websites verwendet. Sie helfen Webseitenbetreibern, ein besseres Nutzererlebnis zu bieten und die Funktionalität der Website zu verbessern.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">2. Arten von Cookies, die wir verwenden</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Wir verwenden verschiedene Arten von Cookies auf unserer Website:</p>
                
                <h4 className="font-bold mb-2">2.1 Notwendige Cookies</h4>
                <p className="mb-4">Diese Cookies sind für den Betrieb unserer Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugriff auf gesicherte Bereiche der Website. Die Website kann ohne diese Cookies nicht richtig funktionieren.</p>
                
                <h4 className="font-bold mb-2">2.2 Präferenz-Cookies</h4>
                <p className="mb-4">Diese Cookies speichern Ihre Einstellungen und Präferenzen, wie Spracheinstellungen oder Ihre Anmeldedaten, damit Sie diese nicht jedes Mal neu eingeben müssen.</p>
                
                <h4 className="font-bold mb-2">2.3 Statistik-Cookies</h4>
                <p className="mb-4">Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen sammeln und melden. Sie helfen uns, die Leistung unserer Website zu verbessern und die Nutzererfahrung zu optimieren.</p>
                
                <h4 className="font-bold mb-2">2.4 Marketing-Cookies</h4>
                <p>Diese Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist, Anzeigen zu schalten, die relevant und ansprechend für den einzelnen Benutzer sind und daher wertvoller für Publisher und werbetreibende Drittparteien sind.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">3. Von uns verwendete Cookies im Detail</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Hier ist eine detaillierte Liste der Cookies, die wir auf unserer Website verwenden:</p>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">3.1 Notwendige Cookies</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>session_id</strong>: Speichert Ihre Sitzungsinformationen während Ihres Besuchs auf unserer Website</li>
                    <li><strong>csrf_token</strong>: Schützt vor Cross-Site-Request-Forgery-Angriffen</li>
                    <li><strong>cookie_consent</strong>: Speichert Ihre Cookie-Einwilligung</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">3.2 Präferenz-Cookies</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>language</strong>: Speichert Ihre bevorzugte Sprache</li>
                    <li><strong>theme</strong>: Speichert Ihre Designeinstellungen</li>
                    <li><strong>user_id</strong>: Speichert Ihre Anmeldeinformationen, wenn Sie sich für "Angemeldet bleiben" entscheiden</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">3.3 Statistik-Cookies</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>_ga, _gid, _gat</strong>: Google Analytics-Cookies zur Analyse der Websitenutzung</li>
                    <li><strong>_hjid, _hjIncludedInSample</strong>: Hotjar-Cookies zur Analyse des Nutzerverhaltens</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">3.4 Marketing-Cookies</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>_fbp</strong>: Facebook Pixel zur Messung von Werbeaktionen</li>
                    <li><strong>ads/ga-audiences</strong>: Google AdWords-Cookie für Retargeting</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">4. Drittanbieter-Cookies</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Neben den von uns gesetzten Cookies können auch Drittanbieter Cookies auf Ihrem Gerät platzieren, wenn Sie unsere Website besuchen. Diese Drittanbieter umfassen:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics</strong>: Zur Analyse der Websitenutzung</li>
                  <li><strong>Google AdWords</strong>: Für Werbezwecke</li>
                  <li><strong>Facebook</strong>: Für Social-Media-Funktionen und Werbung</li>
                  <li><strong>Hotjar</strong>: Zur Analyse des Nutzerverhaltens</li>
                  <li><strong>YouTube</strong>: Für eingebettete Videos</li>
                  <li><strong>SoundCloud</strong>: Für eingebettete Audioinhalte</li>
                </ul>
                
                <p className="mt-4">Bitte beachten Sie, dass wir keinen Einfluss auf die Verwendung von Cookies durch diese Drittanbieter haben. Wir empfehlen Ihnen, die Datenschutzrichtlinien dieser Anbieter zu konsultieren, um mehr über deren Umgang mit Cookies zu erfahren.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">5. Cookie-Verwaltung</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Sie haben verschiedene Möglichkeiten, Cookies zu verwalten oder zu löschen:</p>
                
                <h4 className="font-bold mb-2">5.1 Cookie-Einstellungen auf unserer Website</h4>
                <p className="mb-4">Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner anpassen.</p>
                
                <h4 className="font-bold mb-2">5.2 Browser-Einstellungen</h4>
                <p className="mb-4">Die meisten Browser erlauben es Ihnen, Cookies zu kontrollieren. Hier erfahren Sie, wie Sie Cookies in den gängigsten Browsern verwalten können:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Google Chrome</strong>: Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten</li>
                  <li><strong>Mozilla Firefox</strong>: Einstellungen → Datenschutz & Sicherheit → Cookies und Websitedaten</li>
                  <li><strong>Safari</strong>: Einstellungen → Datenschutz → Cookies</li>
                  <li><strong>Microsoft Edge</strong>: Einstellungen → Cookies und Websiteberechtigungen → Cookies</li>
                </ul>
                
                <p className="mb-4">Bitte beachten Sie, dass das Blockieren aller Cookies die Funktionalität unserer Website beeinträchtigen kann. Es wird empfohlen, nur die Cookies zu blockieren, die Sie nicht wünschen.</p>
                
                <h4 className="font-bold mb-2">5.3 Opt-Out-Tools</h4>
                <p>Sie können sich auch von bestimmten Tracking-Diensten abmelden:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-chart-1 hover:underline">Google Analytics Opt-out</a></li>
                  <li><a href="https://www.youronlinechoices.com/" className="text-chart-1 hover:underline">Your Online Choices</a> für verhaltensbasierte Werbung</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">6. Änderungen dieser Cookie-Richtlinie</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu ändern. Die aktualisierte Version wird auf unserer Website veröffentlicht, und das Datum der "letzten Aktualisierung" am Anfang dieser Richtlinie wird entsprechend geändert.</p>
                <p>Wir empfehlen Ihnen, diese Cookie-Richtlinie regelmässig zu überprüfen, um über Änderungen informiert zu bleiben.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="border-t border-border pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Weitere Informationen</h2>
            <p className="mb-4">Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:</p>
            <p className="text-muted-foreground">
              Nations of Legends GmbH<br />
              Techno Strasse 123<br />
              10115 Berlin<br />
              Deutschland<br /><br />
              E-Mail: dns.energy@outlook.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}