const originalQuestions = [
    {
        text: 'Working with hands',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Solving puzzles',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Reading about art and music',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Working in teams',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Setting goals for myself and working to achieve them',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Organizing my desks, cupboards, bed etc',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Putting things together or assembling things',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Doing experiments',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Writing poetry, stories, articles, blogs and other creative compositions',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Teaching what I learn to others',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Persuading people',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Having clear instructions to follow to do work',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Taking care of pet animals',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Studying science',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Being creative in whatever I do',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Taking care of people who are ill at home',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Taking on new responsibilities',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Paying attention to details',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Working on outdoor jobs',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Figuring out how things work',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Playing musical instruments',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Learning about other cultures',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Starting my own business after I finish my education',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Keeping a well organised office',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Working on an offshore oil-drilling rig as an engineer',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Enjoying math and being good at it',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Acting in dramas and plays',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Helping people solve their problems',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Leading other people',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Keeping records of my work',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Assembling electronic parts on a circuit board to make a working amplifier',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Working with numbers and data',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Doing drawing and sketching',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Giving career guidance to people',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Giving speeches',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Using a computer program to generate customer bills',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Growing crops',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Studying the structure of the human body',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Conducting a musical choir',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Helping people with family-related problems',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Appointing dealers for my products for my business',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Generating the monthly payroll cheques for my office',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Planting and taking care of flowers & plants',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Developing a new medical treatment',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Writing the lyrics for a song',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Doing volunteer work at an NGO',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Doing a start-up',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Maintaining employee records',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Doing household repairs using tools',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Conducting research in social sciences ( History, Political Science, Sociology etc)',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Becoming an author of books',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Helping people overcome their addiction problems',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Managing a department within a company',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Computing and recording performance data for a company',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Doing camping, hiking, fishing and other adventure activities',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Studying human anatomy and diseases',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Producing designs from my own ideas',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Helping people with sports injuries recover',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Managing a team of people',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Planning how to get things done efficiently',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Operating machines and keep them in good condition',
        trait_code: 'R',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Carrying out research projects on the subjects being studied',
        trait_code: 'I',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Acting in movies and TV serials',
        trait_code: 'A',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Giving advice to people on personal matters',
        trait_code: 'S',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Motivating people to achieve their goals',
        trait_code: 'E',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    },
    {
        text: 'Preparing a financial plan for my clients',
        trait_code: 'C',
        options: [
            'If you strongly dislike doing/to do the activity mentioned in the statement',
            'If you dislike doing/to do the activity mentioned in the statement',
            'If you neither like nor dislike doing/to do the activity mentioned in the statement',
            'If you like doing/to do the activity mentioned in the statement',
            'If you strongly like doing/to do the activity mentioned in the statement'
        ]
    }
];

module.exports={originalQuestions}

