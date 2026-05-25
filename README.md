fetch('/MedicalScrutiny/StartClaimAuditProxy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    claimId: '<your test claim ID>',
    slNo: '1'
  })
})
.then(r => r.json())
.then(data => console.log('audit/start result:', data));
