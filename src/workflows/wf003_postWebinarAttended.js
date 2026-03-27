/**
 * [EZ-003] Post-Webinar – Attended Workflow Blueprint
 *
 * TRIGGER: Tag Added → ez_webinar-attended
 * (This tag is applied via Zoom webhook when the webinar ends.
 *  Set up a Zoom webhook → GHL Custom Webhook or Zapier/Make to:
 *  1. Check if contact attended (duration > 0 minutes)
 *  2. Add tag: ez_webinar-attended
 *  3. Remove tag: ez_webinar-registered (cleanup)
 *  4. Move pipeline stage to "Attended")
 */

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_REPLAY_ATTENDED = {
  subject: "Here's the Replay!",
  body: `Dear Parents,

Thank you for joining me for the "5 Biggest Fears Parents Face Sending Their Child to College" webinar last night. I appreciate your commitment to ensuring your child's success during this critical transition.

For those of you who couldn't make it or want to revisit the content, I'm excited to share the replay link with you. [Watch the Replay Here!](#targeturl) This session is packed with vital insights aimed at empowering your student for academic success now and college success later. Remember, this valuable replay won't be available forever, so make sure to watch it soon.

Why Did This Webinar Matter?

As parents, the transition to college can be daunting. You want to ensure your child is well-prepared academically, socially, and emotionally. That's why our discussion covered crucial topics like:

• Understanding your child's perceived readiness for college and careers.
• Assessing academic readiness and the essential preparation that goes beyond just grades.
• Addressing concerns related to social and emotional transitions.
• Tackling career-related anxieties that both you and your student may experience.

Your Journey to Empowerment Begins Here

You don't have to navigate this process alone. The key takeaways from our session provided effective strategies and insights into how to guide your child towards a successful college experience. In particular, I urge you to consider participating in my 6-week Virtual College Success Course.

With a total value of $3,497, this course, which includes the College Prep Masterclass Series valued at $2,997, is an investment that could redefine your child's college journey. In just six weeks, you'll learn how to create a smooth transition from high school to college, helping your student set clear collegiate goals and develop a tailored strategy to achieve them.

Take Action Now

Space is limited in this course, and the time to act is NOW! Giving your child the foundation they need for academic and future career success starts with the right knowledge and guidance.

Don't hesitate—[click here to find out more about the course and secure your spot today!](#targeturl)

Together, let's ensure that your child is not only prepared for college but also poised to thrive in their future endeavors.

Best regards,

Debbie Elder

P.S. Watching the replay today could make all the difference! Don't let this opportunity slip away—check it out now!`,
};

export const EMAIL_OFFER_D1 = {
  subject: "Replay + How 6-Week Course Empowers Your Student",
  body: `Dear Parents,

Did you know that nearly 70% of students entering college feel unprepared for the transition? This unsettling statistic highlights the importance of proper preparation for your child as they embark on this incredible journey. If you missed our webinar, 5 Biggest Fears Parents Face Sending Their Child to College, don't worry! The replay is now available, and I encourage you to watch it while you still can.

Our webinar was designed specifically for parents like you—those who want to empower their college-bound students for academic success now and ensure they thrive in college later. We covered essential topics like parent perceptions of readiness, academic performance, and social and emotional transition concerns. As an internationally recognized expert in student motivation, I provided practical strategies that address these fears head-on.

Here are just a few key takeaways from the session:

1. Understanding Readiness: Learn how to gauge your child's readiness for college and careers.
2. Academic Preparation: Discover vital skills and practices that can enhance your student's academic outcomes.
3. Navigating Beyond Academics: Understand the social and emotional elements crucial for a smooth transition.
4. Career-Related Insights: Gain awareness of what's needed to prepare your child for their future career path.
5. Peace of Mind: Explore how proper preparation leads to confidence for both you and your student.

Now that you've seen the value of the webinar, I'd like to offer you the opportunity to enroll in my 6-week Virtual College Success Course. This course is designed for parents eager to ensure their students are not only prepared for college but also ready to succeed. By joining this program, you'll create a strategy to implement collegiate goals with ease and confidence.

The course includes the College Prep Masterclass Series, which is a $2,997 value, entirely focused on helping your child develop self-leadership skills to navigate college life successfully. Combined with the 6-week curriculum, the total value of this offer is $3,497, yet you'll pay only a fraction of that amount.

This offer is not something you'll want to miss, but time is limited, and space is restricted! Check out the course details and grab your spot now before it's too late: [targeturl].

Ensure your child is best prepared for academic success and enjoys a smoother transition to college life. Act now and give yourself the gift of peace of mind!

Best,
Debbie Elder

P.S. Remember, the replay will only be available for a limited time, so don't wait! Watch it now and explore how our course can make a real difference. [replay link]`,
};

export const EMAIL_OFFER_D3 = {
  subject: "Don't Miss Out: Unlock Your Student's True Potential",
  body: `Hi there,

Did you know that over 60% of students feel unprepared for the challenges of college? That statistic is alarming, and it underscores the urgent need for effective college preparation strategies. If you attended our recent webinar, "5 Biggest Fears Parents Face Sending Their Child to College," you already know how critical it is to bridge those gaps.

As we delved into parent perceptions, academic readiness, social and emotional transitions, and career-related concerns, we uncovered insights that can completely transform how your child prepares for this pivotal life stage.

Key insights from the webinar:
1. Understanding Readiness: Learn how to gauge whether your child is truly prepared for the responsibilities of college.
2. Beyond Academics: Discover essential non-academic skills that are just as crucial to college success.
3. Addressing Concerns: Tackle common fears related to value, completion, and emotional readiness head-on.
4. Empowering Your Child: Equip your child with the tools they'll need to excel both academically and socially once they step onto campus.
5. Strategizing for Success: Learn how to create a strategic plan tailored to your child's collegiate goals.

I invite you to watch the replay of the webinar and explore the 6-week Virtual College Success Course at [targeturl]. This course is designed specifically for parents like you, who want to empower their child for academic success now and ensure they thrive throughout their college journey.

Why should you enroll?
• Unlock your child's potential without adding stress.
• Get peace of mind knowing they're fully prepared for academic success and the transition to college.
• Avoid the long learning curves: Learn 100% faster with great retention.
• Our proven strategies will help you define clear collegiate goals and implement plans without the struggle.

With a limited number of spots available, now's the time to act. Don't let hesitation hold your child back from achieving their dreams.

Ready to equip your child for success? Click here to learn more about the course and secure your spot today! [targeturl]

Best,
Debbie Elder

P.S. Remember, preparation is key! Don't wait to give your child the tools they need to succeed. Enroll in the 6-week Virtual College Success Course now!`,
};

export const EMAIL_OFFER_D5 = {
  subject: "Time Is Running Out – Replay & Offer Closing Soon!",
  body: `Dear Parents,

Have you ever worried about how to help your child transition successfully from high school to college? You're not alone. In fact, many parents face significant fears, but the good news is that there's a way to navigate these challenges effectively.

Last week, we held an insightful webinar titled, "5 Biggest Fears Parents Face Sending Their Child to College." The purpose of this event was to expose critical gaps in preparing for your child's transition to college while empowering you with the tools and skills to ensure their academic and emotional success.

Here are some key takeaways that attendees learned:
1. Understanding Readiness: Insight into common parent perceptions about their child's college readiness and how to address them.
2. Academic Preparation Beyond Just Grades: Strategies to prepare your child not just academically, but also socially and emotionally for college life.
3. Navigating Costs and Value: Tackling the critical concerns surrounding college expenses and graduation value.
4. Career Preparedness: Identification of essential career skills that need to be developed prior to college enrollment.
5. Successful Transitions: Practical advice on easing the high school to college transition for both students and parents.

Now, here's the pressing part: The replay of this essential webinar is available, but only for a limited time, and so is my exclusive offer for the 6-week Virtual College Success Course. This course can help you empower your student for academic success now and build strategies that yield college success later.

Imagine having the peace of mind knowing your child is fully prepared for their academic journey. With this course, you can help make their transition smoother, set clear collegiate goals, and implement actionable strategies without the stress of uncertainty.

By taking action today, you can learn 100% faster with excellent comprehension and retention, while eliminating the worries that often accompany the path to college. But don't delay; this exclusive offer is set to expire tomorrow, Monday, 02/09/2026.

The value of this offer is substantial:
• The College Prep Masterclass Series valued at $2,997.00.
• All included in the 6-week Virtual College Success Course.

Spaces are limited, and this opportunity will not be available again soon.

Don't let this chance pass you by. Click [here](targeturl) to watch the webinar replay and secure your spot in the course. Equip your child for not just academic achievement, but a fulfilling college experience.

Wishing you and your student all the best!

Warm regards,

Debbie Elder

P.S. Remember, time is running out! Make sure to take advantage of this unique opportunity before it's too late!`,
};

export const EMAIL_URGENCY = {
  subject: "Last Call - Replay and Offer Closing Today!",
  body: `Dear [Recipient's Name],

Have you been feeling the weight of uncertainty about your child's transition to college? If so, you're not alone. Many parents like you grapple with critical questions about academic readiness and college preparation—questions that can significantly impact your child's future.

This is your last chance to watch the replay of my webinar, 5 Biggest Fears Parents Face Sending Their Child to College, held on February 5, 2026, at 6:00 PM ET. In this insightful session, we explored the vital concerns that many families overlook when preparing their college-bound students. Understanding these issues is fundamental to ensuring your child not only gets into college but thrives once they are there.

Here are a few key takeaways from the webinar:
1. Parent perceptions of readiness: Understand how parents view their child's preparedness, and what that means for success.
2. Social/emotional transition concerns: Recognize the challenges students face adapting to a college environment and how to support them.
3. Career-related concerns: Explore the importance of aligning your child's education with career aspirations to enhance their job opportunities after graduation.

Now, here's the kicker—time is running out! Don't miss the opportunity to unlock your child's potential with the 6-week Virtual College Success Course. This comprehensive program addresses precisely what you need to know to prepare your student for college. It includes:

• The College Prep Masterclass Series valued at $2,997.00, designed to equip your student with self-leadership skills, ensuring they navigate their college experience successfully.

• Strategies to make the transition to college smoother and create clear collegiate goals for your child.

The total value of this offer is $3,497.00, but it's available to you at a limited promotional price. Remember, this offer closes tonight at midnight, Monday, February 9, 2026. Spaces are limited, so act quickly!

As an internationally recognized expert in motivating students, my guidance can be the difference maker in your child's college journey. Don't let this opportunity pass by; give your child the best possible start in life.

Take action now: [Watch the Replay and Learn More About the Course](targeturl).

To your child's success,
Debbie Elder

P.S. Remember, this is your final call! Secure your place today to ensure your student's academic success and emotional well-being in college. 🌟`,
};

export const EMAIL_LAST_CHANCE = {
  subject: "Last Chance: Course Offer Ends Tonight!",
  body: `Dear [Recipient's Name],

This is it! If you're still on the fence about empowering your child's college success, tonight is your last opportunity to join the 6-week Virtual College Success Course.

You attended the webinar "5 Biggest Fears Parents Face Sending Their Child to College" led by me, Debbie Elder, and now it's time to take action. During the session, we uncovered critical gaps parents often face in planning for their child's college transition and dug into vital skills to boost your student's academic success. But the clock is ticking!

Why does this matter? The stakes are high. Parents like you want assurance that your child will have the best possible preparation for not just getting into college but thriving once they're there. With the right guidance, your student can make a smooth transition from high school to college, achieve their academic and personal goals, and secure their dream job.

Here's what we covered in the webinar:

1. Academic Readiness: Understanding what college expects from your child academically.
2. Social and Emotional Preparation: Tips to support your child's emotional transition.
3. Career-Related Concerns: How to help your student choose the right path that aligns with their aspirations.
4. Navigating Financial Considerations: Strategies to afford college without overwhelming debt.
5. Unlocking Your Child's Potential: Practical tools to inspire motivation and self-leadership.

Special Offer: Sign up for the 6-week Virtual College Success Course before midnight tonight! This exclusive program includes the College Prep Masterclass Series—a $2,997.00 value—along with the course itself, totaling $3,497.00 in invaluable benefits for both you and your child.

By enrolling, you will:
• Gain the knowledge to help your child succeed academically and socially.
• Conquer the fears and uncertainties surrounding the college journey.
• Develop actionable goals and a step-by-step strategy tailored for your student's needs.

Don't let this chance slip away! Empower your child with the tools they need for success. Click here for more information on how to register, and watch the replay of the webinar if you missed any details.

Act now! The hard deadline for this offer is tonight at midnight, February 9, 2026. Space is limited, and I promise you—the peace of mind you'll gain knowing your student is best prepared for college is worth it.

Best,
Debbie Elder

P.S. This is your final reminder—don't wait! Take the next step towards a successful college journey for your child.`,
};

// ── SMS Copy ───────────────────────────────────────────────────────────────

export const SMS_OFFER_D1 = {
  body: `{{contact.firstName}}, special offer for webinar attendees 🎁 Check your email or grab it here: [OFFER LINK] – STOP to opt out.`,
};

export const SMS_OFFER_D5 = {
  body: `{{contact.firstName}}, offer for [COURSE NAME] closes [DATE]. Don't miss it 👉 [OFFER LINK] – STOP to opt out.`,
};

export const SMS_LAST_CHANCE = {
  body: `LAST CHANCE {{contact.firstName}}! Offer closes TODAY 🚪 [OFFER LINK] – STOP to opt out.`,
};

export const WF003 = {
  id: 'EZ-003',
  name: '[EZ-003] Post-Webinar – Attended',
  trigger: {
    type: 'Tag Added',
    tag: 'ez_webinar-attended',
  },
  steps: [
    // ── Immediate (within 1 hour after webinar) ────────────────────────────
    {
      step: 1,
      action: 'Move Opportunity Stage',
      pipeline: '[EZ-006] Webinar Pipeline',
      stage: 'Attended',
    },
    {
      step: 2,
      action: 'Remove Tag',
      value: 'ez_webinar-registered',
    },
    {
      step: 3,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-05] Replay + Thank You (Attended)',
      body: EMAIL_REPLAY_ATTENDED,
    },

    // ── Day 1 After: Offer Intro ───────────────────────────────────────────
    {
      step: 4,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 5,
      action: 'Add Tag',
      value: 'ez_webinar-offer-sent',
    },
    {
      step: 6,
      action: 'Move Opportunity Stage',
      pipeline: '[EZ-006] Webinar Pipeline',
      stage: 'Offer Sent',
    },
    {
      step: 7,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-06] Offer Day 1 (Attended)',
      body: EMAIL_OFFER_D1,
    },
    {
      step: 8,
      action: 'Send SMS',
      templateName: '[EZ-SMS-05] Offer Day 1 (Attended)',
      body: SMS_OFFER_D1,
    },

    // ── Day 2 After: FAQ / Unlock Potential ────────────────────────────────
    {
      step: 9,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 10,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-07] Offer Day 2 (Attended)',
      body: EMAIL_OFFER_D3,
    },

    // ── Day 3 After: Urgency / Offer Closing Soon ──────────────────────────
    {
      step: 11,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 12,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-08] Offer Day 3 (Attended)',
      body: EMAIL_OFFER_D5,
    },
    {
      step: 13,
      action: 'Send SMS',
      templateName: '[EZ-SMS-06] Offer Day 3 (Attended)',
      body: SMS_OFFER_D5,
    },

    // ── Day 4 Morning: Last Call ───────────────────────────────────────────
    {
      step: 14,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 15,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-09] Last Call – Morning',
      body: EMAIL_URGENCY,
    },

    // ── Day 4 Evening: Final Chance (same day, ~8 hours later) ────────────
    {
      step: 16,
      action: 'Wait',
      duration: '8 hours',
    },
    {
      step: 17,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-10] Last Chance – Evening',
      body: EMAIL_LAST_CHANCE,
    },
    {
      step: 18,
      action: 'Send SMS',
      templateName: '[EZ-SMS-07] Last Chance',
      body: SMS_LAST_CHANCE,
    },
  ],
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-003] Post-Webinar – Attended                            ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  TRIGGER: Tag Added → ez_webinar-attended                    ║');
  log('║                                                              ║');
  log('║  Immediate:                                                  ║');
  log('║    Step 1 → Move Stage: Attended                            ║');
  log('║    Step 2 → Remove Tag: ez_webinar-registered               ║');
  log('║    Step 3 → Email: [EZ-EMAIL-05] Replay + Thank You         ║');
  log('║  +24h: Day 1 Offer                                          ║');
  log('║    Step 4 → Wait 24h                                        ║');
  log('║    Step 5 → Add Tag: ez_webinar-offer-sent                  ║');
  log('║    Step 6 → Move Stage: Offer Sent                         ║');
  log('║    Step 7 → Email: [EZ-EMAIL-06] Offer Day 1               ║');
  log('║    Step 8 → SMS:   [EZ-SMS-05]   Offer Day 1               ║');
  log('║  +24h: Day 2 FAQ / Unlock Potential                         ║');
  log('║    Step 9 → Wait 24h                                        ║');
  log('║    Step 10→ Email: [EZ-EMAIL-07] Offer Day 2               ║');
  log('║  +24h: Day 3 Urgency / Offer Closing Soon                   ║');
  log('║    Step 11→ Wait 24h                                        ║');
  log('║    Step 12→ Email: [EZ-EMAIL-08] Offer Day 3               ║');
  log('║    Step 13→ SMS:   [EZ-SMS-06]   Offer Day 3               ║');
  log('║  +24h: Day 4 Morning – Last Call                            ║');
  log('║    Step 14→ Wait 24h                                        ║');
  log('║    Step 15→ Email: [EZ-EMAIL-09] Last Call Morning         ║');
  log('║  +8h:  Day 4 Evening – Final Chance                         ║');
  log('║    Step 16→ Wait 8h                                         ║');
  log('║    Step 17→ Email: [EZ-EMAIL-10] Last Chance Evening       ║');
  log('║    Step 18→ SMS:   [EZ-SMS-07]   Last Chance               ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
