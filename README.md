# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Elijah Opoku-Nyarko**

Time spent: **12** hours spent in total

Link to project: https://glitch.com/edit/#!/light-and-sound-memory-game-elijah

Link to game: https://light-and-sound-memory-game-elijah.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] User is prompted about the number of attempts left after a failed attempt 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![GIF](https://user-images.githubusercontent.com/78819149/161182199-8b05b8dd-9308-4065-a4e2-84845b967ca0.gif)

![gif2](https://user-images.githubusercontent.com/78819149/161183306-68eb4d01-104f-490f-a89d-0cdd65481b35.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    * I used a lot of help from https://www.w3schools.com/ in order to fully understand the syntax of HTML, CSS and JavaScript
    * I used some help from https://javascript.info/ in areas where the w3schools failed to explain some of the javascript syntax to my best understandng
    * When I had errors in my code which I did not understand, I got some help from https://stackoverflow.com/
    * I used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random to understand how Math.Random works in order to         implement the random sequence

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

   * The part of this project which was very challenging to me was setting the countdown timer for the game. It was very difficult for me to figure out how      to rstart the timer whenever the player gets the sequence right. Upon sevral attempts proved futal, I took a nap break and came back to resume work.        after about an hour of try and error, I finally made good progress. The only issue was that, even though the timer restarted after the player gets the      sequence right, the game did not stop when the timer gets to 0. After consulting online sources(listed above), the timer was now up and running just        the way I wanted it to.
   * Also, It took me a long time to figure out how to get the sequence to be randomized. Initially, I got it to be randomized, but it kept playing the          same random sequence every time. Again, after several hours of getting information from an online source (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), I finally figured out how the Math.Random function works. Even after understanding the way it works, it still took me a long time to figure out how to implement it in the game.
   * Lastly, I struggled a lot with adding pictures to the buttons. When tried adding the picture, it either took the place of the button I wanted to add it on, or it would not display at all. w3schools.com was helpful in explaining how to add pictures to buttons. In general, I realized that even though I understood how to do certain things, it was a bit difficult to figure out how to implement it in the project. It was a difficult process, but I felt so accomplished after I worked my way through the struggle.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
   
   * While writing my code, I realised that sometimes, the progrma runs normally(or for the most part) when I had an error in the HTML file, but this is not same for the Javascript and sometimes the CSS files. so my question is, are the errors in the HTML files disregarded by the program, or is this just a special feature on Glitch?
   * Also, what is the benefit of having the CSS and Javascript code in different files when they can be written togeter with the HTML in the same file? is it better to do one or the other? It was a bit difficult navigating between different files, but I realised it would be even more difficult if they were in the same file because there would be hundreds of line. Is the length the only issue that could arise, or are there other technical issues?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
   
   * If I had a few more hours to work on this project, I would have implemented the feature where the images on the buttons remain hidden until the player clicks on the correct button (then the image is displayed as long as the user is holding down the mouse). I tried to implement this feature, but I ended up making the image to display on when the game is launched (but the start button is not yet pressed). once the start button is pressed, the images disappear. This was not the way I wanted it to work, so I decided to just add the images to the buttons, but leave some space around the images so that the the "light up" of the buttons can be more visible.
   * Also, I wanted to implement a feature where the same sequence is played again for the user if the user wrongly attempts the sequence and still has more attempts left. This was very hard to achieve because the sequence was randomized. I was only able to start the game allover again when the user fails an attempt. This was not very effective because if I had to keep score, a start all over again will mean that the score will reset to 0.
   * lastly, as I hinted, I would have loved to implement a feature where the user's score increases whenever a sequence is gotten right.



## Interview Recording URL Link

https://www.loom.com/share/545d4b163e274b32afde35084f2479f1 


## License

    Copyright Elijah Opoku-Nyarko

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
