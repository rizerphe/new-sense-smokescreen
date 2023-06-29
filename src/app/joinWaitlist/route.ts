import admin from "firebase-admin";
import { NextResponse } from "next/server";

const serviceAccount = {
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key: JSON.parse(process.env.FIREBASE_PRIVATE_KEY || ""),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
};

const app = admin.apps.length
  ? admin.app()
  : admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      databaseURL:
        "https://newsense-2c524-default-rtdb.europe-west1.firebasedatabase.app",
    });
const database = admin.database(app);

function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export async function POST(request: Request) {
  try {
    const { email, reason }: { email: string; reason: string } =
      await request.json();
    if (!reason || !email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email or reason" },
        { status: 400 }
      );
    }
    const existing = await database
      .ref("waitlist")
      .orderByChild("email")
      .equalTo(email)
      .once("value");
    if (existing.exists()) {
      return NextResponse.json(
        { error: "Email already on waitlist" },
        { status: 409 }
      );
    }
    const record = {
      email: email,
      reason: reason,
      timestamp: Date.now(),
    };
    const recordRef = await database.ref("waitlist").push(record);
    return NextResponse.json({ id: recordRef.key });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
