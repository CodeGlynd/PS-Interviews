<h1 align="center">Problemset - Rotate Image</h1>

## Instructions 

you are tasked with implementing a function rotate_image for rotating square arrays representing low-resolution images, these arrays are two-dimensional representing pixel values in the image the goal is to rotate the arrays counter-clockwise in-place, without creating  a new rotated version. the inputs to the rotate_image function are size, which is the number of rows/columns in the 2d array(the matrix is square, so the number of rows = number of columns), and img, which is a 2d array

#### Note that after the rotation:

- the last column becomes the first row 
- the second last column becomes the second row
- the first column becomes the last row

return the same 2d array that was passed, but updated as above
to clarify, if you're given an empty array, no action should be taken

---- 
#### example 1:

```sh
> input:
size = 3 
img =
8 2 3 
2 9 1 
9 0 6 

> output:
3 1 6 
2 9 0 
8 2 9
```
----
#### example2:
```sh
> input:
size = 2
img = 
1 2 
3 4
 
> output:
2 4 
1 3
```
