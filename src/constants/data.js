import { icon } from "./images"
import { articleImg } from "./images"


export const FEATURES = [
  {
    id: 1,
    title: 'Online Banking',
    icon: icon.online,
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    id: 2,
    title: 'Simple Budgeting',
    icon: icon.budget,
    description: "See exactly where your money goes each month.Recieve notifications when you're close to hitting your limits."
  },
  {
    id: 3,
    title: 'Fast Onboarding',
    icon: icon.onboarding,
    description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away"
  },
  {
    id: 4,
    title: 'Open API',
    icon: icon.api,
    description: "Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier."
  }
]

export const ARTICLES = [
  {
    id: 1,
    article_img: articleImg.currency,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    text: "The World is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single..."
  },
  {
    id: 2,
    article_img: articleImg.restaurant,
    author: 'Wilson Hutton',
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month.That means you..."
  },
  {
    id: 3,
    article_img: articleImg.plane,
    author: 'Wilson Hutton',
    title: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
  },
  {
    id: 4,
    article_img: articleImg.confetti,
    author: 'Claire Robinson',
    title: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite throught the site..."
  }
]