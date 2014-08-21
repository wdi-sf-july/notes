yoda = Creature.create({name: "Yoda", description: "little green man"})
luke = Creature.create({name: "Luke", description: "Young Jedi"})
vader = Creature.create({name: "Darth Vader", description: "Father of luke"})

luke.comments.create({title: "hmmm", body: "you must unlearn what you have learned"});
luke.comments.create({title: "Oh wow", body: "jedi's rock"})

comment = Comment.create({title: "Darkside!", body: "give into your anger"})
vader.comments << comment