'use server';

import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

import VerificationEmail from './template/VerificationEmail';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

const transporter = nodemailer.createTransport({
	host: SMTP_SERVER_HOST,
	port: 465,
	secure: true,
	auth: {
		user: SMTP_SERVER_USERNAME,
		pass: SMTP_SERVER_PASSWORD,
	},
});

export async function sendMail({
	sendTo,
	subject,
	text,
	html,
}: {
	sendTo: string;
	subject: string;
	text?: string;
	html?: string;
}) {
	try {
		await transporter.verify();
	} catch (error) {
		console.error(
			'Something Went Wrong',
			SMTP_SERVER_USERNAME,
			SMTP_SERVER_PASSWORD,
			error
		);
		return;
	}
	const info = await transporter.sendMail({
		from: SMTP_SERVER_USERNAME,
		to: sendTo,
		subject: subject,
		text: text,
		html: html ? html : '',
	});
	return info;
}

export async function sendVerification({
	sendTo,
	name,
	verificationLink,
}: {
	sendTo: string;
	name: string;
	verificationLink: string;
}) {
	const html = await render(VerificationEmail({ url: verificationLink, name }));
	return sendMail({ sendTo, subject: 'Подтверждение почты', html });
}
