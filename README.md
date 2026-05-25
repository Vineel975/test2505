fetch('https://claims-helixview.fhpl.net/api/classify-claim-type', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ diagnosis: 'senile cataract' })
})
.then(r => r.json())
.then(data => console.log('RESPONSE:', data));
