# Outfits


## Matching outfits

You have an amazing set dressers full of clothes. In fact, you have so many dressers that you had to catalog everything you own in a DB! Luckily you can now take advantage of your sweet SQL skills to help you dress to impress... 

Your database is simple enough. You have `shirts` and `pants` table.

Exercises 1:

* Try to get a side by side comparison of all `pants` and `shirts` with the same `color`.
* Do a quick look through the pants and find one with a color that you like. Using that nice pant id, find all shirts you can wear with it. (Hint: `CROSS JOIN`).
* You decide there is a favorite color shirt to go with your `pant` from above, e.g. `Red`, show all possible pant `shirt` combos to in that `COLOR`.


Exercises 2:

* Try to get a side by side comparison pants and shirts that shows all pants and their color and any corresponding shirts in that color. (hint: left join)
* You seem to have some mismatched pants from `pants` and `shirts`, i.e. they don't have matching colors in the other table, display all `shirts` with a color not found in `pants`.
* Display all `pants` that don't have two corresponding `shirt` colors. 
