// Importing testimonial images
import anlo from "../assets/img/testimonials/anlo_logo.png";
import mac from "../assets/img/testimonials/MAC.jpg";

/**
 * Testimonials data
 * @type {Array<Object>}
 * @property {string} name - The name of the person giving the testimonial.
 * @property {string} title - The title or position of the person.
 * @property {string} image - The image URL of the person.
 * @property {string} feedback - The feedback text provided by the person.
 * @property {boolean} hasReadMore - Indicates if there is more detailed feedback available.
 * @property {string} [details] - The detailed feedback text, if available.
 */
const testimonials = [
  {
    name: "Annja",
    title: "CEO & Founder",
    image: anlo,
    feedback: `Byte Size has delivered an application that has rapidly become an invaluable part of how we operate, and they have done so at a highly competitive cost to the business. They understood our frustration with the output from Harvest and developed an innovative solution.`,
    hasReadMore: true,
    details: `[center]Byte Size - Making Things Better\n
  [bolditalic]Hello everyone!\n
  
  [newline]I thought it would be nice to write about something other than tax and year-ends. Yes, they’re important, and yes, I’ll continue to write about them, but a change, they say, is as good as a rest.\n
  
  [newline](Personally, I’m not sure about that, but whatevs…)\n
  
  [newline]As thoroughly modern accountants we have wholeheartedly embraced technology, you may have noticed this! In addition to our client-facing systems we use technology ourselves to stay on top of our business.\n
  
  [newline]However, one of the problems with technology is that it doesn’t always do what you want, or if it does, it doesn’t do what you want, in a way that you want it to do it!\n
  
  [bolditalic]So, what do you do?\n
  
  [newline]I’m deeply fortunate to know Madhu Balasubramanian of Byte Size IT Solutions and the solution to my problems started due to a casual conversation.\n
  
  [newline]Madhu and I had a chat one day about him wanting to help small businesses build an IT solution for a problem that they have. But SMEs don’t want to pay a fortune for a custom-built IT solution, they need big business solutions for small business budgets.\n
  
  [newline]I explained that our problem at the moment is we record all hour hours spent on all clients on a program called Harvest, but to analyse the data takes hours, and we don’t do it because:\n
  
  [newline]\n
  [bullet]We don’t have time\n
  [bullet]It takes to long to analyse the info currently – and by then we can’t correct the mistake or take action because weeks or months have already passed\n
  [bullet]And clients usually don’t understand what we are trying to send them (usually an excel sheet with loads of data on)\n
  [bolditalic]We have two types of clients:\n
  
  [newline]
  1. Retainers – we have agreed a set number of hours per month
  2. Per hour billing\n
  [newline]The per hour billing clients are simple - we just invoice them for the hours worked.\n
  
  [newline]However, our retainer clients, who are the majority of our clients, have agreed hours but we couldn’t track if we were over or under each month.\n
  
  [newline]As a result, we were never certain if we were spending too much, or too little time on their affairs, and this has a knock-on effect on the profitability of ANLO because:\n
  
  [newline]
  [bullet]We could be losing valuable hours\n
  [bullet]We could have charged for time overspent that was outside of our control or scope\n
  [bullet]We did not have accurate date with which to renegotiate our contracts\n
  [bullet]We also could not see if we were not doing what we contracted to do
  [newline]Madhu looked into it for us and built a really easy to navigate solution with month on month graphs showing exactly how much time was spent per client per month versus the agreed hours.\n
  
  [newline]Since 2021 when we rolled the dashboard out, we have made numerous decisions based on this very valuable solution. For instance:\n
  
  [newline]
  [bullet]Staff utilization Capacity.\n 
  [bullet]Can we take on more clients and still deliver?\n
  [bullet]Staff efficiency\n
  [bullet]Client profitability\n
  Early warning of client problems, such as a drop off in the amount of work we’re doing for them\n
  [newline]As you know, we have always told you that knowing and understanding your business figures allows you to make better business decisions, well, this is the same for us, just focused on a different aspect of our business, and it’s a game changer.\n
  
  [newline]Since the initial rollout, Madhu has split the solution between our two businesses allowing us to compare and contrast the activities of the two entities.\n
  
  [newline]I’m going to let Madhu explain in his own words exactly what he did for us.\n
  
  [bolditalic]Madhu\n
  [newline]"I wanted to help small businesses overcome issues or improve efficiency using simple IT solutions I had perfected over 15 years in the industry. I was looking to use Low Code platforms to create a solution to suit a business need, but keep the cost of ownership and maintenance similar to that of a general purpose SaaS solution.\n
  
  [newline]So, the story…\n
  
  [newline]Annja's son and mine had a playdate. When I went to pick him up, I asked Annja if she experienced difficulties or frustrations with some systems which aren’t quite doing what you need.\n
  
  [newline]Time for a meeting!\n
  
  [newline]During our meeting, Annja explained how her team is using the Harvest system to log their time spent on helping various clients of Anlo.\n
  
  [newline]Though the team is meticulously logging time spent, Annja had very little to no visibility over how much time is being spent for each client against agreed tasks Vs ad-hoc tasks.\n
  
  [newline]Annja had to spend too much time pulling reports out of Harvest into Excel and then spend more time deciphering the results which aren’t terribly user-friendly. Annja would love to have this information available on demand.\n
  
  [newline]I suggested creating a dashboard system that will allow Annja and team to store the agreed retainer hours for each client and view the comparison of agreed hours vs spent hours as a graph.\n
  
  [newline]To ensure the concept discussed was well understood by me, I created this comparison data in Excel based on data extracted from Harvest. Annja and team used this Excel data while their dashboard was being built.\n
  
  [newline]I embarked on selecting a suitable low code platform to build the dashboard. I initially created the dashboard using a popular tool called Mendix. This pulled data from Harvest using the Harvest API and created the graph in Mendix.\n
  
  [newline]Demonstrated this solution to Annja and she loved it! We wanted to take this dashboard solution live.\n
  
  [newline]Then - we hit a snag, Mendix wanted a minimum 50 user licence and payment for 1 year upfront. I was able to negotiate to bring the number of users to 5, however they still wanted the payment for 12 months upfront. While it was not a huge amount, I was not keen on paying 12 months upfront.\n
  
  [newline]Back to square 1, I started looking for an alternate option for developing the dashboard for Annja. After searching, I got in touch with a friend in my network who was creating a low code platform called Palmyra.\n
  
  [newline]Palmyra allowed us to create the dashboard and host it ourselves in the cloud.\n
  
  [newline]That hurdle overcome; we were able to launch the ANLO Dashboard shortly thereafter.\n
  
  [newline]After a period of real-time use, the team requested some enhancements. We were able to deliver these quickly and cleanly.\n
  
  [newline]After a few months, the ANLO team wanted to have a separate dashboard for their UK entity. We provisioned this in the cloud. Now ANLO team uses these 2 dashboards to get visibility on how much time they are spending for their clients and help them visualise when to revise a client contact based on utilisation."\n
  
  [bolditalic]Annja:\n
  Madhu’s skill delivered an application that has rapidly become an invaluable part of how we operate, and he’s done so at a highly competitive cost to the business. He understood my frustration with the output from Harvest and developed an innovative solution.\n
  
  [newline]But - I wasn’t done with him - not by a long shot!\n
  
  [bolditalic]AnloAssist\n
  This was another idea over coffee - coffee has a lot to answer for!\n
  
  [newline]I said that one of my biggest time guzzlers is clients asking for an hour of my time to explain to them if they are tax resident in the UK or not.\n
  
  [newline]I explained to Madhu that very often they are not, and therefore had no further need of my expertise, but I was still losing hours of my time explaining simple concepts to people that they could probably find on HMRC’s website.\n
  
  [newline]Sadly, HMRC’s website isn’t terribly intuitive which is why they get in touch with me; partly because of my awesome skills and partly because I’ve had to go through all this myself!\n
  
  [newline]Wouldn’t it be useful if we could automate this?\n
  
  [newline]So, I made a mind map on a large A2 paper, photographed it and sent it to Madhu, who proceeded to write the application we now call AnloAssist.\n
  
  [newline]He also does yearly updates, monitors usage and sends us feedback.\n
  
  [newline]Obviously, Madhu is going to explain all of this much better than I did (including all the important stuff I left out!)\n
  
  [bolditalic]Madhu\n
  Project 2 - ANLO Assist
  "Annja called me and mentioned the Scottish Government Digital Grant. It's a scheme that provides a grant (part funding) to businesses to develop or improve their IT solutions.\n
  
  [newline]Annja wanted to develop a Q&A web wizard to help people assess if they were tax resident in the UK or not.\n
  
  [newline]Based on high level requirements, I provided a breakdown of work with associated cost. Annja applied for the grant, and we waited…\n
  
  [newline]Then we waited a bit more…\n
  
  [newline]Once we got the approval, we went into a detailed requirement phase. Annja did a flow chart and provided it to me. This solution couldn't be created using a low-code solution, so I created this solution based on requirement and delivered it to Anlo.\n
  
  [newline]Anlo Assist was launched with a revamped design and logo. Since Launch Anlo Assist has been used by several hundred users."\n
  
  [bolditalic]Annja\n
  To sum up, Madhu has delivered two key IT solutions to ANLO, both of which have had a demonstrably positive impact on our business. That’s what you expect IT to deliver, but as we all know, it sometimes doesn’t quite work out like that!\n
  
  [newline]Apart from his obvious knowledge, what made Madhu so effective when working with us was his ability to grasp the core of what we needed to achieve and then develop a solution which addressed that.\n
  
  [newline]This was in marked contrast to an off-the-shelf solution where there are always compromises. Indeed, the Dashboard project was to overcome exactly that sort of infuriating compromise.\n
  
  [newline]I honestly cannot sing his praises highly enough - as far as I, and ANLO, are concerned he exactly met his goal of providing big business solutions for small business budgets.\n
  
  [newline]Cost shouldn’t be everything, but it really matters - I doubt there is a business owner out there who would disagree. So, if like me, you know there has to be a better way to do what you do, but don’t know quite how - speak to Madhu!"
  `,
  },
  {
    name: "Muthu",
    title: "Founder & Director",
    image: mac,
    feedback: `Partnering with Byte Size IT Solutions was a game changer for us. Their innovative solutions have streamlined our operations and lifted a significant burden off our shoulders. The customized tool they developed has transformed how we manage our inventory and finances. Byte Size’s expertise and commitment stand out, making a substantial impact on our business’s growth trajectory. They truly offer big business solutions for small business budgets`,
    hasReadMore: false,
  },
];

export default testimonials;
