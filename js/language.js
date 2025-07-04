const json_langauge = {
  italiano: [
    { id: 'home-txt', html: 'home' },
    { id: 'about-txt', html: 'Chi sono' },
    { id: 'skills-txt', html: 'Skills' },
    { id: 'projects-txt', html: 'Portfolio' },
    { id: 'qualification-txt', html: 'Esperienza' },
    { id: 'language-txt', html: 'English' },
    { id: 'home-title-txt', html: 'Ciao, sono Marco' },
    { id: 'home-subtitle-txt', html: 'Data Analyst e Consulente di BI' },
    { id: 'footer-subtitle-text', html: 'Data Analyst e Consulente di BI' },
    {
      id: 'home-description-txt',
      html:
        'Sono Marco Vetrano ho ' +
        calcolaAnniPassati(new Date('4/28/1998')) +
        ' anni, laureato in Economia e Business Analytics, Data Analyst presso <b>Reply</b>'
    },
    { id: 'contactme-txt', html: 'Contattami' },
    { id: 'scroll-txt', html: 'Scorri giù' },
    { id: 'about-section__title-txt', html: 'Chi sono' },
    { id: 'about-section__subtitle-txt', html: 'Qualcosa su di me' },
    {
      id: 'about__description-txt',
      html: 'Sono Marco Vetrano, nato a Castellaneta (TA) il 28 aprile del <b>1998</b>. Sin da subito ho avuto le idee chiare su cosa volessi fare da grande. Ho conseguito la laurea magistrale in <b>Economia e Business Analytics</b> nel 2024 e attualmente sono un BI Consultant presso <b>Cluster Reply</b> <a onclick="openModal(\'About\')" class="more__info__about__link">Voglio saperne di più <i class="uil uil-plus active-link"></i></a>'
    },
    { id: 'about__info-experience-txt', html: 'Anni di <br> esperienza' },
    {
      id: 'about__info-experience-number-txt',
      html: '0' + calcolaAnniPassati(new Date('1/1/2017')) + '+'
    },
    { id: 'about__info-project-txt', html: 'Progetti <br> completati' },
    {
      id: 'about__info-companies-txt',
      html: 'Aziende in cui <br> ho lavorato'
    },
    { id: 'about__buttons-txt', html: 'Download CV' },
    { id: 'skills-section__title-txt', html: 'Skills' },
    { id: 'skills-section__subtitle-txt', html: 'Il mio livello tecnico' },
    {
      id: 'Frontend-skills__subtitle-txt',
      html: 'Più di ' + calcolaAnniPassati(new Date('1/1/2017')) + ' anni'
    },
    {
      id: 'Backend-skills__subtitle-txt',
      html: 'Più di ' + calcolaAnniPassati(new Date('1/1/2018')) + ' anni'
    },
    {
      id: 'AI-skills__subtitle-txt',
      html: 'Più di ' + calcolaAnniPassati(new Date('9/15/2021')) + ' anni'
    },
    {
      id: 'BI-skills__subtitle-txt',
      html: 'Più di ' + calcolaAnniPassati(new Date('9/15/2021')) + ' anni'
    },
    {
      id: 'SW-skills__subtitle-txt',
      html: 'Più di ' + calcolaAnniPassati(new Date('9/15/2021')) + ' anni'
    },
    { id: 'qualification-section__title-txt', html: 'Esperienza' },
    {
      id: 'qualification-section__subtitle-txt',
      html: 'Il mio viaggio personale'
    },
    { id: 'qualification-work-button-txt', html: 'Lavoro' },
    { id: 'qualification-education-button-txt', html: 'Istruzione' },
    { id: 'qualification-publishing-button-txt', html: 'Pubblicazioni' },
    {
      id: 'qualification-publishing-link-1-txt',
      html: 'Maggiori informazioni'
    },
    { id: 'qualification-education-link-thesis-txt', html: 'Leggi la Tesi 🇮🇹' },
    {
      id: 'qualification-education-link-master-thesis-txt',
      html: 'Leggi la Tesi 🇮🇹'
    },
    { id: 'footer-copy', html: '&#169; ABC Labs, All rigth reserved' },
    { id: 'footer-link-portfolio-txt', html: 'Portfolio' },
    { id: 'footer-link-contactme-txt', html: 'Contattami' },
    { id: 'footer-link-skills-txt', html: 'Skills' },
    { id: 'contactme-section__title-txt', html: 'Contattami' },
    { id: 'contactme-section__subtitle-txt', html: 'Rimaniamo in contatto' },
    { id: 'contactme-call-section__title-txt', html: 'Chiamami' },
    { id: 'contactme-email-section__title-txt', html: 'Mail' },
    { id: 'contactme-location-section__title-txt', html: 'Dove sono' },
    { id: 'contactme-location-section__subtitle-txt', html: 'Torino - Italia' },
    { id: 'name-contact__label-txt', html: 'Nome' },
    { id: 'surname-contact__label-txt', html: 'Cognome' },
    { id: 'email-contact__label-txt', html: 'Mail' },
    { id: 'message-contact__label-txt', html: 'Messaggio' },
    { id: 'contactme-button-txt', html: 'Invia il messaggio' },
    { id: 'portfolio-section__title-txt', html: 'Portfolio' },
    { id: 'portfolio-section__subtitle-txt', html: 'I progetti più recenti' },
    { id: 'abclabs-portfolio__title-txt', html: 'ABC Labs sito vetrina' },
    {
      id: 'abclabs-portfolio__description-txt',
      html: "Il sito vetrina di ABC Labs, un'azienda di sviluppo software. Progetto svolto con HTML, CSS, JS. Integrazione con bot di Telegram per le comunicazioni e google analytics"
    },
    {
      id: 'visual-algo-portfolio__title-txt',
      html: 'Dijkstra Visual algorithm'
    },
    {
      id: 'visual-algo-portfolio__description-txt',
      html: "Un progetto personale sviluppoato a supporto degli esercizi di algoritmi e strutture dati per visuliazzare la risuluzione dell'algoritmo di Dijkstra su un qualisi grafo. L'idea è quella di implementare altri algortimi di risoluzione. Utilizzo della libreria vis.js"
    },
    { id: 'prolog-portfolio__title-txt', html: 'Cattura gli obiettivi' },
    {
      id: 'prolog-portfolio__description-txt',
      html: "Progetto di ricerca nello spazio degli stati usando Prolog per permettere ad un agente di muoversi in un labirinto privo di uscite per cercare catturare tutti i checkpont presenti muovendosi nelle 8 direzioni con l'obiettivo di ottimizzare il percorso. Utilizzo di backtracking e Sub-Goaling"
    },
    {
      id: 'mmsd-portfolio__title-txt',
      html: 'Ottimizzazione Calendario Esami Universitari'
    },
    {
      id: 'mmsd-portfolio__description-txt',
      html: "Progetto in ambito di ricerca svolto per l'università degli studi di Torino, Il focus del progetto è stato quello di sviluppare un modello per ottimizzare l'assegnazione degli esami del corso triennale di informatica ottimizzando le distaze, preferenze dei professori e disponibilità delle aule. Svolto utilizzadno Python, pyomo, PySimpleGUI e programmazione lineare."
    },
    { id: 'flappy-portfolio__title-txt', html: 'JS Flappy Bird ' },
    {
      id: 'flappy-portfolio__description-txt',
      html: "Replica del famoso gioco flappy bird utlizzando javascript vanilla. L'idea sarebbe quella di partire da questa base e tramite rete neurale feed forward farne una versione automatica ed evolutiva sino a trovare la configuazione di pesi che permette di vincere il gioco"
    },
    { id: 'OC-portfolio__title-txt', html: 'Multi Commodity Min Cost Flow' },
    {
      id: 'OC-portfolio__description-txt',
      html: "Il seguente lavoro è una trattazione approfondita del problema di flusso su rete conosciuto come Multi Commodity Min Cost flow. comprende un'introduzione al problema appoggiandosi alla sua versione generalizzata e successivamente si andrà nel dettaglio cercando di individuare gli elementi complicanti, i possibili rilassamenti e approcci risolutivi"
    },
    {
      id: 'abclabs-dashboard-portfolio__title-txt',
      html: 'ABC Labs pannello gestionale'
    },
    {
      id: 'abclabs-dashboard-portfolio__description-txt',
      html: 'Il pannello gestionale di ABC Labs nel quale i clienti possono visionare statistiche, generare report e ticket. Piattaforma che gestisce in completa autonomia pagamenti ricorrenti. Progetto svolto con  HTML, CSS, JS, NodeJS per il backend'
    },
    { id: 'modal__Term__title-txt', html: 'Termini e condizioni' },
    { id: 'open-modal', html: 'Termini e condizioni' },
    {
      id: 'modal__Term__description-txt',
      html: "Nessuna informazione personali fornita mediante il form dei contatti non è trattata dal presente sito web ne da terzi, ma vengono utilizzate unicamente per lo scopo di inviare il messaggio presente nel campo 'messaggio' "
    },
    { id: 'modal__about__title-txt', html: 'La mia storia' },
    {
      id: 'modal__about__description-txt',
      html: 'Apprezzo molto che tu sia interessato :) prometto che carichero a breve la mia storia nel dettaglio'
    },
    { id: 'reminder-portfolio__title-txt', html: 'Reminder Bot Telegram' },
    {
      id: 'reminder-portfolio__description-txt',
      html: "Il progetto è attualmente utilizzato come assiste nei vari progetti, permette di schedulare attività ricorrenti come remider o backup automatici, inoltre espone un'API utilizzata per notificare errori a run time nei vari programmi. Il progetto è stato sviluppato utilizzadno JAva Spring boot, Docker, Telegram API e deployato su Azure"
    }
  ],

  english: [
    { id: 'home-txt', html: 'Home' },
    { id: 'about-txt', html: 'About' },
    { id: 'skills-txt', html: 'Skills' },
    { id: 'projects-txt', html: 'Projects' },
    { id: 'contactme-txt', html: 'Contact Me' },
    { id: 'language-txt', html: 'Italiano' },
    { id: 'home-title-txt', html: "Hi, I'm Alberto" },
    { id: 'home-subtitle-txt', html: 'Full Stack, AI Developer ' },
    { id: 'footer-subtitle-text', html: 'Full Stack, AI Developer ' },
    {
      id: 'home-description-txt',
      html:
        'My name is Alberto Campini, I have ' +
        calcolaAnniPassati(new Date('8/23/1999')) +
        ' years, graduated in computer science, Data Analyst at <b>Reply</b>, Fouder of <b>ABC Labs</b>'
    },
    { id: 'qualification-txt', html: 'Qualification' },
    { id: 'scroll-txt', html: 'Scroll Down' },
    { id: 'about-section__title-txt', html: 'About Me' },
    { id: 'about-section__subtitle-txt', html: 'My introduction' },
    {
      id: 'about__description-txt',
      html: 'I\'m Alberto Campini, born in Asti on August 23 of <b> 1999 </b>. Right from the start I had clear ideas about what I wanted to do when I grew up. I founded my first company, <b> ABC Labs </b>, together with two partners in March 2021. I have received my master\'s degree in <b>AI</b> in 2023. now I\'m an AI & BI developer at <b> Cluster Reply </b>.<a onclick="openModal(\'About\')" class="more__info__about__link">I want more information <i class="uil uil-plus active-link"></i></a>'
    },
    { id: 'about__description__more__info-txt', html: 'Voglio saperne di più' },
    { id: 'about__info-experience-txt', html: 'Years <br> experience' },
    {
      id: 'about__info-experience-number-txt',
      html: '0' + calcolaAnniPassati(new Date('1/1/2017')) + '+'
    },
    { id: 'about__info-project-txt', html: 'Completated <br> Projects' },
    { id: 'about__info-companies-txt', html: 'Companies <br> worked' },
    { id: 'about__buttons-txt', html: 'Download CV' },
    { id: 'skills-section__title-txt', html: 'Skills' },
    { id: 'skills-section__subtitle-txt', html: 'My technical level' },
    {
      id: 'Frontend-skills__subtitle-txt',
      html: 'More than ' + calcolaAnniPassati(new Date('1/1/2017')) + ' years'
    },
    {
      id: 'Backend-skills__subtitle-txt',
      html: 'More than ' + calcolaAnniPassati(new Date('1/1/2018')) + ' years'
    },
    {
      id: 'AI-skills__subtitle-txt',
      html: 'More than ' + calcolaAnniPassati(new Date('9/15/2021')) + ' years'
    },
    {
      id: 'BI-skills__subtitle-txt',
      html: 'More than ' + calcolaAnniPassati(new Date('9/15/2021')) + ' years'
    },
    {
      id: 'SW-skills__subtitle-txt',
      html: 'More than ' + calcolaAnniPassati(new Date('9/15/2021')) + ' years'
    },
    { id: 'qualification-section__title-txt', html: 'Qualification' },
    { id: 'qualification-section__subtitle-txt', html: 'My personal journey' },
    { id: 'qualification-work-button-txt', html: 'Work' },
    { id: 'qualification-education-button-txt', html: 'Education' },
    { id: 'qualification-publishing-button-txt', html: 'Publishing' },
    { id: 'qualification-publishing-link-1-txt', html: 'See more info' },
    {
      id: 'qualification-education-link-thesis-txt',
      html: 'Read my thesis 🇮🇹'
    },
    {
      id: 'qualification-education-link-master-thesis-txt',
      html: 'Read my thesis 🇮🇹'
    },
    { id: 'footer-copy', html: '&#169; ABC Labs, All rigth reserved' },
    { id: 'footer-link-portfolio-txt', html: 'Portfolio' },
    { id: 'footer-link-contactme-txt', html: 'Contactme' },
    { id: 'footer-link-skills-txt', html: 'Skills' },
    { id: 'contactme-section__title-txt', html: 'Contact Me' },
    { id: 'contactme-section__subtitle-txt', html: 'Get in touch' },
    { id: 'contactme-call-section__title-txt', html: 'Call Me' },
    { id: 'contactme-email-section__title-txt', html: 'Mail' },
    { id: 'contactme-location-section__title-txt', html: 'Location' },
    { id: 'contactme-location-section__subtitle-txt', html: 'Italy - Turin' },
    { id: 'name-contact__label-txt', html: 'Name' },
    { id: 'surname-contact__label-txt', html: 'Surname' },
    { id: 'email-contact__label-txt', html: 'Mail' },
    { id: 'message-contact__label-txt', html: 'Message' },
    { id: 'contactme-button-txt', html: 'Send Message' },
    { id: 'portfolio-section__title-txt', html: 'Portfolio' },
    { id: 'portfolio-section__subtitle-txt', html: 'Most recent projects' },
    { id: 'abclabs-portfolio__title-txt', html: 'ABC Labs static website' },
    {
      id: 'visual-algo-portfolio__title-txt',
      html: 'Dijkstra Visual algorithm'
    },
    { id: 'prolog-portfolio__title-txt', html: 'Capture targets' },
    {
      id: 'prolog-portfolio__description-txt',
      html: 'Research project in the space of the states using Prolog to allow an agent to move in a labyrinth without exits to try to capture all the checkponts present moving in the 8 directions with the aim of optimizing the path. Using Backtracking and Sub-Goaling'
    },
    {
      id: 'visual-algo-portfolio__description-txt',
      html: "A personal project developed to support the exercises of algorithms and data structures to visualize the resolution of Dijkstra's algorithm on any graph. The idea is to implement other resolution algorithms. Using the vis.js library"
    },
    {
      id: 'mmsd-portfolio__title-txt',
      html: 'Optimization of the University Exam Calendar'
    },
    {
      id: 'mmsd-portfolio__description-txt',
      html: "Research project developed for the University of Turin with the focus on developing a model to optimize the assignment of the three-year computer science course exams by optimizing distances, professors' preferences and classroom availability. Done using Python, pyomo, PySimpleGUI and linear programming."
    },
    {
      id: 'abclabs-portfolio__description-txt',
      html: 'The showcase site of ABC Labs, a software development company. Project done with HTML, CSS, JS. Integration with Telegram bot for communications and google analytics'
    },
    {
      id: 'abclabs-dashboard-portfolio__title-txt',
      html: 'ABC Labs dashboard'
    },
    {
      id: 'abclabs-dashboard-portfolio__description-txt',
      html: 'The ABC Labs management panel where customers can view statistics, generate reports and tickets. Platform that manages recurring payments in complete autonomy. Project done with HTML, CSS, JS, NodeJS for the backend.'
    },
    { id: 'modal__Term__title-txt', html: 'Term & Conditions' },
    { id: 'flappy-portfolio__title-txt', html: 'JS Flappy Bird ' },
    { id: 'OC-portfolio__title-txt', html: 'Multi Commodity Min Cost Flow' },
    {
      id: 'OC-portfolio__description-txt',
      html: 'The following work is an in-depth study of the network flow problem known as Multi Commodity Min Cost Flow. It includes an introduction to the problem, based on its generalized version, and then delves into the details, aiming to identify complicating elements, potential relaxations, and solving approaches.'
    },
    {
      id: 'flappy-portfolio__description-txt',
      html: 'Replica of the famous flappy bird game using vanilla javascript. The idea would be to start from this base and using a feed forward neural network to make an automatic and evolutionary version of it until finding the weight configuration that allows you to win the game'
    },
    { id: 'open-modal', html: 'Term & Conditions' },
    {
      id: 'modal__Term__description-txt',
      html: "No personal information provided through the contact form is not processed by this website or by third parties, but are used solely for the purpose of sending the message in the 'message' field"
    },
    { id: 'modal__about__title-txt', html: 'My Stories' },
    {
      id: 'modal__about__description-txt',
      html: 'I really appreciate that you are interested :) I promise that I will upload my story in detail shortly'
    }
  ]
}

function calcolaAnniPassati (dataPassata) {
  const dataOdierna = new Date()
  const differenzaInMillisecondi = dataOdierna - dataPassata

  // Calcola il numero di millisecondi in un anno (considerando anche gli anni bisestili)
  const millisecondiInUnAnno = 31560000000 // 1000 ms * 60 s * 60 min * 24 h * 365 days

  const anniPassati = Math.floor(
    differenzaInMillisecondi / millisecondiInUnAnno
  )
  return anniPassati
}
