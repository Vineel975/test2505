const CONVEX_URL = 'https://claims-backend-helixview.fhpl.net';
const jobId = '<your-job-id>';

async function checkJob(path, label) {
  const res = await fetch(`${CONVEX_URL}/api/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path, args: { jobId }, format: 'json' })
  });
  const data = await res.json();
  console.log(`\n=== ${label} ===`);
  console.log(data);
}

await checkJob('processing:getJob', 'JOB STATUS');
await checkJob('processing:getJobResults', 'JOB RESULTS');
await checkJob('processing:listJobLogs', 'JOB LOGS');
