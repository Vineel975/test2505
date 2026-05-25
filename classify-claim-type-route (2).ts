import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { getModel } from "@/src/model-provider";

export async function POST(request: NextRequest) {
  try {
    const { diagnosis } = (await request.json()) as { diagnosis: string };

    if (!diagnosis?.trim()) {
      return NextResponse.json({ claimType: "other" });
    }

    const { text } = await generateText({
      model: getModel({ provider: "openrouter", modelName: "anthropic/claude-sonnet-4-5" }),
      prompt: `Classify this medical diagnosis into one of: cataract, maternity, or other.

Diagnosis: "${diagnosis}"

Reply with only one word.`,
    });

    // Find which keyword appears in the AI's response
    const raw = text.toLowerCase();
    let claimType: "cataract" | "maternity" | "other" = "other";
    if (raw.includes("cataract"))       claimType = "cataract";
    else if (raw.includes("maternity")) claimType = "maternity";

    console.log(`[classify-claim-type] "${diagnosis}" → AI: "${text.trim()}" → ${claimType}`);

    return NextResponse.json({ claimType, diagnosis });
  } catch (e) {
    console.error("[classify-claim-type] error:", e);
    return NextResponse.json({ claimType: "other" });
  }
}
