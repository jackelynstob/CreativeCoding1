Jack Stob, 51
[Ya Filthy Animal](https://jackelynstob.github.io/CreativeCoding1/hw-10/)

# HW-10 | Use Arrays & Create Functions


## Wait Which Holiday?

Okay okay, I know that we are supposed to give Thanksgiving some time but I honestly didn't know how to code a turkey and CHRISTMAS IS ON MY MIND. Hashtag sue me (can't write a hashtag or it will become a header... hashtag coding problems.)
This week we learned a great deal about how to create functions along with using last weeks material with the assignment which we learned about arrays. (Not having homework last week was definitely array of sunshine for me). Wow these bad dad jokes are going to consume me... and **punfortunately** for you, they can't stop and won't stop.

# Refactor or Create

This week I decided to kind of mix these two... kind of. Instead of taking an old assignment and adding old elements to it, I created a new assignment and added old elements to it.
  1. I created a filled array with strings in its elements. "Merry", "Chrismtas", "Ya", "Filthy", "Animal". Later in the code I have it set to print the array onto the screen one element at a time, following the text "I know it's Thanksgiving time... but:"
  2. Function setup was used, I created a canvas, and set the frame rate to 3!
  3. Next I used the *let* function, named it idx and set it equal to 0.
  3. Initiated function draw and set the background to black (what's new?)
  4. This step is where I brought in elements from a past project (hw-8), and I utilized the (nested?) for loop which displayed random green colored circles throughout the screen -- I just think this is fun and adds to the festivity/design.
  5. A few more *let* functions were used to create random numbers to determine the location of the festive ball. In one of the *let* functions, I called up one of my functions which I created "twoValues".
  6. I call upon my second created function "festiveBall", and declare it's position and scale based off of *let* functions.
  7. This next step is where I used the array as mentioned in step 1. I also used a code
  ``idx = (idx + 1) % string.length;``
  and this code allows the elements in the array to increase by 1 without exceeding the number of elements thus returning an error.
  8. Next I placed my first function which I spoke about above: twoValues. This function is very similar to one that Dr. Musick showed as an example but I figured it'd be perfect for the effect I was going for. This function uses a *let* function "result" where it adds value 1 and value 2, then returns this result when the function is called.
  9.  My second function comes next "festiveBall". This is where I declare the position of my ball and the scale of it. I also mirrored one of Dr. Musick's smiley face example as well, but drew a festive ball instead.

## I Asked St. Nick
### (but he didn't know the answer)
In step 9, I wanted to keep the scale what it was at, so I wasn't totally sure if it were necessary for me to keep the 'scale_x' and 'scale_y' arguments, but they made the cut! Also the contents of the function were nested in a sandbox, which I'm also not totally sure is necessary since no further code follows, but I also kept it on the offchance that I add more code to it.  
