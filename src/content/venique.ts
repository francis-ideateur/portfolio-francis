import type { Project } from "./portfolio";

/** Public project copy supplied and approved by Francis on 18 October 2026. */
export const venique: Project = {
  id: "venique",
  internalName: "Venique",
  published: true,
  stage: "development",
  translations: {
    fr: {
      title: "Venique",
      summary:
        "Un projet d'application web de gestion scolaire pour accompagner la transformation numérique des établissements, en commençant par la République du Congo.",
      problem:
        "Dispersion des données scolaires, tâches administratives répétitives et limites du suivi des élèves.",
      details: {
        category: "EdTech · Gestion scolaire · République du Congo",
        statusNote: "modules fonctionnels testés localement",
        sections: [
          {
            id: "overview",
            title: "Présentation",
            paragraphs: [
              "Venique est un projet d'application web destiné à accompagner la transformation numérique des établissements scolaires, en commençant par la République du Congo.",
              "Il répond aux difficultés liées à la dispersion des données scolaires, aux tâches administratives répétitives et aux limites du suivi des élèves.",
              "La vision de Venique est de réunir progressivement, dans un environnement numérique cohérent, les informations nécessaires à la gestion scolaire et au suivi pédagogique, au bénéfice des administrations, des enseignants, des élèves et de leurs familles.",
            ],
          },
          {
            id: "problem",
            title: "Le problème",
            paragraphs: [
              "Dans de nombreux établissements, la gestion des informations repose encore sur des processus manuels ou des outils séparés. Cette organisation peut augmenter la charge administrative, compliquer la consultation des informations et ralentir la communication entre l'école et les familles.",
            ],
          },
          {
            id: "solution",
            title: "La solution envisagée",
            paragraphs: [
              "Venique vise à faciliter la gestion des classes, des matières, des élèves, des notes et des absences, ainsi que l'accès des parents aux informations scolaires pertinentes.",
              "Un axe important du développement consiste à permettre l'importation de données Excel, pour limiter les saisies répétitives et faciliter l'adoption progressive de l'application.",
            ],
          },
          {
            id: "progress",
            title: "Avancement réel",
            paragraphs: [
              "Le projet a dépassé le stade du cadrage : des modules techniques ont été développés et testés dans un environnement local utilisant Django et PostgreSQL.",
              "Les parcours d'importation Excel des classes et des matières ont notamment fait l'objet de tests automatisés, de contrôles de cohérence et de validations sur ordinateur et smartphone.",
              "Le développement se poursuit. Aucun déploiement commercial ni utilisation généralisée par des établissements scolaires n'est revendiqué.",
            ],
          },
          {
            id: "impact",
            title: "Impact recherché",
            paragraphs: [],
            bullets: [
              "Réduire les tâches administratives répétitives.",
              "Faciliter le suivi du parcours et de l'assiduité des élèves.",
              "Améliorer progressivement la circulation de l'information entre établissements et familles.",
              "Accompagner la transformation numérique de l'éducation.",
            ],
          },
          {
            id: "outlook",
            title: "Perspectives",
            paragraphs: [
              "Poursuivre le développement fonctionnel, préparer des expérimentations avec des établissements scolaires et évaluer l'adéquation de la solution aux réalités du terrain.",
            ],
          },
        ],
      },
    },
    en: {
      title: "Venique",
      summary:
        "A web-based school management project designed to support the digital transformation of educational institutions, starting in the Republic of the Congo.",
      problem:
        "Fragmented school records, repetitive administrative tasks, and limited access to timely student information.",
      details: {
        category: "EdTech · School Management · Republic of the Congo",
        statusNote: "functional modules tested locally",
        sections: [
          {
            id: "overview",
            title: "Overview",
            paragraphs: [
              "Venique is a web-based school management project designed to support the digital transformation of educational institutions, starting in the Republic of the Congo.",
              "The project addresses fragmented school records, repetitive administrative tasks, and limited access to timely student information.",
              "Its long-term vision is to bring together school administration, academic monitoring, and relevant school-family communication in a coherent digital environment, for the benefit of administrators, teachers, students, and their families.",
            ],
          },
          {
            id: "problem",
            title: "The problem",
            paragraphs: [
              "In many schools, information management still relies on manual processes or separate tools. This can increase administrative workload, make information harder to access, and slow communication between schools and families.",
            ],
          },
          {
            id: "solution",
            title: "The proposed solution",
            paragraphs: [
              "Venique aims to make it easier to manage classes, subjects, students, grades, and absences, and to give parents access to relevant school information.",
              "An important development focus is importing Excel data to reduce repetitive data entry and support gradual adoption of the application.",
            ],
          },
          {
            id: "progress",
            title: "Current progress",
            paragraphs: [
              "Development has progressed beyond the planning stage. Core technical components, including Excel-based class and subject imports, have been implemented and tested locally using Django and PostgreSQL.",
              "The Excel import workflows for classes and subjects have undergone automated tests, consistency checks, and validation on desktop and smartphone.",
              "The project is still under development and has not been presented as a commercially launched service. No widespread use by schools is claimed.",
            ],
          },
          {
            id: "impact",
            title: "Intended impact",
            paragraphs: [],
            bullets: [
              "Reduce repetitive administrative tasks.",
              "Support more effective monitoring of students' progress and attendance.",
              "Gradually improve the flow of information between schools and families.",
              "Support the digital transformation of education.",
            ],
          },
          {
            id: "outlook",
            title: "Next steps",
            paragraphs: [
              "Future work includes further functional development, preparation for real-world school pilots, and assessing how well the solution meets needs on the ground.",
            ],
          },
        ],
      },
    },
  },
};
