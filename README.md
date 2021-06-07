# git 常用的命令

```
1. history 可以查看你最近输入的命令
    qt@qtdeMacBook-Pro-2 Vue3TS_TodoList % history
    1081  git branch --remote
    1082  git status
    1083  git add .
 
2.基本操作
撤销修改：git checkout -- file
删除文件：git rm file
查看状态：git status
同步数据：git pull
添加记录：git add file 或 git add .
添加描述：git commit -m "miao shu nei rong"
提交数据：git push origin name

3.分支操作
查看分支：git branch  -a 查看所有分支   git branch --remote 查看远程所有分支
创建分支：git branch name
切换分支：git checkout name
创建+切换分支：git checkout -b name
合并某分支到当前分支：git merge name
删除分支：git branch -d name
删除远程分支：git push origin :name

```
总结步骤

1.先检查你当前所在的分支 (前面有*号 绿色标识的就是当前分支，注意区分本地分支和远程分支)
git branch -a

结果（当前是在develop分支）：
* develop
  master
  remotes/origin/develop
  remotes/origin/master
  
1. 进行开发后 检查文件状态 git status
2. 提交文件 git add .
3. 添加描述 git commit -m"描述"
4. （1）直接push  直接push的话 则直接push到远程的remotes/origin/develop 
       管理员在远程看会有 compare & pull request的请求
   （2）如果git checkout master 切换到本地master分支，使用git pull先拉取master远程的代码到本地master(或者你master有修改的，则通过git add . 和 git commit产生log先， git log 查看暂存的记录)， 先拉取最新代码到本地，再git merge --no-ff develop, 就是将develop合并到master分支，这时候如果有冲突则先修改冲突，再
   git add .  
   git commit -m"描述"  
   git log 
   git push 或者git push origin master 都是推送到远程的
