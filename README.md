$.ajax({
  url: '/MedicalScrutiny/GetClaimType',
  type: 'GET',
  data: { claimId: '<actual claim ID you are testing>' },
  success: function(res) { console.log('Spectra response:', res); }
});
