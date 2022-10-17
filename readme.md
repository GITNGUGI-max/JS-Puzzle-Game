# Details
-This is an 8 puzzle game created using javascript.
# HTML File

-The HTML file contains a table with four rows and columns
-Each row from the second has 3 cells that contain a value in them but on the second row the middle cell is empty.
-The empty cell helps solve the puzzle in two move back and forth into the cell when the puzzle is in a solvable state. 
-The first row has a button that allows the user to shuffle the values of the puzzle until they a solvable state.

# Javascript File
 
-The window.onload API helps set the initail state of the puzzle when it is rendered on the DOM.
-When the game loads a function is called to to loop through all the cells and add a click event listener that would help switch rows that that are the closest to each other.
-The switch_elems fuction helps select the table elemt and its contents to get the placeholder of each cell.
-When the shuffle button is pushed the value of each cell is changed randomly and the player has to do it until the puzzle is in solvable state. 
-When in goal state the player sshould be able to move from the cell with the last value which is it and back to prove the puzzle is solved by sending an alert message.

# CSS
-Using css the background color of all the filled cell is set to differentiate the from the empty cells.
-The rows contents are also spaced evenly using the justify content setting.
-The cells also have borders to seperate each from the other and make them visible.
-The flex css rule has also been used to ensure that the rows and the cells appear in an organized manner in the table. 
-The button also has a hover effect that lets the player know they are clicking on the button. 

# JS-Puzzle-Game
# JS-Puzzle-Game
