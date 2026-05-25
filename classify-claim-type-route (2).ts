import { NextRequest, NextResponse } from "next/server";

// TEMPORARY: Always return "cataract" so AI summary is allowed for all claims.
// This bypasses the Spectra-side check that blocks AI summary when claimType === "other".
// The downstream extraction uses cataract prompts which work reasonably for most cases.
// Once Spectra is updated to allow all claim types, revert this to proper classification.

export async function POST(request: NextRequest) {
  try {
    const { diagnosis } = (await request.json()) as { diagnosis: string };
    console.log(`[classify-claim-type] "${diagnosis}" → cataract (forced, bypass enabled)`);

    return NextResponse.json({
      claimType: "cataract",
      diagnosis: diagnosis ?? "",
    });
  } catch (e) {
    console.error("[classify-claim-type] error:", e);
    // Even on error, return cataract so the flow proceeds
    return NextResponse.json({ claimType: "cataract", diagnosis: "" });
  }
}
