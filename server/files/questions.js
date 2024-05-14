const originalQuestions = [
  { text: "Working with hands", trait_code: "R" },
  { text: "Solving puzzles", trait_code: "I" },
  { text: "Reading about art and music", trait_code: "A" },
  { text: "Working in teams", trait_code: "S" },
  {
    text: "Setting goals for myself and working to achieve them",
    trait_code: "E",
  },
  { text: "Organizing my desks, cupboards, bed etc", trait_code: "C" },
  { text: "Putting things together or assembling things", trait_code: "R" },
  { text: "Doing experiments", trait_code: "I" },
  {
    text: "Writing poetry, stories, articles, blogs and other creative compositions",
    trait_code: "A",
  },
  { text: "Teaching what I learn to others", trait_code: "S" },
  { text: "Persuading people", trait_code: "E" },
  { text: "Having clear instructions to follow to do work", trait_code: "C" },
  { text: "Taking care of pet animals", trait_code: "R" },
  { text: "Studying science", trait_code: "I" },
  { text: "Being creative in whatever I do", trait_code: "A" },
  { text: "Taking care of people who are ill at home", trait_code: "S" },
  { text: "Taking on new responsibilities", trait_code: "E" },
  { text: "Paying attention to details", trait_code: "C" },
  { text: "Working on outdoor jobs", trait_code: "R" },
  { text: "Figuring out how things work", trait_code: "I" },
  { text: "Playing musical instruments", trait_code: "A" },
  { text: "Learning about other cultures", trait_code: "S" },
  {
    text: "Starting my own business after I finish my education",
    trait_code: "E",
  },
  { text: "Keeping a well organised office", trait_code: "C" },
  {
    text: "Working on an offshore oil-drilling rig as an engineer",
    trait_code: "R",
  },
  { text: "Enjoying math and being good at it", trait_code: "I" },
  { text: "Acting in dramas and plays", trait_code: "A" },
  { text: "Helping people solve their problems", trait_code: "S" },
  { text: "Leading other people", trait_code: "E" },
  { text: "Keeping records of my work", trait_code: "C" },
  {
    text: "Assembling electronic parts on a circuit board to make a working amplifier",
    trait_code: "R",
  },
  { text: "Working with numbers and data", trait_code: "I" },
  { text: "Doing drawing and sketching", trait_code: "A" },
  { text: "Giving career guidance to people", trait_code: "S" },
  { text: "Giving speeches", trait_code: "E" },
  {
    text: "Using a computer program to generate customer bills",
    trait_code: "C",
  },
  { text: "Growing crops", trait_code: "R" },
  { text: "Studying the structure of the human body", trait_code: "I" },
  { text: "Conducting a musical choir", trait_code: "A" },
  { text: "Helping people with family-related problems", trait_code: "S" },
  {
    text: "Appointing dealers for my products for my business",
    trait_code: "E",
  },
  {
    text: "Generating the monthly payroll cheques for my office",
    trait_code: "C",
  },
  { text: "Planting and taking care of flowers & plants", trait_code: "R" },
  { text: "Developing a new medical treatment", trait_code: "I" },
  { text: "Writing the lyrics for a song", trait_code: "A" },
  { text: "Doing volunteer work at an NGO", trait_code: "S" },
  { text: "Doing a start-up", trait_code: "E" },
  { text: "Maintaining employee records", trait_code: "C" },
  { text: "Doing household repairs using tools", trait_code: "R" },
  {
    text: "Conducting research in social sciences ( History, Political Science, Sociology etc)",
    trait_code: "I",
  },
  { text: "Becoming an author of books", trait_code: "A" },
  { text: "Helping people overcome their addiction problems", trait_code: "S" },
  { text: "Managing a department within a company", trait_code: "E" },
  {
    text: "Computing and recording performance data for a company",
    trait_code: "C",
  },
  {
    text: "Doing camping, hiking, fishing and other adventure activities",
    trait_code: "R",
  },
  { text: "Studying human anatomy and diseases", trait_code: "I" },
  { text: "Producing designs from my own ideas", trait_code: "A" },
  { text: "Helping people with sports injuries recover", trait_code: "S" },
  { text: "Managing a team of people", trait_code: "E" },
  { text: "Planning how to get things done efficiently", trait_code: "C" },
  {
    text: "Operating machines and keep them in good condition",
    trait_code: "R",
  },
  {
    text: "Carrying out research projects on the subjects being studied",
    trait_code: "I",
  },
  {
    text: "Using my imagination in my work to make it better",
    trait_code: "A",
  },
  { text: "Helping people learn new skills", trait_code: "S" },
  {
    text: "Briefing people about a new product so that they buy it",
    trait_code: "E",
  },
  { text: "Making a market report for the management", trait_code: "C" },
  { text: "Repairing and fixing machines in a factory", trait_code: "R" },
  {
    text: "Studying established theories to arrive at their real life applications",
    trait_code: "I",
  },
  { text: "Expressing myself through paintings", trait_code: "A" },
  {
    text: "Working with community groups to solve problems of health, education, sanitation etc.",
    trait_code: "S",
  },
  {
    text: "Organising an exhibition to showcase the company's offerings",
    trait_code: "E",
  },
  {
    text: "Analysing statistical data to identify how well the company's products are doing",
    trait_code: "C",
  },
  {
    text: "Using hand/machine tools to make things that have utility at home",
    trait_code: "R",
  },
  {
    text: "Conducting research in new areas of science and technology as a career",
    trait_code: "I",
  },
  {
    text: "Leading creation of new products and solutions in my company",
    trait_code: "A",
  },
  {
    text: "Volunteering to help the elderly in the community with daily living activities",
    trait_code: "S",
  },
  {
    text: "Planing and overseeing the construction of a school",
    trait_code: "E",
  },
  {
    text: "Developing programs to control processing of metal or plastic parts by automatic machines",
    trait_code: "C",
  },
  { text: "Reading X-rays and ultra sound recordings", trait_code: "R" },
  { text: "Estimating damage to motor vehicles", trait_code: "I" },
  { text: "Photographing people or nature scenes", trait_code: "A" },
  {
    text: "Helping a patient regain mobility and relearn to walk",
    trait_code: "S",
  },
  {
    text: "Planning and coordinating activities for an event",
    trait_code: "E",
  },
  { text: "Inspecting buildings to detect fire hazards", trait_code: "C" },
  { text: "Fighting fires", trait_code: "R" },
  {
    text: "Solving problems by applying mathematical formulas or models",
    trait_code: "I",
  },
  { text: "Broadcasting the evening news", trait_code: "A" },
  { text: "Teaching in an school or college", trait_code: "S" },
  {
    text: "Coordinating the activities of employees in a bank branch",
    trait_code: "E",
  },
  {
    text: "Preparing tax returns for individuals or small businesses",
    trait_code: "C",
  },
  { text: "Getting the house painted and varnished", trait_code: "R" },
  { text: "Conducting diagnosis of the disease of a patient", trait_code: "I" },
  {
    text: "Creating computer games, videos or commercials using computers",
    trait_code: "A",
  },
  {
    text: "Counseling individuals to prevent mental health problems such as stress, anxiety etc.",
    trait_code: "S",
  },
  { text: "Overseeing the maintenance of a building", trait_code: "E" },
  {
    text: "Computing and recording financial information of an organisation correctly",
    trait_code: "C",
  },
];

const options = [
  "If you strongly dislike doing/to do the activity mentioned in the statement",
  "If you dislike doing/to do the activity mentioned in the statement",
  "If you neither like nor dislike doing/to do the activity mentioned in the statement",
  "If you like doing/to do the activity mentioned in the statement",
  "If you strongly like doing/to do the activity mentioned in the statement",
];

// module.exports = { originalQuestions, options };

// async function addQuestions() {
//   try {
//     console.log('Adding questions to the database...');
//     for (let i = 0; i < originalQuestions.length; i++) {
//       const questionData = originalQuestions[i];

//       const newQuestion = new Questions({
//         text: questionData.text,
//         trait_code: questionData.trait_code,
//         options: options // Using the same options array for all questions
//       });

//       await newQuestion.save();
//       console.log(`Question "${questionData.text}" saved successfully.`);
//     }
//     console.log('All questions added successfully.');
//   } catch (error) {
//     console.error('Error adding questions:', error);
//   }
// }

//addQuestions();