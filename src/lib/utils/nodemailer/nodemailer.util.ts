import mailer from "nodemailer";
import * as util from "util";
import { promises } from "fs";
import { EnvData } from "@/configs/config";
const inLineCss = require("nodemailer-juice");

interface ChangePasswordArgs {
  userId: string;
  email: string;
  token: string;
}

export class NodeMailerUtil {
  constructor(private env: EnvData) { }
  private getSmtpData() {
    return {
      service: this.env.SMTP_SERVICE!,
      host: this.env.SMTP_HOST!,
      port: +this.env.SMTP_PORT!,
      auth: {
        user: this.env.SMTP_AUTH_USER!,
        pass: this.env.SMTP_AUTH_PASS!,
      },
    };
  }

  private getTransporter() {
    const data = this.getSmtpData();

    mailer.createTransport({});

    const transporter = mailer.createTransport({
      ...data,
    });

    transporter.use("compile", inLineCss());

    return transporter;
  }

  private async getHtml(args: ChangePasswordArgs) {
    const url = `https://www.click-soft.shop/change-password?uid=${args.userId}&key=${args.token}`;
    const data = await promises.readFile(
      "./src/lib/utils/nodemailer/change-password.html",
    );
    const html = data.toString().replaceAll("@change-password-url", url);
    return html;
  }

  private async getMailOptions(args: ChangePasswordArgs) {
    const html = await this.getHtml(args);
    const mailOptions = {
      from: this.env.SMTP_AUTH_USER, // 네이버 아이디
      to: args.email, // 수신자 아이디
      subject: "클릭스토어 비밀번호 변경",
      html,
    };

    return mailOptions;
  }

  async sendChangePasswordEmail(args: ChangePasswordArgs) {
    const transporter = this.getTransporter();

    transporter.sendMail;
    const sendMailAsync = util
      .promisify(transporter.sendMail)
      .bind(transporter);
    const mailOptions = await this.getMailOptions(args);
    await sendMailAsync(mailOptions);
    transporter.close();
    return args.email;
  }
}
