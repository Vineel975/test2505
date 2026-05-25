import { NextRequest, NextResponse } from "next/server";

// Keyword-based claim type classification.
// Robust, deterministic, no AI dependency.

const CATARACT_KEYWORDS = [
  // Cataract types and synonyms
  "cataract", "nuclear sclerosis", "cortical sclerosis", "nuclear cataract",
  "cortical cataract", "subcapsular", "psc", "senile", "mature cataract",
  "immature cataract", "hypermature cataract", "traumatic cataract",
  "congenital cataract", "complicated cataract",
  // Lens-related
  "lens", "iol", "intraocular lens", "lens implant", "pciol", "foldable lens",
  "monofocal", "multifocal", "toric lens", "pseudophakia", "aphakia",
  // Cataract surgery procedures
  "phaco", "phacoemulsification", "sics", "ecce", "icce",
  // Eye / vision terms
  "eye", "ocular", "optic", "ophthalmic", "ophthalmology", "visual acuity",
  "diminution of vision", "blurred vision", "cornea", "retina", "macula",
  "vitreous", "iris", "pupil", "sclera", "conjunctiva",
  // Other eye procedures (still ophthalmic)
  "lasik", "trabeculectomy", "vitrectomy", "glaucoma", "pterygium",
  "vegf", "intravitreal", "macular degeneration",
  // Retinal conditions often co-present with cataract
  "npdr", "pdr", "diabetic retinopathy", "retinal detachment",
];

const MATERNITY_KEYWORDS = [
  // Pregnancy & delivery
  "pregnancy", "pregnant", "antenatal", "postnatal", "prenatal", "postpartum",
  "antepartum", "intrapartum", "puerperal", "puerperium",
  "delivery", "childbirth", "parturition", "labour", "labor pain",
  "lscs", "caesarean", "cesarean", "c-section", "c section",
  "normal delivery", "vaginal delivery", "spontaneous delivery",
  "epidural",
  // Obstetric terms
  "obstetric", "obstetrical", "gravida", "para ", "gpla",
  "g1p", "g2p", "g3p", "g4p", "g5p",  // GPLA shorthand
  // Complications
  "preeclampsia", "eclampsia", "gestational hypertension", "gestational diabetes",
  "gdm", "placenta previa", "placental abruption", "ectopic pregnancy",
  "preterm labour", "preterm labor", "foetal distress", "fetal distress",
  "polyhydramnios", "oligohydramnios", "miscarriage", "abortion", "mtp",
  "medical termination of pregnancy","primi"
  // Newborn
  "newborn", "neonatal", "neonate", "well baby",
  // Trimester
  "trimester", "first trimester", "second trimester", "third trimester",
];

function classifyDiagnosis(diagnosis: string): "cataract" | "maternity" | "other" {
  const lower = diagnosis.toLowerCase();

  const hasMaternity = MATERNITY_KEYWORDS.some(k => lower.includes(k));
  if (hasMaternity) return "maternity";

  const hasCataract = CATARACT_KEYWORDS.some(k => lower.includes(k));
  if (hasCataract) return "cataract";

  return "other";
}

export async function POST(request: NextRequest) {
  try {
    const { diagnosis } = (await request.json()) as { diagnosis: string };

    if (!diagnosis?.trim()) {
      return NextResponse.json({ claimType: "other" });
    }

    const claimType = classifyDiagnosis(diagnosis);

    console.log(`[classify-claim-type] "${diagnosis}" → ${claimType}`);

    return NextResponse.json({ claimType, diagnosis });
  } catch (e) {
    console.error("[classify-claim-type] error:", e);
    return NextResponse.json({ claimType: "other" });
  }
}
