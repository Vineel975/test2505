// Test if convex is reachable
fetch('https://claims-backend-helixview.fhpl.net/instance_name')
  .then(r => r.text())
  .then(t => console.log('Convex HTTP:', t))
  .catch(e => console.log('Convex HTTP FAIL:', e.message));

// Test if auth URL is reachable  
fetch('https://claims-auth-helixview.fhpl.net/.well-known/openid-configuration')
  .then(r => r.status === 200 ? r.json() : Promise.reject('status ' + r.status))
  .then(d => console.log('Auth URL:', d.issuer || 'reachable'))
  .catch(e => console.log('Auth URL FAIL:', e.message));
