/**
182. Duplicate Emails
Write a SQL query to find all duplicate emails in a table named Person.

+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:

+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Note: All emails are in lowercase.



 */

# Write your MySQL query statement below

SELECT DISTINCT Email FROM (
    SELECT Email, COUNT(*) AS count FROM Person GROUP BY Email 
) as b WHERE b.count > 1

/**
{"headers": {"Person": ["Id", "Email"]}, "rows": {"Person": [[1, "a@b.com"], [2, "c@d.com"], [3, "a@b.com"]]}}
 */