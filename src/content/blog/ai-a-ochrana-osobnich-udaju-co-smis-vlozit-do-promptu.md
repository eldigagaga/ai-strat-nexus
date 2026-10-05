---
title: "AI a ochrana osobních údajů: co smíš vložit do promptu a co ne"
date: "2026-10-05"
slug: "ai-a-ochrana-osobnich-udaju-co-smis-vlozit-do-promptu"
excerpt: "Praktický průvodce tím, jaká data patří do AI nástrojů a jaká ne. Checklist pro anonymizaci, typické chyby marketérů a jak si nastavit vlastní pravidla."
tags: ["etika a právo", "GDPR", "praktické tipy"]
---

Nejčastější AI incident ve firmě nevypadá dramaticky. Marketér chce rychle sepsat e-mail pro nespokojeného klienta, tak zkopíruje celou komunikaci včetně jména, adresy a čísla smlouvy do chatbota a požádá o návrh odpovědi. Za pět sekund má hotovo — a zároveň právě poslal osobní údaje klienta do systému třetí strany bez jakéhokoliv právního podkladu. Tenhle článek je o tom, jak takovým situacím předcházet, aniž bys přestal AI používat.

## Proč to vůbec řešit

Když do AI nástroje vložíš text, odešleš ho na server poskytovatele. U osobních údajů (cokoliv, čím lze identifikovat konkrétního člověka — jméno, e-mail, telefon, IP adresa, ale i kombinace údajů jako „marketingová manažerka z firmy X") to podle GDPR znamená předání dat zpracovateli. A to potřebuje právní základ, smlouvu a informování subjektu údajů.

Druhá rovina je obchodní tajemství. Nepublikovaná strategie, cenová kalkulace, interní čísla nebo návrh kampaně klienta — tam neporušuješ GDPR, ale smlouvu o mlčenlivosti nebo interní pravidla. Riziko není jen „AI se z toho naučí". Jde i o to, že historie konverzací je uložená, může být přístupná pro kontrolu kvality a může uniknout při bezpečnostním incidentu.

## Rychlý test před každým promptem

Než zmáčkneš Enter, projdi tři otázky:

- **Je v textu konkrétní člověk?** Jméno, kontakt, pozice ve spojení s firmou, zdravotní nebo finanční detail. Pokud ano, uprav nebo smaž.
- **Byl bych v klidu, kdyby to viděl klient nebo konkurence?** Pokud ne, nepatří to tam.
- **Potřebuje to AI vůbec vědět?** Většinou ne. Kvalitu výstupu určuje kontext a struktura zadání, ne to, že víš, že se klient jmenuje Novák.

Ta poslední otázka je nejsilnější. Osobní údaje v promptu kvalitu výstupu prakticky nezvyšují — jsou tam z lenosti, protože se nám nechtělo text upravovat.

## Anonymizace, která zabere deset sekund

Nahraď konkrétní údaje zástupnými značkami a po vygenerování je doplň zpět. Místo „Jana Nováková, janan@firma.cz, si stěžuje na zpoždění dodávky" napiš „zákaznice [JMÉNO] si stěžuje na zpoždění dodávky". AI vrátí text se značkou, kterou prostě přepíšeš.

U dat z CRM nebo analytiky platí to samé: nepotřebuješ nahrát celý export, stačí agregované hodnoty. Místo tabulky s tisíci kontakty popiš segment — „ženy 25–34, průměrná hodnota objednávky nad medián, neotevřely poslední tři kampaně". AI z toho navrhne komunikaci stejně dobře.

## Tři pravidla pro tým

Pokud AI používá víc lidí, dohodněte se na minimu, které si každý zapamatuje:

1. **Do veřejných AI nástrojů nepatří jmenná data ani nepublikovaná firemní čísla.** Žádné výjimky „jen tentokrát".
2. **Firemní verze nástrojů s uzavřeným zpracováním dat jsou pro citlivější práci na prvním místě.** Ověřte, co poskytovatel skutečně garantuje ve smluvních podmínkách — ne v marketingovém textu.
3. **Výstup AI je vždy návrh, ne hotová komunikace.** Člověk ho čte, upravuje a podepisuje.

## Co si z toho odnést

Ochrana dat při práci s AI není o složité compliance, ale o jednom reflexu: před odesláním promptu se podívat, jestli v něm není konkrétní člověk nebo informace, kterou by firma nezveřejnila. Zástupné značky řeší většinu případů za pár sekund a na kvalitě výstupu se to neprojeví. Zbytek je domluva v týmu — tři pravidla, která si každý pamatuje, fungují lépe než desetistránková směrnice, kterou nikdo nečte.
