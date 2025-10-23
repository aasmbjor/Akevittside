const standardAkevitter = [
    { navn: "Arvesølvet Aquavit Christmas Edition 2024", pris: "kr 449,90", produsent: "Det Norske Brenneri", kjopt: "N/A", vinmonopolet: "https://www.aperitif.no/pollisten/produkt/arvesolvet-aquavit-christmas-edition,2355812" },
    { navn: "Arvesølvet Export", pris: "kr 729,90", produsent: "Det Norske Brenneri", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Arves%C3%B8lvet-Export/p/10789401" },
    { navn: "Arvesølvet Juleakevitt 2023", pris: "kr 509,90", produsent: "Det Norske Brenneri", kjopt: "18.10.2023", vinmonopolet: "https://detnorskebrenneri.no/produkt/arvesolvet-juleakevitt-2023/" },
    { navn: "Arvesølvet Jurancon", pris: "kr 679,90", produsent: "Det Norske Brenneri", kjopt: "20.02.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Agder/Grimstad/Arves%C3%B8lvet-Juran%C3%A7on/p/18747402" },
    { navn: "Arvesølvet Kjernekar Solera", pris: "kr 689,90", produsent: "Det Norske Brenneri", kjopt: "06.01.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Agder/Arves%C3%B8lvet-Kjernekar-Single-Cask/p/8282702" },
    { navn: "Arvesølvet Mild Dill", pris: "kr 399,90", produsent: "Det Norske Brenneri", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Agder/Grimstad/Arves%C3%B8lvet-Mild-Dill/p/12946502" },
    { navn: "Arvesølvet White Port Single Cask", pris: "kr 679,90", produsent: "Det Norske Brenneri", kjopt: "13.03.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Arves%C3%B8lvet-White-Port-Single-Cask/p/13444001" },
    { navn: "Atlungstad Sundnæs 180 årsjubileumsaquavit", pris: "kr 557,80", produsent: "Atlungstad Håndverksdestilleri", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Innlandet/Stange/Atlungstad-Sundn%C3%A6s-180-%C3%A5rs-Jubileumsaquavit/p/18629901" },
    { navn: "Berentsens Nissens Reserve Juleaquavit", pris: "kr 437,70", produsent: "Berentsens Brygghus", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Rogaland/Eigersund/Berentsens-Nissens-Reserve-Juleaquavit/p/14994302" },
    { navn: "Bergens Aquavit 1818", pris: "kr 549,90", produsent: "Det Norske Brenneri", kjopt: "19.06.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Innlandet/Stange/Atlungstad-Bergens-Aquavit-1818/p/19160201" },
    { navn: "Bivrost Cask Aquavit", pris: "kr 472,90", produsent: "Aurora Spirit Distillery", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Troms/Lyngen/Bivrost-Cask-Aquavit/p/7425902" },
    { navn: "Brennevinsgrova Fatmodnet Norsk Akevitt", pris: "kr 447,50", produsent: "Det Norske Brenneri", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/M%C3%B8re-og-Romsdal/Sykkylven/Brennevinsgrova-Fatmodnet-norsk-akevitt/p/12166102" },
    { navn: "Elg Snaps Premium Aquavit", pris: "kr 449,90", produsent: "Det Norske Brenneri", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Elg-Premium-Aquavit/p/11883101" },
    { navn: "Fru Lysholm Aquavit", pris: "kr 439,90", produsent: "Arcus AS", kjopt: "26.01.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Fru-Lysholm-Aquavit/p/3379701" },
    { navn: "Dirty Opland Aquavit", pris: "kr 529,90", produsent: "Arcus AS", kjopt: "12.09.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Dirty-Opland-Aquavit/p/16276801" },
    { navn: "Gammel Opland Juleakevitt 2022", pris: "kr 529,90", produsent: "Arcus AS", kjopt: "21.10.2022", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Gammel-Opland-Juleaquavit/p/12169801" },
    { navn: "Gammel Opland Juleakevitt 2023", pris: "kr 559,90", produsent: "Arcus AS", kjopt: "12.11.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Gammel-Opland-Juleaquavit/p/12169801" },
    { navn: "Gammel Opland Juleakevitt 2024", pris: "kr 549,90", produsent: "Arcus AS", kjopt: "03.12.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Gammel-Opland-Juleaquavit/p/12169801" },
    { navn: "Gammel Opland Juleakevitt 2025", pris: "kr 549,90", produsent: "Arcus AS", kjopt: "02.10.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Opland-Juleaquavit/p/19708701" },
    { navn: "Gammel Opland Limited Edition", pris: "kr 529,90", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Gammel-Opland-Limited-Edition/p/19425301" },
    { navn: "Gammel Opland Modnet på Portvinsfat", pris: "N/A", produsent: "Arcus AS", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Gammel-Opland-Aquavit-ettermodnet-p%C3%A5-portvinsfat/p/5779601" },
    { navn: "Gammel Reserve", pris: "kr 459,90", produsent: "Arcus AS", kjopt: "30.05.2022", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Gammel-Reserve/p/1230401" },
    { navn: "Gilde Grill Aquavit", pris: "kr 344,90", produsent: "Arcus AS", kjopt: "01.05.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Gilde-Grill-Aquavit/p/626302" },
    { navn: "Gilde Juleakevitt 2017", pris: "kr 678,00", produsent: "Arcus AS", kjopt: "04.04.2024", vinmonopolet: "https://www.vinmonopolet.no/search?q=gilde+juleakevitt" },
    { navn: "Gilde Juleakevitt 2019", pris: "kr 708,00", produsent: "Arcus AS", kjopt: "04.04.2024", vinmonopolet: "https://www.vinmonopolet.no/search?q=gilde+juleakevitt" },
    { navn: "Gilde Juleakevitt 2020", pris: "kr 348,00", produsent: "Arcus AS", kjopt: "04.04.2024", vinmonopolet: "https://www.vinmonopolet.no/search?q=gilde+juleakevitt" },
    { navn: "Gilde Juleakevitt 2022", pris: "kr 359,90", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Gilde-Juleaquavit-2022/p/14739202" },
    { navn: "Gilde Juleakevitt 2023", pris: "kr 359,90", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Gilde-Juleaquavit-2023/p/16470102" },
    { navn: "Gilde Juleakevitt 2024", pris: "kr 479,90", produsent: "Arcus AS", kjopt: "24.12.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Gilde-Juleaquavit-2024/p/165102" },
    { navn: "Gilde Juleakevitt Ekstra Modnet - 2023", pris: "kr 579,90", produsent: "Arcus AS", kjopt: "12.11.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Gilde-Ekstra-Modnet-Juleaquavit-2023/p/16510101" },
    { navn: "Gilde Juleakevitt Ekstra Modnet - 2024", pris: "kr 549,90", produsent: "Arcus AS", kjopt: "10.10.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Gilde-Ekstra-Modnet-Juleaquavit-2024/p/16510101" },
    { navn: "Gilde Juleakevitt Ekstra Modnet - 2025", pris: "kr 579,90", produsent: "Arcus AS", kjopt: "23.10.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Gilde-Ekstra-Modnet-Juleaquavit-2025/p/3405501" },
    { navn: "Gilde Non Plus Ultra 12 år", pris: "kr 644,90", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Gilde-Non-Plus-Ultra/p/35401" },
    { navn: "Gilde Non Plus Ultra 18 år", pris: "kr 714,90", produsent: "Arcus AS", kjopt: "02.01.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Gilde-Non-Plus-Ultra-18-%C3%A5r/p/16276901" },
    { navn: "Gullmunn Helårsakevitt", pris: "kr 399,90", produsent: "Det Norske Brenneri", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Agder/Gullmunn-Akevitt/p/15858002" },
    { navn: "Gullmunn Juleaquavit 2024", pris: "kr 500,00", produsent: "Det Norske Brenneri", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Agder/Gullmunn-Juleakevitt-Portvinsfat-2024/p/17581602" },
    { navn: "Gulllmunn Single Cask Vintage Bourbonfat 2020", pris: "kr 849,90", produsent: "Det Norske Brenneri", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Agder/Grimstad/Gullmunn-Single-Cask-Vintage-Bourbonfat-2020/p/14682002" },
    { navn: "Hellstrøm Juleakevitt 2023", pris: "kr 499,90", produsent: "Det Norske Brenneri", kjopt: "31.01.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Vestfold/T%C3%B8nsberg/Hellstr%C3%B8m-Juleaquavit-2023/p/16550901" },
    { navn: "Hellstrøm Juleakevitt 2024", pris: "kr 504,90", produsent: "Det Norske Brenneri", kjopt: "11.11.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Vestfold/T%C3%B8nsberg/Hellstr%C3%B8m-Juleaquavit-2024/p/17520001" },
    { navn: "Hellstrøm Juleakevitt 2025", pris: "kr 509,90", produsent: "Det Norske Brenneri", kjopt: "23.10.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Agder/Grimstad/Hellstr%C3%B8m-Juleaquavit-2025/p/19794102" },
    { navn: "Inderøy Juleakevitt 2023", pris: "kr 500,20", produsent: "Inderøy Brenneri", kjopt: "18.10.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Inder%C3%B8y/Inder%C3%B8y-Extra-Modnet-Juleaquavit-2023/p/16490602" },
    { navn: "Inderøy Premium Akevitt", pris: "kr 437,30", produsent: "Inderøy Brenneri", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Inder%C3%B8y-Brenneri-Den-Gyldne-Aquavit/p/10234302" },
    { navn: "Lillehammer Akevitt", pris: "kr 494,90", produsent: "Det Norske Brenneri", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Lillehammer-aquavit/p/1220001" },
    { navn: "Lysholm 200-års Jubileumsaquavit", pris: "kr 425,30", produsent: "Arcus AS", kjopt: "09.03.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Lysholm-200-%C3%A5rs-Jubileumsaquavit/p/15310201" },
    { navn: "Lysholm Høytid", pris: "kr 519,90", produsent: "Arcus AS", kjopt: "27.12.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Lysholms-H%C3%B8ytid-Juleaquavit/p/14739301" },
    { navn: "Lysholm Linie", pris: "kr 484,90", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Lysholm-Linie/p/5514101" },
    { navn: "Lysholm Linie Juleakevitt 2022", pris: "kr 494,10", produsent: "Arcus AS", kjopt: "21.10.2022", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Lysholm-Linie-Christmas-Edition-2022/p/14739101" },
    { navn: "Lysholm Linie Juleakevitt 2025", pris: "kr 519,90", produsent: "Arcus AS", kjopt: "02.10.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Linie-Christmas/p/17513101" },
    { navn: "Lysholm Linie Madeira Cask", pris: "kr 414,90", produsent: "Arcus AS", kjopt: "24.08.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Lysholm-Linie-Double-Cask-Madeira/p/10700501" },
    { navn: "Lysholm Linie Port Cask", pris: "kr 589,90", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Lysholm-Linie-Double-Cask-Portvin/p/10700401" },
    { navn: "Lysholm Trondhjems Jubileumsaquavit 1997", pris: "kr 1 087,00", produsent: "Arcus AS", kjopt: "13.03.2025", vinmonopolet: "https://www.vinmonopolet.no/search?q=lysholm+trondhjems" },
    { navn: "Lysholm Trondhjemsaquavit", pris: "kr 534,90", produsent: "Arcus AS", kjopt: "01.08.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Lysholm-Throndhjemsaquavit/p/35501" },
    { navn: "Løiten Juleakevitt 2023", pris: "kr 372,30", produsent: "Arcus AS", kjopt: "08.12.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/L%C3%B8iten-Juleaquavit-2023/p/16470302" },
    { navn: "Maquavit", pris: "kr 544,90", produsent: "Mikrobryggeriet i Oslo", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Inder%C3%B8y/Gilde-Maquavit/p/16280001" },
    { navn: "Meir Aquavit", pris: "kr 499,00", produsent: "Meir", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Vestland/Meir-Original-Aquavit/p/12975901" },
    { navn: "Meir Aquavit Saison Stout Cask Finish", pris: "kr 625,00", produsent: "Meir", kjopt: "06.07.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Vestland/Meir-Aquavit-Saison-Stout-Cask-Finish/p/14417702" },
    { navn: "Meir Juleaquavit 2024", pris: "kr 519,90", produsent: "Meir", kjopt: "23.01.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Vestland/Meir-Juleaquavit-2024/p/17539602" },
    { navn: "Meir Mystery Cask 54", pris: "kr 625,00", produsent: "Meir", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Vestland/Meir-Mystery-Aquavit/p/15830602" },
    { navn: "Nissedram 2024", pris: "kr 399,90", produsent: "Det Norske Brenneri", kjopt: "03.12.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Agder/Grimstad/Nissedram/p/9933302" },
    { navn: "Nordmarkens Aqvavit", pris: "kr 287,00", produsent: "Det Norske Brenneri", kjopt: "12.07.2024", vinmonopolet: "https://www.systembolaget.se/produkt/sprit/nordmarkens-aqvavit-33/" },
    { navn: "OHD Akevitt", pris: "kr 599,90", produsent: "Oslo Håndverksdestilleri", kjopt: "22.07.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Oslo/Oslo-H%C3%A5ndverksdestilleri-Akevitt/p/6878401" },
    { navn: "OHD Blank Akevitt", pris: "kr 449,90", produsent: "Oslo Håndverksdestilleri", kjopt: "22.07.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Oslo/Oslo-H%C3%A5ndverksdestilleri-Akevitt-Blank/p/7628702" },
    { navn: "OHD Fyret 25 års Jubileumsakevitt", pris: "kr 429,90", produsent: "Oslo Håndverksdestilleri", kjopt: "26.08.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Oslo/OHD-Fyret-25-%C3%A5rs-Jubileumsakevitt/p/15848202" },
    { navn: "OHD Juleakevitt 2024", pris: "kr 449,90", produsent: "Oslo Håndverksdestilleri", kjopt: "10.04.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Oslo/Oslo-H%C3%A5ndverksdestilleri-Juleakevitt-2024/p/17872602" },
    { navn: "OHD Standard Akevitt", pris: "kr 514,90", produsent: "Oslo Håndverksdestilleri", kjopt: "22.07.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Oslo/Oslo-H%C3%A5ndverksdestilleri-Standard-Akevitt/p/17460401" },
    { navn: "OHD Tequila Akevitt", pris: "kr 599,90", produsent: "Oslo Håndverksdestilleri", kjopt: "10.04.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Oslo/Oslo-H%C3%A5ndverksdestilleri-Tequila-Akevitt/p/13101501" },
    { navn: "Opland Edel - Costasera", pris: "kr 689,90", produsent: "Arcus AS", kjopt: "08.12.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Opland-Edel-Costasera/p/16654201" },
    { navn: "Opland Edel - Madeira", pris: "kr 675,10", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Gammel-Opland-Edel-Madeira/p/763602" },
    { navn: "Opland Jubileum", pris: "kr 749,90", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Opland-Jubileum/p/35301" },
    { navn: "Opland Premium Aquavit", pris: "kr 509,90", produsent: "Arcus AS", kjopt: "06.07.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Opland-Premium-Aquavit/p/17154201" },
    { navn: "Opland Single Cask #10010120", pris: "kr 889,90", produsent: "Arcus AS", kjopt: "16.03.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Opland-Aquavit-Single-Cask-No-10010120-PX-Sherry-Cask/p/16982401" },
    { navn: "Opland Single Cask #14755", pris: "kr 774,90", produsent: "Arcus AS", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/search?q=opland+single+cask+%2314755" }, // Ikke spesifikk lenke
    { navn: "Opland Small Batch - Beer Cask", pris: "kr 544,90", produsent: "Arcus AS", kjopt: "26.02.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Opland-Small-Batch-Sherry-Beer-Casks/p/16885801" },
    { navn: "Opland Small Batch - Bourbon Cask", pris: "kr 553,80", produsent: "Arcus AS", kjopt: "05.01.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Opland-Small-Batch-Bourbon-Casks/p/15049301" },
    { navn: "Opland Smokey Finish", pris: "kr 419,00", produsent: "Arcus AS", kjopt: "N/A", vinmonopolet: "https://www.aperitif.no/pollisten/produkt/opland-travellers-exclusive-smoky-finish,2336085" },
    { navn: "Pultost Akevitt", pris: "kr 299,90", produsent: "Det Norske Brenneri", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Innlandet/Stange/Atlungstad-Pultostakevitt/p/11516002" },
    { navn: "Strand Blank Aquavit", pris: "kr 346,50", produsent: "Det Norske Brenneri", kjopt: "13.03.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Oslo/Oslo-H%C3%A5ndverksdestilleri-Akevitt-Blank/p/13505503" },
    { navn: "Strand Juleakevitt 2018", pris: "kr 419,90", produsent: "Det Norske Brenneri", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Strand-Juleaquavit-2018/p/10515102" },
    { navn: "Strand Juleakevitt 2019", pris: "kr 1 074,00", produsent: "Det Norske Brenneri", kjopt: "03.10.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Strand-Juleaquavit-2019/p/11369302" },
    { navn: "Strand Juleakevitt 2022", pris: "kr 399,90", produsent: "Det Norske Brenneri", kjopt: "21.10.2022", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Inder%C3%B8y/Strand-Juleaquavit-2022/p/14801002" },
    { navn: "Strand Juleakevitt 2023", pris: "kr 414,90", produsent: "Det Norske Brenneri", kjopt: "27.09.2023", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Inder%C3%B8y/Strand-Juleaquavit-2023/p/16335102" },
    { navn: "Strand Juleakevitt 2024", pris: "kr 414,90", produsent: "Det Norske Brenneri", kjopt: "10.10.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Inder%C3%B8y/Strand-Juleaquavit-2024/p/17454802" },
    { navn: "Strand Juleakevitt 2025", pris: "kr 419,90", produsent: "Det Norske Brenneri", kjopt: "12.09.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Akershus/Nittedal/Strand-Juleaquavit/p/6389502" },
    { navn: "Tons of Aquavit", pris: "kr 439,90", produsent: "Det Norske Brenneri", kjopt: "22.07.2025", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Vestland/Tons-of-Aquavit/p/12102101" },
    { navn: "Truls Svendsen Aquavit", pris: "kr 549,90", produsent: "Det Norske Brenneri", kjopt: "07.06.2024", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Tr%C3%B8ndelag/Truls-Svendsen-Aquavit/p/15830201" },
    { navn: "Ægir Gjallarhorn Akevitt", pris: "kr 399,90", produsent: "Ægir Bryggeri", kjopt: "Gave", vinmonopolet: "https://www.vinmonopolet.no/Land/Norge/Vestland/Fl%C3%A5m/Aegir-Gjallarhorn-Akevitt/p/14603602" }
];

// Henter lagrede akevitter fra localStorage, eller starter med en tom liste.
const egneAkevitter = JSON.parse(localStorage.getItem('egneAkevitter')) || [];

// Kombinerer standardlisten med dine egne lagrede.
// DENNE LINJEN ER NÅ RIKTIG, fordi den bruker "standardAkevitter"
let akevitter = [...standardAkevitter, ...egneAkevitter];

let currentSort = {
    column: 'navn',
    direction: 'asc'
};

function parsePrice(prisStr) {
    if (typeof prisStr !== 'string' || prisStr === 'N/A') return null;
    return parseFloat(prisStr.replace(/kr\s?/, '').replace(/\s/g, '').replace(',', '.'));
}

function parseDate(kjoptStr) {
    if (kjoptStr === 'N/A') return new Date('1970-01-01');
    if (kjoptStr === 'Gave') return new Date('1970-01-02');
    const parts = kjoptStr.split('.');
    if (parts.length === 3) return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    return new Date('1970-01-01');
}

function renderTable(akevittArray) {
    const tbody = document.querySelector('#akevitt-tabell tbody');
    tbody.innerHTML = '';
    akevittArray.forEach(akevitt => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${akevitt.navn}</td>
            <td>${akevitt.pris}</td>
            <td>${akevitt.produsent}</td>
            <td>${akevitt.kjopt}</td>
            <td><a href="${akevitt.vinmonopolet}" target="_blank">→</a></td>
        `;
        tbody.appendChild(row);
    });
}

function updateSortIndicators() {
    document.querySelectorAll('#akevitt-tabell th.sortable').forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
    });
    const activeHeader = document.getElementById(`sort${currentSort.column.charAt(0).toUpperCase() + currentSort.column.slice(1)}`);
    if (activeHeader) {
        activeHeader.classList.add(currentSort.direction === 'asc' ? 'sorted-asc' : 'sorted-desc');
    }
}

// ERSTATT DEN GAMLE 'sortAndRender' MED DENNE
function sortAndRender(column, forceDirection = null) {
    
    if (forceDirection) {
        // Brukes av mobil-dropdown: Tvinger en spesifikk retning
        currentSort.column = column;
        currentSort.direction = forceDirection;
    } else {
        // Brukes av desktop-klikk: Bytter (toggler) retning
        if (currentSort.column === column) {
            currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.column = column;
            currentSort.direction = 'asc';
        }
    }
    
    const directionModifier = currentSort.direction === 'asc' ? 1 : -1;
    
    const sortedAkevitter = akevitter.sort((a, b) => {
        let valA, valB;
        switch (column) {
            case 'navn':
            case 'produsent':
                valA = a[column]; valB = b[column];
                return valA.localeCompare(valB, 'nb') * directionModifier;
            case 'pris':
                valA = parsePrice(a.pris); valB = parsePrice(b.pris);
                if (valA === null) return 1; if (valB === null) return -1;
                return (valA - valB) * directionModifier;
            case 'kjopt':
                valA = parseDate(a.kjopt); valB = parseDate(b.kjopt);
                return (valA.getTime() - valB.getTime()) * directionModifier;
            default: return 0;
        }
    });
    
    renderTable(sortedAkevitter);
    updateSortIndicators();
    
    // NY: Synkroniserer mobil-dropdownen med gjeldende sortering
    const mobileSelect = document.getElementById('sort-select');
    if (mobileSelect) {
        mobileSelect.value = `${currentSort.column}-${currentSort.direction}`;
    }
}

// NY FUNKSJON FOR Å LEGGE TIL PRODUKT
function handleAddAkevitt(event) {
    event.preventDefault(); // Hindrer at siden laster på nytt

    const navn = document.getElementById('navn').value;
    const pris = document.getElementById('pris').value;
    const produsent = document.getElementById('produsent').value;
    const kjopt = document.getElementById('kjopt').value;

    // Genererer en søkbar lenke til Vinmonopolet
    const vinmonopoletLink = `https://www.vinmonopolet.no/search?q=${encodeURIComponent(navn)}`;

    const nyttProdukt = {
        navn: navn,
        pris: pris,
        produsent: produsent,
        kjopt: kjopt,
        vinmonopolet: vinmonopoletLink
    };

    // Legg til det nye produktet i begge lister og lagre til localStorage
    akevitter.push(nyttProdukt);
    egneAkevitter.push(nyttProdukt);
    localStorage.setItem('egneAkevitter', JSON.stringify(egneAkevitter));

    // Nullstill skjemaet og oppdater tabellen
    document.getElementById('add-akevitt-form').reset();
    sortAndRender(currentSort.column); // Sorterer og tegner tabellen på nytt
}


document.addEventListener('DOMContentLoaded', () => {
    // Sette opp klikk-lyttere for sortering
    document.getElementById('sortNavn').addEventListener('click', () => sortAndRender('navn'));
    document.getElementById('sortPris').addEventListener('click', () => sortAndRender('pris'));
    document.getElementById('sortProdusent').addEventListener('click', () => sortAndRender('produsent'));
    document.getElementById('sortKjopt').addEventListener('click', () => sortAndRender('kjopt'));

    // LYTTER TIL DET NYE SKJEMAET
    document.getElementById('add-akevitt-form').addEventListener('submit', handleAddAkevitt);

    // NY LINJE: LYTTER TIL MOBIL-DROPDOWN
    document.getElementById('sort-select').addEventListener('change', handleMobileSort);

    // Viser tabellen sortert som standard ved første lasting
    sortAndRender(currentSort.column);
});

// NY FUNKSJON FOR Å HÅNDTERE MOBIL-SORTERING
function handleMobileSort(event) {
    const value = event.target.value; // f.eks. "pris-desc"
    const [column, direction] = value.split('-'); // Blir til ["pris", "desc"]
    
    // Kaller den oppdaterte sortAndRender-funksjonen
    sortAndRender(column, direction);
}