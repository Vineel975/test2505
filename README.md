const jobId = window.location.pathname.split('/job/')[1];
console.log('Looking for jobId:', jobId);

// Query the public Convex URL (what the browser uses)
fetch('https://claims-backend-helixview.fhpl.net/api/query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    path: 'processing:getJobById',
    args: { jobId },
    format: 'json'
  })
})
.then(r => r.json())
.then(data => console.log('Job from PUBLIC URL:', data));
