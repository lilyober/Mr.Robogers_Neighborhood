# Mr. Roboger's Neighborhood
#### By _**By Lily Ober**_
 
#### _Practicing JavaScript and CSS/HTML for the third independent project at Epicodus._

## Technologies Used

* _VS Code_
* _Git Bash_
* _JavaScript_
* _HTML_
* _CSS_

## Description

_A webpage that asks the user for a number then returns a string counting up to the number._

## Setup/Installation Requirements

* _Clone url from GitHub_
* _Copy index.html in browser_

## Tests
Describe: makingAr();

Test: "Make an array from the user's inputed number"
Code: makingAr(3);
Expected Output: [3];

Test: "Expand array to include numbers before inputted number."
Code: makingAr(3);
Expected Output: [0, 1, 2, 3];

Describe: roboChanger();

Test: "When three is present in an array, change it to 'Won't you be my neighbor!'"
Code: roboChanger(3);
Expected Output: 0, 1, 2, Won't you be my neighbor!

Test: "When two is present, change it to "Bloop!"
Code: roboChanger(3);
Expected Output: 0, 1, Bloop, Won't you be my neighbor!

Test: "When one is present, change it to "Bleep!"
Code: roboChanger(3);
Expected Output: 0, Bleep! Bloop! Won't you be my neighbor!

Test: "If the number does not include a 1, 2, or 3, the output should be the number."
Code: roboChanger(4);
Expected Output: 0, Bleep! Bloop! Won't you be my neighbor! 4

## Known Bugs

* _no known bugs_

## License
Copyright (c) _2023_Lily Ober_
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.