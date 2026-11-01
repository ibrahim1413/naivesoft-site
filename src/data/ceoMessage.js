// ফাউন্ডার ও CEO-র বক্তব্য: এক জায়গায় রাখা, Home আর About দুই পেজই এখান থেকে নেয়।
//
// approved: false  → সাইটে "Meet our Founder & CEO" দেখায় (শুধু কোম্পানির আসল পরিচিতি, কোনো উদ্ধৃতি নয়)
// approved: true   → সাইটে "A message from our Founder & CEO" দেখায় (নিচের বক্তব্য তাঁর নামে ছাপা হয়)
//
// নিচের pullQuote ও paragraphs হলো **খসড়া**। Abdullah Al Faisal নিজে পড়ে বদলে নিন বা অনুমোদন দিন,
// তারপরই approved: true করবেন। ৯ বছর ও ২৫০+ কোম্পানির দাবিও ছাপার আগে যাচাই করে নিন।

export const ceoMessage = {
  approved: false,

  name: 'Abdullah Al Faisal',
  role: 'Founder & CEO, Naive Soft',
  photo: 'https://naivesoft.net/wp-content/uploads/2025/07/Group-14-9.png',

  // approved: false থাকলে এটা দেখায় (কোম্পানির বিদ্যমান সাইট-কপি)
  intro: [
    'Welcome to Naive Soft, your trusted tech partner with a 9-year legacy in delivering cutting-edge solutions.',
    'We specialise in dynamic, user-centric websites and connected 360° digital services that help businesses grow.',
  ],

  // approved: true হলে এটা দেখায় (খসড়া বক্তব্য)
  pullQuote: 'Our job is simple: turn your idea into a digital product that helps your business grow.',
  paragraphs: [
    'Nine years ago we set out to build technology that feels simple for the people who use it and valuable for the people who pay for it. That belief still guides every project at Naive Soft.',
    'Today our designers, developers and marketers work as one 360° partner, from the first sketch of a website to the last campaign that brings customers to it. We hold ourselves to three standards: quality in every detail, results you can measure, and support that lasts long after launch.',
    'Thank you for trusting us with your idea. We would be glad to build the next chapter of your business together.',
  ],
};
