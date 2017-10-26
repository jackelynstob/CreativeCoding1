Jack Stob, 51

[Live Sketch Link](https://jackelynstob.github.io/CreativeCoding1/HW-7/HW-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

**Global Variables:** The code begins by creating global variables, specifically by creating an object called "ball". After this the sizes and 'characteristics' of the ball are determined.

**Function Setup:** the command function for setup is inserted in line 12, and what follows is the creation of the Canvas which is the same width as whatever the window's width is, and the height 400. To finish up the setup, a white background is created.

**Function Draw:**
The position of the ball is determined, and the position is then updated by 1 (and multiplied by 1), causing the position of the ball to move.

An if() statement is created that states if the position of the ball is greater than or equal to width or less than or equal to zero, the ball will 'bounce' off of those walls, keeping it constrained in the box. This goes for the second if() statement as well for the height (top/bottom). So basically the ball stays inside of the boundaries.

The ball is then created, colored black, and is set to a specific size and the ever-changing location, but still stays within the boundaries because of the listed if() statements above.

**Mouse Pressed:**
This function allows the user to change the speed and direction of the ball which will override previous existing rules for the ball.

**Summary:**
A ball was created using specific (global) variables, and is confined in a screen to bounce off of the walls using a series of if() statements, and the speed and direction the ball is moving is controlled by the user's mouse clicks using the mousePressed() function. We can make the ball change in different directions by changing the settings in the map function under function mousePressed().

## How did you alter the sketch?
I wanted to give this a Halloween feel, so I first started off changing the background to black. Then I created a few variables which were used in an if statement. The if statement said *if* the mouse is pressed, the color of the ellipse will be a series of randomized purple colors, or *else,* the ellipse was randomized between different colors of orange. I ditched the stroke, it was distracting.  
I then changed the last input parameter in the map function, and depending on where you click in the screen, the ball changes speed.
