function setLang(lang){
document.documentElement.lang=lang;
document.getElementById('ltBtn').classList.toggle('active',lang==='lt');
document.getElementById('enBtn').classList.toggle('active',lang==='en');
if(lang==='lt'){location.hash='lt';location.reload();return}
location.hash='en';
const q=(s)=>document.querySelector(s), qa=(s)=>document.querySelectorAll(s);

const nav=qa('.menu a');
['Work','About','Skills','Contact'].forEach((x,i)=>nav[i].textContent=x);
q('nav .btn').textContent='CONTACT ↗';

q('.hero h1').textContent='Content that gets attention — and has a purpose.';
q('.hero .red').textContent='VIEW MY WORK ↓';

const about=q('#apie');
about.querySelector('.eyebrow').textContent='About';
about.querySelector('h2').textContent='Content Creator & Digital Marketing Specialist';
about.querySelectorAll('.case')[0].textContent='I create short-form content and work across social media and digital marketing. My focus is turning ideas into content that captures attention while supporting a clear marketing goal.';
about.querySelectorAll('.case')[1].textContent='I have hands-on experience creating Reels and long-form video — from concepts and scripts to filming, editing, copy and publishing. I also work with audience research, content strategy, Shopify, e-commerce content and Meta Ads.';
about.querySelectorAll('.case')[2].textContent='My approach is simple: understand the audience and the objective first, then create content that is visually strong, relevant and built for the platform.';

const d=q('#darbai');
d.querySelector('.eyebrow').textContent='Personal project';
d.querySelector('h2').textContent='Automotive Content';
d.querySelector('.project-copy .eyebrow').textContent='Concept · Filming · Editing · Reels · Social Media';
d.querySelector('.project-copy h3').textContent='Short-form content built around strong ideas.';
d.querySelector('.project-copy p').textContent='I create automotive content from concept to final Reel — developing ideas, filming, editing, writing hooks and captions, and adapting content for Social Media. The focus is on creating videos that feel native to the platform, hold attention and have the potential to reach a wide audience.';
d.querySelector('.project-copy .red').textContent='WATCH REEL ↗';

const cards=qa('.card');
cards[0].querySelector('.eyebrow').textContent='Heetrood · Social Media Growth';
cards[0].querySelector('h3').textContent='Heetrood';
cards[0].querySelector('p').innerHTML='The Heetrood account started from <strong>0</strong>. I analysed the automotive community and target audience, including interests, behaviour and content needs, then developed a content direction and created and published content around those insights. In <strong>2 months</strong>, the account grew from <strong>0 to 4,628 followers</strong>.';
cards[0].querySelectorAll('.metric span').forEach((x,i)=>x.textContent=i<3?'Watch Reel ↗':(i===3?'followers':'audience growth'));

cards[1].querySelector('.eyebrow').textContent='2Kite · Advertising Project';
cards[1].querySelector('h3').textContent='Advertising Video';
const kp=cards[1].querySelectorAll('p');
kp[0].textContent='A private client project developed from the initial idea to the final advertising video. The target was a young audience, so I considered its Instagram behaviour, interests and content consumption habits when shaping the concept.';
kp[1].textContent='I developed the creative idea, wrote the script and copy, filmed the content and handled the editing. The video structure, pacing and communication style were designed to keep attention while scrolling Social Media.';
kp[2].innerHTML='The final video was adapted for Social Media and the collaboration continued afterwards with filming, video editing and copywriting. That season, the campaign helped attract <strong>23 new students and people interested in learning kitesurfing</strong>.';
cards[1].querySelector('.metric span').textContent='Watch Reel ↗';

const sections=qa('section');
const ec=[...sections].find(x=>x.querySelector('h2')&&x.querySelector('h2').textContent.includes('E-commerce'));
ec.querySelector('.eyebrow').textContent='E-commerce · Shopify · Meta Ads · Social Media';
ec.querySelector('h2').textContent='E-commerce Marketing & Social Media';
const ep=ec.querySelectorAll('.case');
ep[0].innerHTML='<strong>E-commerce</strong> — I worked across marketing strategy, audience understanding and content production: selecting the visual direction, creating Reels, filming, editing, writing scripts and copy, photographing products, writing product descriptions and managing content across Instagram and Facebook.';
ep[1].innerHTML='I also worked with <strong>Shopify</strong> store management, product presentation and Meta Ads. The content was created not only for reach, but to attract potential customers and support brand growth. Around <strong>16%</strong> of the content audience consisted of potential customers.';
ep[2].innerHTML='During the analysed period, the content generated <strong>171.7M</strong> views and reached <strong>46.9M</strong> people — showing how consistent social content can contribute to both visibility and business growth.';
ec.querySelectorAll('.metric span').forEach((x,i)=>x.textContent=['views','people reached','interactions','Instagram views'][i]);

const yt=[...sections].find(x=>x.querySelector('h2')&&x.querySelector('h2').textContent==='YouTube');
yt.querySelector('.eyebrow').textContent='Long-form content';
yt.querySelector('h2').textContent='YouTube';
yt.querySelectorAll('.case')[0].textContent='I create long-form YouTube videos from the topic and initial idea to the final 30–40 minute video. I film, structure the content, develop scripts and edit the final result.';
yt.querySelectorAll('.case')[1].textContent='I also work on video titles, thumbnail ideas and copy to make the content engaging from the first seconds, clearly communicate the topic and fit the YouTube audience.';

const sk=q('#kompetencijos');
sk.querySelector('.eyebrow').textContent='Skills';
sk.querySelector('h2').textContent='What I can bring to a team.';
const skillTexts=[
'Ideas, hooks, scripts, filming, editing and platform-specific adaptation.',
'Instagram and TikTok content planning, publishing, captions and visual selection.',
'Audience research, content direction and adapting ideas to a specific marketing goal.',
'Practical experience with advertising creative and campaign logic.',
'Product management, presentation, photography, descriptions and content.',
'Automotive and action sports content, with a strong understanding of these audiences.'
];
sk.querySelectorAll('.skill p').forEach((x,i)=>x.textContent=skillTexts[i]);

const co=q('#kontaktai');
co.querySelector('.eyebrow').textContent='Contact';
co.querySelector('h2').textContent='Have a project in mind? Let’s talk.';
}
if(location.hash==='#en')setLang('en');