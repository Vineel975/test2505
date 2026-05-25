const jobId = 'PASTE_YOUR_JOBID_HERE';

fetch('https://claims-backend-helixview.fhpl.net/api/query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    path: 'processing:getJob',
    args: { jobId },
    format: 'json'
  })
})
.then(r => r.json())
.then(data => console.log('JOB:', data));
