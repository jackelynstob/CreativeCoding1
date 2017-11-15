Jack Stob, 51

[Under Umbrellas](https://jackelynstob.github.io/CreativeCoding1/hw-8/)

# Heckin' Ya

I finally got my rain and my umbrella I've been looking forward to making! My friend has this really beautiful song he wrote, and I want to make some really cool art with it (still not what I exactly want but it's baby steps!) First off just wanted to start by saying thanks for the easy week, however, for me it wasn't the easiest. I actually am still having a hard time wrapping my head around the loop material.

## A Bit Confused

I have been able to grasp the majority of this information, but I think what I am having a hard time with boils down to variables. I understand variables are just something we declare, but sometimes in the examples where they say something like what follows confuses me.  


function draw() {

	// establish scoped variables
	let padding = 20;
	let size = 20;
	let num_of_objs = 30;
	// to determine spacing,
	// first determine the amount available space
	// then divide by one less than the desired number of objects
	**let x_spacing = (width-padding*2) / (num_of_objs-1);
	let y_spacing = (height-padding*2) / (num_of_objs-1);**
	rectMode( CENTER );
	for( let i=0; i < num_of_objs; i++ ) {
		rect(
			// to determine spacing;
			// multiply the iterator (i) by the spacing.
			// add padding to offset from (x:0, y:0)
			i*x_spacing+padding,
			i*y_spacing+padding,
			size,
			size
		);
	}

  A lot of what is being said in here is beyond me and I think it is because we are mixing the variables -- I do this in my work but it's because I have seen an example similar and by messing with the code I kind of figure it out. I do understand specific commands like the for loop, but the section in the bolded parts, I have no clue what is happening. I tried to go back and do the readings again for the places I am confused about (such as the map function), but I must just have to come in and ask. Just kind of a bummer because I feel like it's hindering my ability to do more.

## What I Did This week

  1. I created a for loop that repeated grey circles across the x-axis very similar to the example in the homework.
  2. I created a nested for loop which had a series of randomly colored blue circles to symbolize rain, and the I had the blue circles draw at an angle, so every new line down the y-axis, had one less circle across the x-axis.
  3. I made an Umbrella, which was actually much harder and time consuming than anything else I did on the assignment.
  4. I made a text pattern move with the mouse which was pretty fun.

## Summary

I feel as though I have a good handle on things, but that I definitely have recognized where I need to focus more of my energy on. These new tools are extremely fun and I am excited to see where the rest of the class takes us!
