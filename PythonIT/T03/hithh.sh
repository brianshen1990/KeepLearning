git config --global user.email "xxx"
git config --global user.name "xxx"
git config -l

# .git => git directory
git init
# working tree, current workspace
# tracked : modilfied, stage, commited
# untracked

git add xxx.file
# staging ares 
git status
git commit -m 'xxxx'

git log

##################

# commit all modified (not including untarck files)
# skip the staging steps
git commit -a 

# show all differences
git log -p
git show xxx_commit_id_xxx

# show current diff
git diff 
git diff xxx_filename_xxx
git diff --staged

# delete a file from git
git rm xxx_filename_xxx
git mv xxx_name1 xxxx_name2

# .gitignore


###############
# undo before stage
# undo a file, reverts changes to a modified files befoe they are staged
git checkout xxx_filename 
# 1 by 1 
git add -p 

# undo after stage before commit
git reset HEAD xxx_filename

# amend latest commit
# avoid amending commits that have already been made public.
git add xxx.file 
git commit --amend

# rollback
# it creates a new commit with inverse changes.
git revert HEAD
git revert xxx_commit_id

######################
git branch 
# create one without switch
git branch anotherone
# switch
git checkout xxx_branch_anme
# create switch
git checkout -b xxx_branch_anme
# delete 
git branch -d xxx_branch_name
# merging a branch to current
git merge xxx_branch_name
# Merge conflitc
# Edit conflicts file and add again
git log --grapg --oneline

# Abord merge
git merge --abort

######################
# push local -> remote
git push
# when push a new branch
git push -u origin xxx_new_branchname
# SSH Key=pair
# Credential Helper
git config --global credential.help cache

# only check remote updates
git fetch
# pull changes from remote = fetch + merge
git pull

git remote -v
git remote show origin 
# origin
git branch -r
# Pull the remote branch, 
# merge it with the local branch, 
# then push it back to its origin.
git merge origin/master

# rebase 
# Move the current branch on top of the refactor branch
# This makes debugging easier and prevents three-way merges by transferring the completed work from one branch to another.
# Rebasing instead of merging rewrites history and maintains linearity, making for cleaner code.
git rebase xx_new_branch 
git rebase --continue

git push -f


