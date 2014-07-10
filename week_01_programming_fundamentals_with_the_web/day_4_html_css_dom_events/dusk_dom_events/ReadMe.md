# Intro JS
## DOM Events


| Objectives |
| :---- |
| Students should be able to select elements from the DOM using selectors |
| Students should be able to add events to elements in the DOM |
| Students should be able to manage scope and control logic with the page. |


## Outline

* DOM Intro
  * Structuring page
  * DOM Selection
    * `document#getElementById`
    * DOM Manipulation
      * `style`
      * `innerHTML`
      * `value`
      * `attributes`
    * `document.querySelector`
  * DOM Events
    * `monitorEvents` 
    * `onClick`
    * hovering or `mouseover`
    * `window.onload`
  * Event Context
    * `this`
    * `addEventListener`

## Lesson Examples


### DOM INTRO

#### DOM SELECTION


Getting an element by `id`

`ex_1.html`

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ex 1</title>
</head>
<body>
   <div id="greeting">
     Hello There
   </div>
</body>
</html>
```

`ex_1.js`

```
var element = document.getElementBy("greeting");
```


`ex_2.js`

```
var element = document.getElementsByTagName("div")
```



#### DOM Manipulation

When you select a DOM element you can change its `style`.


`ex_3.js`

```
var element = document.getElementBy("greeting");

element.style.color = "red";

```

You can also retrieve its `innerHTML`

`ex_4`

```
var element = document.getElementBy("greeting");

console.log(element.innerHTML);

```

but trying to do the same with inputs will give you trouble, because they have `values` you need to select

`ex_4 continued`

```
...

var element = document.getElementBy("new_book_title");

console.log(element.innerHTML);
console.log(element.value);

```


To make more generic selection using css selector syntax we can utilize `querySelector` 

`ex_5`

```
var element = document.querySelector("#myDiv");
```

or if we have a more involved page where we want to select `all` elements that match a query we can use the following:

`ex_6`

```
var element = document.querySelector(".article");
```


#### Exercises


1.) Go to this [wiki](http://en.wikipedia.org/wiki/Document_Object_Model) and grab the `Legacy_DOM` element.

2.) Go to [puppies](http://www.sheknows.com/pets-and-animals/articles/992643/25-puppies-to-make-your-heart-melt) and get all the images.

3.) Go to this [wiki](http://en.wikipedia.org/wiki/Document_Object_Model) and grab all the elements with class name `toctext` and use that to grab the corresponding sections in the article.




#### DOM Events




### `monitorEvents` 

In chrome we can try the following:

`monitorEvents(window)` 


Let's listen for a click on a `div` on our `greeting` div;

```
document.getElementById("greeting").onclick = function(event){
  alert("Clicked!!")
};
```
we can also listen for other types of events like hovering

```
document.getElementById("greeting").onmouseover = function(event){
  alert("hovering!!")
};

```
or after we're done hover

```
document.getElementById("greeting").onmouseout = function(event){
  alert("read anything interesting??")
};

```

When the window is loading it will take a while before it is ready for you to start adding events to the page.

This will not work:

```
<html>
<head>
  <meta charset="utf-8">
  <title>Exercise</title>
  <script type="text/javascript">
    var el = document.getElementById("blue_div");
    el.style.backgroundColor = "blue";
  </script>
</head>
<body>
  <div id="blue_div">
    color me blue
  </div>
</body>
</html>

```

This will work:

```
<html>
<head>
  <meta charset="utf-8">
  <title>Exercise</title>
  <script type="text/javascript">
    window.onload = function(){
      var el = document.getElementById("blue_div");
      el.style.backgroundColor = "blue";
    }
  </script>
</head>
<body>
  <div id="blue_div">
    color me blue
  </div>
</body>
</html>
```

#### Exercise

 Use the following html to try the following exercises, but be sure to write your scripts in a separate document as `script.js`.

```
<html>
<head>
  <meta charset="utf-8">
  <title>Exercise</title>
  <script type="text/javascript">
    window.onload = function(){
      var el = document.getElementById("blue_div");
      el.style.backgroundColor = "blue";
    }
  </script>
</head>
<body>
  <div id="blue_div">
    color me blue
  </div>
</body>
</html>

```

1.) Listen for a click on the `div_1` id and alert with the `innerHTML` of the `count` id div.

2.) Listen for a click on the `div_1` id and update the`count` div's `innerHTML` count.

Use the following html to try the following exercises.

```
<html>
<head>
  <meta charset="utf-8">
  <title>Exercise</title> 
  <script type="text/javascript" src="script.js"></script>
</head>
<body>
  <div id="last_clicked">none</div>
  <div id="previously_clicked">
  none
  </div>
  <div id="div_1"> 
   1
  </div>
  <div id="div_2">
   2
  </div>
  <div id="div_3">
   3
  </div>
  <div id="div_4">
   4
  </div>
  <div id="div_5">
   5
  </div>

</body>
</html>

```

3.) Listen for a click on `div_1` through `div_5` and each time something is clicked update the `last_clicked` element with the content from the `div` that was clicked.

4.)  Listen for a click on `div_1` through `div_5` and each time something is clicked update the `last_clicked` element with the content from the `div` that was clicked, and take the old last clicked to update the `previously_clicked`

```
<html>
<head>
  <meta charset="utf-8">
  <title>Exercise</title> 
  <script type="text/javascript" src="script.js"></script>
</head>
<body>
  <div id="previously_clicked">
  none
  </div>
  <div id="div_1"> 
   1
  </div>
  <div id="div_2">
   2
  </div>
  <div id="div_3">
   3
  </div>
  <div id="div_4">
   4
  </div>
  <div id="div_5">
   5
  </div>

</body>
</html>

```
5.)  Listen for a click on `div_1` through `div_5` and each time something is clicked change its color to blue. On each click update the `previously_clicked` element with content from the previously clicked element. 

**(Hint: you need a global variable to hold the `currentlyClicked` content that you should use to update the `previously_clicked` div)**.

6.) Building off the last example, listen for a click on the `previously_clicked` element.  When clicked, make the `currentlyClicked` div have a white `backgroundColor` and use the number it's displaying to change the respective div to have background color blue.


### Event Context


#### this
We might currently be working very hard to grab elements that are clicked

Luckily events have some context about what was actually clicked using the `this` keyword.

```
<html>
<head>
  <meta charset="utf-8">
  <title>Exercise</title>
  <script type="text/javascript">
    window.onload = function(){

      var el = document.getElementById("blue_div");
      el.onclick = function(event){
        this.style.backgroundColor = "blue";
      };
    }
  </script>
</head>
<body>
  <div id="blue_div">
    color me blue
  </div>
</body>
</html>
```



#### addEventListener


What would happen if we had two different parts of our program that wanted to modify to do something when an `click` happened this can't happend with the `onclick` syntax. Hence we use the `addEventListener` syntax from here on out to allow this.




```
<html>
<head>
  <meta charset="utf-8">
  <title>Exercise</title>
  <script type="text/javascript">
    window.onload = function(){

      var el = document.getElementById("blue_div");

      el.addEventListener("click", function(event){
        alert("I was clicked!")
      });      
      el.addEventListener("click", function(event){
        this.backgroundColor = "blue";
      });
    }
  </script>
</head>
<body>
  <div id="blue_div">
    color me blue
  </div>
</body>
</html>
```


#### Pitfalls

Let's try to loop through a list of elements to add events

this won't work

```

<html>
<head>
  <meta charset="utf-8">
  <title>Exercise</title>
  <script type="text/javascript">
    window.onload = function(){
      var blueDivs = document.querySelectorAll(".blue_div");
      for (var i = 0; i < blueDivs.length; i++) {
       blueDivs[i].addEventListener("click", function(){
         alert("I was "+ i);
       })
      };
    }
  </script>
</head>
<body>
  <div class="blue_div">
    color me blue
  </div>
  <div class="blue_div">
    color me blue
  </div> 
  <div class="blue_div">
    color me blue
  </div> 
  <div class="blue_div">
    color me blue
  </div> 
  <div class="blue_div">
    color me blue
  </div> 
  <div class="blue_div">
    color me blue
  </div>

</body>
</html>


```






