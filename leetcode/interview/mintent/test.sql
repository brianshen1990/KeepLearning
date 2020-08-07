/**

*/

SELECT DISTINCT(name) from (
  SELECT name FROM dogs UNION SELECT name from cats
)