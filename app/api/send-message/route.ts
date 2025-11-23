import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export const runtime = "nodejs";

// Adminning Telegram chat ID
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "5884447415";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, subject, message } = body;

    // Validate required fields
    if (!name || !contact || !subject || !message) {
      return NextResponse.json(
        { error: "Barcha maydonlar to'ldirilishi kerak" },
        { status: 400 }
      );
    }

    if (message.trim().length < 5) {
      return NextResponse.json(
        { error: "Xabar kamida 5 ta belgidan iborat bo'lishi kerak" },
        { status: 400 }
      );
    }

    // Time formatting for Telegram
    const now = new Date();
    const timeString = now.toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Prepare Telegram message
    const messageText = `🆕 Yangi xabar

👤 Ism: ${name}
📞 Aloqa: ${contact}
🏷 Mavzu: ${subject}
💬 Xabar:
${message}

🕔 Vaqt: ${timeString}`;

    // Send message to Telegram
    try {
      await sendTelegramMessage({
        chatId: TELEGRAM_CHAT_ID,
        text: messageText,
      });
    } catch (telegramError) {
      console.error("Telegramga yuborib bo'lmadi:", telegramError);
      // API ishlashda davom etadi (fallback)
    }

    return NextResponse.json(
      {
        success: true,
        message: "Xabar muvaffaqiyatli yuborildi",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("API xatosi:", err);

    return NextResponse.json(
      { error: "Serverda xatolik yuz berdi. Keyinroq urinib ko'ring." },
      { status: 500 }
    );
  }
}
