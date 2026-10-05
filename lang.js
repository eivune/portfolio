function setLang(lang){
document.documentElement.lang=lang;
document.getElementById('ltBtn').classList.toggle('active',lang==='lt');
document.getElementById('enBtn').classList.toggle('active',lang==='en');
if(lang==='lt'){location.hash='lt';location.reload();return}
location.hash='en';
const q=(s)=>document.querySelector(s), qa=(s)=>document.querySelectorAll(s);
const nav=qa('.menu a'); ['Work','About','Skills','Contact'].forEach((x,i)=>nav[i].textContent=x);
q('nav .btn').textContent='CONTACT ↗';
q('.hero h1').textContent='Creativity starts with a good idea.';
q('.hero .red').textContent='VIEW MY WORK ↓';

const about=q('#apie'); about.querySelector('.eyebrow').textContent='About';
about.querySelectorAll('.case')[0].textContent='I am a digital marketing and content specialist focused on Social Media, video production and the creative side of marketing. My strength is understanding the audience, finding ideas that work and turning them into content that captures attention and serves a clear purpose.';
about.querySelectorAll('.case')[1].textContent='I have hands-on experience creating Reels and long-form video - from ideas, concepts and scripts to filming, editing, copy and Social Media publishing. I also work with marketing strategy, Shopify, e-commerce content and Meta Ads.';
about.querySelectorAll('.case')[2].textContent='My approach is simple - understand the audience and the goal first, then create content that is not only visually strong, but also has a clear purpose in marketing.';

const d=q('#darbai'); d.querySelector('.eyebrow').textContent='Personal project'; d.querySelector('h2').textContent='Automotive Content';
d.querySelector('.project-copy .eyebrow').textContent='Filming · Editing · Reels · Social Media';
d.querySelector('.project-copy h3').textContent='Creativity starts with a good idea.';
d.querySelector('.project-copy p').textContent='I develop video ideas and concepts, explore formats with viral potential, film and edit Reels, create hooks and captions, and adapt content for Social Media. The goal is to create videos that look strong, engage the audience and reach as many people as possible.';
d.querySelector('.project-copy .red').textContent='WATCH REEL ↗';
qa('.metric span').forEach(x=>{if(x.textContent.includes('Žiūrėti Reel'))x.textContent='Watch Reel ↗'});

const cards=qa('.card');
cards[0].querySelector('.eyebrow').textContent='Heetrood · Social Media Growth';
cards[0].querySelector('p').innerHTML='The Heetrood account started from <strong>0</strong>, with the main goal of growing its audience. I first analysed the automotive community and target audience - their interests, behaviour and content needs. Based on these insights, a content direction was developed and content tailored to this audience was created and published. In <strong>2 months</strong>, the account grew from <strong>0 to 4,628</strong> followers.';
cards[0].querySelectorAll('.metric span').forEach(x=>x.textContent=x.textContent.includes('sekėjų')?'followers':'audience growth');
cards[1].querySelector('.eyebrow').textContent='2Kite · Advertising Project';
cards[1].querySelector('h3').textContent='Advertising Video';
const kp=cards[1].querySelectorAll('p');
kp[0].textContent='The 2Kite project was commissioned by a private client, covering the process from the initial idea to the final advertising video. The focus was on a young audience, so I analysed its Instagram behaviour, interests and content consumption habits before creating the content.';
kp[1].textContent='Based on these insights, I defined the communication tone and language, video structure, pacing and presentation style to help maintain attention while scrolling Social Media. I then developed the creative idea, wrote the script and copy, filmed the content and brought the concept to life.';
kp[2].innerHTML='The final video was edited and adapted for Social Media. The client was happy with the result, and the collaboration continued with ongoing filming, video editing and copywriting services. That season, the advertising video helped attract <strong>23 new students and people interested in learning kitesurfing</strong>.';

const sections=qa('section');
const ec=[...sections].find(x=>x.querySelector('h2')&&x.querySelector('h2').textContent.includes('E-commerce'));
ec.querySelector('.eyebrow').textContent='E-commerce · Shopify · Meta Ads · Social Media';
ec.querySelector('h2').textContent='E-commerce Marketing & Social Media';
const ep=ec.querySelectorAll('.case');
ep[0].innerHTML='<strong>E-commerce</strong> - From marketing strategy and audience understanding to content creation and presentation - I selected visuals and content direction, created Reels, filmed, edited, wrote scripts and copy, photographed products, wrote product descriptions and managed content across Instagram and Facebook.';
ep[1].innerHTML='I also worked with <strong>Shopify</strong> store management, product presentation and Meta Ads. The content was focused not only on reach, but also on attracting potential customers and supporting brand growth. Around <strong>16%</strong> of this content’s audience consisted of potential customers, helping Social Media content contribute to new customer acquisition and sales.';
ep[2].innerHTML='During the analysed period, the content generated <strong>171.7M</strong> views and reached <strong>46.9M</strong> people, showing how consistent content creation can become not only a visibility tool, but also a driver of business growth.';
ec.querySelectorAll('.metric span').forEach((x,i)=>x.textContent=['views','people reached','interactions','Instagram views'][i]);

const yt=[...sections].find(x=>x.querySelector('h2')&&x.querySelector('h2').textContent==='YouTube');
yt.querySelector('.eyebrow').textContent='Long-form content';
yt.querySelectorAll('.case')[0].textContent='For YouTube, I create long-form video content from the topic and initial idea to the final 30-40 minute video. I film, structure the content, write scripts and edit the final result myself.';
yt.querySelectorAll('.case')[1].textContent='I also work on video titles, thumbnail ideas and copy to make the content engaging from the first seconds, clearly communicate the topic and fit the YouTube audience.';

const sk=q('#kompetencijos'); sk.querySelector('.eyebrow').textContent='Skills'; sk.querySelector('h2').textContent='Areas where I can create value.';
['Ideas, hooks, scripts, filming, editing and Social Media adaptation.','Instagram and TikTok content planning, publishing, captions and visual selection.','Audience analysis, content direction and adapting ideas to a specific goal.','Practical experience with advertising content and campaign logic.','Product management, presentation, photography, descriptions and content.','Personal interest in these areas and an understanding of their audiences.'].forEach((x,i)=>sk.querySelectorAll('.skill p')[i].textContent=x);

const co=q('#kontaktai'); co.querySelector('.eyebrow').textContent='Contact'; co.querySelector('h2').textContent='Have an idea? Let’s talk.';
}
if(location.hash==='#en')setLang('en');