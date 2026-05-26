# 1. Find the running ClaimAI container
docker ps | grep -i claim

# 2. Verify OPENROUTER_API_KEY is loaded in the container
docker exec <claimai-web-container> sh -c 'echo "Key length: ${#OPENROUTER_API_KEY}"'

# 3. Test if openrouter.ai is reachable from inside the container
docker exec <claimai-web-container> curl -sI https://openrouter.ai --max-time 10

# 4. Test the actual API endpoint
docker exec <claimai-web-container> sh -c 'curl -s -o /dev/null -w "HTTP_STATUS:%{http_code} TIME:%{time_total}s\n" https://openrouter.ai/api/v1/models --max-time 15'

# 5. Check exact error stack trace from logs
docker logs <claimai-web-container> --tail 200 | grep -B 2 -A 10 "fetch failed\|Processing error"

# 6. Check for proxy env vars
docker exec <claimai-web-container> env | grep -iE "proxy|HTTPS_PROXY|HTTP_PROXY"
