/**
 * Represents a concept class.
 * @class
 */
export default class ConceptsClass {
    constructor(name, image, definition, question, answer) {
        this.name = name;
        this.image = image;
        this.definition = definition;
        this.question = question;
        this.answer = answer;
    }

    checkAnswer(attempt) {
        return attempt === this.answer;
    }
}
