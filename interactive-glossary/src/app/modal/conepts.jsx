// below is factory that creates new Concepts based on the ConceptsClass

import ConceptsClass from "./ConceptsClass";

const concepts = [
    new ConceptsClass(
        "onChange",
        "/images/onChange.png",
        "An event handler in React that is triggered on input changes. It provides an event object that can be used with setState or setCount in the context of functional components to update the state based on user input. This mechanism is essential for creating interactive forms and inputs in React applications."
    ),
    new ConceptsClass(
        "JSX",
        "/images/jsx.png",
        "A syntax extension for JavaScript that allows you to write markup with expressions, attributes, and children directly in React. It looks similar to HTML and is compiled into JavaScript at runtime. JavaScript executable markup language"
    ),
    new ConceptsClass(
        "Functional Components",
        "/images/functionalcomponent.png",
        "A simpler and more modern way to write components in React using functions instead of classes. Functional components: Accept props as an argument.Return React elements that describe the UI.With React Hooks, they can manage state and side effects, making them nearly equivalent in capability to class components but with a cleaner and more straightforward syntax.Are favoured for their simplicity and the ease with which they can be tested and reused."
    ),
    new ConceptsClass(
        "State",
        "/images/state.png",
        "const [count]: A reference to the state value called count. [count, setCount]: This syntax is used for destructuring. It provides a reference to count and a function setCount that can be used to update count. useState(0): This hook initialises the state with a starting or default value of 0. useState is a fundamental hook in React for state management in functional components.  Hooks are invented so we can use functional components instead of class components Ensure state is at the highest level it's required"
    ),
    new ConceptsClass(
        "React",
        "/images/react.png",
        "A front-end JavaScript library for building and rendering user interfaces based on components. It enables the development of complex, interactive UIs with ease."
    ),
];

export default concepts;
