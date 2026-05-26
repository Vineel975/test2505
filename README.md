# 1. Find the running ClaimAI container
docker ps | grep -i claim

# 2. Verify OPENROUTER_API_KEY is loaded in the container
docker exec  claim-processing-web-1 sh -c 'echo "Key length: ${#OPENROUTER_API_KEY}"'

# 3. Test if openrouter.ai is reachable from inside the container
docker exec  claim-processing-web-1 curl -sI https://openrouter.ai --max-time 10

OCI runtime exec failed: exec failed: unable to start container process: exec: "curl": executable file not found in $PATH

# 4. Test the actual API endpoint
docker exec  claim-processing-web-1 sh -c 'curl -s -o /dev/null -w "HTTP_STATUS:%{http_code} TIME:%{time_total}s\n" https://openrouter.ai/api/v1/models --max-time 15'

sh: 1: curl: not found


# 5. Check exact error stack trace from logs
docker logs  claim-processing-web-1 --tail 200 | grep -B 2 -A 10 "fetch failed\|Processing error"


✔ Successfully set OPENROUTER_API_KEY
✔ Successfully set MEMBER_DB_SERVER
✔ Successfully set MEMBER_DB_PORT
✔ Successfully set MEMBER_DB_DATABASE
✔ Successfully set MEMBER_DB_USER
✔ Successfully set MEMBER_DB_PASSWORD
- Deploying to http://backend:3210...

✔ No indexes are deleted by this push
Uploading functions to Convex...
Generating TypeScript bindings...
Running TypeScript...
Pushing code to your Convex deployment...
Schema validation complete.
Finalizing push...
✔ Deployed Convex functions to http://backend:3210
[audit/start] Processing error: Error [FetchModelsError]: fetch failed
    at tY (.next/server/chunks/[root-of-the-server]__84337b0e._.js:3:31115)
    at async t5 (.next/server/chunks/[root-of-the-server]__84337b0e._.js:3:35174)
    at async u (.next/server/chunks/[root-of-the-server]__84337b0e._.js:3:43042)
    at async a (.next/server/chunks/[root-of-the-server]__84337b0e._.js:3:44084)
    at async Module.rs (.next/server/chunks/[root-of-the-server]__84337b0e._.js:3:45163) {
  code: 'NETWORK',
  status: undefined
}

# 6. Check for proxy env vars
docker exec  claim-processing-web-1 env | grep -iE "proxy|HTTPS_PROXY|HTTP_PROXY"
