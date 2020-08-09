/**
 * Question 18
 * 
 * #! /bin/bash
 * 
 * path_local="usr/local/"
 * export path_dev="/usr/dev/"
 * path_qa="/usr/qa"
 * export path_qa
 * path_prod=".usr/prod"
 * 
 * source ./print_all.sh
 * ./print_all.sh
 * 
 * And print_all.sh
 * #! /bin/bash
 * echo "$path_local"
 * echo "$path_dev"
 * echo "$path_qa"
 * echo "$path_prod"
 * 
 * select the statements that are correct when the run.sh script is exe
 * 
 * 1 √ "/usr/dev/" is printed twice 
 * 2 "/usr/local/" is printed twice
 * 3 The second execution of ./print_all.sh prints four directory paths.
 * 4 √ The first execution of ./print_all.sh prints four directory paths.
 * 5 √ "/usr/qa" is printed twice
 * 
 * usr/local/
 * /usr/dev/
 * /usr/qa
 * /usr/prod
 * 
 * /usr/dev/
 * /usr/qa
 * 
 */




