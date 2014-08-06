## Getting set up on Heroku with node + sequelize 


### Before you do anything...
1. Make sure you have an account with heroku (remember your username and password....you're going to need it pretty soon) - [https://id.heroku.com/signup/www-home-top
](http://)
2. Make sure you have installed the heroku toolbelt - [https://toolbelt.heroku.com/](http://)

### To start:

0. Create an app on heroku [https://dashboard.heroku.com/](https://) and click on create new app (always best to give it a name) and then click Create app and then Finish up.
1. In terminal, set up your initial folder structure
	
	```
		1. mkdir FOLDER_NAME_FOR_YOUR_APP
		2. cd FOLDER_NAME_FOR_YOUR_APP
		3. touch app.js
		4. npm init (you can press enter for everything and then yes at the end)
	```
1. Create a Procfile 
	- In terminal, run `touch Procfile`
	- make sure it is named "Procfile" (no extention) 
	- make sure your Procfile is in the same folder as your app.js file) 
2. Open sublime, and in the Procfile write ```web: node app.js```
3. In your app.js file, where you get your server started, include the port number in your app.listen function. Example - 
```app.listen(process.env.PORT || 3000)``` - this ensures that when we set the PORT config variable, heroku will run on it (we will set the PORT to 80 for heroku)
4. Your package.json file is __crucial__ - when you deploy your application, heroku will check the package.json file for all dependencies so whenever you install anything with npm make sure to use --save. You can always check your package.json to see if you are missing anything. 
5. Create a local git repo

	```
		1. git init 
		2. git add -A
		3. git commit -m "First commit" 
	```
6. Login to the heroku CLI
	```
	heroku login
	``` 
7. Create your PORT config variable in terminal
	``` heroku config:set PORT=80 --app YOUR_APPLICATION_NAME```
8. Add your remote to push to heroku (YOUR_APPLICATION_NAME is the name of the app you created on heroku.com)
	``` heroku git:remote -a YOUR_APPLICATION_NAME ```
9. In terminal, type in heroku ps:scale web=1
10. Make sure you add/commit any additional changes ``` git commit -am "a nice message"``` and then push to heroku! ``` git push heroku master```
11. If there are no errors, check out your app by going to the url provided at the end of the push or type in ```heroku open```


### Connect a DB with sequelize (this should be done ONLY after you have set up your local database and ran all migrations successfully):

1. In terminal, install the add-on for postgres
	``` heroku addons:add heroku-postgresql:dev```
2. This should create a DATABASE_URL config variable for you. If not, run ``` heroku config:set DATABASE_URL=(THE OTHER DB URL HEROKU HAS GIVEN) --app YOUR_APPLICATION_NAME```
3. Set your NODE_ENV variable to 'production' by running this command in terminal: ```heroku config:set NODE_ENV='production' --app YOUR_APPLICATION_NAME``` 
4. Make sure your production variables in config.json are set - ___this is very important___
	- Here is the pattern for the URL and the information you need to put into your config.json file: do not include : or @ or / when inputting information 
	- from my DATABASE_URL config variable: __postgres://rqxjyqeiamscql:GkcgTaqye4-dkctlaYf5DBWvBs@ec2-50-16-201-126.compute-1.amazonaws.com:5432/debb6gidjvnlpn__
	- I use this pattern - __postgres://USERNAME:PASSWORD@HOST:PORT/DATABASE__
	- So using the sample URL from above, your config.json should look like this for production:
	
```
	"production": 
	{
		"dialect": "postgres",
		"username": "rqxjyqeiamscql",
		"password": "GkcgTaqye4-dkctlaYf5DBWvBs",
		"host": "ec2-50-16-201-126.compute-1.amazonaws.com",
		"port": "5432",
		"database": "debb6gidjvnlpn"
	}
```

Now run your migrations by typing in terminal ``` heroku run node_modules/.bin/sequelize db:migrate``` and you should have all your tables set up in a heroku hosted database

### Connect to your heroku DB using psql

1. In terminal, type in heroku pg:psql and it should connect you to your DB

### Connect to your heroku DB using PG Commander:

1. In the bottom left corner of PG Commander click New Favorite
2. Put in the following information from your heroku database URL (to see this again just run in terminal: ``` heroku config```)
3. Here is the pattern for the URL and the information you need to put into PG Commander ___do not include : or @ or / when inputting information___: 
	- __postgres://USERNAME:PASSWORD@HOSTNAME:PORT/DATABASE__
4. Once connected it should alert you that it cannot verify the identity of the server, just click connect anyway and you should be in

### I broke it...what do I do?

Always, always, always start by looking at the heroku logs (in terminal, type ```heroku logs -t```). This will tell you any node/db errors you are having (you can think of heroku logs like your terminal, whenever you `console.log` something, you will see it here) and remember...___It happens___, here are some things to double check:

1. Make sure you have named the file "Procfile" and that it is NOT in any sub-folders (it should be in the same folder as your app.js file)
2. Make sure you typed this __exactly__: ```web: node app.js``` (if your main file is named app.js, otherwise change it to whatever you have named your starting file)
3. Did you miss a dependency? Check your package.json file to make sure you have all the modules you need to run the application and if you're missing something, run ```npm install --save MODULE_NAME```
4. Check your config variables and make sure you have at least a PORT, NODE_ENV and DATABASE_URL variable set. Is your PORT set to 80? Is your NODE_ENV set to 'production' (make sure this is a string)
5. Have you created a remote to push to heroku? Check with ```heroku remote -v```
6. Check to see if for some reason you have a PORT variable declared in your .zshrc or .bashrc file by running echo $PORT (if you see anything, that's not good and you need to go in your .zshrc or .bashrc file and remove it). This sometimes overwrites the heroku variable and heroku doesn't get too happy about that...

### But....things are still breaking! 

1. Did you __commit__ your most recent changes and push them to heroku? If you made any changes or installed any new modules, heroku will not know about it until you run ```git push heroku master```
2. Is your `config.json` file is set up correctly? Make sure the NODE_ENV is set to 'production' and then check to see that the information from your DATABASE_URL variable match what is in the `config.json`
3. We can't use the alias sqlize anymore, so when you run your migrations make sure to run `heroku run node_modules/.bin/sequelize SEQUELIZE_COMMAND`

### Heroku best practices

- Store your secret information in config variables (this includes the password to your database!)
	- To create a new config variable 	run this in terminal: `heroku config:set VARIABLE_NAME=VALUE --app YOUR_APPLICATION_NAME` 
	- To remove a variable name run in terminal: `heroku config: unset VARIABLE_NAME --app YOUR_APPLICATION_NAME`
	- To see all of your config variables run `heroku config`
	- To reference your heroku variable in your code use  `process.env.VARIABLE_NAME` 
	- Start fresh with a production database, but if you REALLY want your development database info to transfer to the production one use  `heroku pg:push NAME_OF_YOUR_LOCAL_DATABASE NAMEOF_HEROKU_CONFIG_DB --app YOUR_APPLICATION_NAME` (note, your heroku DB __must__ be empty for this to run)
