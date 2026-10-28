import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { caseStudies } from '../src/case-studies.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => readFileSync(resolve(root, path), 'utf8');
const write = (path, value) => writeFileSync(resolve(root, path), value);
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const template = read('work/titan-document-workflows/index.html');
const header = template.match(/<header\b[\s\S]*?<\/header>/)[0];
const footer = template.match(/<footer\b[\s\S]*?<\/footer>/)[0];
const arrow = '<svg aria-hidden="true" class="arrow-icon" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path d="M5 19 19 5M5 5h14v14"></path></svg>';
const sections = [['overview','Overview'], ['problem','Problem'], ['goal','Goal'], ['research','Research'], ['design-process','Design process'], ['testing','Testing'], ['solution','Solution'], ['results','Results'], ['reflection','Reflection']];
const paragraphs = items => items.map(text => `<p>${esc(text)}</p>`).join('\n');
const dimensions = {'restfinder-insights':[1800,1013], 'restfinder-journey':[1385,1800], 'restfinder-flow':[1800,1013], 'restfinder-sketch':[1280,884], 'restfinder-profile':[375,812], 'restfinder-preferences':[375,981], 'oando-overview':[432,272], 'hrms-dashboard':[928,682], 'hrms-onboarding':[928,460], 'edms-templates':[928,630], 'edms-editor':[928,635], 'crm-leads':[1108,1206], 'crm-campaign':[1114,748], 's2s-dashboard':[1139,714], 's2s-request':[1138,711], 's2s-approval':[1138,711]};
function img(file, alt, lead=false) {
  const [width,height] = dimensions[file];
  return `<img src="/case-studies/${file}.webp" alt="${esc(alt)}" width="${width}" height="${height}" ${lead?'fetchpriority="high"':'loading="lazy"'} decoding="async"/>`;
}
function figure(image) {
  return `<figure class="case-solution-visual imported-visual${image.format==='phone'?' phone-visual':''}">${img(image.file,image.alt)}<figcaption>${esc(image.caption)}</figcaption></figure>`;
}
function card(c) {
  return `<a class="project imported-project" data-project="${c.slug}" href="/work/${c.slug}/">
  <div class="project-art imported-project-art">${img(c.hero,c.heroAlt)}<span class="project-badge">${esc(c.sector)} · ${esc(c.category || 'UI/UX Design')}</span></div>
  <div class="project-info"><div><p class="case-category">${esc(c.client)} · ${esc(c.discipline || 'Enterprise product design')}</p><h3>${esc(c.title)}</h3><p class="project-description">${esc(c.summary)}</p><span class="case-availability">Read case study</span></div><span aria-hidden="true">${arrow}</span></div></a>`;
}
for (const [index,c] of caseStudies.entries()) {
  let head = template.slice(0,template.indexOf('</head>'));
  head = head.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(c.title)} — ${esc(c.client)} | Oluwaseun Ayeni</title>`)
    .replace(/<meta content="[^"]*" name="description"\s*\/>/, `<meta content="${esc(c.summary)}" name="description"/>`)
    .replace(/<link href="\/src\/case-studies.css" rel="stylesheet"\s*\/>/g,'');
  head += '<link href="/src/case-studies.css" rel="stylesheet"/></head>';
  const sectionContent = {
    overview: `<h2>${esc(c.overviewTitle)}</h2>${paragraphs(c.overview)}<dl class="case-overview-facts"><div><dt>${esc(c.roleLabel || 'My role')}</dt><dd>${esc(c.role)}</dd></div><div><dt>Collaborators</dt><dd>${esc(c.team)}</dd></div><div><dt>${esc(c.durationLabel || 'Project timeline')}</dt><dd>${esc(c.duration)}</dd></div></dl><p class="case-privacy-note">${esc(c.privacyNote || 'Some project information has been adjusted or withheld for client confidentiality.')}</p>`,
    problem: `<h2>${esc(c.problemTitle)}</h2>${paragraphs(c.problem)}<div class="sample-insight-grid">${c.insights.map(([title,body],i)=>`<article><span class="insight-number">0${i+1}</span><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join('')}</div>`,
    goal: `<h2>${esc(c.goalTitle)}</h2>${paragraphs(c.goal)}<blockquote class="sample-goal-quote">${esc(c.goalQuote)}</blockquote>`,
    research: `<h2>${esc(c.researchTitle)}</h2>${paragraphs(c.research)}`,
    'design-process': `<h2>${esc(c.designTitle)}</h2>${paragraphs(c.design)}<div class="sample-process-list">${c.process.map(([title,body])=>`<article><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join('')}</div>`,
    testing: `<h2>${esc(c.testingTitle)}</h2>${paragraphs(c.testing)}`,
    solution: `<h2>${esc(c.solutionTitle)}</h2>${paragraphs(c.solution)}`,
    results: `<h2>${esc(c.resultsTitle)}</h2>${paragraphs(c.results)}`,
    reflection: `<h2>${esc(c.reflectionTitle)}</h2><p>${esc(c.reflection)}</p><blockquote>${esc(c.reflectionQuote)}</blockquote>`
  };
  const next = caseStudies[(index+1)%caseStudies.length];
  const html = `${head}
<body><div class="site-frame project-detail-page imported-case-study">${header}<main>
<div class="case-back-row"><a class="page-back-link" href="/work/" aria-label="Back to work"><svg aria-hidden="true" class="back-chevron" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="m14 5-7 7 7 7"></path></svg><span>Back to work</span></a><span class="back-page-label">${esc(c.client)}</span></div>
<section class="case-hero"><p class="eyebrow">${esc(c.sector)} · ${esc(c.category || 'Product design')}</p><h1>${esc(c.title)}</h1><p class="case-hero-summary">${esc(c.summary)}</p><dl class="case-metadata"><div><dt>${esc(c.clientLabel || 'Client')}</dt><dd>${esc(c.client)}</dd></div><div><dt>${esc(c.roleLabel || 'Role')}</dt><dd>${esc(c.role)}</dd></div><div><dt>${esc(c.durationLabel || 'Duration')}</dt><dd>${esc(c.duration)}</dd></div></dl></section>
<figure class="case-lead-visual imported-visual">${img(c.hero,c.heroAlt,true)}<figcaption>${esc(c.heroCaption || `${c.client} — ${c.title}. Project interface from the original case study.`)}</figcaption></figure>
<nav aria-label="Project sections" class="case-section-nav">${sections.map(([id,label])=>`<a href="#${id}">${label}</a>`).join('')}</nav>
<div class="case-sample-content">${sections.map(([id,label],i)=>`<section class="sample-case-section${id==='reflection'?' sample-reflection':''}" id="${id}"><p class="eyebrow">0${i+1} · ${esc(label.toUpperCase())}</p>${sectionContent[id]}${c.images.filter(image=>image.section===id).map(figure).join('')}</section>`).join('\n')}</div>
<section class="case-next"><p class="eyebrow">READ NEXT</p><a href="/work/${next.slug}/"><h2>${esc(next.title)}</h2>${arrow}</a><a class="text-link" href="/work/">All projects →</a></section>
</main>${footer}</div><script src="/src/books.js" type="module"></script><script src="/src/controls.js" type="module"></script><script src="/src/case-navigation.js" type="module"></script></body></html>\n`;
  mkdirSync(resolve(root, 'work', c.slug), {recursive:true});
  write(`work/${c.slug}/index.html`,html);
}
// Keep the existing projects and replace the Titan placeholder rather than adding a duplicate.
for (const path of ['index.html','work/index.html']) {
  let html = read(path);
  if (!html.includes('/src/case-studies.css')) html = html.replace('</head>','<link href="/src/case-studies.css" rel="stylesheet"/></head>');
  const cards = [...html.matchAll(/<a class="project(?: imported-project)?"[\s\S]*?<\/a>/g)];
  const retired = ["/work/stanbic-digital-lending/","/work/healthcare-records/","/work/public-service-transformation/"];
  const retained = cards.filter(m=>!caseStudies.some(c=>m[0].includes(`href="/work/${c.slug}/"`)) && !retired.some(href=>m[0].includes(`href="${href}"`)));
  if (!cards.length) throw new Error(`No project cards found in ${path}`);
  const start=cards[0].index, last=cards.at(-1), end=last.index+last[0].length;
  html = html.slice(0,start)+caseStudies.map(card).join('\n')+retained.map(m=>m[0]).join('\n')+html.slice(end);
  write(path, html);
}
console.log(`Generated ${caseStudies.length} case studies and updated both project galleries.`);
