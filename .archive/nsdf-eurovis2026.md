---
layout: page
title: NSDF @ EuroVis 2026
---

<style>

header {
	background-color: var(--nsdf-blue);
	color: white;
	padding: 3rem 1rem;
	text-align: center;
}
.container {
	max-width: 1100px;
	margin: auto;
	padding: 2rem;
}
.section-card {
	background: white;
	border-radius: 12px;
	padding: 2rem;
	margin-bottom: 2rem;
	box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
h1, h2, h3 { color: var(--nsdf-blue); }
header h1 { color: white; margin: 0; font-size: 2.5rem; }

.gallery {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem;
	margin-top: 1.5rem;
}
.gallery-item {
	background: #fff;
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	text-align: center;
}
.gallery-item img {
	width: 100%;
	height: auto;
	border-bottom: 1px solid #eee;
}
.gallery-caption {
	padding: 10px;
	font-size: 0.9rem;
	color: #555;
	font-weight: bold;
}

.schedule-table {
	width: 100%;
	border-collapse: collapse;
	margin: 1.5rem 0;
}
.schedule-table th, .schedule-table td {
	padding: 1rem;
	text-align: left;
	border-bottom: 1px solid #eee;
}
.schedule-table th { background: var(--nsdf-light-blue); color: white; }


</style>


**Presenter:** Valerio Pascucci (University of Utah)

At <a href="https://eurovis.org.uk/">EuroVis 2026</A>, Valerio Pascucci presented on behalf of the <a href="https://nationalsciencedatafabric.org/">National Data Science Fabric</a> (NSDF), showcasing innovative infrastructure designed to accelerate scientific discovery. The session featured a practical, hands-on tutorial where we guided participants through advanced workflows for the interactive visualization of big data.

**Dates**: 8-12 June 2026

**Where**: Nottingham (UK)

<div class="container">
    <div class="section-card">
        <h2>Visual Highlights from the Session</h2>
        <div class="gallery">
            <div class="gallery-item">
                <img src="assets/images/eurovis2026/PXL_20260610_100420887.jpg" alt="Computation Comparison">
                <div class="gallery-caption">Comparison of Traditional vs. Progressive Computation</div>
            </div>
            <div class="gallery-item">
                <img src="assets/images/eurovis2026/PXL_20260610_100449904.jpg" alt="Tutorial Schedule">
                <div class="gallery-caption">Half-Day Tutorial Schedule</div>
            </div>
            <div class="gallery-item">
                <img src="assets/images/eurovis2026/PXL_20260610_102317226.jpg" alt="Streaming Data">
                <div class="gallery-caption">Streaming Computation Without Explicit Download</div>
            </div>
				<div class="gallery-item">
                <img src="assets/images/eurovis2026/eurovis2026.png" alt="Streaming Data">
                <div class="gallery-caption">EuroVis 2026</div>
            </div>
        </div>
    </div>

    <div class="section-card">
        <h2>Schedule Breakdown</h2>
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>Session</th>
                    <th>Focus</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Session I (30m)</strong></td>
                    <td>Introduction to NSDF and common user "pain points" identified through surveys.</td>
                </tr>
                <tr>
                    <td><strong>Session II (1h)</strong></td>
                    <td>Hands-on walkthrough: Visualizing Earth science datasets and building interactive dashboards.</td>
                </tr>
                <tr>
                    <td><strong>Session III (1h)</strong></td>
                    <td>Advanced NSDF capabilities for managing datasets >100TB in Oceanographic research.</td>
                </tr>
                <tr>
                    <td><strong>Session IV (30m)</strong></td>
                    <td>Interactive Q&A regarding specific research needs and NSDF support.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section-card">
        <h2>Getting Started</h2>
        <p>Ensure you have the following prerequisites ready for the hands-on portions:</p>
        <ul>
            <li><strong>GitHub Account:</strong> Log in or create one to run the tutorial repository.</li>
            <li><strong>GitHub Codespaces:</strong> Use this to set up your interactive workspace.</li>
            <li><strong>Kernel Selection:</strong> Always select the <strong>★NSDF-Tutorial</strong> Python environment.</li>
        </ul>

		  <a href="https://github.com/nsdf-fabric/EuroVis-Tutorial-2026">GitHub repository</a> 
    </div>


</div>