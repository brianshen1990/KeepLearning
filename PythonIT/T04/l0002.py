#!/usr/bin/env python3

import psutil
psutil.cpu_percent()
psutil.disk_io_counters()
psutil.net_io_counters()


import subprocess
src = "<source-path>" # replace <source-path> with the source directory
dest = "<destination-path>" # replace <destination-path> with the destination directory
subprocess.call(["rsync", "-arq", src, dest])

#!/usr/bin/env python
import subprocess
src = "/data/prod/"
dest = "/data/prod_backup/"
subprocess.call(["rsync", "-arq", src, dest])
