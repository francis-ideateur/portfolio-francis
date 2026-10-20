import type { Project } from "./portfolio";

/** Public project copy supplied and approved by Francis on 19 October 2026. */
export const between: Project = {
  id: "between",
  internalName: "Between",
  published: true,
  stage: "mvp",
  translations: {
    fr: {
      title: "Between",
      summary:
        "Une plateforme numérique conçue pour rapprocher les informations locales importantes des personnes directement concernées, en commençant par la République du Congo.",
      problem:
        "Des informations utiles dispersées entre plusieurs canaux, qui peuvent passer inaperçues auprès des personnes concernées.",
      details: {
        category: "CivicTech · Information locale · République du Congo",
        statusNote: "préparation du pilote",
        sections: [
          {
            id: "overview",
            title: "Présentation",
            paragraphs: [
              "Between est un projet de plateforme numérique conçu pour rapprocher les informations locales importantes des personnes directement concernées.",
              "Son idée centrale repose sur un constat simple : une information peut être utile à une personne sans que celle-ci connaisse ou suive l'organisation qui l'a publiée.",
              "Between cherche à dépasser cette dépendance en organisant les informations par source, nature, territoire et contexte déclaré par les utilisateurs.",
            ],
          },
          {
            id: "problem",
            title: "Le problème",
            paragraphs: [
              "Les informations utiles à la vie quotidienne peuvent être dispersées entre plusieurs canaux de communication.",
              "Une interruption de service, une fermeture temporaire, une formation ou un événement peut ainsi passer inaperçu auprès de personnes pourtant directement concernées.",
            ],
          },
          {
            id: "solution",
            title: "La solution développée",
            paragraphs: [
              "Between propose une plateforme d'information locale structurée dans laquelle des organisations autorisées peuvent publier et mettre à jour des informations.",
              "Les utilisateurs peuvent découvrir publiquement les informations disponibles et déclarer certains éléments de contexte, comme leur zone de résidence, un lieu suivi ou leurs centres d'intérêt.",
              "Les intentions peuvent également faire partie des contextes déclarés.",
              "La plateforme peut alors déterminer la pertinence d'une information selon des règles explicables, sans imposer le suivi préalable de chaque organisation émettrice.",
              "Le produit prévoit également la gestion des corrections pour permettre de retrouver la version actuelle d'une information, ainsi qu'une distribution active contrôlée pour certains cas.",
            ],
          },
          {
            id: "progress",
            title: "Avancement réel",
            paragraphs: [
              "Between dispose d'un MVP web fonctionnel et testé localement.",
              "Le MVP a été développé avec Django et PostgreSQL.",
              "Le développement couvre notamment la gestion des organisations, la publication et la correction d'informations structurées, la consultation publique, la personnalisation selon des contextes déclarés et une chaîne de distribution contrôlée par e-mail.",
              "Les tests ont été effectués dans un environnement technique local, avec des données de démonstration.",
              "La prochaine étape importante consiste à préparer et à mener un pilote avec des utilisateurs et des organisations réels. Aucune adoption publique ou distribution commerciale à grande échelle n'est revendiquée.",
            ],
          },
          {
            id: "impact",
            title: "Impact recherché",
            paragraphs: [],
            bullets: [
              "Faciliter l'accès aux informations locales pertinentes.",
              "Aider les organisations à mieux atteindre les populations concernées.",
              "Réduire le risque de manquer des informations importantes.",
              "Améliorer la fiabilité et la mise à jour des informations consultées.",
            ],
          },
          {
            id: "outlook",
            title: "Perspectives",
            paragraphs: [
              "Expérimenter la plateforme dans un contexte réel au Congo, recueillir les retours des utilisateurs et des organisations, puis ajuster le produit avant d'envisager une expansion.",
            ],
          },
        ],
      },
    },
    en: {
      title: "Between",
      summary:
        "A digital platform designed to help important local information reach the people it concerns, beginning in the Republic of the Congo.",
      problem:
        "Useful information is scattered across communication channels and can go unnoticed by the people it concerns.",
      details: {
        category: "CivicTech · Local Information · Republic of the Congo",
        statusNote: "preparing for pilot",
        sections: [
          {
            id: "overview",
            title: "Overview",
            paragraphs: [
              "Between is a digital platform designed to help important local information reach the people it concerns.",
              "Its central idea is simple: information can matter to someone even when they do not know or follow the organization that published it.",
              "Between seeks to overcome this dependency by organizing information by source, type, territory, and contexts declared by users.",
            ],
          },
          {
            id: "problem",
            title: "The problem",
            paragraphs: [
              "Information useful in everyday life can be scattered across several communication channels.",
              "A service interruption, temporary closure, training opportunity, or event can therefore go unnoticed by people who are directly affected.",
            ],
          },
          {
            id: "solution",
            title: "The developed solution",
            paragraphs: [
              "Between allows authorized organizations to publish and update structured local information.",
              "People can explore available information publicly and optionally declare relevant contexts, such as their home area, followed places, or interests.",
              "Declared contexts can also include intentions.",
              "The platform uses explainable rules to identify relevant information without requiring people to follow each publishing organization beforehand.",
              "The product also provides for corrections so that people can find the current version of information, as well as controlled active distribution in selected cases.",
            ],
          },
          {
            id: "progress",
            title: "Current progress",
            paragraphs: [
              "Between has a functional web MVP that has been tested locally.",
              "The MVP was developed using Django and PostgreSQL.",
              "Its implemented scope includes organization management, publishing and correcting structured information, public discovery, personalization based on declared contexts, and controlled email distribution workflows.",
              "Testing took place in a local technical environment using demonstration data.",
              "The next milestone is to prepare and run a real-world pilot involving users and participating organizations. No public adoption or large-scale commercial distribution is claimed, and Between is not yet presented as a publicly launched commercial platform.",
            ],
          },
          {
            id: "impact",
            title: "Intended impact",
            paragraphs: [],
            bullets: [
              "Make relevant local information easier to access.",
              "Help organizations better reach the people concerned.",
              "Reduce the risk of missing important information.",
              "Improve the reliability of information and keep it up to date.",
            ],
          },
          {
            id: "outlook",
            title: "Next steps",
            paragraphs: [
              "Test the platform in a real-world setting in the Republic of the Congo, gather feedback from users and organizations, and then refine the product before considering expansion to similar needs elsewhere.",
            ],
          },
        ],
      },
    },
  },
};
