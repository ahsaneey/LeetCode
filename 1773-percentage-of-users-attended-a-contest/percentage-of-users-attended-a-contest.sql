SELECT R.contest_id ,
ROUND(COUNT( DISTINCT R.user_id)*100.0/
  (SELECT COUNT(*)FROM Users),2) AS Percentage
  FROM Register R
  GROUP BY contest_id
  ORDER BY Percentage DESC ,R.contest_id ASC
