import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dom } from '@fortawesome/fontawesome-svg-core';


class FAQ {
  question: string;
  answer: SafeHtml;
}

const FAQs  = [
  { question: "下载的EasyConnect组件安装包无法安装", answer: "通过360软件助手、腾讯软件管家或自行上网百度查找.NET Framework 4.0或更高版本安装。"},
  { question: "苹果电脑能否使用移动办公", answer: "苹果电脑、iPad均可以使用移动办公。"},
  {
    question: "用浏览器打开VPN页面后，输入用户名密码的输入框和按钮显示不全",
    answer: `<ul><li>尝试使用IE浏览器重新访问该页面</li>
    <li>将https://vpn.gz-eport.com地址添加到信任站点，并在“internet选项”-“安全”-“受信任站点”-“自定义级别”，除“使用Windows Defender SmartScreen”和“使用弹出窗口阻止程序”外，其他选项均设置为“启用”；</li>
    <li>也可下载安装EasyConnect组件安装使用（推荐）</li></ul>
    `
  },
  {
    question: "开VPN页面后，页面提示“您的连接不是私密连接……”等警示字样",
    answer: `<p><img src="assets/img/faq/faq1.png">1.点击图1中红框选中的“高级”，在弹出内容中点击“继续前往vpn.gz-eport.com（不安全）”（见下图2）即可打开登录页面。
    <br/><img src="assets/img/faq/faq2.png">2. 即可打开登录页面。</p>`
  },
  {
    question: "在VPN登录页面中输入了域账号和密码后提示账号密码错误",
    answer: `<ul>
    <li>检查录入的域账号名前是否输入了“gz\”，登录VPN使用的账号不需要输入域前缀“gz\；</li>
    <li>请能访问管理网的同事在管理网中确认域账号密码是否过期，如已过期请按照与密码重置流程在新政务报批系统中进行密码重置；</li>
    <li>如确认账号密码均正确无异常，请由各部门综合科重新通过邮箱向办公室发账户信息邮件申请重开。</li>
    </ul>`
  },
  {
    question: "在VPN登录页面中输入账号密码并通过验证后收不到验证短信",
    answer: "各部门综合科检查向办公室发送的账户信息中账号信息和电话信息是否正确，如确认正确但仍无法收到验证短信，请各部门综合科重新通过邮箱向办公室发账户信息邮件申请重开。"
  },
  {
    question: "VPN登录成功后，看不到任何链接资源",
    answer: "该情况为账号未授权使用移动办公，请各部门综合科通过邮箱向办公室发账户信息邮件申请开通。"
  },
  {
    question: "VPN登录成功后，点击“应用发布_主页_Chrome”后无法正常打开HB2012",
    answer: "因HB2012系统不兼容Chrome浏览器，请使用“应用发布-关网主页”访问主页和HB2012。"
  },
  {
    question: "打开关网主页后，反复跳出输入框要求录入账号密码或提示“没有通过本次认证”",
    answer: `<ul>
    <li>主页和HB2012使用时需通过H4A身份认证，故需输入正确的域账号密码才能使用，请在输入账号时务必在账号前输入“gz\”，否则无法通过认证；</li>
    <li>请勾选密码输入框下方的“记住我的凭据”选项。<img src="assets/img/faq/faq3.png" alt=""></li></ul>
    `
  }
];


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {


  faqs: FAQ[] = [];

  constructor(private sanitizer: DomSanitizer) {
    FAQs.forEach(x => {
      this.faqs.push({ question: x.question, answer: this.sanitizer.bypassSecurityTrustHtml(x.answer) });
    })
  }

  ngOnInit(): void {
  }

}
