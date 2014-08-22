# Team workflow with Github

### To get started

1. Have one team member set up a repository and then have your other team members fork and then clone the repository
2. Always run `git pull` before starting 
3. Commit frequently to avoid merge conflicts
4. If you create your own branch use the following command to create a branch and switch to it right away
	- `git checkout -b NAME_OF_NEW_BRANCH`
6. To switch to another branch use
	- `git checkout NAME_OF_BRANCH`
7. To see all of your branches use 
	- `git branch`
5. To push that branch on github, use
	- `git push origin NAME_OF_BRANCH`
6. When you are ready to merge your branch back to master, first run `git checkout master` and then `git merge NAME_OF_BRANCH`
7. When you are ready to push your code, submit a [pull request](https://help.github.com/articles/using-pull-requests) - and upon acceptance, your code will be added to the main repository.
