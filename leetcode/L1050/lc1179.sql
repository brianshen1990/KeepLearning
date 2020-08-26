/*
1179. Reformat Department Table

Table: Department

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| revenue       | int     |
| month         | varchar |
+---------------+---------+
(id, month) is the primary key of this table.
The table has information about the revenue of each department per month.
The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].
 

Write an SQL query to reformat the table such that there is a department id column and a revenue column for each month.

The query result format is in the following example:

Department table:
+------+---------+-------+
| id   | revenue | month |
+------+---------+-------+
| 1    | 8000    | Jan   |
| 2    | 9000    | Jan   |
| 3    | 10000   | Feb   |
| 1    | 7000    | Feb   |
| 1    | 6000    | Mar   |
+------+---------+-------+

Result table:
+------+-------------+-------------+-------------+-----+-------------+
| id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
+------+-------------+-------------+-------------+-----+-------------+
| 1    | 8000        | 7000        | 6000        | ... | null        |
| 2    | 9000        | null        | null        | ... | null        |
| 3    | null        | 10000       | null        | ... | null        |
+------+-------------+-------------+-------------+-----+-------------+

Note that the result table has 13 columns (1 for the department id + 12 for the months).
*/

# Write your MySQL query statement below


select d.id, d1.revenue as 'Jan_Revenue', d2.revenue as 'Feb_Revenue', d3.revenue as 'Mar_Revenue', d4.revenue as 'Apr_Revenue',
d5.revenue as 'May_Revenue', d6.revenue as 'Jun_Revenue', d7.revenue as 'Jul_Revenue', d8.revenue as 'Aug_Revenue',
d9.revenue as 'Sep_Revenue', d10.revenue as 'Oct_Revenue', d11.revenue as 'Nov_Revenue', d12.revenue as 'Dec_Revenue'
from Department as d
left join Department as d1 on d.id = d1.id and d1.month= 'Jan'
left join Department as d2 on d.id = d2.id and d2.month= 'Feb'
left join Department as d3 on d.id = d3.id and d3.month= 'Mar'
left join Department as d4 on d.id = d4.id and d4.month= 'Apr'
left join Department as d5 on d.id = d5.id and d5.month= 'May'
left join Department as d6 on d.id = d6.id and d6.month= 'Jun'
left join Department as d7 on d.id = d7.id and d7.month= 'Jul'
left join Department as d8 on d.id = d8.id and d8.month= 'Aug'
left join Department as d9 on d.id = d9.id and d9.month= 'Sep'
left join Department as d10 on d.id = d10.id and d10.month= 'Oct'
left join Department as d11 on d.id = d11.id and d11.month= 'Nov'
left join Department as d12 on d.id = d12.id and d12.month= 'Dec'
group by d.id

/*
{"headers":{"Department":["id","revenue","month"]},"rows":{"Department":[[1,8000,"Jan"],[2,9000,"Jan"],[3,10000,"Feb"],[1,7000,"Feb"],[1,6000,"Mar"]]}}
*/
