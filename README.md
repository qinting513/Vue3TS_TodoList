# git 常用的命令

### 常用命令
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
合并某分支到当前分支：git merge  --no-ff  要合并的分支名name
删除分支：git branch -d name
删除远程分支：git push origin :name

 --no-ff: 默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将Master分支指向Develop分支。
          使用--no-ff参数后，会执行正常合并，在Master分支上生成一个新节点。为了保证版本演进的清晰，我们希望采用这种做法。

参考文档： http://www.ruanyifeng.com/blog/2012/07/git.html

```

### 总结步骤

```
1.先检查你当前所在的分支 (前面有*号 绿色标识的就是当前分支，注意区分本地分支和远程分支)
git branch -a

结果（当前是在develop分支）：
  develop
  master
* qtdevelop
  remotes/origin/develop
  remotes/origin/master
  
1. 进行开发后 检查文件状态 git status
2. 提交文件 git add .
3. 添加描述 git commit -m"描述"
4. 将代码合并到develop并提交到远程
   （1）直接push 报错：（意思是说你当前的分支 qtdevelop 没有上游分支，git不知道push到远程服务器的哪个分支下
       可以使用这个命令 git push --set-upstream origin qtdevelop 推送当前分支到远程并将远程设置为上游分支
       但是不建议你又创建一个你自己的远程分支，创建远程分支太多不容易管理，你可以创建你本地分支即可）
            git push
            fatal: The current branch qtdevelop has no upstream branch.
            To push the current branch and set the remote as upstream, use

            git push --set-upstream origin qtdevelop

   （2）如果远程已经创建有这样的分支了， 则git push的话 则直接push到远程的remotes/origin/qtdevelop
         这样管理员在远程看会有 compare & pull request的请求

   （3）合并代码到develop分支
        3.1 git checkout develop 切换到本地develop分支

        3.2 使用git pull先拉取远程的代码到本地develop(或者你本地develop有修改的，则通过git add . 和 git commit产生log先， git log 查看暂存的记录) 

        3.3 先拉取最新代码到本地再git merge --no-ff qtdevelop, 就是将qtdevelop合并到develop分支，
            这时候如果有冲突则在你本地先修改冲突后才能提交到远程
            git add .  
            git commit -m"描述"  
            git log 
            git push 或者git push origin master 都是推送到远程的
            git log 和git status 常配合以上命令使用
        
```