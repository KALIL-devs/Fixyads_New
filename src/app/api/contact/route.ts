import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, service, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (name.length > 100 || email.length > 100 || (phone && phone.length > 20) || message.length > 2000) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 });
    }

    const saved = await prisma.contact.create({
      data: { name, email, phone, service, message }
    });

    return NextResponse.json({ success: true, saved });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    );
  }
}
