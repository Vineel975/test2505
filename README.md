-- Pick any cataract claim that has a saved coding row
SELECT TOP 1 *
FROM ClaimsCoding
WHERE ClaimID IN (SELECT TOP 100 ClaimID FROM Claimsdetails ORDER BY ID DESC)
  AND TPAProcedureID IS NOT NULL
  AND Deleted = 0
ORDER BY ID DESC
