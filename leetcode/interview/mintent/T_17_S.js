/**
 * Question 17
 * 
 * message="Test message 1"
 * function send_email() {
 *   echo $message | mail -s "Test" "username@domain.com"
 * }
 * 
 * message="Test message 2"
 * send_email &
 * pid=$!
 * 
 * message="Test message 3"
 * send_email &
 * 
 * message="Test message 4"
 * send_email
 * wait $pid
 * 
 * echo "All test emails sent"
 * 
 * 
 * select the statements that are correct.
 * 
 * 1. √ Two background processes will be started, each of which will send an email 
 * 2. An email will the contents "Test message 1" will be sent
 * 3. √ Three emails will be sent.
 * 4. √ All sent emails will have different contents.
 * 
 */




