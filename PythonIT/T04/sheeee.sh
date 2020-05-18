# system calls while running
strace
strace ssss_executable
strace -o failure.strace ssss_executable
less failure failure.strace

kill -stop pid

# io related
iotop
iostat
vmstat
ionice

# network related
iftop
rsync
rsync -bwlimit

# adjust Priority
nice

# library calls while running
ltrace

# bisect
wc -l contacts.csv
head
tail

##### Slowness 
top
ab
an -n 500 xxx.com
nice
# re set priority
renice
pidof
for pid in $(pidof ffmeg); do renice 19 pid done;
ps ax | less
# localte the exactly place 
locate xxx_filename

# stop until finished
kilall -STOP ffmpeg 

# real user sys
time xxx_prograne
pprofile3 -f callgrind -o -prfile.out xxxx_programn
kcachegrind pprofile.out


######
netstat -nlp
netstat -nlp | grep :80


## core file
ulimit -c unlimited
gdb -c core_file
# backtrace
# uplist
# print

## Python 
pdb3 ./xxx.py xxxparams
# continue
# print 

###### resources
lsof | grep deleted
iftop 
