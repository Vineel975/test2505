# 1. Verify the file actually has the updated content on prod
docker exec <claimai-web-container> grep -n "fetchModels" /app/app/api/audit/start/route.ts
# Should print NO matches if file is updated

# 2. Rebuild Next.js inside container
docker exec <claimai-web-container> bun run build

# 3. Restart the container
docker-compose restart web
# OR
docker restart <claimai-web-container>

# 4. Try AI Summary again
