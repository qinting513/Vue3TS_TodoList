# git 常用的命令

```
1. git branch -a 查看所有分支
2. git branch --remote 查看远程所有分支
3. 使用history 可以查看你最近输入的命令
    qt@qtdeMacBook-Pro-2 Vue3TS_TodoList % history
    1081  git branch --remote
    1082  git status
    1083  git add .
 
4. git add . 添加所有的文件
5. git status 查看当前文件的状态
6. git commit -m"描述" 提交到暂存区


切换分支：git checkout name

撤销修改：git checkout -- file

删除文件：git rm file

查看状态：git status

添加记录：git add file 或 git add .

添加描述：git commit -m "miao shu nei rong"

同步数据：git pull

提交数据：git push origin name

分支操作

查看分支：git branch

创建分支：git branch name

切换分支：git checkout name

创建+切换分支：git checkout -b name

合并某分支到当前分支：git merge name

删除分支：git branch -d name

删除远程分支：git push origin :name

```