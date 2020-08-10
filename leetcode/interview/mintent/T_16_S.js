/**
 * Question 16
 * Consider the following config.txt file:
 * 
 * # Configuration file for application deployment
 * IP address of the Primary Server: IP_ADDRESS
 * IP address of the Database server: IP_ADDRESS
 * IP address of the Jenkins Server: IP_ADDRESS
 * 
 * 
 * And a bash scripts:
 * 
 * #! /usr/bin/env bash
 * sed -i'.backup' '1,3 s/IP_ADDRESS/127.0.0.1/g' config.txt
 * 
 * select the statements about the execution and results of the Bash scripts that are correct.
 * 
 *  
 * 1. √ A file config.txt.backup  containing the original contents of config.txt will be generated.
 * 2. √ The config.txt file will be modified in-place.
 * 3. x Every IP_ADDRESS placeholder in config.txt will be replaced with 127.0.0.1 (Line 3 not included, so wrong) 
 * 4. x The first line of config.txt is printed to the console (all lines)
 */




