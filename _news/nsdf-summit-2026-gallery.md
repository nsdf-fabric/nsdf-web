---
title: "NSDF Summit 2026 Photo Gallery"
sort_date: 2026-10-19
image: /assets/nsdf/news/NSDF_Conference_Group.png
image_alt: "NSDF Summit 2026 participants"
description: "Explore photographs from the NSDF Summit on Federated Autonomous Science in Chicago."
type: news
categories: [news, events, 2026]
---

<style>
  .nsdf-gallery-embed {
    --blue: #064e92;
    --accent: #075ce8;
    --ink: #132d48;
    color-scheme: light;
    color: #212529;
    font: 16px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif;
    width: min(1100px, calc(100vw - 48px));
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .nsdf-gallery-embed * {
    box-sizing: border-box;
  }
  .nsdf-gallery-embed .intro {
    padding: 8px 0 22px;
  }
  .nsdf-gallery-embed .eyebrow {
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 700;
    color: var(--blue);
    text-transform: uppercase;
    margin: 0;
  }
  .nsdf-gallery-embed .intro h2 {
    font-size: clamp(28px, 3.2vw, 40px);
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 10px 0 18px;
    padding-bottom: 0;
    border-bottom: 0;
  }
  .nsdf-gallery-embed .intro p {
    max-width: 760px;
    margin: 0;
    color: #53677a;
    font-size: 16px;
  }
  .nsdf-gallery-embed a:not(.btn) {
    color: var(--blue);
    text-decoration: none;
  }
  .nsdf-gallery-embed a:not(.btn):hover {
    text-decoration: underline;
  }
  .nsdf-gallery-embed .summit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eef5ff;
    border-left: 4px solid var(--accent);
    padding: 20px 24px;
    border-radius: 4px;
    gap: 20px;
  }
  .nsdf-gallery-embed .summit strong {
    font-size: 19px;
  }
  .nsdf-gallery-embed .days {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin: 28px 0 32px;
  }
  .nsdf-gallery-embed .day {
    border: 1px solid #dee2e6;
    background: #fff;
    border-radius: 5px;
    padding: 14px 18px;
    color: #495057;
  }
  .nsdf-gallery-embed .day strong {
    display: block;
    font-size: 19px;
  }
  .nsdf-gallery-embed .day.active {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
  }
  .nsdf-gallery-embed .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    border-bottom: 1px solid #dee2e6;
    padding: 4px 0 22px;
  }
  .nsdf-gallery-embed .toolbar h2 {
    font-size: 28px;
    line-height: 1.2;
    font-weight: 600;
    margin: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }
  .nsdf-gallery-embed .toolbar p {
    margin: 5px 0;
    color: #6c757d;
    font-size: 14px;
  }
  .nsdf-gallery-embed label {
    font-size: 13px;
    color: #495057;
  }
  .nsdf-gallery-embed select {
    display: block;
    max-width: 380px;
    width: 100%;
    padding: 10px;
    background: white;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font: inherit;
  }
  .nsdf-gallery-embed section {
    padding: 28px 0 14px;
  }
  .nsdf-gallery-embed .albumhead {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
  .nsdf-gallery-embed .albumhead h3 {
    font-size: 22px;
    line-height: 1.3;
    font-weight: 500;
    margin: 0;
    color: inherit;
  }
  .nsdf-gallery-embed .albumhead span {
    white-space: normal;
    color: #6c757d;
    font-size: 14px;
  }
  .nsdf-gallery-embed .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .nsdf-gallery-embed .photo {
    padding: 0;
    border: 0;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    background: #f0f2f4;
    position: relative;
    aspect-ratio: 4 / 3;
  }
  .nsdf-gallery-embed .photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
  }
  .nsdf-gallery-embed .photo:hover img {
    transform: scale(1.035);
  }
  .nsdf-gallery-embed .missing {
    display: grid;
    place-items: center;
    height: 100%;
    padding: 24px;
    color: #6c757d;
    font: 14px system-ui;
  }
  .nsdf-gallery-embed button:focus-visible,
  .nsdf-gallery-embed a:focus-visible,
  .nsdf-gallery-embed select:focus-visible,
  .nsdf-gallery-embed .photo:focus-visible {
    outline: 3px solid #f4ae29;
    outline-offset: 4px;
  }
  .nsdf-gallery-embed dialog {
    border: 0;
    border-radius: 6px;
    padding: 20px;
    color: #fff;
    background: #15191e;
    width: min(1150px, 96vw);
    max-height: 95vh;
  }
  .nsdf-gallery-embed dialog::backdrop {
    background: #000d;
  }
  .nsdf-gallery-embed .viewerbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .nsdf-gallery-embed .viewerbar button,
  .nsdf-gallery-embed .stage button {
    background: transparent;
    color: white;
    border: 0;
    font-size: 32px;
    cursor: pointer;
  }
  .nsdf-gallery-embed .stage {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 12px;
  }
  .nsdf-gallery-embed .stage img {
    max-width: calc(100% - 95px);
    height: 68vh;
    object-fit: contain;
  }
  .nsdf-gallery-embed .stage button {
    font-size: 48px;
  }
  .nsdf-gallery-embed dialog p {
    margin: 10px 0;
  }
  .nsdf-gallery-embed dialog a:not(.btn) {
    color: #9cc5ff;
  }
  .nsdf-gallery-embed footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    border-top: 1px solid #d8e0e8;
    margin-top: 28px;
    padding-top: 20px;
    font-size: 14px;
    color: #53677a;
  }
  .nsdf-gallery-embed footer .links {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
  @media (max-width: 700px) {
    .nsdf-gallery-embed .intro {
      padding-top: 0;
    }
    .nsdf-gallery-embed .toolbar {
      display: block;
    }
    .nsdf-gallery-embed .toolbar label {
      display: block;
      margin-top: 15px;
    }
    .nsdf-gallery-embed select {
      max-width: none;
    }
    .nsdf-gallery-embed .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .nsdf-gallery-embed .albumhead {
      display: block;
    }
    .nsdf-gallery-embed .summit {
      display: block;
    }
    .nsdf-gallery-embed .summit > span:last-child {
      display: block;
      margin-top: 8px;
    }
    .nsdf-gallery-embed .stage img {
      height: 55vh;
    }
  }
  @media (max-width: 520px) {
    .nsdf-gallery-embed .grid {
      grid-template-columns: 1fr;
    }
    .nsdf-gallery-embed .stage img {
      height: 48vh;
    }
    .nsdf-gallery-embed footer {
      display: block;
    }
  }
</style>

<div class="nsdf-gallery-embed">
  <div class="intro">
    <p class="eyebrow">Chicago, Illinois &middot; October 19, 2026</p>
    <h2>A day of federated autonomous science</h2>
    <p>
      Photographs from the NSDF Summit on Federated Autonomous Science at the
      Discovery Partners Institute. Explore the talks, discussions, and moments
      between sessions.
    </p>
  </div>

  <a class="summit" href="https://nationalsciencedatafabric.org/news/news-summit-research/" target="_blank">
    <span><strong>Read the Summit story</strong><br />Federated Autonomous Science in Chicago</span>
    <span aria-hidden="true">Explore &nearr;</span>
  </a>

  <div class="days" aria-label="Conference day">
    <div class="day active" aria-current="date">
      <strong>Monday</strong>October 19, 2026
    </div>
  </div>

  <div class="toolbar">
    <div>
      <h2 id="dayTitle">Monday, October 19, 2026</h2>
      <p id="summary" aria-live="polite"></p>
    </div>
    <label>Browse a session<select id="events">
        <option value="">All sessions</option>
      </select></label>
  </div>

  <div id="albums"></div>
  <noscript>Please enable JavaScript to browse the photo gallery.</noscript>

  <footer>
    <nav class="links" aria-label="Summit resources">
      <a href="https://nationalsciencedatafabric.org/news/news-summit-research/">Read the Summit story &nearr;</a>
      <a href="https://nationalsciencedatafabric.org/news/event-nsdf-summit/#program">Explore the program &nearr;</a>
      <a href="/assets/nsdf/NSDF_Conference_Group.png" download>Download group image &darr;</a>
    </nav>
    <span>National Science Data Fabric &middot; NSDF Summit 2026</span>
  </footer>

  <dialog id="viewer" aria-label="Photo viewer">
    <div class="viewerbar">
      <span id="caption"></span>
      <button id="close" type="button" aria-label="Close photo viewer">&#10005;</button>
    </div>
    <div class="stage">
      <button id="prev" type="button" aria-label="Previous photo">&lsaquo;</button>
      <img id="large" alt="" />
      <button id="next" type="button" aria-label="Next photo">&rsaquo;</button>
    </div>
    <p id="position"></p>
    <a id="original" target="_blank" rel="noopener">Open full-size photo &nearr;</a>
  </dialog>
</div>

<script type="application/json" id="photo-data">[{"day": "19", "title": "Welcome", "time": "9:00–9:15 AM", "photos": [{"id": 93, "src": "/assets/nsdf/summit-26/gallery/119.png", "thumb": "/assets/nsdf/summit-26/thumbs/119.jpg", "name": "Talks & Sessions 93", "category": "Talks & sessions"}, {"id": 97, "src": "/assets/nsdf/summit-26/gallery/125.png", "thumb": "/assets/nsdf/summit-26/thumbs/125.jpg", "name": "Talks & Sessions 97", "category": "Talks & sessions"}, {"id": 110, "src": "/assets/nsdf/summit-26/gallery/143.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/143.jpg", "name": "Talks & Sessions 110", "category": "Talks & sessions"}, {"id": 44, "src": "/assets/nsdf/summit-26/gallery/058.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/058.jpg", "name": "Talks & Sessions 44", "category": "Talks & sessions"}, {"id": 85, "src": "/assets/nsdf/summit-26/gallery/108.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/108.jpg", "name": "Talks & Sessions 85", "category": "Talks & sessions"}, {"id": 78, "src": "/assets/nsdf/summit-26/gallery/101.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/101.jpg", "name": "Talks & Sessions 78", "category": "Talks & sessions"}, {"id": 134, "src": "/assets/nsdf/summit-26/gallery/079.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/079.jpg", "name": "Community & Discussion 13", "category": "Community & discussion"}, {"id": 136, "src": "/assets/nsdf/summit-26/gallery/085.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/085.jpg", "name": "Community & Discussion 15", "category": "Community & discussion"}, {"id": 92, "src": "/assets/nsdf/summit-26/gallery/117.png", "thumb": "/assets/nsdf/summit-26/thumbs/117.jpg", "name": "Talks & Sessions 92", "category": "Talks & sessions"}, {"id": 133, "src": "/assets/nsdf/summit-26/gallery/078.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/078.jpg", "name": "Community & Discussion 12", "category": "Community & discussion"}, {"id": 153, "src": "/assets/nsdf/summit-26/gallery/065.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/065.jpg", "name": "Gathering & Reception 6", "category": "Gathering & reception"}, {"id": 154, "src": "/assets/nsdf/summit-26/gallery/074.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/074.jpg", "name": "Gathering & Reception 7", "category": "Gathering & reception"}, {"id": 135, "src": "/assets/nsdf/summit-26/gallery/084.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/084.jpg", "name": "Community & Discussion 14", "category": "Community & discussion"}, {"id": 146, "src": "/assets/nsdf/summit-26/gallery/142.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/142.jpg", "name": "Community & Discussion 25", "category": "Community & discussion"}, {"id": 144, "src": "/assets/nsdf/summit-26/gallery/127.png", "thumb": "/assets/nsdf/summit-26/thumbs/127.jpg", "name": "Community & Discussion 23", "category": "Community & discussion"}, {"id": 141, "src": "/assets/nsdf/summit-26/gallery/121.png", "thumb": "/assets/nsdf/summit-26/thumbs/121.jpg", "name": "Community & Discussion 20", "category": "Community & discussion"}, {"id": 142, "src": "/assets/nsdf/summit-26/gallery/124.png", "thumb": "/assets/nsdf/summit-26/thumbs/124.jpg", "name": "Community & Discussion 21", "category": "Community & discussion"}]}, {"day": "19", "title": "Foundations for Federated Autonomous Science", "time": "9:15–10:00 AM", "photos": [{"id": 98, "src": "/assets/nsdf/summit-26/gallery/129.png", "thumb": "/assets/nsdf/summit-26/thumbs/129.jpg", "name": "Talks & Sessions 98", "category": "Talks & sessions"}, {"id": 49, "src": "/assets/nsdf/summit-26/gallery/063.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/063.jpg", "name": "Talks & Sessions 49", "category": "Talks & sessions"}, {"id": 48, "src": "/assets/nsdf/summit-26/gallery/062.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/062.jpg", "name": "Talks & Sessions 48", "category": "Talks & sessions"}, {"id": 77, "src": "/assets/nsdf/summit-26/gallery/100.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/100.jpg", "name": "Talks & Sessions 77", "category": "Talks & sessions"}, {"id": 54, "src": "/assets/nsdf/summit-26/gallery/069.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/069.jpg", "name": "Talks & Sessions 54", "category": "Talks & sessions"}, {"id": 46, "src": "/assets/nsdf/summit-26/gallery/060.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/060.jpg", "name": "Talks & Sessions 46", "category": "Talks & sessions"}, {"id": 63, "src": "/assets/nsdf/summit-26/gallery/083.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/083.jpg", "name": "Talks & Sessions 63", "category": "Talks & sessions"}, {"id": 60, "src": "/assets/nsdf/summit-26/gallery/080.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/080.jpg", "name": "Talks & Sessions 60", "category": "Talks & sessions"}, {"id": 119, "src": "/assets/nsdf/summit-26/gallery/156.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/156.jpg", "name": "Talks & Sessions 119", "category": "Talks & sessions"}, {"id": 39, "src": "/assets/nsdf/summit-26/gallery/050.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/050.jpg", "name": "Talks & Sessions 39", "category": "Talks & sessions"}, {"id": 70, "src": "/assets/nsdf/summit-26/gallery/092.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/092.jpg", "name": "Talks & Sessions 70", "category": "Talks & sessions"}, {"id": 96, "src": "/assets/nsdf/summit-26/gallery/123.png", "thumb": "/assets/nsdf/summit-26/thumbs/123.jpg", "name": "Talks & Sessions 96", "category": "Talks & sessions"}, {"id": 140, "src": "/assets/nsdf/summit-26/gallery/118.png", "thumb": "/assets/nsdf/summit-26/thumbs/118.jpg", "name": "Community & Discussion 19", "category": "Community & discussion"}, {"id": 143, "src": "/assets/nsdf/summit-26/gallery/126.png", "thumb": "/assets/nsdf/summit-26/thumbs/126.jpg", "name": "Community & Discussion 22", "category": "Community & discussion"}, {"id": 138, "src": "/assets/nsdf/summit-26/gallery/112.png", "thumb": "/assets/nsdf/summit-26/thumbs/112.jpg", "name": "Community & Discussion 17", "category": "Community & discussion"}, {"id": 94, "src": "/assets/nsdf/summit-26/gallery/120.png", "thumb": "/assets/nsdf/summit-26/thumbs/120.jpg", "name": "Talks & Sessions 94", "category": "Talks & sessions"}, {"id": 116, "src": "/assets/nsdf/summit-26/gallery/151.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/151.jpg", "name": "Talks & Sessions 116", "category": "Talks & sessions"}, {"id": 42, "src": "/assets/nsdf/summit-26/gallery/054.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/054.jpg", "name": "Talks & Sessions 42", "category": "Talks & sessions"}, {"id": 58, "src": "/assets/nsdf/summit-26/gallery/076.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/076.jpg", "name": "Talks & Sessions 58", "category": "Talks & sessions"}, {"id": 57, "src": "/assets/nsdf/summit-26/gallery/075.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/075.jpg", "name": "Talks & Sessions 57", "category": "Talks & sessions"}, {"id": 59, "src": "/assets/nsdf/summit-26/gallery/077.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/077.jpg", "name": "Talks & Sessions 59", "category": "Talks & sessions"}, {"id": 47, "src": "/assets/nsdf/summit-26/gallery/061.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/061.jpg", "name": "Talks & Sessions 47", "category": "Talks & sessions"}, {"id": 56, "src": "/assets/nsdf/summit-26/gallery/072.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/072.jpg", "name": "Talks & Sessions 56", "category": "Talks & sessions"}, {"id": 50, "src": "/assets/nsdf/summit-26/gallery/064.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/064.jpg", "name": "Talks & Sessions 50", "category": "Talks & sessions"}, {"id": 84, "src": "/assets/nsdf/summit-26/gallery/107.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/107.jpg", "name": "Talks & Sessions 84", "category": "Talks & sessions"}, {"id": 155, "src": "/assets/nsdf/summit-26/gallery/128.png", "thumb": "/assets/nsdf/summit-26/thumbs/128.jpg", "name": "Gathering & Reception 8", "category": "Gathering & reception"}, {"id": 145, "src": "/assets/nsdf/summit-26/gallery/131.png", "thumb": "/assets/nsdf/summit-26/thumbs/131.jpg", "name": "Community & Discussion 24", "category": "Community & discussion"}]}, {"day": "19", "title": "Science Domains and Trustworthy Autonomy", "time": "10:30 AM–12:00 PM", "photos": [{"id": 91, "src": "/assets/nsdf/summit-26/gallery/115.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/115.jpg", "name": "Talks & Sessions 91", "category": "Talks & sessions"}, {"id": 107, "src": "/assets/nsdf/summit-26/gallery/139.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/139.jpg", "name": "Talks & Sessions 107", "category": "Talks & sessions"}, {"id": 51, "src": "/assets/nsdf/summit-26/gallery/066.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/066.jpg", "name": "Talks & Sessions 51", "category": "Talks & sessions"}, {"id": 90, "src": "/assets/nsdf/summit-26/gallery/114.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/114.jpg", "name": "Talks & Sessions 90", "category": "Talks & sessions"}, {"id": 52, "src": "/assets/nsdf/summit-26/gallery/067.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/067.jpg", "name": "Talks & Sessions 52", "category": "Talks & sessions"}, {"id": 53, "src": "/assets/nsdf/summit-26/gallery/068.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/068.jpg", "name": "Talks & Sessions 53", "category": "Talks & sessions"}, {"id": 89, "src": "/assets/nsdf/summit-26/gallery/113.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/113.jpg", "name": "Talks & Sessions 89", "category": "Talks & sessions"}, {"id": 86, "src": "/assets/nsdf/summit-26/gallery/109.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/109.jpg", "name": "Talks & Sessions 86", "category": "Talks & sessions"}, {"id": 81, "src": "/assets/nsdf/summit-26/gallery/104.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/104.jpg", "name": "Talks & Sessions 81", "category": "Talks & sessions"}, {"id": 100, "src": "/assets/nsdf/summit-26/gallery/132.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/132.jpg", "name": "Talks & Sessions 100", "category": "Talks & sessions"}, {"id": 80, "src": "/assets/nsdf/summit-26/gallery/103.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/103.jpg", "name": "Talks & Sessions 80", "category": "Talks & sessions"}, {"id": 82, "src": "/assets/nsdf/summit-26/gallery/105.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/105.jpg", "name": "Talks & Sessions 82", "category": "Talks & sessions"}, {"id": 114, "src": "/assets/nsdf/summit-26/gallery/149.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/149.jpg", "name": "Talks & Sessions 114", "category": "Talks & sessions"}, {"id": 45, "src": "/assets/nsdf/summit-26/gallery/059.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/059.jpg", "name": "Talks & Sessions 45", "category": "Talks & sessions"}, {"id": 41, "src": "/assets/nsdf/summit-26/gallery/053.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/053.jpg", "name": "Talks & Sessions 41", "category": "Talks & sessions"}, {"id": 105, "src": "/assets/nsdf/summit-26/gallery/137.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/137.jpg", "name": "Talks & Sessions 105", "category": "Talks & sessions"}, {"id": 38, "src": "/assets/nsdf/summit-26/gallery/049.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/049.jpg", "name": "Talks & Sessions 38", "category": "Talks & sessions"}, {"id": 61, "src": "/assets/nsdf/summit-26/gallery/081.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/081.jpg", "name": "Talks & Sessions 61", "category": "Talks & sessions"}, {"id": 40, "src": "/assets/nsdf/summit-26/gallery/052.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/052.jpg", "name": "Talks & Sessions 40", "category": "Talks & sessions"}, {"id": 137, "src": "/assets/nsdf/summit-26/gallery/098.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/098.jpg", "name": "Community & Discussion 16", "category": "Community & discussion"}, {"id": 132, "src": "/assets/nsdf/summit-26/gallery/073.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/073.jpg", "name": "Community & Discussion 11", "category": "Community & discussion"}, {"id": 127, "src": "/assets/nsdf/summit-26/gallery/048.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/048.jpg", "name": "Community & Discussion 6", "category": "Community & discussion"}, {"id": 130, "src": "/assets/nsdf/summit-26/gallery/056.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/056.jpg", "name": "Community & Discussion 9", "category": "Community & discussion"}, {"id": 129, "src": "/assets/nsdf/summit-26/gallery/055.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/055.jpg", "name": "Community & Discussion 8", "category": "Community & discussion"}, {"id": 139, "src": "/assets/nsdf/summit-26/gallery/116.png", "thumb": "/assets/nsdf/summit-26/thumbs/116.jpg", "name": "Community & Discussion 18", "category": "Community & discussion"}, {"id": 131, "src": "/assets/nsdf/summit-26/gallery/070.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/070.jpg", "name": "Community & Discussion 10", "category": "Community & discussion"}, {"id": 128, "src": "/assets/nsdf/summit-26/gallery/051.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/051.jpg", "name": "Community & Discussion 7", "category": "Community & discussion"}, {"id": 126, "src": "/assets/nsdf/summit-26/gallery/047.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/047.jpg", "name": "Community & Discussion 5", "category": "Community & discussion"}, {"id": 124, "src": "/assets/nsdf/summit-26/gallery/044.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/044.jpg", "name": "Community & Discussion 3", "category": "Community & discussion"}, {"id": 123, "src": "/assets/nsdf/summit-26/gallery/042.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/042.jpg", "name": "Community & Discussion 2", "category": "Community & discussion"}]}, {"day": "19", "title": "Cross-Cutting Perspectives: Data, AI, and Federation", "time": "1:30–2:15 PM", "photos": [{"id": 117, "src": "/assets/nsdf/summit-26/gallery/152.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/152.jpg", "name": "Talks & Sessions 117", "category": "Talks & sessions"}, {"id": 102, "src": "/assets/nsdf/summit-26/gallery/134.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/134.jpg", "name": "Talks & Sessions 102", "category": "Talks & sessions"}, {"id": 27, "src": "/assets/nsdf/summit-26/gallery/032.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/032.jpg", "name": "Talks & Sessions 27", "category": "Talks & sessions"}, {"id": 43, "src": "/assets/nsdf/summit-26/gallery/057.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/057.jpg", "name": "Talks & Sessions 43", "category": "Talks & sessions"}, {"id": 55, "src": "/assets/nsdf/summit-26/gallery/071.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/071.jpg", "name": "Talks & Sessions 55", "category": "Talks & sessions"}, {"id": 29, "src": "/assets/nsdf/summit-26/gallery/034.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/034.jpg", "name": "Talks & Sessions 29", "category": "Talks & sessions"}, {"id": 36, "src": "/assets/nsdf/summit-26/gallery/043.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/043.jpg", "name": "Talks & Sessions 36", "category": "Talks & sessions"}, {"id": 32, "src": "/assets/nsdf/summit-26/gallery/037.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/037.jpg", "name": "Talks & Sessions 32", "category": "Talks & sessions"}, {"id": 37, "src": "/assets/nsdf/summit-26/gallery/045.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/045.jpg", "name": "Talks & Sessions 37", "category": "Talks & sessions"}, {"id": 95, "src": "/assets/nsdf/summit-26/gallery/122.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/122.jpg", "name": "Talks & Sessions 95", "category": "Talks & sessions"}, {"id": 76, "src": "/assets/nsdf/summit-26/gallery/099.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/099.jpg", "name": "Talks & Sessions 76", "category": "Talks & sessions"}, {"id": 73, "src": "/assets/nsdf/summit-26/gallery/095.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/095.jpg", "name": "Talks & Sessions 73", "category": "Talks & sessions"}, {"id": 101, "src": "/assets/nsdf/summit-26/gallery/133.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/133.jpg", "name": "Talks & Sessions 101", "category": "Talks & sessions"}, {"id": 33, "src": "/assets/nsdf/summit-26/gallery/038.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/038.jpg", "name": "Talks & Sessions 33", "category": "Talks & sessions"}, {"id": 35, "src": "/assets/nsdf/summit-26/gallery/041.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/041.jpg", "name": "Talks & Sessions 35", "category": "Talks & sessions"}, {"id": 75, "src": "/assets/nsdf/summit-26/gallery/097.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/097.jpg", "name": "Talks & Sessions 75", "category": "Talks & sessions"}, {"id": 34, "src": "/assets/nsdf/summit-26/gallery/040.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/040.jpg", "name": "Talks & Sessions 34", "category": "Talks & sessions"}, {"id": 108, "src": "/assets/nsdf/summit-26/gallery/140.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/140.jpg", "name": "Talks & Sessions 108", "category": "Talks & sessions"}, {"id": 28, "src": "/assets/nsdf/summit-26/gallery/033.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/033.jpg", "name": "Talks & Sessions 28", "category": "Talks & sessions"}, {"id": 74, "src": "/assets/nsdf/summit-26/gallery/096.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/096.jpg", "name": "Talks & Sessions 74", "category": "Talks & sessions"}, {"id": 125, "src": "/assets/nsdf/summit-26/gallery/046.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/046.jpg", "name": "Community & Discussion 4", "category": "Community & discussion"}, {"id": 122, "src": "/assets/nsdf/summit-26/gallery/039.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/039.jpg", "name": "Community & Discussion 1", "category": "Community & discussion"}]}, {"day": "19", "title": "Shared Requirements for Federated Autonomous Science", "time": "2:15–3:00 PM", "photos": [{"id": 30, "src": "/assets/nsdf/summit-26/gallery/035.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/035.jpg", "name": "Talks & Sessions 30", "category": "Talks & sessions"}, {"id": 120, "src": "/assets/nsdf/summit-26/gallery/157.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/157.jpg", "name": "Talks & Sessions 120", "category": "Talks & sessions"}, {"id": 19, "src": "/assets/nsdf/summit-26/gallery/021.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/021.jpg", "name": "Talks & Sessions 19", "category": "Talks & sessions"}, {"id": 31, "src": "/assets/nsdf/summit-26/gallery/036.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/036.jpg", "name": "Talks & Sessions 31", "category": "Talks & sessions"}, {"id": 87, "src": "/assets/nsdf/summit-26/gallery/110.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/110.jpg", "name": "Talks & Sessions 87", "category": "Talks & sessions"}, {"id": 115, "src": "/assets/nsdf/summit-26/gallery/150.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/150.jpg", "name": "Talks & Sessions 115", "category": "Talks & sessions"}, {"id": 69, "src": "/assets/nsdf/summit-26/gallery/091.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/091.jpg", "name": "Talks & Sessions 69", "category": "Talks & sessions"} ,  {"id": 2, "src": "/assets/nsdf/summit-26/gallery/002.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/002.jpg", "name": "Talks & Sessions 2", "category": "Talks & sessions"}, {"id": 22, "src": "/assets/nsdf/summit-26/gallery/024.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/024.jpg", "name": "Talks & Sessions 22", "category": "Talks & sessions"}, {"id": 9, "src": "/assets/nsdf/summit-26/gallery/010.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/010.jpg", "name": "Talks & Sessions 9", "category": "Talks & sessions"}, {"id": 6, "src": "/assets/nsdf/summit-26/gallery/007.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/007.jpg", "name": "Talks & Sessions 6", "category": "Talks & sessions"}, {"id": 67, "src": "/assets/nsdf/summit-26/gallery/089.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/089.jpg", "name": "Talks & Sessions 67", "category": "Talks & sessions"}, {"id": 11, "src": "/assets/nsdf/summit-26/gallery/012.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/012.jpg", "name": "Talks & Sessions 11", "category": "Talks & sessions"}, {"id": 13, "src": "/assets/nsdf/summit-26/gallery/014.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/014.jpg", "name": "Talks & Sessions 13", "category": "Talks & sessions"}, {"id": 71, "src": "/assets/nsdf/summit-26/gallery/093.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/093.jpg", "name": "Talks & Sessions 71", "category": "Talks & sessions"}, {"id": 104, "src": "/assets/nsdf/summit-26/gallery/136.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/136.jpg", "name": "Talks & Sessions 104", "category": "Talks & sessions"}, {"id": 106, "src": "/assets/nsdf/summit-26/gallery/138.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/138.jpg", "name": "Talks & Sessions 106", "category": "Talks & sessions"}, {"id": 83, "src": "/assets/nsdf/summit-26/gallery/106.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/106.jpg", "name": "Talks & Sessions 83", "category": "Talks & sessions"}]}, {"day": "19", "title": "From Position Papers to Collaborative Pilots", "time": "3:30–4:10 PM", "photos": [{"id": 118, "src": "/assets/nsdf/summit-26/gallery/153.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/153.jpg", "name": "Talks & Sessions 118", "category": "Talks & sessions"}, {"id": 72, "src": "/assets/nsdf/summit-26/gallery/094.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/094.jpg", "name": "Talks & Sessions 72", "category": "Talks & sessions"}, {"id": 121, "src": "/assets/nsdf/summit-26/gallery/158.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/158.jpg", "name": "Talks & Sessions 121", "category": "Talks & sessions"}, {"id": 66, "src": "/assets/nsdf/summit-26/gallery/088.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/088.jpg", "name": "Talks & Sessions 66", "category": "Talks & sessions"}, {"id": 111, "src": "/assets/nsdf/summit-26/gallery/144.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/144.jpg", "name": "Talks & Sessions 111", "category": "Talks & sessions"}, {"id": 79, "src": "/assets/nsdf/summit-26/gallery/102.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/102.jpg", "name": "Talks & Sessions 79", "category": "Talks & sessions"}, {"id": 12, "src": "/assets/nsdf/summit-26/gallery/013.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/013.jpg", "name": "Talks & Sessions 12", "category": "Talks & sessions"}, {"id": 1, "src": "/assets/nsdf/summit-26/gallery/001.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/001.jpg", "name": "Talks & Sessions 1", "category": "Talks & sessions"}, {"id": 7, "src": "/assets/nsdf/summit-26/gallery/008.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/008.jpg", "name": "Talks & Sessions 7", "category": "Talks & sessions"}, {"id": 88, "src": "/assets/nsdf/summit-26/gallery/111.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/111.jpg", "name": "Talks & Sessions 88", "category": "Talks & sessions"}, {"id": 147, "src": "/assets/nsdf/summit-26/gallery/155.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/155.jpg", "name": "Community & Discussion 26", "category": "Community & discussion"}]}, {"day": "19", "title": "Shared Agenda for NSDF and Federal Agencies and Labs", "time": "4:10–4:50 PM", "photos": [{"id": 10, "src": "/assets/nsdf/summit-26/gallery/011.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/011.jpg", "name": "Talks & Sessions 10", "category": "Talks & sessions"}, {"id": 4, "src": "/assets/nsdf/summit-26/gallery/004.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/004.jpg", "name": "Talks & Sessions 4", "category": "Talks & sessions"}, {"id": 99, "src": "/assets/nsdf/summit-26/gallery/130.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/130.jpg", "name": "Talks & Sessions 99", "category": "Talks & sessions"}, {"id": 112, "src": "/assets/nsdf/summit-26/gallery/146.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/146.jpg", "name": "Talks & Sessions 112", "category": "Talks & sessions"}, {"id": 14, "src": "/assets/nsdf/summit-26/gallery/015.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/015.jpg", "name": "Talks & Sessions 14", "category": "Talks & sessions"}, {"id": 16, "src": "/assets/nsdf/summit-26/gallery/017.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/017.jpg", "name": "Talks & Sessions 16", "category": "Talks & sessions"}, {"id": 109, "src": "/assets/nsdf/summit-26/gallery/141.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/141.jpg", "name": "Talks & Sessions 109", "category": "Talks & sessions"}, {"id": 5, "src": "/assets/nsdf/summit-26/gallery/006.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/006.jpg", "name": "Talks & Sessions 5", "category": "Talks & sessions"}, {"id": 8, "src": "/assets/nsdf/summit-26/gallery/009.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/009.jpg", "name": "Talks & Sessions 8", "category": "Talks & sessions"}, {"id": 3, "src": "/assets/nsdf/summit-26/gallery/003.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/003.jpg", "name": "Talks & Sessions 3", "category": "Talks & sessions"}, {"id": 21, "src": "/assets/nsdf/summit-26/gallery/023.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/023.jpg", "name": "Talks & Sessions 21", "category": "Talks & sessions"}, {"id": 64, "src": "/assets/nsdf/summit-26/gallery/086.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/086.jpg", "name": "Talks & Sessions 64", "category": "Talks & sessions"}, {"id": 17, "src": "/assets/nsdf/summit-26/gallery/018.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/018.jpg", "name": "Talks & Sessions 17", "category": "Talks & sessions"}, {"id": 18, "src": "/assets/nsdf/summit-26/gallery/019.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/019.jpg", "name": "Talks & Sessions 18", "category": "Talks & sessions"}, {"id": 15, "src": "/assets/nsdf/summit-26/gallery/016.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/016.jpg", "name": "Talks & Sessions 15", "category": "Talks & sessions"}, {"id": 24, "src": "/assets/nsdf/summit-26/gallery/027.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/027.jpg", "name": "Talks & Sessions 24", "category": "Talks & sessions"}, {"id": 68, "src": "/assets/nsdf/summit-26/gallery/090.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/090.jpg", "name": "Talks & Sessions 68", "category": "Talks & sessions"}, {"id": 26, "src": "/assets/nsdf/summit-26/gallery/030.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/030.jpg", "name": "Talks & Sessions 26", "category": "Talks & sessions"}, {"id": 62, "src": "/assets/nsdf/summit-26/gallery/082.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/082.jpg", "name": "Talks & Sessions 62", "category": "Talks & sessions"}, {"id": 23, "src": "/assets/nsdf/summit-26/gallery/025.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/025.jpg", "name": "Talks & Sessions 23", "category": "Talks & sessions"}, {"id": 20, "src": "/assets/nsdf/summit-26/gallery/022.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/022.jpg", "name": "Talks & Sessions 20", "category": "Talks & sessions"}, {"id": 25, "src": "/assets/nsdf/summit-26/gallery/028.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/028.jpg", "name": "Talks & Sessions 25", "category": "Talks & sessions"}, {"id": 65, "src": "/assets/nsdf/summit-26/gallery/087.jpg", "thumb": "/assets/nsdf/summit-26/thumbs/087.jpg", "name": "Talks & Sessions 65", "category": "Talks & sessions"}, {"id": 113, "src": "/assets/nsdf/summit-26/gallery/147.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/147.jpg", "name": "Talks & Sessions 113", "category": "Talks & sessions"}, {"id": 103, "src": "/assets/nsdf/summit-26/gallery/135.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/135.jpg", "name": "Talks & Sessions 103", "category": "Talks & sessions"}]}, {"day": "19", "title": "Welcome Reception", "time": "5:00–6:00 PM", "photos": [{"id": 148, "src": "/assets/nsdf/summit-26/gallery/005.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/005.jpg", "name": "Gathering & Reception 1", "category": "Gathering & reception"}, {"id": 149, "src": "/assets/nsdf/summit-26/gallery/020.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/020.jpg", "name": "Gathering & Reception 2", "category": "Gathering & reception"}, {"id": 150, "src": "/assets/nsdf/summit-26/gallery/026.jpeg", "thumb": "/assets/nsdf/summit-26/thumbs/026.jpg", "name": "Gathering & Reception 3", "category": "Gathering & reception"}]}]</script>
<script>
  "use strict";
  const $ = (id) => document.getElementById(id);
  const data = JSON.parse(document.querySelector("#photo-data").textContent);
  const path = (p) => p.split("/").map(encodeURIComponent).join("/");
  let current = [],
    index = 0,
    returnFocus = null;

  data.forEach((album, i) => {
    $("events").add(new Option(album.time + " · " + album.title, String(i)));
  });
  $("summary").textContent =
    data.length + " sessions · " + data.reduce((s, a) => s + a.photos.length, 0) + " photographs";

  function render() {
    const albums = data.filter(
      (a, i) => !$("events").value || i === Number($("events").value),
    );
    $("albums").replaceChildren();
    for (const album of albums) {
      const section = document.createElement("section");
      const head = document.createElement("div");
      const title = document.createElement("h3");
      const count = document.createElement("span");
      const grid = document.createElement("div");

      head.className = "albumhead";
      title.textContent = album.title;
      count.textContent = album.time + " CT · " + album.photos.length + " photographs";
      head.append(title, count);

      grid.className = "grid";
      album.photos.forEach((photo, i) => {
        const button = document.createElement("button");
        const image = document.createElement("img");
        button.type = "button";
        button.className = "photo";
        button.setAttribute("aria-label", "View " + photo.name);
        image.src = path(photo.thumb);
        image.alt = album.title + " — " + photo.name;
        image.loading = "lazy";
        image.decoding = "async";
        image.onerror = () => {
          button.replaceChildren();
          const message = document.createElement("span");
          message.className = "missing";
          message.textContent = "Photo unavailable";
          button.append(message);
        };
        button.append(image);
        button.onclick = () => {
          current = album.photos;
          index = i;
          returnFocus = button;
          $("caption").textContent = album.title;
          show();
          $("viewer").showModal();
        };
        grid.append(button);
      });

      section.append(head, grid);
      $("albums").append(section);
    }
  }

  function show() {
    const source = path(current[index].src);
    $("large").src = source;
    $("large").alt = $("caption").textContent + ", photo " + (index + 1);
    $("original").href = source;
    $("position").textContent = index + 1 + " / " + current.length;
  }

  function move(step) {
    index = (index + step + current.length) % current.length;
    show();
  }

  $("events").onchange = render;
  $("prev").onclick = () => move(-1);
  $("next").onclick = () => move(1);
  $("close").onclick = () => $("viewer").close();
  $("viewer").addEventListener("close", () => returnFocus?.focus());
  $("viewer").addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  });
  $("viewer").addEventListener("click", (event) => {
    if (event.target === $("viewer")) $("viewer").close();
  });

  render();
</script>
