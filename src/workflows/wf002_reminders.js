/**
 * [EZ-002] Webinar Reminder Sequence Workflow Blueprint
 *
 * TRIGGER: Tag Added → ez_webinar-registered
 * (Runs immediately after EZ-001 tags the contact)
 *
 * Build in GHL → Automations → Workflows → + New Workflow
 */

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_3_DAYS = {
  subject: "You Signed Up for 5 Biggest Fears Parents Face Sending Their Child to College – Here's Why You Don't Want to Miss It!",
  body: `Dear [Recipient's Name],

Time flies, and as the date approaches, it's essential to remember why you signed up for the upcoming webinar: "5 Biggest Fears Parents Face Sending Their Child to College." This isn't just another online event; it's a game-changer for parents like you who are navigating the complexities of preparing their teens for college.

Here's what you can look forward to on February 5, 2026, at 6:00 PM ET:

• Identify key gaps: Learn about the critical gaps in addressing your child's transition to college.
• Empower your student: Discover powerful learning skills that set the stage for academic success now and in the future.
• Unlock potential: Equip yourself with strategies to ensure your child gets the most out of their college experience.

As a parent of a college-bound high school student, you may be feeling these pressing concerns:

• Is my child ready for college and a career?
• What steps should I take beyond academics to prepare them?
• How can I alleviate my worries about costs, social-emotional readiness, and their future careers?

All of these questions will be answered during the webinar, tailored specifically for parents seeking to empower their children.

Your presenter, Debbie Elder, is an internationally recognized innovator and best-selling author who motivates students to reach their peak performance. With her extensive background in consulting families through the college planning process, she has equipped numerous parents and students for a successful transition to college. You won't want to miss her insights.

Key takeaways include:

• Understanding the parent perceptions of readiness for college and careers.
• Addressing academic readiness and college preparation beyond just academics.
• Navigating concerns related to social/emotional transitions and career readiness.

Remember, investing just one hour can lead you toward peace of mind about your student's future. Clear your calendar, remove any distractions, and commit to attending this transformative event.

Join us live! Click the link below to access the webinar:
[Register Here](#)

Looking forward to seeing you there!

Best,
Debbie Elder

P.S. Take action now! Secure your spot so you don't miss out on essential insights that could shape your child's academic future.`,
};

export const EMAIL_2_DAYS = {
  subject: "Unlock Your Child's College Success!",
  body: `Dear [Registrant's Name],

Are you worried about your child's transition to college? You're not alone. Many parents share the same concerns, but attending our upcoming webinar, "5 Biggest Fears Parents Face Sending Their Child to College," can provide you with game-changing insights.

Join us live on February 5, 2026, at 6:00 PM ET. This webinar, hosted by me, Debbie Elder, is an essential resource for parents of college-bound high school students like you. We'll dive deep into the critical gaps often overlooked during the transition to college and arm you with the tools and knowledge to help your child thrive.

Here's why showing up live is crucial:

1. Direct Access to Expert Advice: You'll get real-time guidance from my years of experience as an internationally recognized coach and consultant in college readiness. I understand the frustrations and challenges you face, and I'm here to help you navigate them effectively.

2. Actionable Strategies: This isn't just theory; I'll provide you with practical steps you can implement immediately to prepare your student for academic success now and a fulfilling college experience later.

3. Understanding Readiness: We'll cover essential insights into how to assess your child's academic and emotional readiness for college, giving you clarity on where they stand and what needs attention.

4. Communication Skills: Discover how to discuss college expectations with your child in a way that fosters open communication and reduces anxiety for both of you.

5. Networking with Other Parents: By attending live, you'll have the opportunity to hear from other parents navigating the same journey. Share experiences, ask questions, and gain support from those in a similar situation.

Your child's future is too important to leave to chance. The knowledge and strategies shared during this webinar could be the key to unlocking their potential and ensuring they take the right steps towards an ideal college experience.

Don't let this opportunity slip away! Register to attend: [Join the Webinar](https://www.webinarlink.com) and secure your spot today. I'm looking forward to seeing you live — it's your chance to get the clarity you need to tackle college preparation head-on.

Best,

Debbie Elder

P.S. If you truly want to empower your student and give them the best chance at college success, you cannot afford to miss this live session. Register now!`,
};

export const EMAIL_1_DAY = {
  subject: "Tomorrow's the Big Day! Here's Why You Need to Show Up",
  body: `Hi there,

Tomorrow is the day you've been waiting for! If you want to empower your child for both academic and college success, you need to be present for our webinar: "5 Biggest Fears Parents Face Sending Their Child to College."

Date: February 5, 2026
Time: 6:00 PM ET

Why attend live? The #1 reason is simple: direct access to actionable insights. By tuning in live, you'll have the opportunity to get answers to your pressing questions and hear exclusive content that's only discussed in the moment. This is your chance to unlock valuable strategies that can lead your student to academic success now, ultimately paving the way for their future career.

Let's take a closer look at what you can gain from this webinar:

1. Understand Readiness: We'll explore parent perceptions around college readiness and what that really means. Gain clarity on how you can effectively assess your child's preparedness.

2. Academic Excellence: Discover essential learning skills that empower students to excel in their studies, ensuring they make the most of their college experience.

3. Holistic Preparation: College preparation goes beyond academics. Learn how social, emotional, and career-related concerns play a role in your child's transition, and what you can do to support them through it.

4. Addressing Concerns: Dive deep into common worries, from academic values to completion rates, and understand how you can mitigate these fears effectively.

5. Expert Guidance: Benefit from my background as a seasoned consultant, author, and motivational speaker. I'll share proven strategies tailored specifically for parents like you.

Your participation can make a difference. You owe it to your child to empower them to not only get into college but thrive while they're there. Join me live so you can ask questions, gain insights, and feel confident that you are doing everything in your power to prepare your child for success.

Don't miss out!
Join us live by clicking this link: [Join Webinar](#)

Looking forward to seeing you tomorrow!

Best,
Debbie Elder

P.S. Remember, being live means not just gaining wisdom but also connecting with a community of parents who share your concerns. Together, we can tackle the challenges ahead!`,
};

export const EMAIL_1_HOUR = {
  subject: "1 Hour to Go! Drop Everything and Show Up!",
  body: `Dear Parent,

This is your final reminder! In just one hour, we'll dive into the 5 Biggest Fears Parents Face Sending Their Child to College. Don't miss out on vital insights that can shape your child's college experience!

Why should you be here? As a parent of a college-bound high school student, you deserve to tackle the crucial concerns surrounding academic readiness, emotional transition, and career preparation head-on. This isn't just another webinar—it's a pathway to empowering your child for academic success now and thriving in college later.

Here's what you'll discover with me, Debbie Elder:
1. Current Parent Concerns: Understand common perceptions of readiness for college and careers.
2. Academic Preparedness: Learn what truly prepares your student for college-level work.
3. Holistic College Prep: Discover strategies that go beyond academics to ensure a smooth transition.
4. Value and Completion: Tackle questions around the true cost versus the value of college education.
5. Social/Emotional Readiness: Equip yourself with tools to support your child's emotional journey to college.

With years of experience as a consultant and educator, I'll share proven strategies that have empowered countless families. This is your moment—turn off your phone, silence social media, and get ready for insights that could define your child's future.

Join us TONIGHT at 6:00 PM ET. Use this link to attend: [Join Webinar Now!](#)

Don't let hesitation hold you back. Your child's college success is on the line, and this webinar will take you a step closer to achieving that dream!

See you shortly!

Best,
Debbie Elder

P.S. Remember, it's just an hour away. Prepare to take notes!`,
};

// ── SMS Copy ───────────────────────────────────────────────────────────────

export const SMS_1_DAY = {
  body: `Hey {{contact.firstName}}! Webinar tomorrow – {{custom.ez_webinar_date}}. Your link: {{custom.ez_zoom_join_link}} – STOP to unsubscribe.`,
};

export const SMS_1_HOUR = {
  body: `{{contact.firstName}}, we go LIVE in 1 hour! Join here: {{custom.ez_zoom_join_link}} – STOP to unsubscribe.`,
};

export const SMS_15_MIN = {
  body: `{{contact.firstName}}, we're LIVE in 15 minutes! Don't miss it 👉 {{custom.ez_zoom_join_link}}`,
};

export const WF002 = {
  id: 'EZ-002',
  name: '[EZ-002] Webinar Reminder Sequence',
  trigger: {
    type: 'Tag Added',
    tag: 'ez_webinar-registered',
  },
  steps: [
    // ── 3 Days Before ───────────────────────────────────────────────────────
    {
      step: 1,
      action: 'Wait',
      waitUntil: '3 days before [EZ-008] Webinar Date at 10:00 AM (contact time zone)',
      note: 'Use "Wait until date" and reference the custom field [EZ-008] Webinar Date, subtract 3 days',
    },
    {
      step: 2,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-02] 3 Days Before Reminder',
      body: EMAIL_3_DAYS,
    },

    // ── 2 Days Before ───────────────────────────────────────────────────────
    {
      step: 3,
      action: 'Wait',
      waitUntil: '2 days before [EZ-008] Webinar Date at 9:00 AM',
    },
    {
      step: 4,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-02B] 2 Days Before Reminder',
      body: EMAIL_2_DAYS,
    },

    // ── 1 Day Before ────────────────────────────────────────────────────────
    {
      step: 5,
      action: 'Wait',
      waitUntil: '1 day before [EZ-008] Webinar Date at 9:00 AM',
    },
    {
      step: 6,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-03] 1 Day Before Reminder',
      body: EMAIL_1_DAY,
    },
    {
      step: 7,
      action: 'Send SMS',
      templateName: '[EZ-SMS-02] 1 Day Before Reminder',
      body: SMS_1_DAY,
    },

    // ── 1 Hour Before ───────────────────────────────────────────────────────
    {
      step: 8,
      action: 'Wait',
      waitUntil: '1 hour before [EZ-008] Webinar Date',
    },
    {
      step: 9,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-04] 1 Hour Before Reminder',
      body: EMAIL_1_HOUR,
    },
    {
      step: 10,
      action: 'Send SMS',
      templateName: '[EZ-SMS-03] 1 Hour Before Reminder',
      body: SMS_1_HOUR,
    },

    // ── 15 Minutes Before ───────────────────────────────────────────────────
    {
      step: 11,
      action: 'Wait',
      waitUntil: '45 minutes after previous wait (15 min before webinar)',
    },
    {
      step: 12,
      action: 'Send SMS',
      templateName: '[EZ-SMS-04] 15 Minutes Before',
      body: SMS_15_MIN,
    },
  ],
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-002] Webinar Reminder Sequence                          ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  TRIGGER: Tag Added → ez_webinar-registered                  ║');
  log('║                                                              ║');
  log('║  Step 1  → Wait until 3 days before [EZ-008] Webinar Date   ║');
  log('║  Step 2  → Email: [EZ-EMAIL-02] 3 Days Before               ║');
  log('║  Step 3  → Wait until 2 days before Webinar Date            ║');
  log('║  Step 4  → Email: [EZ-EMAIL-02B] 2 Days Before              ║');
  log('║  Step 5  → Wait until 1 day before Webinar Date             ║');
  log('║  Step 6  → Email: [EZ-EMAIL-03] 1 Day Before                ║');
  log('║  Step 7  → SMS:   [EZ-SMS-02]   1 Day Before                ║');
  log('║  Step 8  → Wait until 1 hour before Webinar Date            ║');
  log('║  Step 9  → Email: [EZ-EMAIL-04] 1 Hour Before               ║');
  log('║  Step 10 → SMS:   [EZ-SMS-03]   1 Hour Before               ║');
  log('║  Step 11 → Wait 45 minutes (= 15 min before webinar)        ║');
  log('║  Step 12 → SMS:   [EZ-SMS-04]   15 Minutes Before           ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
