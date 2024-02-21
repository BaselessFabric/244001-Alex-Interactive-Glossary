# Interactive Glossary Application

## Overview

This project is an interactive glossary application developed as a part of the Level 4 Software Engineering course requirements. It showcases programming concepts in a split-panel layout: the left panel lists programming concepts, and the right panel displays detailed information about the selected concept, including a header, descriptive paragraph, and photo. Additionally, it features a quiz section for each concept, enhancing the learning experience with interactive quizzes and immediate feedback on answers.

Built with TypeScript, this application leverages Next.js for server-side rendering and React for its component-based architecture, ensuring a responsive and efficient user experience. MUI (Material-UI) is used for styling, providing a sleek and modern UI.

### Features

- **Split-Panel Layout**: Interactive list of programming concepts on the left; detailed explanations, photos, and quizzes on the right.
- **Responsive Design**: Fully responsive UI, adapting seamlessly to different screen sizes.
- **Interactive Quizzes**: Each programming concept comes with a quiz question to reinforce learning, with instant feedback on answers.
- **Extensible Quiz Module**: The quiz functionality can be extended with multiple choice questions and additional quizzes for each concept.
- **Unit Testing**: Includes unit tests for quiz logic, ensuring reliability and correctness.

## Getting Started

### Prerequisites

- Node.js (latest stable version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/BaselessFabric/244001-Alex-Interactive-Glossary.git

    Navigate to the project directory:

    sh

cd interactive-glossary-app

Install dependencies:

sh

npm install
# or
yarn install

Run the development server:

sh

    npm run dev
    # or
    yarn dev

    Open http://localhost:3000 with your browser to see the result.

Usage

Select a programming concept from the list on the left panel to view its details in the right panel. Each concept includes a descriptive paragraph, an illustrative photo, and a quiz question to test your understanding. Enter your answer in the text input and submit to receive immediate feedback.
Extending the Application

To add more programming concepts and quizzes:

    Update the concepts class in modal/concepts.tsx with new concepts and their corresponding details and quiz questions.
    Ensure that new concepts follow the established structure for consistency and reliability.

Running Tests

To run the unit tests for the quiz logic:

sh

npm run test
# or
yarn test

Contributing

Contributions are welcome! If you have suggestions to improve this application, please fork the repository and create a pull request. You can also open an issue with the tag "enhancement".

    Fork the Project
    Create your Feature Branch (git checkout -b feature/AmazingFeature)
    Commit your Changes (git commit -m 'Add some AmazingFeature')
    Push to the Branch (git push origin feature/AmazingFeature)
    Open a Pull Request

License

Distributed under the MIT License. See LICENSE for more information.
Acknowledgments

Next.js Documentation - for Next.js specific features and optimizations.
React Documentation - for understanding the React framework.
MUI - for UI components and design system.
