## Contributing

Contributions to open source is an absolute must for beginner and newbie developers to sharpen their skills and also learn by doing. Moreover contributing to different open source projects helps in networking with like minded individuals. 
Now this project also welcomes contributions from like minded developers to improve this web app and also enhance it. So if you notice any bug that is present in this app you can simply create a pull request by forking this repo and open an issue with the tag bug, similarly for enhancement you can open with tag enhancement and so on.

Now the steps for contributing to this repo includes:

1. In order to contribute to this repo at first check for existing issues under the Issues tab or add your own issue and wait for it to be assigned to you.
2. Fork this repo simply by clicking Create a new fork.
3.Clone the repo in your local machine using the command and change to the directory of repo by using cd command.
```powershell
git clone "url-of-the-forked-repo"
```
cd repo-name
4. Before starting to make any changes in the local project diretcory always pull in the latest changes from the main repo to your repo on local directory using the following command belwo:
```powershell
git pull upstream master
``` 
or if the default branch of the main repo is main then use the below command
```powershell
git pull upstream main
```
5. Create a new branch having a descriptive name like what is the name of the feature that you want to add and how it would solve the existing issues by using this command in the shell
```powershell
git checkout -b "new-branch-name"
```
6. After that write your code in your preffered IDE and use the following command to add those changes
```powershell
git add .
```
7. Commit your changes by using the below command
```powershell
git commit -m "Add a suitable commit message"
```
8.Finally add the changes to the new branch of the repo
```powershell
git push origin "new-branch-name"
```
9.Finally open a pull request on github by clicking on Compare and open a pull request and wait for your changes to be reviewed and added by the project maintainers.

Happy Hacking 😊😊
