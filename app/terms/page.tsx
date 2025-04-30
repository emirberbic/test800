"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 max-w-4xl mx-auto">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="text-muted-foreground mb-8">
          Letzte Aktualisierung: 01.06.2024
        </p>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie Tickets für das Nations of Legends Festival erwerben. Mit dem Kauf eines Tickets akzeptieren Sie diese Bedingungen.
          </p>

          <Accordion type="single" collapsible className="w-full mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">1. Allgemeine Bestimmungen</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") regeln das Vertragsverhältnis zwischen dem Teilnehmer (nachfolgend "Besucher") und der Nations of Legends GmbH (nachfolgend "Veranstalter") im Zusammenhang mit dem Besuch des Nations of Legends Festivals (nachfolgend "Festival").</p>
                <p className="mb-4">1.2 Mit dem Erwerb einer Eintrittskarte akzeptiert der Besucher diese AGB sowie die Hausordnung des Festivalgeländes.</p>
                <p>1.3 Diese AGB gelten für alle Arten von Tickets, einschliesslich, aber nicht beschränkt auf Standard-Tickets, VIP-Tickets und Premium-Tickets sowie alle Zusatzleistungen.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">2. Ticketkauf und Zahlung</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">2.1 Tickets für das Festival können über die offizielle Website, autorisierte Vorverkaufsstellen oder am Festivaleingang (vorbehaltlich Verfügbarkeit) erworben werden.</p>
                <p className="mb-4">2.2 Alle angegebenen Preise verstehen sich in Schweizer Franken (CHF) inklusive Mehrwertsteuer, jedoch exklusive Buchungs- und Bearbeitungsgebühren, sofern nicht anders angegeben.</p>
                <p className="mb-4">2.3 Tickets sind erst nach vollständiger Bezahlung gültig. Der Veranstalter behält sich das Recht vor, nicht vollständig bezahlte Tickets zu stornieren.</p>
                <p className="mb-4">2.4 Der Kaufvertrag kommt mit der Bestätigung des Ticketkaufs durch den Veranstalter oder dessen autorisierte Verkaufspartner zustande.</p>
                <p>2.5 Der Besucher ist verpflichtet, das Ticket nach Erhalt auf Richtigkeit zu überprüfen. Reklamationen müssen unverzüglich nach Erhalt der Tickets geltend gemacht werden.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">3. Weiterverkauf und Übertragung</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">3.1 Tickets dürfen nicht ohne vorherige schriftliche Zustimmung des Veranstalters kommerziell weiterverkauft, versteigert oder zu Werbe- oder Marketingzwecken verwendet werden.</p>
                <p className="mb-4">3.2 Eine private Weitergabe von Tickets zum Originalpreis ist gestattet, sofern der neue Ticketinhaber die AGB akzeptiert.</p>
                <p className="mb-4">3.3 Der Veranstalter behält sich das Recht vor, Tickets zu sperren und den Zugang zum Festival zu verweigern, wenn gegen diese Bestimmungen verstossen wird.</p>
                <p>3.4 Die offizielle Ticketbörse des Festivals ist der einzige autorisierte Ort für den Weiterverkauf von Tickets.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">4. Rückgabe und Erstattung</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">4.1 Tickets können grundsätzlich nicht zurückgegeben oder umgetauscht werden, es sei denn, das Festival wird vollständig abgesagt.</p>
                <p className="mb-4">4.2 Bei vollständiger Absage des Festivals hat der Besucher Anspruch auf Erstattung des Ticketpreises (exklusive Gebühren) oder, wenn angeboten, auf Tickets für einen Ersatztermin.</p>
                <p className="mb-4">4.3 Bei Verschiebung des Festivals behalten die Tickets ihre Gültigkeit für den neuen Termin. Ein Anspruch auf Erstattung besteht in diesem Fall nicht.</p>
                <p className="mb-4">4.4 Bei Programmänderungen, einschliesslich Änderungen bei den auftretenden Künstlern, besteht kein Anspruch auf Erstattung.</p>
                <p>4.5 Höhere Gewalt, behördliche Anordnungen oder andere Umstände, die ausserhalb des Einflussbereichs des Veranstalters liegen, berechtigen nicht zur Rückgabe von Tickets oder Erstattung des Kaufpreises.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">5. Zutritt und Sicherheit</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">5.1 Der Zutritt zum Festival wird nur Personen ab 18 Jahren mit einem gültigen Ticket gewährt. Ein Altersnachweis durch einen gültigen Lichtbildausweis ist erforderlich.</p>
                <p className="mb-4">5.2 Der Veranstalter behält sich das Recht vor, Besuchern den Zutritt zu verweigern oder sie vom Festivalgelände zu verweisen, wenn sie gegen die AGB, die Hausordnung oder gesetzliche Bestimmungen verstossen.</p>
                <p className="mb-4">5.3 Die Mitnahme von Glasbehältern, Dosen, professionellen Kameras, Waffen, gefährlichen Gegenständen und eigenen Speisen und Getränken ist untersagt.</p>
                <p className="mb-4">5.4 Besucher willigen ein, beim Einlass Sicherheitskontrollen zu durchlaufen. Die Verweigerung dieser Kontrollen führt zum Ausschluss vom Festival ohne Anspruch auf Erstattung.</p>
                <p>5.5 Der Veranstalter übernimmt keine Haftung für Wertgegenstände. Die Nutzung der Schliessfächer wird empfohlen.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">6. Haftung</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">6.1 Der Besuch des Festivals erfolgt auf eigene Gefahr. Der Veranstalter haftet nur für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten des Veranstalters, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen verursacht wurden.</p>
                <p className="mb-4">6.2 Für Personenschäden haftet der Veranstalter auch bei fahrlässiger Verletzung von Pflichten.</p>
                <p className="mb-4">6.3 Die Haftung für mitgebrachte Gegenstände, insbesondere für Zelte und Campingausrüstung, ist ausgeschlossen.</p>
                <p>6.4 Der Besucher haftet für alle durch ihn verursachten Schäden und stellt den Veranstalter von Ansprüchen Dritter frei.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">7. Bild- und Tonaufnahmen</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">7.1 Der Veranstalter ist berechtigt, während des Festivals Bild-, Ton- und Videoaufnahmen zu erstellen und diese ohne Vergütung der abgebildeten Personen zu kommerziellen Zwecken zu nutzen.</p>
                <p className="mb-4">7.2 Mit dem Betreten des Festivalgeländes erteilt der Besucher seine Einwilligung zur Erstellung und Nutzung solcher Aufnahmen.</p>
                <p className="mb-4">7.3 Das Erstellen von Bild-, Ton- und Videoaufnahmen durch Besucher ist nur für den privaten Gebrauch gestattet. Eine kommerzielle Nutzung ist ohne vorherige schriftliche Zustimmung des Veranstalters untersagt.</p>
                <p>7.4 Der Einsatz von Drohnen oder professioneller Ausrüstung ist ohne ausdrückliche Genehmigung des Veranstalters verboten.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">8. Campingbestimmungen</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">8.1 Der Zugang zum Campingbereich ist nur mit einem gültigen Camping-Ticket gestattet.</p>
                <p className="mb-4">8.2 Das Campen ist nur in den ausgewiesenen Bereichen erlaubt. Die Anweisungen des Sicherheitspersonals sind zu befolgen.</p>
                <p className="mb-4">8.3 Offenes Feuer, einschliesslich Lagerfeuer, Fackeln und Feuerwerke, ist strengstens untersagt.</p>
                <p className="mb-4">8.4 Der Campingplatz muss nach dem Festival in ordnungsgemässem Zustand hinterlassen werden. Abfall ist in den bereitgestellten Behältern zu entsorgen.</p>
                <p>8.5 Der Veranstalter behält sich das Recht vor, Besucher, die gegen die Campingbestimmungen verstossen, vom Festivalgelände zu verweisen.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">9. Datenschutz</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">9.1 Die Datenverarbeitung durch den Veranstalter erfolgt gemäss den geltenden Datenschutzbestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO).</p>
                <p className="mb-4">9.2 Weitere Informationen zum Datenschutz finden Sie in der Datenschutzerklärung des Veranstalters, die auf der Festival-Website verfügbar ist.</p>
                <p>9.3 Mit dem Kauf eines Tickets stimmt der Besucher der Verarbeitung seiner personenbezogenen Daten zum Zweck der Vertragserfüllung zu.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-medium">10. Schlussbestimmungen</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">10.1 Diese AGB und alle Rechtsbeziehungen zwischen dem Veranstalter und dem Besucher unterliegen dem Recht der Schweiz.</p>
                <p className="mb-4">10.2 Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist, soweit gesetzlich zulässig, der Sitz des Veranstalters.</p>
                <p className="mb-4">10.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.</p>
                <p className="mb-4">10.4 Der Veranstalter behält sich das Recht vor, diese AGB jederzeit zu ändern. Die aktuelle Version ist auf der Festival-Website einsehbar.</p>
                <p>10.5 Bei Widersprüchen zwischen der deutschen und anderen Sprachversionen dieser AGB ist die deutsche Version massgebend.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="border-t border-border pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <p className="mb-2">Bei Fragen zu diesen AGB wenden Sie sich bitte an:</p>
            <p className="text-muted-foreground">
              Nations of Legends GmbH<br />
              Techno Strasse 123<br />
              10115 Berlin<br />
              Deutschland<br /><br />
              E-Mail: legal@nationsoflegends.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}