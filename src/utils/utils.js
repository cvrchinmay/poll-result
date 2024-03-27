export const polls = [
  {
    "id": 1,
    "question": "What is your favorite color?",
    "options": ["Red", "Blue", "Green"],
    "votes": [25, 40, 15]
  },
  {
    "id": 2,
    "question": "Which season do you prefer?",
    "options": ["Summer", "Winter", "Spring"],
    "votes": [33, 45, 17]
  },
  {
    "id": 3,
    "question": "What is your preferred mode of transportation?",
    "options": ["Car", "Bicycle", "Public transport"],
    "votes": [44, 44, 43]
  },
  {
    "id": 4,
    "question": "Which type of movie genre do you enjoy the most?",
    "options": ["Action", "Comedy", "Drama"],
    "votes": [77, 10, 3]
  },
  {
    "id": 5,
    "question": "What is your favorite dessert?",
    "options": ["Cake", "Ice cream", "Pie"],
    "votes": [125, 40, 67]
  },
  {
    "id": 6,
    "question": "Which social media platform do you use the most?",
    "options": ["Facebook", "Instagram", "Twitter"],
    "votes": [99, 83, 74]
  },
  {
    "id": 7,
    "question": "What is your favorite outdoor activity?",
    "options": ["Hiking", "Swimming", "Cycling"],
    "votes": [50, 50, 50]
  },
  {
    "id": 8,
    "question": "Which type of music do you prefer?",
    "options": ["Pop", "Rock", "Hip hop"],
    "votes": [51, 52, 53]
  },
  {
    "id": 9,
    "question": "What is your preferred drink?",
    "options": ["Coffee", "Tea", "Soda"],
    "votes": [70, 40, 80]
  },
  {
    "id": 10,
    "question": "Which pet would you prefer to have?",
    "options": ["Dog", "Cat", "Fish"],
    "votes": [81, 98, 38]
  },
  {
    "id": 11,
    "question": "What is your favorite type of cuisine?",
    "options": ["Italian", "Chinese", "Mexican"],
    "votes": [35, 70, 23]
  },
  {
    "id": 12,
    "question": "Which gaming console do you prefer?",
    "options": ["PlayStation", "Xbox", "Nintendo"],
    "votes": [25, 70, 15]
  },
  {
    "id": 13,
    "question": "What is your preferred holiday destination?",
    "options": ["Beach", "Mountains", "City"],
    "votes": [25, 78, 15]
  },
  {
    "id": 14,
    "question": "Which superhero is your favorite?",
    "options": ["Superman", "Batman", "Spider-Man"],
    "votes": [193, 99, 150]
  },
  {
    "id": 15,
    "question": "What is your favorite hobby?",
    "options": ["Reading", "Painting", "Playing sports"],
    "votes": [77, 11, 62]
  }
]

export const getFromLocalStorage = (key, isArray = false) => {
  const existingData = localStorage.getItem(key);
  if (isArray) {
    if (existingData) {
      return JSON.parse(existingData);
    } else {
      return [];
    }
  }
  return {};
}

export const setToLocalStorage = (key, dataToBePushed, isArray = false) => {
  let existingData = getFromLocalStorage(key, isArray);
  if (isArray) {
    existingData.push(dataToBePushed);
    localStorage.setItem(key, JSON.stringify(existingData));
  } else {
    localStorage.setItem(key, JSON.stringify(dataToBePushed));
  }
  
}