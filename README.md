# 1. Verify the file actually has the updated content on prod
docker exec  claim-processing-web-1 grep -n "fetchModels" /app/app/api/audit/start/route.ts
# Should print NO matches if file is updated

# 2. Rebuild Next.js inside container
docker exec claim-processing-web-1 grep -lr "tokenlens" /app/.next/server/ 2>/dev/null | head -5
docker exec claim-processing-web-1 grep -lr "FetchModelsError" /app/.next/server/ 2>/dev/null | head -5

/app/.next/server/chunks/[root-of-the-server]__84337b0e._.js

# 3. Restart the container
docker-compose restart web
# OR
docker restart <claimai-web-container>

# 4. Try AI Summary again
