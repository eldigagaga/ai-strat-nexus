---
title: "AI a firemní data: jak nevynést interní informace přes chatbota"
date: "2026-09-20"
slug: "ai-a-firemni-data-jak-nevynest-interni-informace"
excerpt: "Praktický průvodce tím, co do AI nástrojů patří a co ne, jak si zadání očistit od citlivých dat a jak nastavit jednoduchá pravidla pro tým."
tags: ["etika a právo AI", "firemní data", "praxe"]
---

Většina návodů k AI řeší, jak z modelu dostat lepší výstup. Skoro nikdo neřeší opačný směr: co jste do něj vlastně vložili. Přitom právě tudy uniká z firem nejvíc citlivých věcí — ne hackerským útokem, ale tím, že si marketér zkopíruje do chatu celý draft tiskové zprávy k neohlášené akvizici, protože potřebuje "jen upravit tón".

Tenhle článek je o návycích, které vás nezpomalí, ale ušetří vám nepříjemný rozhovor s právním oddělením.

## Co se s vaším vstupem může stát

Nepředpokládejte nic. U každého nástroje, který používáte, zjistěte tři věci: jestli se vaše vstupy používají k trénování modelu, jak dlouho se ukládají a kdo z poskytovatele k nim má přístup. Odpovědi se liší podle toho, jestli jde o bezplatnou verzi, placený osobní účet, nebo firemní licenci — a právě tenhle rozdíl lidé přehlížejí nejčastěji. Firemní smlouvy obvykle trénování na datech zákazníků vylučují, běžný účet, který si založíte na vlastní pěst, typicky ne.

Druhá vrstva rizika nemá s poskytovatelem nic společného: historie konverzací zůstává ve vašem účtu. Pokud ten účet není firemní, odcházejí data s vámi, když měníte práci.

## Tři kategorie, které stačí rozlišovat

Nedělejte si složitou klasifikaci. V praxi vystačíte s tímhle:

- **Veřejné** — cokoliv už venku je nebo být může: publikované texty, webové copy, obecná zadání. Sem patří většina denní práce a tady se AI nebojte.
- **Interní** — rozpočty, neveřejné plány kampaní, jména klientů, interní metriky. Do veřejných nástrojů to nedávejte; do schváleného firemního nástroje ano.
- **Citlivé** — osobní údaje zákazníků, zdravotní a finanční data, cokoliv pod NDA, neohlášené produkty a personální věci. Sem nesahejte ani ve firemním nástroji bez souhlasu právníka.

Šedá zóna existuje vždycky. Pravidlo pro ni: když váháte, jednu úroveň nahoru.

## Anonymizace, která reálně funguje

Většinu úkolů zvládnete i bez pravých dat. Než zadání vložíte, projeďte ho čtyřmi kroky:

1. Nahraďte jména a firmy zástupci — "Klient A", "konkurent B".
2. Čísla nahraďte řádovým odhadem nebo procenty ("rozpočet ve středních stovkách tisíc").
3. Odstraňte metadata — hlavičky exportů, e-maily v podpisech, URL interních systémů.
4. Zkontrolujte, jestli kombinace zbylých údajů nedává identitu: "výrobce zdravotnické techniky z Brna se 40 zaměstnanci" není anonymní.

U osobních údajů je anonymizace navíc povinnost, ne slušnost — GDPR platí i tehdy, když data jen vložíte do chatu.

## Pravidla pro tým, která se dají dodržet

Zákaz AI nefunguje, lidé ji začnou používat na mobilu. Funguje krátký dokument na jednu stránku: seznam schválených nástrojů, tři kategorie dat výše, jméno člověka, kterému se hlásí výjimky. K tomu jedno tvrdé pravidlo — výstup AI nikdy neodchází ven bez lidské kontroly faktů a tónu.

Užitečný doplněk je sdílená knihovna promptů. Když má tým hotová zadání pro opakující se úkoly, nikdo si nevymýšlí vlastní postup a citlivá data se do promptů nedostávají náhodou.

## Shrnutí

Bezpečná práce s AI stojí na třech návycích: vědět, co poskytovatel s vaším vstupem dělá, rozlišovat veřejná / interní / citlivá data, a zadání očistit dřív, než ho vložíte. Zabere to pár vteřin navíc — a je to jediná část práce s AI, kde se chyba nedá vzít zpátky.
