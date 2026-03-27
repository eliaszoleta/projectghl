/**
 * [EZ-000] Webinar Promo Email Campaign Blueprint
 *
 * PURPOSE: Pre-registration promotional emails sent to your existing list
 *          BEFORE the webinar to drive sign-ups.
 *
 * These are NOT automation workflow emails. They are broadcast/campaign emails
 * sent on fixed dates to contacts tagged with ez_promo-list.
 *
 * TWO WAYS TO SEND IN GHL:
 *
 * OPTION A – Email Campaigns (Recommended for fixed dates):
 *   GHL → Marketing → Emails → New Campaign
 *   Schedule each email on its specific send date below.
 *
 * OPTION B – Workflow with "Wait Until Date" steps:
 *   GHL → Automations → Workflows → + New Workflow
 *   TRIGGER: Tag Added → ez_promo-list
 *   Each step waits until the scheduled send date/time.
 */

// ── Email Copy ──────────────────────────────────────────────────────────────

export const PROMO_EMAIL_1 = {
  subject: 'Unlock the 5 Biggest Fears Parents Face About College 🌟',
  sendDate: 'Thursday, January 29, 2026',
  body: `Dear Parent,

Are you feeling overwhelmed as your high school student prepares for college? You're not alone. Parents face many fears about their child's transition to college. But what if you could unlock the answers to those fears and empower your student for both academic and future career success?

Join me for an essential webinar titled "5 Biggest Fears Parents Face Sending Their Child to College" on February 5, 2026, at 6:00 PM ET. This is your chance to explore critical gaps in preparing your child for the college experience and beyond.

In this webinar, you will discover:

• Parent perceptions of college readiness: Understand what assumptions might be clouding your view.
• Academic readiness: Learn how to assess and enhance your child's academic skills.
• Preparation beyond academics: Discover why life skills are equally important and how to cultivate them.
• Addressing completion concerns: Gain insights into the metrics behind successful college graduation.
• Social and emotional transition challenges: Learn how to support your child's mental well-being during this significant life change.

My name is Debbie Elder, an internationally recognized innovator and best-selling author dedicated to motivating students to peak performance. With years of experience consulting families on college planning, I have a unique process that not only helps parents afford college but also equips students for successful admissions to their ideal universities.

This isn't just another seminar. It's an opportunity to transform your perspective and your child's future. You'll walk away armed with actionable strategies that will leave you feeling more confident about your student's readiness for college.

Are you ready to tackle those fears head-on? Click [here to register now](#) and secure your spot. Don't wait—spaces are limited, and your child's future success is too important to delay.

Looking forward to guiding you in this exciting journey!

Best,
Debbie Elder

P.S. Remember, empowering your student starts with understanding their needs. Register now to ensure they get the best preparation for college!`,
};

export const PROMO_EMAIL_2 = {
  subject: 'Why Most Parents Struggle with College',
  sendDate: 'Friday, January 30, 2026',
  body: `Hi there,

As a parent of a college-bound high school student, you might be grappling with these challenging questions: What do I need to do to get my student into an ideal college? The costs of a college education continue to rise, leaving many parents feeling overwhelmed by the perceived value versus the financial burden.

But here's the good news: You don't have to navigate this journey alone.

Join us for our upcoming webinar, "5 Biggest Fears Parents Face Sending Their Child to College," on February 5, 2026, at 6:00 PM ET. Debbie Elder—an internationally recognized innovator and best-selling author—will equip you with essential insights to tackle these concerns head-on.

Here's what you can expect to learn during the webinar:

• Understanding Parent Perceptions: Navigate what "readiness" for college truly means for your child.
• Academic Readiness: Discover how to assess your child's academic preparedness for college-level work.
• Beyond Academics: Learn about vital college preparation aspects that often get overlooked.
• Value and Completion Concerns: Address common concerns about academic value and graduation rates.
• Social and Emotional Support: Understand how to help your child transition successfully into college life.

Debbie's extensive background working alongside students and families uniquely positions her to guide you through this critical phase. Her successful methods have helped families afford college and ensured students are prepared for admission to their dream universities.

You'll leave the webinar empowered with actionable strategies that provide clarity and direction for both you and your child. It's more than just helping your student get into college—it's about setting them up for academic success now and transformational achievements later.

👉 Don't miss this opportunity! [Register now for the webinar!](#)

Looking forward to seeing you there,

Debbie Elder

P.S. If you're still wondering whether your student is truly prepared for college, this webinar is your chance to find out! Sign up today.`,
};

export const PROMO_EMAIL_3 = {
  subject: 'What If You Could Provide the Best Preparation for Your College-Bound Student?',
  sendDate: 'Saturday, January 31, 2026',
  body: `Dear Parent,

Imagine watching your child seamlessly transition to college, equipped with the skills not just to survive, but to thrive. What if you could eliminate the uncertainty and anxiety surrounding their college journey? Join us for our upcoming webinar, "5 Biggest Fears Parents Face Sending Their Child to College," where we'll outline the roadmap to empower your student for academic success and beyond.

Why Attend?

In today's rapidly changing educational landscape, understanding college readiness is more important than ever. This webinar will help you:

• Bridge the Gap: Address critical perceptions of academic and career readiness.
• Empower Success: Learn effective skills to enhance your child's academic performance.
• Prepare Holistically: Gain insights into social/emotional transitions and external pressures that impact college success.
• Navigate Concerns: Discuss academic value and completion strategies that ensure your child graduates on time and gets a good job.

About the Presenter: Debbie Elder

Debbie Elder is a trailblazer in student motivation and college preparation. As a best-selling author and highly sought-after speaker, she has dedicated her career to transforming challenges into success stories for families like yours. With years of experience, Debbie offers proven strategies to help parents unlock their child's potential.

What You Will Gain

During this insightful session, you'll discover:

1. Key perceptions of student readiness for college and careers.
2. Strategies for addressing academic concerns and preparing your child holistically.
3. Insights on social/emotional challenges and their impact on transition.
4. How to effectively address career-related fears before your child steps onto campus.
5. Concrete action plans for making college more affordable and accessible without sacrificing value.

Take control of your child's future today!

Join us on February 5, 2026, at 6:00 PM ET. Don't miss your opportunity to gain the insights you need. [Click here to register now!](#)

Best,
Debbie Elder

P.S. Empower your child with the education they deserve. Secure your spot today and ease your worries about their college journey!`,
};

export const PROMO_EMAIL_4 = {
  subject: 'Can You Really Empower Your Student for Success?',
  sendDate: 'Sunday, February 1, 2026',
  body: `Dear Parent,

Many believe their child is already prepared for the rigors of college, but what if I told you that this assumption might be holding them back? Don't let misplaced confidence leave your student vulnerable. The truth is, without the right guidance, even the brightest students can struggle during their transition to college.

Join me on February 5, 2026, at 6:00 PM ET for an eye-opening webinar titled "5 Biggest Fears Parents Face Sending Their Child to College." In this session, we'll tackle some of the most critical gaps in college preparation that parents often overlook. Here's why you don't want to miss this:

• Parent Perceptions: Understand common misconceptions about student readiness.
• Academic Readiness: Learn what academic skills truly matter.
• Beyond Academics: Explore essential preparations outside of standard coursework.
• Address Completion Concerns: Discover how to ensure your child stays on track.
• Social/Emotional Support: Gain insights into managing the emotional aspects of this transition.

As an internationally recognized innovator and best-selling author, I've helped countless families navigate the complexities of college preparation. I specialize in empowering students to achieve peak performance and unlocking their full potential. Through years of experience and a proven process, I can show you how to truly prepare your child for success without compromising their well-being.

This webinar is designed for parents like you—who want the best for their college-bound child but may feel overwhelmed by the process. You'll walk away with actionable strategies to help your student not just survive college but thrive.

Don't let uncertainty hold your family back! Register now to secure your spot and prepare to gain invaluable insights that can transform your student's college experience.

👉 [Register Here for the Webinar](#)

Looking forward to seeing you there!

Best,
Debbie Elder

P.S. Remember, it's not just about getting into college—it's about ensuring your child thrives once they get there! Secure your spot today!`,
};

export const PROMO_EMAIL_5 = {
  subject: "You Won't Believe What I'm Sharing LIVE…",
  sendDate: 'Monday, February 2, 2026',
  body: `Hi there,

With a new college season around the corner, the 5 Biggest Fears Parents Face Sending Their Child to College is an absolute must-attend event. If you're feeling uncertain about your child's future and want to empower them for academic success, you won't want to miss this opportunity!

Join Me LIVE on February 5, 2026 at 6:00 PM ET
[Register Here](#)

During this free webinar, we will dive deep into critical topics that matter to every parent of a college-bound high school student. You'll gain valuable insights into:

• Parent perceptions of readiness: Are your expectations aligned with reality? Discover how to assess your child's true preparation for both college and careers.
• Academic readiness for college: Learn the essential skills your child needs to thrive academically and how to nurture them now.
• College preparation beyond academics: Understand factors like emotional intelligence that significantly influence college success.
• Academic and value completion concerns: We'll tackle the pressing questions around the value of a degree and how to ensure your child maximizes their college investment.
• Social/emotional transition concerns: Discover key strategies for helping your student adjust and thrive in their new environment.
• Career-related insights: You'll learn how to effectively guide your child in their career exploration to ensure they find fulfilling opportunities.

As an internationally recognized innovator and passionate speaker, I have spent years helping families navigate the complexities of college preparation. I'm excited to share game-changing strategies that haven't been revealed anywhere else!

This session is not just valuable information—it's your chance to take action to ensure your child's success in college and beyond.

Don't let your fears hold your child back! Click [here](#) to secure your spot for this essential webinar.

Looking forward to seeing you there,

Debbie Elder
PS: Remember, the insights I'll share are exclusive to this webinar. This is a can't miss opportunity to unlock your child's potential and ensure they're fully prepared for their college journey!
Webinar Date & Time: February 5, 2026, 6:00 PM ET
[Register Now!](#)`,
};

export const PROMO_EMAIL_6 = {
  subject: '48 Hours Left: This Could Change Everything for You',
  sendDate: 'Tuesday, February 3, 2026',
  body: `Dear Parents,

Only 48 hours left until our groundbreaking webinar, 5 Biggest Fears Parents Face Sending Their Child to College! This is your chance to unlock the essential knowledge you need to prepare your child for a successful college journey.

Navigating the transition to college can be overwhelming, but it doesn't have to be. By attending this webinar, you'll discover crucial insights that will empower both you and your student to face the future with confidence. Here's what we'll cover:

• Parent perceptions of readiness for college and careers
• Academic readiness and what your child truly needs
• College preparation beyond academics – developing a well-rounded student
• Concerns around academic value and completion – how to avoid pitfalls
• Social/emotional transition challenges that need attention
• Career-related worries parents often face, and how to tackle them

As a parent of a college-bound student, you likely share the same pressing questions: What do I need to do to get my student into their ideal college? Or a more significant concern: How can I ensure my child graduates and lands a good job? This webinar provides the answers to these urgent questions, laying a solid foundation for your child's educational success.

Why trust us? I'm Debbie Elder, an internationally recognized innovator and best-selling author dedicated to motivating students toward peak performance. I've helped families navigate the college landscape, ensuring students are not only prepared academically but also emotionally equipped for the challenges ahead.

This is more than just a webinar; it's an opportunity to shift the trajectory of your child's future. Don't wait until it's too late! Secure your spot now and join us on February 5, 2026, at 6:00 PM ET. Register here: [Register Now](#)

Time is running out – empower yourself and your child now. Don't miss this chance to transform fears into confidence!

Best,
Debbie Elder

PS: Remember, this could change everything for you and your child. Reserve your place today!`,
};

export const PROMO_EMAIL_7 = {
  subject: "It's Tomorrow! Don't Miss Your Chance!",
  sendDate: 'Wednesday, February 4, 2026',
  body: `Dear Parent,

Time is running out! The webinar you've been waiting for, "5 Biggest Fears Parents Face Sending Their Child to College," is just one day away! This is your chance to empower your child for academic success and ensure they thrive in college.

When: February 5, 2026
Time: 6:00 PM ET
Register now: [Join the Webinar](#)

As a parent of a college-bound student, you likely have pressing questions. Is my child really ready for college? How can I ensure they maximize their potential? What steps do I take to facilitate their transition? This LIVE session with me—Debbie Elder—offers direct answers to these challenges.

In our time together, you'll learn:

• Parent perceptions of readiness: Understand what you might be overlooking when assessing your child's preparedness for college and careers.
• Academic willingness: Gain insights on critical academic readiness strategies that go beyond traditional academics.
• Comprehensive preparation: Discover the vital elements of college preparation, including social/emotional aspects and career readiness.
• Concerns addressed: Transition issues and completion worries will be tackled head-on so you can calm your anxieties about sending your kid off to college.

I'm not just another speaker; I'm a GO-TO resource. As an internationally recognized innovator and best-selling author, I have worked with numerous families to navigate the college maze. My unique process has helped countless parents afford college while ensuring their kids are prepared for desirable universities.

Now, it's your turn to gain clarity and take action! Imagine stepping into this next phase of your child's life with confidence. Don't let uncertainty hold you back—join me LIVE tomorrow evening to arm yourself with the knowledge you need!

Secure your spot today: [Register Here](#)

This is more than just a webinar; it's an essential investment in your child's future. I understand that you may hesitate, thinking your student is "already prepared." But even the best students can benefit from additional insights. Don't miss out on this rare opportunity to get personalized advice tailored to your unique situation.

Act now! Your child's success journey begins tomorrow. Register now, and I'll see you there!

Warm regards,
Debbie Elder

P.S. This is the last chance to attend this critical session—don't let it slip away! Click here to register now! [Join the Webinar](#)`,
};

export const PROMO_EMAIL_8 = {
  subject: "It's Happening Today! Get Ready to Empower Your Student",
  sendDate: 'Thursday, February 5, 2026 – Morning',
  body: `Dear Parents,

Today is the day! At 6:00 PM ET, I'll be diving into the 5 Biggest Fears Parents Face Sending Their Child to College in our live webinar. If you've ever felt overwhelmed by the challenges of preparing your child for college, you're not alone—and this session is designed just for you.

Why does this matter? The transition to college can be daunting. Many parents worry about their child's readiness, both academically and emotionally. Today, I'll address those fears head-on and equip you with practical strategies to not only prepare your child for college but also to help them thrive once they get there.

Why Attend Live?
When you join this session, you'll have the opportunity to ask pressing questions in real-time and receive immediate guidance. You'll learn:

• Parent Perceptions: Align your expectations with reality regarding your child's college readiness.
• Academic Preparedness: Discover essential academic skills that influence college success.
• Holistic College Preparation: Understand the non-academic aspects of preparing your child for college, including emotional and social readiness.
• Combatting Common Concerns: Tackle worries about academic value, completion rates, and career prospects effectively.
• Unlocking Potential: Gain insight into ways you can support your child in maximizing their college journey.

With my experience as a consultant for families planning for college, I've seen the transformative results firsthand. This session is your chance to gain invaluable insights that can empower your student to excel.

Join me today at 6:00 PM ET to take your first step toward easing those fears and ensuring your child's future success. Don't let uncertainty hold you back.

[Click here to register and secure your spot now!](#)

I look forward to seeing you there!

Best,
Debbie Elder

P.S. Remember, preparing your child for college isn't just about academics; it's also about fostering their overall well-being. Don't miss this chance to learn how you can make a difference in their future!`,
};

export const PROMO_EMAIL_9 = {
  subject: "Final Call: We're Live in 1 Hour!",
  sendDate: 'Thursday, February 5, 2026 – 1 Hour Before Webinar',
  body: `Dear Parent,

Are you ready to tackle the 5 biggest fears you face about sending your child to college? The clock is ticking, and in just 1 hour, we'll be going live with our transformative webinar, "5 Biggest Fears Parents Face Sending Their Child to College."

This is your last chance to join me and hundreds of other parents who are committed to ensuring their children succeed academically and socially in college. As a parent, it's normal to feel uncertain about how to prepare your child for this next big step.

In this engaging session, you'll discover essential strategies to address these pressing concerns and set your child on a path towards success. Here's what we'll cover:

• Parent perceptions of readiness for college & careers: Understand what it really means for your child to be prepared.
• Academic readiness for college: Learn how to evaluate your child's skills and what gaps may need to be addressed.
• College preparation beyond academics: Explore life skills and social competencies that matter just as much as grades.
• Completion concerns: Gain insights on how to support your child's journey through their college experience and ensure they graduate.
• Career-related concerns: Find out how to align your child's education with their future career possibilities.

I, Debbie Elder, bring decades of experience working with students and families navigating these challenges. As a bestselling author and motivational speaker, I've developed effective strategies to empower students and ensure parents know exactly what they need to do for success.

This is not just a standard presentation; it's a call to action. By joining us today at 6:00 PM ET, you'll arm yourself with the knowledge and tools to transform those fears into confidence.

Don't let doubt hold you back! Click the link below to secure your spot for this crucial event:

👉 [Join the Webinar Now](#)

When the clock strikes 6:00 PM ET, let's go on this journey together to prepare your child for college success and beyond. Make sure you're there live because the insights shared today could be the turning point for your family's future.

Looking forward to seeing you shortly!

Best,
Debbie Elder

P.S. Remember, this is your last opportunity to participate! Click [here](#) to join us now!`,
};

// ── Campaign Blueprint ──────────────────────────────────────────────────────

export const WF000 = {
  id: 'EZ-000',
  name: '[EZ-000] Webinar Promo Email Campaign',
  purpose: 'Pre-registration promotional emails sent to your list to drive webinar sign-ups.',
  sendMethod: 'GHL Email Campaigns (Marketing → Emails) or Workflow with Wait Until Date steps',
  emails: [
    { id: 'EZ-PROMO-01', send: 'Thursday, 01/29/2026',                  subject: PROMO_EMAIL_1.subject },
    { id: 'EZ-PROMO-02', send: 'Friday, 01/30/2026',                    subject: PROMO_EMAIL_2.subject },
    { id: 'EZ-PROMO-03', send: 'Saturday, 01/31/2026',                  subject: PROMO_EMAIL_3.subject },
    { id: 'EZ-PROMO-04', send: 'Sunday, 02/01/2026',                    subject: PROMO_EMAIL_4.subject },
    { id: 'EZ-PROMO-05', send: 'Monday, 02/02/2026',                    subject: PROMO_EMAIL_5.subject },
    { id: 'EZ-PROMO-06', send: 'Tuesday, 02/03/2026',                   subject: PROMO_EMAIL_6.subject },
    { id: 'EZ-PROMO-07', send: 'Wednesday, 02/04/2026',                 subject: PROMO_EMAIL_7.subject },
    { id: 'EZ-PROMO-08', send: 'Thursday, 02/05/2026 – Morning',        subject: PROMO_EMAIL_8.subject },
    { id: 'EZ-PROMO-09', send: 'Thursday, 02/05/2026 – 1 Hour Before',  subject: PROMO_EMAIL_9.subject },
  ],
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-000] Webinar Promo Email Campaign                       ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  METHOD: GHL Email Campaigns (Marketing → Emails)            ║');
  log('║  TARGET: Contacts tagged ez_promo-list                       ║');
  log('║                                                              ║');
  log('║  EZ-PROMO-01  Thu 01/29  T-7  Unlock the 5 Biggest Fears    ║');
  log('║  EZ-PROMO-02  Fri 01/30  T-6  Why Most Parents Struggle      ║');
  log('║  EZ-PROMO-03  Sat 01/31  T-5  Best Preparation for Student   ║');
  log('║  EZ-PROMO-04  Sun 02/01  T-4  Can You Really Empower...      ║');
  log('║  EZ-PROMO-05  Mon 02/02  T-3  You Won\'t Believe What I\'m ... ║');
  log('║  EZ-PROMO-06  Tue 02/03  T-2  48 Hours Left                  ║');
  log('║  EZ-PROMO-07  Wed 02/04  T-1  It\'s Tomorrow!                 ║');
  log('║  EZ-PROMO-08  Thu 02/05  T-0  It\'s Happening Today! (AM)     ║');
  log('║  EZ-PROMO-09  Thu 02/05  T-0  Final Call: Live in 1 Hour!    ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
