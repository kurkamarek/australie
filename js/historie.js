// Vytvořte pole datových objektů v platných formátech JSON (otestujte jejich validitu např. zde: https://jsonformatter.curiousconcept.com/)
// Historické události
const events = [
    {
       "year":"333",
       "event":"Pravěk (první obyvatelé)",
       "detail":"Je známo, že lidské osidlování Austrálie jako kontinentu začalo před minimálně 65 000 lety s migrací lidí přes pozemní mosty a krátké námořní přechody z dnešní jihovýchodní Asie. Obvyklý názor za příčinu pohybu obyvatel jihovýchodní Asie na jih označuje klimatickou změnu, přesněji dobu ledovou. Podle australského archeologa Scotta Canea byla příčinou migrace tzv. tobská katastrofa, k níž došlo 72 000 let př. n. l. Šlo o erupci supervulkánu Toba v Indonésii na ostrově Sumatra, které je někdy připisováno poslední velké vymírání druhů. Skalní úkryt Madjedbebe, v Arnhemské zemi je považován za nejstarší místo ukazující přítomnost lidí v Austrálii. Nejstarší nalezené lidské ostatky jsou pozůstatky v jezeru Mungo, na jihozápadě Nového Jižního Walesu, které byly datovány zhruba na dobu před 41 000 lety. Tito lidé byli předky moderních domorodých Australanů. Austrálci používali kamenné nástroje a po svém příchodu brzy vyhubili obří vačnatce. Krajinu změnili žďářením, kterým si ulehčovali lov zvířat. Krajina tak získala většinově charakter savany. Domorodá australská kultura je jednou z nejstarších kontinuálních kultur na Zemi.",
       "url":"https://cs.wikipedia.org/wiki/Cyril_a_Metod%C4%9Bj",
       "evaluation":"true"
    },
    {
        "year":"16. století",
        "event":"Objevení kontinentu Evropany",
        "detail":"První zaznamenané evropské pozorování australské pevniny a první zaznamenané evropské přistání na australském kontinentu jsou přičítány Nizozemcům. Existuje sice teorie portugalského přistání u břehů Austrálie ve 20. letech 16. století, není však věrohodně doložena a stále se o ní diskutuje. První loď a posádka, která zmapovala Australské pobřeží a potkala se s Austrálci byla Duyfken vedená nizozemským navigátorem, Willemem Janszoonem. Na začátku roku 1606 zahlédl pobřeží Yorského poloostrova a 26. února 1606 přistál u řeky Pennefather blízko dnešního města Weipa na mysu York. Později téhož roku proplul španělský průzkumník Luís Vaz de Torres ostrovy kolem Torresova průlivu. Nizozemec zmapoval celé západní a severní pobřeží a pojmenoval ostrovní kontinent „Nové Holandsko“ v průběhu 17. století, a přestože nebyl učiněn žádný pokus o osídlení, řada vraků zanechala muže buď uvízlé, nebo, jako v případě Batavie v roce 1629, opuštěné kvůli vzpouře a vraždě, a stal se tak prvním Evropanem, který trvale obýval kontinent. William Dampier, anglický objevitel a lupič, se vylodil na severozápadním pobřeží Nového Holandska v roce 1668 (zatímco sloužil jako člen posádky pod kapitánem Johnem Readem) a znovu v roce 1699 na zpáteční cestě. V roce 1770 se plavil kolem a zmapoval východní pobřeží James Cook, které pojmenoval Nový Jižní Wales přiznal ho Velké Británii.",
        "url":"https://cs.wikipedia.org/wiki/Vyvra%C5%BEd%C4%9Bn%C3%AD_Slavn%C3%ADkovc%C5%AF",
        "evaluation":"false"
    },
    {
       "year":"1770",
       "event":"Počátky kolonizace Austrálie",
       "detail":"V roce 1770 na východní pobřeží Austrálie dorazil James Cook, který vytvořil pečlivé mapy, popsal rostlinnou říši a prohlásil část kontinentu součástí Británie – dal jí název Nový Jižní Wales. Anglie nejdříve využívala území Austrálie jako trestaneckou kolonii, první transport dorazil v roce 1788 a tehdy taky došlo k založení Sydney.  Trestanci byli přiváženi na kontinent osmdesát let, ale postupně nová území začala lákat i normální kolonizátory, protože ostrovy Británie začínaly trpět přelidněním a postupně vznikaly další nezávislé na sobě kolonie. Vlna přistěhovalců velmi zesílila v roce 1851 po objevu zlata. Rostoucí počet obyvatel měl ale negativní vliv na původní obyvatelstvo, to nemělo občanská práva a bylo vytlačováno na stále neúrodnější území (právo na půdu získalo až po rozhodnutí Nejvyššího soudu v roce 1992).",
       "url":"https://cs.wikipedia.org/wiki/Zlat%C3%A1_bula_sicilsk%C3%A1",
       "evaluation":"true"
    },
    {
        "year":"1901",
        "event":"Vznik Australského svazu",
        "detail":"Na konci 90. let 19. století zesílily snahy o vznik federace kolonií, které se spojily, schválily ústavu a v roce 1901 a vytvořily Australský svaz, který získal statut britského dominia, také došlo k založení Canberry jakožto hlavního města svazu. V obou světových válkách Austrálie se silně angažovala, ale v druhé díky slabosti mateřské Británie se začala vázat i více na Spojené státy, pro které se stala jednou z důležitějších základen v jihozápadní části Tichého oceánu. V roce 1951 vznikl obranný svaz ANZUS – Austrálie, Nový Zéland a Spojené Státy. Austrálie se také začala angažovat ve větší hospodářské spolupráci v regionu, které vyvrcholilo v roce 1991 vznikem APEC – Asijsko-pacifického hospodářského společenství. Austrálie se velmi angažuje ve věcech stability regionu, pomáhá ve Východním Timoru na Šalamounových ostrovech či na Nové Guinei.",
        "url":"https://cs.wikipedia.org/wiki/Bitva_na_Moravsk%C3%A9m_poli",
        "evaluation":"false"
    },
 ];

// Významné postavy
const heroes = [
    {
       "name":"Matthew Flinders",
       "birth":"16.3.1774",
       "death":"19.7.1814",
       "biography":"Matthew Flinders byl jeden z nejúspěšnějších mořeplavců a tvůrců map své doby. Jako první obeplul Austrálii a identifikoval ji jako kontinent. Po dobu své kariéry, která trvala pouze něco přes dvacet let, se plavil s kapitánem Williamem Blighem, obeplul a pojmenoval Austrálii, přežil ztroskotání, aby byl později obviněn ze špionáže. Objevil a opravil efekt vlivu železných komponentů a vybavení lodi na zobrazování údajů na kompasu, a sepsal práci o objevování Austrálie nazvanou A Voyage To Terra Australis, jejíhož vydání se ale už nedožil.",
       "portraits":[
          "matthew-flinders.jpg",
          "matthew-flinders-2.jpg",
       ],
       "online":"https://cs.wikipedia.org/wiki/Matthew_Flinders"
    },
    {
      "name":"Arthur Phillip",
      "birth":"11.10.1738",
      "death":"31.8.1814",
      "biography":"Arthur Phillip byl admirál Královského námořnictva Království Velké Británie, guvernér Nového Jižního Walesu, první evropské kolonie na australském kontinentu, a zakladatel Sydney. Do královského námořnictva vstoupil ve svých patnácti letech a zúčastnil se sedmileté války ve Středozemním moři, kde bojoval v bitvě u Menorcy v roce 1756. Posléze byl povýšen, ale na konci války byl převelen do zálohy a živil se zemědělstvím v Lyndhurstu v Hampshire. V roce 1774 vstoupil do portugalského námořnictva jako kapitán a sloužil ve Španělsko-portugalské válce. V roce 1778 opět Británie válčila a Phillip byl povolán do aktivní služby. Sice časem opět stoupl v hodnosti, ale v roce 1784 byl opět přesunut do zálohy. V říjnu 1786 byl jmenován guvernérem Nového Jižního Walesu, plánované britské trestanecké kolonie na východním pobřeží Austrálie. V přípravě na osmiměsíční plavbu se potýkal s obtížemi a byl odmítnut jeho plán, aby na cestu vyjeli zkušení zemědělci a řemeslníci — většina odsouzených byli drobní zlodějíčci z londýnských chudinských čtvrtí. Flotila odplula 13. května 1787 a po průzkumu pobřeží se nakonec vylodila 26. ledna na místě dnešního Sydney. Vzhledem k tomu, že v okolí nebyla nijak zvlášť úrodná půda, bylo potřeba se vyrovnat s neznámým klimatem a odsouzenci nebyli zkušení zemědělci, byl počátek kolonie bojem o holé přežití. I díky Phillipovu vedení ovšem kolonie překonala počáteční obtíže a okolo roku 1790 už fungovala bez akutních problémů. A když byl odvolán a na konci roku 1792 odplul zpět do Anglie, hladomor v kolonii už nehrozil.",
      "portraits":[
         "arthur-phillip.jpg",
         "arthur-phillip-2.jpg",
      ],
      "online":"https://cs.wikipedia.org/wiki/Arthur_Phillip"
    },
    {
        "name":"John Cornforth",
        "birth":"7.9.1917",
        "death":"8.12.2013",
        "biography":"Sir John Warcup Cornforth byl australský organický chemik, nositel Nobelovy ceny za chemii za rok 1975. Obdržel ji za studium stereochemie enzymových reakcí. Vystudoval Univerzitu Sydney a již v dospívání ohluchl následkem otosklerózy. Na sydneyské univerzitě poznal svou budoucí manželku Ritu Harradenceovou (1915–2012); oba pak odjeli studovat do Anglie na Oxfordské univerzitě, kdy byl jejich učitelem Robert Robinson, a oba získali doktorát roku 1941. V té době ještě nebylo možno vykonat postgraduální studia v Austrálii. Roku 1941 Cornforth a Harradenceová také uzavřeli sňatek; měli pak spolu syna a dvě dcery.",
        "portraits":[
           "john-cornforth.jpg",
           "john-cornforth-2.jpg",
        ],
        "online":"https://cs.wikipedia.org/wiki/John_Cornforth"
     },
     {
        "name":"Bernard Katz",
        "birth":"26.3.1911",
        "death":"20.4.2003",
        "biography":"Sir Bernard Katz byl britsko-německý biofyzik židovského původu, nositel Nobelovy ceny za fyziologii a lékařství za rok 1970. Téhož roku byl také povýšen do šlechtického stavu. Spolu s ním Nobelovu cenu za práci o neurotransmiterech získali i Julius Axelrod a Ulf von Euler. Bernard Katz se narodil v Lipsku do židovské rodiny ruského původu. Na tamní univerzitě absolvoval roku 1934 a v roce 1935 uprchl před nacisty do Anglie. Doktorát získal roku 1938 na University College London (UCL), kde ho zpočátku vedl Archibald Vivian Hill. Poté Katz působil v Austrálii a za války bojoval v Tichomoří. Občanství získal roku 1941. Po návratu do Anglie se stal roku 1952 profesorem na UCL. Na odpočinek odešel roku 1978.",
        "portraits":[
           "sir-bernard-katz.jpg",
           "sir-bernard-katz-2.jpg",
        ],
        "online":"https://cs.wikipedia.org/wiki/Bernard_Katz"
     },
     {
        "name":"Grote Reber",
        "birth":"22.12.1911",
        "death":"20.12.2002",
        "biography":"Grote Reber byl americko-australský astronom, průkopník radioastronomie, tvůrce prvního radioteleskopu na světě. Svůj přístroj, při jehož sestavování navázal na objev radiového záření hvězd Karla Janskyho (1933), vytvořil roku 1937. Měřil 9,4 metru a až do konce druhé světové války šlo o jediný přístroj svého druhu na světě. Roku 1942 Reber vytvořil první radiovou mapu vesmíru. Zpočátku ovšem jeho radioteleskop byl schopen zaznamenávat jen velmi krátké vlny, kolem 3300 MHz. Později pracoval v pásmu 900 a 160 MHz, kde zjistil, že síla signálů kolísá s periodou hvězdného dne a že tedy nepocházejí ze Slunce. Přitom si povšiml, že z určitých míst vesmíru přicházejí silné signály, aniž by byl znám objekt, který by je vysílal. To byl počátek možnosti objevovat objekty ve vesmíru, aniž bychom je byli schopni spatřit dalekohledem. Roku 1947 i se svým radioteleskopem odjel do Virginie v Austrálii. Zároveň se stal ředitelem americké Experimental Microwave Research Section. Roku 1951 na Havaji postavil nový radioteleskop, který byl již schopen zaznamenávat i delší vlny (5 až 14 m). Roku 1954 začal pracovat pro Commonwealth Scientific and Industrial Research Organization na Tasmánii, neboť to bylo místo obzvlášť vhodné k radioastronomickému výzkumu. Roku 1957 přestoupil do National Radio Astronomy Observatory v Green Bank, v Západní Virginii, kde postavil 141 metrový radioteleskop. Později se ale vrátil na Tasmanii. Domníval se, že zachytil signály, které popírají jak teorii relativity, tak teorii Velkého třesku. Fyzikální komunita však jeho teorie příliš nepřijala. Přesto získal řadu ocenění a medailí a asteroid 6886 nese jméno Grote.",
        "portraits":[
           "grote-reber.jpg",
           "grote-reber-2.jpg",
        ],
        "online":"https://cs.wikipedia.org/wiki/Grote_Reber"
     },
     {
         "name":"William Lawrence Bragg",
         "birth":"31.3.1890",
         "death":"1.7.1971",
         "biography":"Sir William Lawrence Bragg, syn Williama Henryho Bragga, byl britský fyzik, zakladatel rentgenové strukturní analýzy a rentgenové spektroskopie. Spolu s otcem v roce 1913 vyvinuli Braggovu metodu (metodu otočného krystalu) na určování krystalové struktury pomocí rentgenového záření a na měření vlnové délky. Metoda umožnila zjistit krystalovou strukturu mnohých anorganických látek, např. diamantu či kamenné soli. Lawrence Bragg nadto formuloval Braggovu rovnici (vyjadřující podmínku pro ohyb monochromatického rentgenového záření vlnové délky lambda na krystalech). Bragg takto umožnil zjištění atomové struktury nerostů, slitin a silikátů. Za tyto objevy dostal spolu s otcem roku 1915 Nobelovu cenu za fyziku.",
         "portraits":[
            "william-lawrence-bragg.jpg"
         ],
         "online":"https://cs.wikipedia.org/wiki/William_Lawrence_Bragg"
      },
      {
         "name":"Edmund Barton",
         "birth":"18.1.1849",
         "death":"7.1.1920",
         "biography":"Narodil se v Sydney, kde také v roce 1871 vystudoval univerzitu a složil advokátní zkoušky. O prázdninách v roce 1870 poznal Jane Mason Rossovou, kterou si v roce 1877 vzal. Byl dobrým hráčem kriketu a později také kriketovým rozhodčím. Jeho politická kariéra je těsně spjata právě s kriketem. Byl jedním ze dvou rozhodčích ve slavném zápase družstev Nového Jižního Walesu a Anglie v roce 1879. Po kontroverzním rozhodnutí ze strany druhého sudího došlo k historicky první potyčce na kriketovém zápase (tzv. Sydney Riot of 1879). Barton pomohl tuto situaci zmírnit, což mu získalo popularitu ze strany médií, která mu pomohla v následující politické kariéře. V roce 1876 kandidoval do Zákonodárného shromáždění státu Nový jižní Wales (New South Wales Legislative Assembly), byl ale těsně poražen. S tímtéž výsledkem kandidoval v roce 1877, v roce 1879 ale zvítězil. V různých místních institucích zasedal až do roku 1879. Barton stál na straně podporovatelů federace autonomních australských států (tehdy byla Austrálie britskou kolonií) s jednotnou vládou. Po ustanovení australské vlády v roce 1901 se také stal jejím prvním premiérem, kterým zůstal do roku 1903. Prvním zákonem, schváleným Bartonovou vládou byl Immigration Restriction Act (Zákon o omezení přistěhovalectví), který oficiálně započal tzv. „politiku bílé Austrálie“. Součástí politiky omezení přistěhovalectví byla zásada, že se v Austrálii mohly usadit pouze osoby bílé barvy pleti. Ve víceméně nezměněné formě toto rasistické pravidlo přetrvalo až do padesátých let 20. století. V roce 1902 získal od anglického krále šlechtický titul, v roce 1903 se stal soudcem australského Nejvyššího soudu. Měl čtyři syny a dvě dcery.",
         "portraits":[
             "edmund-barton.jpg"
         ],
         "online":"https://cs.wikipedia.org/wiki/Edmund_Barton"
      },
 ];

// Články s historickými zajímavostmi


$(function(){

/* Po kliknutí na některý z nadpisů h2 se střídavě zobrazí nebo zmizí blok (div) pod nadpisem */    
    $("h2").on("click", function(){
        /* $(this) = selektor, který ukazuje na právě aktivní objekt, v tomto případě tedy na jeden z nadpisů h2, na který bylo kliknuto */
        /* Následuje tzv. traverzování: */
        /* parents(".row") - hledá mezi nadřízenými prvky (rodiči) první, který obsahuje třídu .row */
        /* next() - ukáže na nejbližšího sourozence; v tomto případě další div */
        /* toggle() - metoda, která střídavě skrývá|odkrývá vybrané prvky */
        $(this).parents(".row").next().toggle(1000);
    });

/* V první části je tabulka s významnými událostmi z dějin dané země */    
/* Data jsou do tabulky načtena z proměnné events */
/* Všimněte si, že v bloku .event-evaluation je použit ternární operátor, který rozhoduje o zobrazení ikony + nebo -*/
    events.forEach((event)=>{
        /* Metoda append() přidává nové prvky do vybrané částí stránky (vždy za už existující obsah) */
        $("#udalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
            <td class="event-evaluation">${(event.evaluation == "true") ? '<i class="fas fa-plus-circle text-success"></i>' : '<i class="fas fa-minus-circle text-danger"></i>'}</td>
        </tr>`);
    });

    /* Po načtení stránky se skryjí všechny detaily událostí */
    $(".event-detail").hide();

    /* Při najetí kurzoru myši na ikonu nebo odkaz dojde k následujícím akcím: */
    $(".event-name i, .event-name a").on("click", function(){
        /* Ze všech řádků tabulky se odstraní dvě uvedené třídy */
        $("#udalosti tr").removeClass("history text-white");
        /* Tyto dvě třídy sepřidají jen rodičovskému řádku (.parents("tr")) toho (this) prvku, na který zrovna ukázala myš */
        $(this).parents("tr").addClass("history text-white");
        /* Nejprve zajistíme skrytí všech detailů událostí */
        $(".event-detail").hide();
        /* Poté ukážeme pouze ten detail, který následuje po prvku, na který zrovna ukázala myš */
        /* Zde je použito tzv. traverzování - metodou parent() nejprve "traverzujeme" na rodiče aktivního prvku (odstavec), 
           poté metodou next() vybereme nejbližšího následujícího sourozence (odstavec s detailem) */
        /* Zároveň zde, ale i na jiných místech, využíváme tzv. řetězení (chaining), kdy můžeme volat několik metod v řadě */   
        $(this).parent().next().show(500);
    });    

/* Druhá část stránky obsahuje seznam slavných postav a vedle něj se po kliknutí zobrazuje karta s podrobnějším profilem osobnosti */    
/* Nejprve jsou načtena jména osobností z proměnné heroes do seznamu upraveného pomocí tříd Bootstrapu */
    heroes.forEach((hero)=>{
        $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
    });

    /* Funkce zajistí načtení dat o vybrané osobnosti a jejich správné zobrazení ve struktuře karty */
    function fillPersonCard(person) {
        /* Do proměnné hero se z pole heroes načte objekt o osobnosti, která byla vyhledána podle jména */
        let hero = heroes.find(item => {return item.name === person});
        /* Metoda html() umožnuje vložení HTML kódu (odpovídá innerHTML() v JS) */
        $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
        /* Metoda text() umožnuje vložení "holého" textu (odpovídá innerText() v JS) */
        $(".card-title").text(hero.name);
        $(".card-text").text(hero.biography);
        $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
        /* Vyprázdní se oblast s galerií fotek spojených s danou osobností */
        $(".gallery").empty();
        /* V cyklu budou přidány nové bloky s fotkami osobnosti */
        for (let i = 0; i < hero.portraits.length; i++) {
            $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="../img/${hero.portraits[i]}" style="padding-top: 10px;" alt="" class="img-fluid"></a></div>`);        
        }
    }

    /* Po načtení stránky bude jako aktivní označena první osobnost v seznamu */
    $("#postavy li:first").addClass('active');
    /* Pomocí připravené funkce, které je předáno jméno první osobnosti, se načtou data do profilové karty */
    fillPersonCard(heroes[0].name);

    /* Po kliknutí na jméno osobnosti v seznamu se provede následující sled akcí: */
    $("#postavy li").on("click", function(){
        /* Nejprve všechny prvky seznamu zbavíme třídu active, abychom měli jistotu, že žádný z nich nebude zvýrazněn */
        $("#postavy li").removeClass("active");
        /* A nyní přidáním třídy active zvýrazníme právě ten prvek (this), na který bylo kliknuto */
        $(this).addClass("active");        
        /* Do proměnné person se uloží textová hodnota (tj. jméno osoby) toho (this) objektu, na který uživatel kliknul */
        let person = $(this).text();
        /* Celý blok označený id portret se nejprve zaroluje a po dovršení této akce se zavolá tzv. callback funkce */
        $("#portret").slideUp(1000, function(){
            /* Součástí callback funkce je změna údajů na profilové kartě podle jména aktuálně vybrané osobnosti (proměnná person) */
            fillPersonCard(person);
        });
        /* Blok portret se během 1 sekundy vyroluje */
        $("#portret").slideDown(1000);
    });

/* Třetí část stránky je věnována článkům z historie země */    
/* Články jsou načteny z proměnné articles a umístěny do responzivních bloků */
    articles.forEach((article)=>{
        $("#zpravodaj").append(`    
        <div class="col-sm-6 mt-3 pb-3 border-bottom">
          <article>
            <figure>
              <img src="images/${article.gallery[0]}" alt="${article.title}" class="img-fluid">
            </figure>
            <h3>${article.title}</h3>
            <div class="article-text">
                <p>${article.text}</p>
                <p><a href="${article.source}" target="_new">Celý článek</a></p>
            </div>
            <div class="article-footer">Autor: ${article.author} 
            <button type="button" class="btn btn-success likes"><i class="fas fa-thumbs-up"></i> <span class="badge badge-light">${article.likes}</span></button>
            <button type="button" class="btn btn-danger dislikes"><i class="fas fa-thumbs-down"></i> <span class="badge badge-light">${article.dislikes}</span></button>
            </div>
          </article>
        </div>        
    `);    
    });
})

$(function () {
    $('.udalosti-title').click(function () {
        $(this).next('div').slideToggle();

        $(this).parent().siblings().children().next().slideUp();
        return false;
    });
});