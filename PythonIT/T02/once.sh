#!/bin/bash

grep "ticky" syslog.log

grep "ERROR" syslog.log

grep "ERROR: Tried to add information to closed ticket" syslog.log


sudo chmod +x csv_to_html.py
sudo chmod  o+w /var/www/html
./csv_to_html.py user_emails.csv /var/www/html/<html-filename>.html
ls /var/www/html

[linux-instance-external-IP]/[html-filename].html
