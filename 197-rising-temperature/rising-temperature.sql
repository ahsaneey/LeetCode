SELECT W1.id 
FROM Weather W1
JOIN Weather w2
  ON W1.recordDate = W2.recordDate + INTERVAL 1 DAY
WHERE  W1.temperature > w2.temperature;
