fetch('/api/classify-claim-type', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ diagnosis: 'senile cataract' })
})
.then(async r => {
  console.log('STATUS:', r.status);
  console.log('URL:', r.url);
  const text = await r.text();
  console.log('BODY (first 500 chars):', text.substring(0, 500));
});
