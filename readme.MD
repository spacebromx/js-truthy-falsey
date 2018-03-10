## JavaScript truthy and falsey values

There are 7 primitive data types in Javascript (as of 2018).
Each one can be converted into a truthy/falsey value depending
of the value it's assigned:

Credit: [Sam Bennett](https://www.youtube.com/watch?v=6hESXoxDtgo)

| Argument Type  | Result           |
| -------------- |:-----------------
| Undefined      | Returns **Falsey**
| Null      	    | Returns **Falsey**
| Boolean      	 | Returns argument
| Number      	 | Returns **falsey** if argument is +0, -0 or NaN, otherwise, returns **truthy**
| String      	 | Returns **falsey** if argument is the empty String (length = 0), otherwise returns **truthy**
| Symbol      	 | Returns **Truthy**
| Object      	 | Returns **Truthy**