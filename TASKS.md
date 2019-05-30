## Specific Requirements

- [x] Use create-react-native-app to build your project.
- [x] Allow users to create a deck which can hold an unlimited number of cards.
- [x] Allow users to add a card to a specific deck.
- [x] The front of the card should display the question.
- [x] The back of the card should display the answer.
- [x] Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- [x] Users should receive a notification to remind themselves to study if they haven't already for that day.

### Views

Your application should have, at a minimum, five views.

- [x] Deck List View (Default View)
  - [x] displays the title of each Deck
  - [x] displays the number of cards in each deck
- [x] Individual Deck View
  - [x] displays the title of the Deck
  - [x] displays the number of cards in the deck
  - [x] displays an option to start a quiz on this specific deck
  - [x] An option to add a new question to the deck
- [x] Quiz View
  - [x] displays a card question
  - [x] an option to view the answer (flips the card)
  - [x] a "Correct" button
  - [x] an "Incorrect" button
  - [x] the number of cards left in the quiz
  - [x] Displays the percentage correct once the quiz is complete
- [x] New Deck View
  - [x] An option to enter in the title for the new deck
  - [x] An option to submit the new deck title
- [x] New Question View
  - [x] An option to enter in the question
  - [x] An option to enter in the answer
  - [x] An option to submit the new question

### Data

```javascript
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```

### Rubrik

#### Application Setup

Is the application easy to install and start?

- [x] The application requires only yarn install and yarn start to install and launch. npm can be used in place of yarn.

Does the application include a README with clear installation and launch instructions?

- [x] A README is included with the project. The README includes clear instructions for installing and launching the project.

#### Application Functionality

Is the initial view a Deck List view?

- [x] The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.

Does the Deck List view function correctly?

- [x] Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.
- [x] The individual deck view includes (at a minimum):
  - [x] The deck title
  - [x] Number of cards in the deck
  - [x] Option to start a quiz for that deck
  - [x] Option to add a new question to the deck
- [x] Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.
- [x] The New Question view includes a form with fields for a question and answer, and a submit button. Submitting the form correctly adds the question to the deck.
- [x] Does the Quiz View function correctly?
  - [x] The Quiz view starts with a question from the selected deck.
  - [x] The question is displayed, along with a button to show the answer.
  - [x] Pressing the 'Show Answer' button displays the answer.
  - [x] Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
  - [x] The view displays the number of questions remaining.
  - [x] When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
  - [x] When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
  - [x] Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
- [x] The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button. Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.
- [x] Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.
- [x] The app works correctly in either Android OR iOS devices (or emulator).
- [x] Project README identifies which platform(s) have been tested.

#### Code Quality

- [x] Project code uses reasonable naming conventions. Components are written for reuse and use a modular structure.
- [x] There are no build errors when starting the app. There are no errors while using the app. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.
