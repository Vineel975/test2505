-- Get Level1 ID for Obstetrics and Gynecology
SELECT ID, Name FROM TPALevel1 WHERE Name LIKE '%Obstetric%' OR Name LIKE '%Gyn%';

-- Get Level2 IDs
SELECT ID, Name FROM TPALevel2 WHERE Name IN ('Normal Delivery', 'Caesarean Section');

-- Get TPAProcedure details with their PCS codes
SELECT ID, Name, Level1ID, Level2ID, PCSCode FROM TPAProcedures
WHERE ID IN (402, 403, 404, 405, 418, 419, 420, 421, 422, 1331, 1332, 1340);
