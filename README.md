NEXT_PUBLIC_CONVEX_URL="https://claims-backend-helixview.fhpl.net"
NEXT_PUBLIC_CONVEX_SITE_URL="https://claims-auth-helixview.fhpl.net"
NEXT_PUBLIC_APP_URL="https://claims-helixview.fhpl.net"
 
STAGING_API_KEY=claimai-staging-key-2025
SPECTRA_BASE_URL="https://spectra-ai.fhpl.net"
 
# Host port overrides — avoid clashing with other stacks on the same VM.
WEB_PORT="3100"
CONVEX_BACKEND_PORT="3310"
CONVEX_SITE_PORT="3311"
CONVEX_POSTGRES_PORT="6544"
DASHBOARD_PORT="6792"
# Convex origins must match the browser-facing URLs above or live queries break.
CONVEX_CLOUD_ORIGIN="https://claims-backend-helixview.fhpl.net"
CONVEX_SITE_ORIGIN="https://claims-auth-helixview.fhpl.net"
NEXT_IMAGE="ghcr.io/adityamiskin/claim-processing/next-convex:latest"
 
MEMBER_DB_SERVER=AWS-Prod-ReportingSRV02.fhpl.in
MEMBER_DB_DATABASE=McarePlus_AI
MEMBER_DB_USER=FHPL\satyavineel.k
MEMBER_DB_PASSWORD=Cabbage@2001
MEMBER_DB_PORT=1433
CONVEX_SELF_HOSTED_URL="http://backend:3210"
CONVEX_DEPLOY_ON_START="1"
WEB_REPLICAS="1"
APP_DOMAIN="claims-helixview.fhpl.net"
CONVEX_DOMAIN="claims-backend-helixview.fhpl.net"
CONVEX_SITE_DOMAIN="claims-auth-helixview.fhpl.net"
CONVEX_SELF_HOSTED_ADMIN_KEY
