import { NextRequest } from 'next/server';
//@ts-ignore
import nodemailer from 'nodemailer';

const email = process.env.NEXT_PUBLIC_SMTP_EMAIL
const password = process.env.NEXT_PUBLIC_SMTP_PASSWORD
const to = process.env.NEXT_PUBLIC_SMTP_TO
export async function POST(req: NextRequest) {
    if (!email || !password) {
        throw new Error('Missing email or password');
    }
    try {
        const { subject, message } = await req.json();
        console.log(message)

      
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: email,      
                pass: password, 
            },
        });



        const mailOptions = {
            from: email, 
            to,
            subject,
            text: message,

        };


        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
    }
}