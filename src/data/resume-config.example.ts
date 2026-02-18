import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Rayan Kabra',
    photo: '/images/rayan-dev.png', // Place your photo in public/images/
    photoBackEmoji: '⚛', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeur Fullstack',
    },
    subtitle: {
      en: 'React / Next.js / TypeScript / Node.js',
      fr: 'React / Next.js / TypeScript / Node.js',
    },
    location: 'Paris, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Rayan Kabra — Fullstack Developer',
    description: 'Interactive resume of Rayan Kabra, Fullstack Developer specializing in React, Next.js, TypeScript and Node.js.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'Rayan Kabra', href: 'https://github.com/RKcodage' },
    { type: 'linkedin', label: 'Rayan Kabra', href: 'https://www.linkedin.com/in/rayan-kabra-26103b135/' },
    { type: 'email', label: 'rayan.kabra@gmail.com' },
    { type: 'phone', label: '+33 6 69 49 50 39' },
    { type: 'location', label: 'Châtenay-Malabry, Ile-de-France, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'Niveau B2' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Next.js' },
        { name: 'Vite' },
        { name: 'Tailwind CSS' },
        { name: 'SCSS' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Nest.js' },
        { name: 'Express.js' },
        { name: 'Prisma' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'SQL Server' },
        { name: 'SQLite' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'AWS' },
        { name: 'GitHub Actions' },

      ],
    },
    {
      title: { en: 'Testing', fr: 'Testing' },
      type: 'badges',
      items: [
        { name: 'Jest' },
        { name: 'Playwright' },
        { name: 'Vitest' },
        { name: 'React Testing Library' },

      ],
    },
    {
      title: { en: 'Tools', fr: 'Outils' },
      type: 'badges',
      items: [
        { name: 'GitHub' },
        { name: 'GitLab' },
        { name: 'Table Plus' },
        { name: 'Source Tree' },
        { name: 'Postman' },
        { name: 'Airtable' },
        { name: 'Supabase' },
        { name: 'Jira' },
        { name: 'Confluence' },
        { name: 'Figma' },
        { name: 'Open AI Codex' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
      ],
    },
    {
      title: { en: 'Soft Skills', fr: 'Savoir-être' },
      type: 'text',
      items: [
        { name: { en: 'Autonomy, Communication, Teamwork, Problem-solving, Perseverance, Adaptability', fr: 'Autonomie, Communication, Travail d\'équipe, Persévérance, Adaptabilité' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'Circul Egg\'', fr: 'Circul Egg\'' },
      role: { en: 'Fullstack Developer', fr: 'Développeur Fullstack' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: ' nov. 2025 - Present', fr: 'nov. 2025 - Aujourd\'hui' },
      description: {
        en: 'Design and development of a website and industrial traceability software.',
        fr: 'Conception et développement d’un site web et d’un logiciel de traçabilité industrielle.'
      },
      techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker','GitHub Actions', 'AWS', 'Jest'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Solo developer within the startup, with regular iterations and frequent client validations. Agile/Scrum approach with 2-week sprints, CI/CD pipeline using GitHub Actions, and feature testing before each commit.',
          fr: 'Seul développeur au sein de la start-up, itérations régulières et validations fréquentes avec le client. Méthodologie Agile/Scrum avec des sprints de 2 semaines, pipeline CI/CD avec GitHub Actions, testing des fonctionnalités avant chaque commit.',
        },
        tasks: {
          en: [
            'Designed the fullstack architecture and traceability data model (batches, steps, events)',
            'Built the back-office: batch creation, production workflows, history views, audit logs',
            'Implemented access management (authentication, roles, permissions) and business rule validation',
            'Implemented automated tests with Jest to secure critical workflows',
            'Added exports (CSV/PDF) and reporting dashboards for industrial tracking',
            'Set up CI/CD pipelines, containerization, and AWS deployment',
            'Led client acceptance testing, rapid iterations, and user documentation',
          ],
          fr: [
            'Conception de l\'architecture fullstack et du modèle de données de traçabilité (lots, étapes, événements)',
            'Développement du back-office : création/consultation de lots, workflow de production, historiques et audit',
            'Implémentation de la gestion des accès (authentification, rôles, permissions) et des validations métier',
            'Mise en place de tests automatisés avec Jest pour sécuriser les workflows critiques',
            'Intégration d\'exports (CSV/PDF) et de rapports/indicateurs pour le suivi industriel',
            'Mise en place des pipelines CI/CD, dockerisation et déploiement sur AWS',
            'Recette fonctionnelle avec le client, itérations rapides et documentation d\'usage',
          ],
        },
        
        env: {
          en: 'React / TypeScript / Node.js / PostgreSQL / GraphQL / Redis / Docker / AWS / GitHub Actions / Datadog',
          fr: 'React / TypeScript / Node.js / PostgreSQL / GraphQL / Redis / Docker / AWS / GitHub Actions / Datadog',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'Krialys', fr: 'Krialys' },
      role: { en: 'Fullstack Developer', fr: 'Développeur Fullstack' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2023 - 2025', fr: '2023 - 2025' },
      description: {
        en: 'Developed complex business interfaces for a B2B software publisher.',
        fr: 'Développement d’interfaces métiers complexes pour un éditeur de logiciels B2B.',
      },
      techs: ['React', 'Next.js', 'TypeScript', 'Kubernetes', 'Azure', 'Playwright'],
      details: {
        context: {
          en: 'Team of 4–5 developers, Agile/Scrum methodology with short sprints, regular planning and retrospectives. Git workflow with mandatory PRs and systematic code reviews before merging.',
          fr: 'Équipe de 4–5 développeurs, méthodologie Agile/Scrum avec sprints courts, planification et rétrospectives régulières. Workflow Git basé sur PR obligatoires, revues de code systématiques avant merge.',
        },
        tasks: {
          en: [
            'Built business interfaces for data traceability and lineage visualization',
            'Implemented data quality rules (checks, thresholds, alerts) and KPI reporting',
            'Integrated APIs/connectors to ingest metadata from client systems',
            'Designed dashboards and exports to monitor data quality',
            'Optimized performance and robustness for high-volume datasets',
            'Worked with PO/QA to define business rules and validate deliveries',
          ],
          fr: [
            'Développement d\'interfaces métiers pour la traçabilité des données et la visualisation des lignées',
            'Mise en place de règles de qualité (contrôles, seuils, alertes) et restitution des indicateurs',
            'Intégration d\'APIs et de connecteurs pour remonter les métadonnées des SI clients',
            'Conception de tableaux de bord et d\'exports pour le suivi de la qualité des données',
            'Optimisation des performances et de la robustesse sur des volumes élevés',
            'Collaboration avec PO/QA sur la définition des règles métier et la validation des livrables',
          ],
        },
        env: {
          en: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
          fr: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
        },
      },
    },
    {
      id: 'company-c',
      company: { en: 'Municipality Châtillon', fr: 'Commune de Châtillon' },
      role: { en: 'Legal Affairs Manager', fr: 'Responsable juridique - Affaires générales' },
      type: { en: 'Fixed term contract', fr: 'CDD' },
      period: { en: 'août 2020 - août 2022', fr: 'août 2020 - août 2022' },
      description: {
        en: 'Led the municipality\'s legal affairs: advising departments, securing official acts, managing litigation and public contracts, legal monitoring and compliance.',
        fr: 'Pilotage des dossiers juridiques de la commune : conseil aux directions, sécurisation des actes, suivi des contentieux.',
      },
      techs: [],
      
    },
    {
      id: 'company-d',
      company: { en: 'Airbus Defense & Space', fr: 'Airbus Defense & Space' },
      role: { en: 'Compliance Counsel - Export Control', fr: 'Juriste conformité - Export Control' },
      type: { en: 'Fixed term contract', fr: 'CDD' },
      period: { en: 'août 2020 - août 2022', fr: 'août 2020 - août 2022' },
      description: {
        en: 'Led the municipality\'s legal affairs: advising departments, securing official acts, managing litigation and public contracts, legal monitoring and compliance.',
        fr: 'Analyse contractuelle et traitement des dossiers d\'exportation de biens sensibles.',
      },
      techs: [],
      
    },
    /* {
      id: 'internship',
      company: { en: 'StartupXYZ', fr: 'StartupXYZ' },
      role: { en: 'Fullstack Developer Intern', fr: 'Stagiaire Développeuse Fullstack' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2018 - 2019', fr: '2018 - 2019' },
      description: {
        en: 'Contributed to the development of an e-commerce platform. Gained experience in fullstack development.',
        fr: 'Contribution au développement d\'une plateforme e-commerce. Acquisition d\'expérience en développement fullstack.',
      },
      techs: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
      details: {
        context: {
          en: 'Early-stage startup (seed round), small team of 5 developers building an e-commerce platform from the ground up. Fast-paced environment with weekly releases.',
          fr: 'Startup en phase de démarrage (seed round), petite équipe de 5 développeurs construisant une plateforme e-commerce from scratch. Environnement rapide avec des releases hebdomadaires.',
        },
        tasks: {
          en: [
            'Developed the product catalog with advanced filtering and search',
            'Built the shopping cart with real-time inventory checking',
            'Integrated Stripe payment gateway with 3D Secure support',
            'Implemented user authentication with JWT and OAuth (Google, Facebook)',
            'Created an admin dashboard for order management and analytics',
            'Wrote API documentation with Swagger/OpenAPI',
          ],
          fr: [
            'Développement du catalogue produits avec filtrage avancé et recherche',
            'Création du panier d\'achat avec vérification de stock en temps réel',
            'Intégration de la passerelle de paiement Stripe avec support 3D Secure',
            'Implémentation de l\'authentification utilisateur avec JWT et OAuth (Google, Facebook)',
            'Création d\'un tableau de bord admin pour la gestion des commandes et les analytics',
            'Rédaction de la documentation API avec Swagger/OpenAPI',
          ],
        },
        env: {
          en: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
          fr: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
        },
      },
    }, */
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'UpFlow', fr: 'UpFlow' },
      description: {
        en: 'Fullstack SaaS app allowing end users to submit feature requests and vote on product improvements via an embeddable widget. Built an admin interface to manage requests and analyze votes.',
        fr: 'Application SaaS Fullstack permettant aux utilisateurs finaux de soumettre des demandes de fonctionnalités et de voter pour les améliorations produit via un widget intégrable. Développement d\'une interface d\'administration pour la gestion des demandes et l\'analyse des votes.',
      },
      techs: ['React', 'Next.js', 'TailwindCSS','TypeScript', 'MongoDB'],
      url: 'https://www.upflow.website/',
      github: 'https://github.com/janedoe/weather-app',
    },
    {
        id: 'project-b',
      title: { en: 'Ma Gestion Immo', fr: 'Ma Gestion Immo' },
      description: {
        en: 'Complete SaaS property management platform for landlords and their tenants.',
        fr: 'Plateforme SaaS complète de gestion immobilière pour les propriétaires et leurs locataires.',
      },
      techs: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Jest', 'React Testing Library', 'WebSocket'],
      url: 'https://ma-gestion-immo.netlify.app/',
      github: 'https://github.com/janedoe/task-manager',
    },
    {
        id: 'project-c',
      title: { en: 'Reggenerate', fr: 'Reggenerate' },
      description: {
        en: 'Built a marketing website for a startup in the agrifood industry.',
        fr: 'Développement d\'un site vitrine pour une start-up dans le domaine de l\'agro-alimentaire. Gestion du contenu via Airtable, intégration d\'API pour les données dynamiques, optimisation SEO et performance.',
      },
      techs: ['React', 'Next.js', 'TypeScript', 'Airtable'],
      url: 'https://reggenerate.circulegg.fr/',
      
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'Le Reacteur', fr: 'Le Reacteur' },
      degree: { en: 'Master in Computer Science', fr: 'Titre professionnel (Bac +4/5)' },
      specialty: { en: 'Concepteur Développeur d\'Applications - Web & Mobile', fr: 'Concepteur Développeur d\'Applications - Web & Mobile' },
      period: '2023 - 2025',
    },
    {
      school: { en: 'Jean Monnet University - Paris-Saclay Campus', fr: 'Faculté Jean Monnet - Université Paris-Saclay' },
      degree: { en: 'Bachelor\'s and Master\'s degrees (I and II) in law', fr: 'Licence et Master I et II en droit' },
      period: '2013 - 2018',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography & Filming', fr: 'Photo & Vidéo' },
      details: [
        { en: 'Aerial drone footage', fr: 'Prises de vues aériennes en drone' },
        { en: '', fr: '' },
      ],
    },
    {
      title: { en: 'Trail', fr: 'Trail' },
      details: [
        { en: 'Long-distance races', fr: 'Courses longues distances' },
      ],
    },
  ],

  // ===== PDF (optional — place your PDF in public/cv/) =====
  // Use a string for the same PDF in all languages,
  // or a LocalizedString for one PDF per language (button is hidden if no PDF for the current language).
  /* pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/resume-en.pdf', fr: '/cv/resume-fr.pdf' },
  }, */

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
      printPdf: { en: 'Print / Save PDF', fr: 'Imprimer / Enregistrer en PDF' },
    },
  },
}
