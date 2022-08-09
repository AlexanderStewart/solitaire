# Solitaire by Group Six

[https://groupsixsolitaire.netlify.app/](https://groupsixsolitaire.netlify.app/)

## How this project was made

This project was made with React, JavaScript, and CSS. It was created with the terminal command create-react-app, which means its a single page app. 

## How this project works

The main functionality of the app is based on objects that represent each card. These objects include properties you might expect for playing cards, the name of the card, its face-up value (true or false), its rank (1 - 13), its red value (true or false), and its suit.

At the beginning of every game, the ShuffleAndDeal() function is called and the order of the card objects is randomized within an array. Then, the card objects are sorted into state arrays representing each column in the tableau and the stockpile. The reason we use state arrays here is so the arrays persist when there is a rerender.

From there, there are two ways to move cards. The first is through the AutoStack() function where a card is double clicked and automatically moved to the first available spot (the eligible spots are searched for first in the foundation and then in the tableau (moving from left to right)). The second way to move a card is through drag and drop, which is enabled through the use of the ‘react-dnd’ and ‘react-dnd-html5-backend’ packages. Both ways follow the same logic, such as a card has to be red to be placed on a black card in the tableau or that a card has to be of the same suit as the previous card to it when placed on a foundations pile.

The logic that is fired when a card is auto-stacked or dropped successfully in a different spot also triggers things like a change of score or the addAMove() function. The addAMove() function records an array of moves that the user has made so that the moves can be reversed with the ‘back a move’ button later.

There is a useEffect that is fired every time one of the foundation pile state arrays is updated. It checks, at the current state of the game, if all four foundation piles are of length 13, meaning the game has been won. If they all are of length 13, it changes the ‘won’ state variable from false to true, and then the win screen is displayed.

There is much more to the project, but hopefully this gave you a feel for how everything is working under the hood. 
 
## Packages used

The following packages were used (this list does not include the packages that are default to React):

- @formspree/react
- react-dnd
- react-dnd-html5-backend
- react-dropdown
- react-switch

## Contributors

- Hamza Belmokhtar - belm0017@algonquinlive.com
- Kaitlyn Gatineau - gati0010@algonquinlive.com
- Sami Haddad - hadd0117@algonquinlive.com
- Alexander Stewart - stew0554@algonquinlive.com
- Kevin Wangai - wang0459@algonquinlive.com
