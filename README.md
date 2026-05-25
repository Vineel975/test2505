fetch('https://claims-backend-helixview.fhpl.net/instance_name')
  .then(r => r.text())
  .then(t => console.log('Convex reachable:', t))
  .catch(e => console.log('Convex unreachable:', e.message));
