const projectsData = [
  {
    title: "Semantic Html and Css",
    picture: "./assets/images/web-page-preview.png",
    description:
      "Refactoring existing code without changing the design and functionality of the web application by mainly using semantic HTML and CSS.",
    liveLink: "https://dmo17.github.io/semantic-html-refactor/",
    gitHubLink: "https://github.com/DMO17/semantic-html-refactor",
  },
  {
    title: "Random Password Generator Js",
    picture: "./assets/screenshots/password-generator.PNG",
    description:
      "A starter code is modified to create a web-application that generates a randomly created password based on a password criteria that the user selects from. The app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code",
    liveLink: "https://dmo17.github.io/random-password-generator-javascript/",
    gitHubLink: "https://github.com/DMO17/random-password-generator-javascript",
  },
  {
    title: "Coding Quiz Challenge",
    picture: "./assets/screenshots/code-quiz.PNG",
    description:
      "Created a timed coding quiz with multiple choice questions without a framework. This quiz web application runs in the browser and features dynamically updating HTML , CSS and JavaScript code.",
    liveLink: "https://dmo17.github.io/coding-quiz-challenge//",
    gitHubLink: "https://github.com/DMO17/coding-quiz-challenge",
  },
  {
    title: "Work Day Planner",
    picture: "./assets/screenshots/work-day.PNG",
    description:
      "A work day planner web application that allows the user to plan and structure their every day work objectives on a daily basis",
    liveLink: "https://dmo17.github.io/work-day-planner/",
    gitHubLink: "https://github.com/DMO17/work-day-planner",
  },
  {
    title: "Weather Dashboard",
    picture: "./assets/screenshots/weaher-dash.PNG",
    description:
      "Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.Created a weather dashboard application dynamically using HTML , CSS Javascript and Jquery. This app runs on a live time and informs the user of the current weather condition and the forecast of the next 5 days.",
    liveLink: "https://dmo17.github.io/weather-dashboard/",
    gitHubLink: "https://github.com/DMO17/weather-dashboard",
  },
  {
    title: "Sound Art Smart",
    picture: "./assets/screenshots/sound-art-smart.PNG",
    description:
      "Sound Art Smart guides the user through a short series of image-based selections in order to present a random assortment of up to 6 artworks matching their specified interests. The user can then learn more by viewing the artwork information pages which include the work's title, artist, date, medium and much more. Should the user want to come back later, they can save their favourite artworks. As an added bonus, users can view their favourites in a styled gallery page--a one-of-a-kind exhibit all their own!",
    liveLink: "https://gingus55.github.io/sound-art-smart/",
    gitHubLink: "https://github.com/DMO17/sound-art-smart/tree/main",
  },
  {
    title: "ReadMe-generator",
    picture:
      "https://github.com/DMO17/readme-generator/blob/main/assets/screenshots/code-preview.PNG?raw=true",
    description:
      "This command line application allows the user to dynamically create a REAME.md file by simply answering the questions that are presented with in the command line.",
    liveLink: "https://dmo17.github.io/readme-generator/",
    gitHubLink: "https://github.com/DMO17/readme-generator",
  },
  {
    title: "Team-Profile-Generator",
    picture:
      "https://github.com/DMO17/team-profile-generator/raw/dev/dist/assets/images/code-preview.PNG",
    description:
      "This is a Noje.Js command line application that allows the user to dynamically create a HTML team profile Web-page that acquires information about employees on a software engineering team. The application will then generates an HTML webpage that displays summaries for each person.",
    liveLink: "https://dmo17.github.io/team-profile-generator/",
    gitHubLink: "https://github.com/DMO17/team-profile-generator",
  },
  {
    title: "NOTE-TAKER",
    picture:
      "https://github.com/DMO17/employee-tracker/raw/main/screenshots/app-preview-2.PNG",
    description:
      "This web application called Note-Taker can be used to write and save notes. his application will use an Express.js back end and will save and retrieve note data from a JSON file.This web application called Note-Taker can be used to write and save notes. his application will use an Express.js back end and will save and retrieve note data from a JSON file.",
    liveLink: "https://murmuring-basin-33128.herokuapp.com/notes",
    gitHubLink: "https://github.com/DMO17/note-taker/tree/dev",
  },
  {
    title: "Employee-Tracker",
    picture:
      "https://github.com/DMO17/employee-tracker/raw/main/screenshots/app-preview-2.PNG",
    description:
      "This is a command line application that manages a companies employee database using Node.js, mysql2 and inquirer. This is a content management systems (CMS) interface that allow non-developers to easily view and interact with information stored in databases.",
    liveLink:
      "https://drive.google.com/file/d/1T8juFqB1MvFMToUagMeRDp75ay46f5Pt/view",
    gitHubLink: "https://github.com/DMO17/employee-tracker",
  },
  {
    title: "e-commerce-back-end-orm",
    picture: "./assets/screenshots/e-commerce.png",
    description:
      "Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer. This project is the back end for an e-commerce site by creating and configuring a working Express.js API to use Sequelize to interact with a MySQL database.",
    liveLink:
      "https://drive.google.com/file/d/1olYhwqL7l6MGR6DnwRq9S2GOkhSUsGPe/view",
    gitHubLink:
      "https://github.com/DMO17/e-commerce-back-end-orm/blob/main/README.md",
  },
  {
    title: "Model-View-Controller-Tech-Blog",
    picture: "./assets/screenshots/tech-blog.png",
    description:
      "This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site is built completely from scratch and deployed on to Heroku. This application will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
    liveLink: "https://tech-blogs-m-v-c.herokuapp.com/",
    gitHubLink: "https://github.com/DMO17/Model-View-Controller-Tech-Blog",
  },
  {
    title: "food4U - Full-stack web application",
    picture:
      "https://github.com/DMO17/food4U/raw/main/public/assets/images/food-logo.png",
    description:
      "An application using the MVC paradigm, with its own server-side API, user authentification, and which connects to a database. Food4U is an application that provides food service for its clients and users. When a user logs in they are met by the dashboard which contains a random selection of food posts. The user can refine their search to their desired category out of groceries, dessert and meals. As a user if i come across a post that i am interested in i can then proceed to view the food post in further detail and then place an order directly to the provider.",
    liveLink: "https://food-4u.herokuapp.com/",
    gitHubLink: "https://github.com/DMO17/food4U",
  },
];

const renderProjectList = (projectInfo) => {
  const projectContainer = $(".project-container");
  const projectSectionHtml = projectInfo.map((card) => {
    return `
    <div class="card m-3" style="width: 23rem;">
  <img class="card-img-top" src=${card.picture}>
  <div class="card-body">
    <h5 class="card-title">${card.title}</h5>
    <p class="card-text  text-style">${card.description}</p>
    <a href="${card.liveLink}" class="btn btn-primary btn-lg btn-block">Live Link</a>
    <a href="${card.gitHubLink}" class="btn btn-primary btn-lg btn-block">Github</a>
  </div>
</div>
 `;
  });

  return projectContainer.append(projectSectionHtml.join(""));
};

renderProjectList(projectsData);
