# Battleship game
Simplified React version of the battleship game, player vs CPU.
### Live Demo: [https://agusmafud.github.io/todoapp/](https://agusmafud.github.io/battleship/)

## Game elements and characteristics
- 10x10 board size 
- 1 carrier of 4 spaces 
- 3 cruisers of 3 spaces 
- 1 submarine of 2 spaces 
- Ships must be straight lines 
- Ships can be placed horizontally or vertically 
- **Ships can be placed in consecutive spaces**
- **When a ship is destroyed, the attempt feedback includes the type of ship destroyed.**
- **Each player performs only one attack per turn**

## Computer attack algorithm
For the computer's attack algorithm, a density map is determined that indicates for each space on the board the probability that it contains some player's ship.
This is done by repeating this process for each remaining player ship:
>  We start in the top left corner, and try placing it horizontally. If it fits, we increment a value for each cell it lays over as a 'possible location' in which there could a ship. Then we try sliding it over one square and repeating … and so on until we reach the end of the row. Then we move down a line and repeat. Next we repeat the exercise with the ship oriented vertically.
> You can learn more about the algorithm at the following source: http://www.datagenetics.com/blog/december32011/
If the computer hits a ship, it goes into hunting mode; limiting the possible attacks, to locations that may contain a player's ship, but also one or more of the hit spaces.


## Future improvements
**Attack algorithm:**
- Randomly choose from the highest scoring heatmap positions.
- Also consider positions with less probability, for example introducing an acceptable risk variable that increases with each failed attack.

**UI/UX:**
- Include animations and transitions.
- Include a timeout before each computer attack.
- Implement drag and drop for ship positioning. When a ship is selected and the cursor is positioned over the board, highlight the corresponding board spaces to indicate whether or not it is possible to position the ship.

## Development stack
- React for component-based and declarative architecture.
- Reacts Hooks for building functional stateless components.
- [create-react-app](https://github.com/facebook/create-react-app) as frontend build pipeline.
- [Material-UI](https://material-ui.com): React UI framework.
- SASS + BEM as css styling solution.
- PropTypes for typechecking.
