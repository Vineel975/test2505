# 1. Verify the file actually has the updated content on prod
docker exec  claim-processing-web-1 grep -n "fetchModels" /app/app/api/audit/start/route.ts
# Should print NO matches if file is updated

# 2. Rebuild Next.js inside container
docker exec  claim-processing-web-1 bun run build

OCI runtime exec failed: exec failed: unable to start container process: exec: "bun": executable file not found in $PATH

# 3. Restart the container
docker-compose restart web
# OR
docker restart <claimai-web-container>

# 4. Try AI Summary again
