import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import 'survey-core/defaultV2.min.css';
// Modern theme
// import 'survey-core/modern.min.css';

export const surveyJson = {
  "title": "Restaurant Workplace Safety",
  "showProgressBar": "bottom",
  "showTimerPanel": "top",
  "maxTimeToFinishPage": 30,
  "maxTimeToFinish": 1000,
  "firstPageIsStarted": true,
  "startSurveyText": "Start Survey",
  "pages": [
    {
      "elements": [
        {
          "type": "html",
          "html": "You are about to start a survey on restaurant safety. <br>You will have 30 seconds to answer each question.<br>Enter your name below and click <b>Start Survey</b> to begin."
        },
        {
          "type": "text",
          "name": "username",
          "titleLocation": "hidden",
          "isRequired": true,
          "maxLength": 25
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "civilwar",
          "title": "What should you do if you see a spill or other hazard on the restaurant floor?",
          "choices": [
            "Wait for someone else to clean it up",
            "Clean it up immediately",
            "Ignore it and continue working",
          ],
          "correctAnswer": "Clean it up immediately"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "What is the best way to prevent burns in the kitchen?",
          "choicesOrder": "random",
          "choices": [
            "Wear short sleeves and loose clothing",
            "Touch hot surfaces with your bare hands",
            "Use oven mitts or potholders",
          ],
          "correctAnswer": "Use oven mitts or potholders"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "Why is it important to wash your hands frequently while working in a restaurant?",
          "choicesOrder": "random",
          "choices": [
            "To prevent the spread of germs and bacteria",
            "To avoid getting dirt on your clothes",
            "To keep your hands warm",
          ],
          "correctAnswer": "To prevent the spread of germs and bacteria"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "What should you do if you notice that a coworker is not following proper safety procedures?",
          "choicesOrder": "random",
          "choices": [
            "Ignore it and mind your own business",
            "Talk to the coworker privately and express your concerns",
            "Tell the manager and let them handle the situation",
          ],
          "correctAnswer": "Talk to the coworker privately and express your concerns"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "What should you do if you accidentally cut yourself while working in the kitchen?",
          "choicesOrder": "random",
          "choices": [
            "Keep working and ignore the injury",
            "Wait for someone else to help you",
            "Apply pressure to the wound and seek medical attention if necessary",
          ],
          "correctAnswer": "Apply pressure to the wound and seek medical attention if necessary"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "What is the best way to prevent slips, trips, and falls in the restaurant?",
          "choicesOrder": "random",
          "choices": [
            "Walk quickly and wear high-heeled shoes",
            "Keep the floors clean and dry",
            "Wear socks instead of shoes",
          ],
          "correctAnswer": "Keep the floors clean and dry"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "How should you handle food that has been dropped on the floor?",
          "choicesOrder": "random",
          "choices": [
            "Throw it away immediately",
            "Rinse it off and serve it to the customer",
            "Pick it up and serve it to the customer",
          ],
          "correctAnswer": "Throw it away immediately"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "What should you do if a customer becomes ill after eating at the restaurant?",
          "choicesOrder": "random",
          "choices": [
            "Ignore it and hope it goes away",
            "Offer the customer a discount on their next meal",
            "Report the incident to the manager and follow the restaurant's procedures for handling foodborne illness",
          ],
          "correctAnswer": "Report the incident to the manager and follow the restaurant's procedures for handling foodborne illness"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "Why is it important to use the correct cleaning solutions and equipment in the restaurant?",
          "choicesOrder": "random",
          "choices": [
            "To save money on cleaning supplies",
            "To prevent damage to surfaces and equipment ",
            "To make the restaurant smell better",
          ],
          "correctAnswer": "To prevent damage to surfaces and equipment "
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "magnacarta",
          "title": "How often should the restaurant's fire extinguishers be inspected and tested?",
          "choicesOrder": "random",
          "choices": [
            "Every year",
            "Every 5 years",
            "Every 2 years",
          ],
          "correctAnswer": "Every year"
        }
      ]
    }
  ],
  "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  "completedHtmlOnCondition": [
    {
      "expression": "{correctAnswers} == 0",
      "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
    },
    {
      "expression": "{correctAnswers} == {questionCount}",
      "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
    }
  ]
};


export default function() {
  const survey = new Model(surveyJson);

  return <Survey model={survey} />;
}
