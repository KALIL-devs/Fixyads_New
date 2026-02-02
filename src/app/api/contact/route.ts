import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('Incoming form data:', body);

        const webhook = process.env.GOOGLE_SHEET_WEBHOOK;

        if (!webhook) {
            throw new Error('GOOGLE_SHEET_WEBHOOK is missing');
        }

        const response = await fetch(webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const text = await response.text();
        console.log('Google response:', text);

        if (!response.ok) {
            throw new Error(`Google error: ${response.status}`);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('API ERROR:', error.message);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
