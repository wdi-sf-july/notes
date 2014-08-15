# Ruby Review
## Compare & Contrast, JS V Ruby


## This Week In Ruby

* Methods and Control Flow
* RSPEC REGEX
* Classes And Inheritance
* Blocks, Procs, and Lambdas


## Putting them all together

### Iterators with a linked list

The theme for this lesson is understanding data structures and your code on a deeper level.  Here are the topics we'll cover:


* Arrays: a more in depth look
* Link Lists
* Stacks and Queues
* Hash Tables: another in depth look

## Arrays: More In Depth

Ruby is implemented in C, so in one way or another, the code you write is evetually converted to C before it gets exectued.  In the C language, the memory for a program must be managed by the developer.  In other words, when some data structure, like an array is created, the developer must request how much memory he wants (how many array cells) before he starts using the array.  When the developer is done with the array, he must delete that memory that he allocated.

__What happens if the array needs to hold more data than the number of cells that were allocated?__

In order to implement a modern array, which does not have an explicit limit on the number of cells in the array, the developer must write code to create a new array whenever the array grows beyond the bounds of its memory size.  This operation is O(n) because a new array needs to be allocated in memory, then every item within the existing array must be copied over to the new array.

__DISCUSSION: What happens when the ruby method ```unshift``` is called on an array?__


## Link Lists

A `linked` list is a data structure of storing a collection items. To start a `linked list` is a collection of nodes, and each `node` has a `value` and a *referenece* to the `next` node. This links each node together through a chain of references. The linked list only needs to store the first node in the chain to maintain the collection of nodes.


### Conceptual Overview

A `linked` list is a data structure of storing a collection items. To start a `linked list` is a collection of nodes, and each `node` has a `value` and a *referenece* to the `next` node. This links each node together through a chain of references. The linked list only needs to store the first node in the chain to maintain the collection of nodes.

### How to make one?

What ingredients do we need from description above?

* List
    * List#tail, a reference to the last item in the collection of nodes list's next node.
    * List#head, a reference to the first node in the list. 


Just to reiterate, a linked list a *collection* of **items** where each *item* in the collection in an object with two attributes a *value* and a *reference* to the *next* item, and the last item has a **nil** reference.



    [ValOne,nextRef] [ValTwo,nextRef] [LastVal,nillRef]
     ---------         --------            ----------
    |     | _ |    \  |     | _ |    \    |    |\\ //|
    |  1  ||_====== ) |  2  ||_====== ) … | 5  | ) ( |
    |     |   |    /  |     |   |    /    |    |// \\|
     ---------         ---------           ----------


> NOTE: it might be helpful to avoid writing shorthand for a list like an array, i.e. [1,2,3], so to avoid confusion, we might write our list with parens, i.e. (1,2,3).


### Exercise

Draw out a linked list.  Visualize insert, remove and iteration.