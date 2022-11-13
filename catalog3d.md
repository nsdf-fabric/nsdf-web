---
layout: page
title: National Science Data Fabric
tagline: Catalog 
ref: catalog3d
---

# NSDF Catalog

## Multi-federation Catalog for Petabytes of Community Data

<script src="https://unpkg.com/globe.gl"></script>

As part of the NSF-funded National Science Data Fabric
(NSDF) initiative, we are developing a lightweight software library to *index* large-amounts
of scientific data and *facilitate* discoverability. 

<div id="globeViz" />

<script>
	places = {
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
				"properties": {
					"name": "Arecibo Observatory",
					"url": "https://www.naic.edu/ao/landing",
					"latitude": 18.470440,
					"longitude": -66.722282,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					"name": "AWS OpenData",
					"url": "https://www.naic.edu/ao/landing",
					"latitude": 47.622150,
					"longitude": -122.336807,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Cyverse",
					"url": "https://cyverse.org",
					"latitude": 32.237530,
					"longitude": -110.947020,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Digital Rocks",
					"url": "https://www.digitalrocksportal.org",
					"latitude": 30.284918,
					"longitude": -97.734055,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Dryad",
					"url": "https://datadryad.org",
					"latitude": 38.549410,
					"longitude": -121.694520,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Material Commons",
					"url": "https://materialscommons.org",
					"latitude": 42.276840,
					"longitude": -83.735023,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "MDF",
					"url": "https://materialsdatafacility.org",
					"latitude": 41.790051,
					"longitude": -87.599808,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Neon",
					"url": "https://www.neonscience.org",
					"latitude": 39.961178,
					"longitude": -82.998795,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Zenodo",
					"url": "https://zenodo.org",
					"latitude": 46.187569,
					"longitude": 6.147480,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UBC",
					"url": "http://abacus.library.ubc.ca",
					"latitude": 49.277748,
					"longitude": -122.909050,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "ACSS",
					"url": "http://dataverse.theacss.org",
					"latitude": 41.227620,
					"longitude": -95.821770,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Dados Fiocrus",
					"url": "http://dadosdepesquisa.fiocruz.br",
					"latitude": -22.875780,
					"longitude": -43.243200,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "ASU",
					"url": " http://dataverse.asu.edu",
					"latitude": 33.423851,
					"longitude": -111.927620,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "AUSSDA",
					"url": " http://data.aussda.at",
					"latitude": 48.214350,
					"longitude": 16.358750,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Borealis",
					"url": "http://borealisdata.ca",
					"latitude": 43.786370,
					"longitude": -79.463070,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "CIFOR",
					"url": "http://data.cifor.org",
					"latitude": -6.597147,
					"longitude": 106.806038,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "CIMMYT",
					"url": "http://data.cimmyt.org",
					"latitude": 20.719330,
					"longitude": -103.347750,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "CSUC",
					"url": "http://dataverse.csuc.cat",
					"latitude": 41.386990,
					"longitude": 2.111960,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "CROSSDA",
					"url": "http://data.crossda.hr",
					"latitude": 45.796620,
					"longitude": 15.971800,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "CUHK",
					"url": "http://researchdata.cuhk.edu.hk",
					"latitude": 52.210880,
					"longitude": -6.776910,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "TDI",
					"url": "http://dataverse.dartmouth.edu",
					"latitude": 44.671490,
					"longitude": -63.571410,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "DaRUS",
					"url": "http://darus.uni-stuttgart.de",
					"latitude": 38.041930,
					"longitude": -78.520730,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "IRD",
					"url": "http://dataverse.ird.fr",
					"latitude": 48.856613,
					"longitude": 2.352222,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "SceincesPo",
					"url": "https://data.sciencespo.fr",
					"latitude": 48.892440,
					"longitude": 14.925400,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Edatos",
					"url": "http://edatos.consorciomadrono.es",
					"latitude": 40.416775,
					"longitude": -3.703790,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "dataverse.nl",
					"url": "http://dataverse.nl",
					"latitude": 52.370216,
					"longitude": 4.895168,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "dataverse.no",
					"url": "http://dataverse.no",
					"latitude": 69.649208,
					"longitude": 18.955324,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "NTU",
					"url": "http://researchdata.ntu.edu.sg",
					"latitude": 28.598520,
					"longitude": -81.220299,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "FIU",
					"url": "http://dataverse.fiu.edu",
					"latitude": 25.756304,
					"longitude": -80.375717,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Gottingen",
					"url": "http://data.goettingen-research-online.de",
					"latitude": 51.541279,
					"longitude": 9.915804,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Harvard",
					"url": "http://dataverse.harvard.edu",
					"latitude": 42.422081,
					"longitude": -88.612297,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Heidelberg",
					"url": "http://heidata.uni-heidelberg.de",
					"latitude": 49.398750,
					"longitude": 8.672434,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "IBICT",
					"url": "http://repositoriopesquisas.ibict.br",
					"latitude": -12.997470,
					"longitude": -38.516150,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "ICRISAT",
					"url": "http://dataverse.icrisat.org",
					"latitude": 17.495529,
					"longitude": 78.331642,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "IFDC",
					"url": "http://dataverse.ifdc.org",
					"latitude": 38.482120,
					"longitude": 16.560580,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "IFSTTAR",
					"url": "http://research-data.ifsttar.fr",
					"latitude": 48.842599,
					"longitude": 2.587735,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "IISG",
					"url": "http://datasets.iisg.amsterdam",
					"latitude": 52.370216,
					"longitude": 4.895168,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "PUSHDOM",
					"url": "http://dataverse.pushdom.ru",
					"latitude": 43.082700,
					"longitude": -77.671420,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "CIPotato",
					"url": "http://data.cipotato.org",
					"latitude": 26.540230,
					"longitude": -81.843360,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "IIT",
					"url": "http://dataverse.iit.it",
					"latitude": 54.952068,
					"longitude": -7.720990,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "JHU",
					"url": "http://archive.data.jhu.edu",
					"latitude": 39.329903,
					"longitude": -76.620522,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "juelich",
					"url": "http://data.fz-juelich.de",
					"latitude": 50.921010,
					"longitude": 6.361200,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UVA",
					"url": "http://dataverse.lib.virginia.edu",
					"latitude": 38.033554,
					"longitude": -78.507980,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "RIN",
					"url": "http://data.lipi.go.id",
					"latitude": -7.280284,
					"longitude": 112.799296,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "LiDA",
					"url": "http://lida.dataverse.lt",
					"latitude": 55.169437,
					"longitude": 23.881275,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "ICARDA",
					"url": "http://data.mel.cgiar.org",
					"latitude": 21.147770,
					"longitude": 79.024590,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "NIOZ",
					"url": "http://dataverse.nioz.nl",
					"latitude": 53.002860,
					"longitude": 4.785892,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UClouvain",
					"url": "http://dataverse.uclouvain.be",
					"latitude": 50.670090,
					"longitude": 4.615310,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "OpenForestData",
					"url": "http://dataverse.openforestdata.pl",
					"latitude": 53.302150,
					"longitude": 23.288280,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "PKU",
					"url": "http://opendata.pku.edu.cn",
					"latitude": 28.067360,
					"longitude": -82.427338,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "PUCP",
					"url": "http://datos.pucp.edu.pe",
					"latitude": -11.972490,
					"longitude": -77.076740,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "QDR",
					"url": "http://data.qdr.syr.edu",
					"latitude": 43.036670,
					"longitude": -76.131420,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UChile",
					"url": "http://datos.uchile.cl",
					"latitude": -30.003590,
					"longitude": -70.816610,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "URosario",
					"url": "http://research-data.urosario.edu.co",
					"latitude": 36.998770,
					"longitude": -4.368210,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "DadosAlbertos",
					"url": "http://dadosabertos.rnp.br",
					"latitude": -15.793310,
					"longitude": -47.850620,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "RSU",
					"url": "http://dataverse.rsu.lv",
					"latitude": 56.953708,
					"longitude": 24.055148,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "TDL",
					"url": "http://dataverse.tdl.org",
					"latitude": 32.866060,
					"longitude": -96.681010,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UCLA",
					"url": "http://dataverse.ucla.edu",
					"latitude": 34.125381,
					"longitude": -118.471901,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UNB",
					"url": "http://dataverse.lib.unb.ca",
					"latitude": 46.565315,
					"longitude": -66.461914,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UNC",
					"url": "http://dataverse.unc.edu",
					"latitude": 35.904911,
					"longitude": -79.046913,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UManitoba",
					"url": "http://dataverse.lib.umanitoba.ca",
					"latitude": 49.810539,
					"longitude": -97.143768,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UniMi",
					"url": "http://dataverse.unimi.it",
					"latitude": 38.141070,
					"longitude": 15.218660,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "UWI",
					"url": "http://dataverse.sta.uwi.edu",
					"latitude": 41.276001,
					"longitude": -96.067581,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "VTTI",
					"url": "http://dataverse.vtti.vt.edu",
					"latitude": 36.877239,
					"longitude": -76.170570,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "WorldAgroforestry",
					"url": "http://data.worldagroforestry.org",
					"latitude": 39.099730,
					"longitude": -77.069980,
					"pop_max": 0.4,
				},
			},
			{
				"type": "Feature",
				"properties": {
					name: "Yale-NUS",
					"url": "http://dataverse.yale-nus.edu.sg",
					"latitude": 38.182560,
					"longitude": -86.989500,
					"pop_max": 0.4,
				},
			},
		]
	};

	//https://github.com/vasturiano/globe.gl

	g=document.getElementById('globeViz');

	const world = Globe()
		.globeImageUrl('assets/images/catalog3d/earth.jpg')
		.bumpImageUrl('assets/images/catalog3d/earth-topology.png')
		.backgroundColor("#FFFFFF")
		.atmosphereAltitude(10)
		.width(800)
		.height(600)
		.labelsData(places.features)
		.labelLat(d => d.properties.latitude)
		.labelLng(d => d.properties.longitude)
		.labelText(d => d.properties.name)
		.labelSize(d => "0.7")
		.labelDotRadius(d => "0.6")
		.labelColor(() => 'rgba(255, 255, 0, 0.80)')
		.labelResolution(2)
		(g);
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 5.0;
	 
</script>

NSDF-Catalog is designed to facilitate multiple related objectives within a flexible microservice to: 

- coordinate data movements and replication of data from origin repositories within
the NSDF federation
- build an inventory of existing scientific data to inform the design of next-generation cyberinfrastructure;
- provide a suite of tools for discovery of datasets for cross-disciplinary research. Our service indexes scientific data
at a fine-granularity at the file or object level to inform data distribution strategies and to improve the experience for users
from the consumer perspective, with the goal of allowing end-toend dataflow optimizations

# List of catalogs

**Please let us know if you want your data added to our catalog.**

### Arecibo Observatory 
<https://www.naic.edu/ao/landing>

### AWS OpenData
<https://aws.amazon.com/opendata>

### Cyverse
<https://cyverse.org>

### Digital Rock Portal
<https://www.digitalrocksportal.org>

### Dryad
<https://datadryad.org>

### Material Commons
<https://materialscommons.org>

### Material Data Facility
<https://materialsdatafacility.org>

### Neon Science
https://www.neonscience.org>

### Zenodo
<https://zenodo.org>

### Dataverse Abacus 
<http://abacus.library.ubc.ca>

### Dataverse Arab Council for the Social Scienes (ACSS)
<http://dataverse.theacss.org>

### Arca Dados Fiocrus - Dataverse
<http://dadosdepesquisa.fiocruz.br>

### Arizona State University (ASU) Library Research Data Repository - Dataverse 
<http://dataverse.asu.edu>

### Austrian Social Science Data Archive (AUSSDA) - Dataverse 
<http://data.aussda.at>

### Borealis - Dataverse 
<http://borealisdata.ca>

### Center for International Forestry Research (CIFOR) - Dataverse 
<http://data.cifor.org>

### International Maize and Wheat Improvement Center (CIMMYT) - Dataverse 
<http://data.cimmyt.org>

### Catalan Open Research Data (CORA) - Dataverse 
<http://dataverse.csuc.cat>

### Croatian Social Science Data Archive (CROSSDA) - Dataverse 
<http://data.crossda.hr>

### The Chinese University of Hong Kong Library Research Data Repository (CUHK) - Dataverse 
<http://researchdata.cuhk.edu.hk>

### Dartmouth Institute for Health Policy and Clinical Practice (TDI) - Dataverse 	
<http://dataverse.dartmouth.edu>

### Data Repository University of Stuttgart (DaRUS) - Dataverse 
<http://darus.uni-stuttgart.de>

### DataSuds  Institut de recherche pour le développement (IRS) - Dataverse 
<http://dataverse.ird.fr>

### SceincesPo - Dataverse 
<https://data.sciencespo.fr>

### Edatos - Dataverse 
<http://edatos.consorciomadrono.es>

### Netherland - Dataverse 
<http://dataverse.nl>

### Norway - Dataverse 
<http://dataverse.no>

### Nanyang Technological University Singapore (NTU) - Dataverse 
<http://researchdata.ntu.edu.sg>

### Florida International University (FIU) Research Data Portal - Dataverse 
<http://dataverse.fiu.edu>

### Gottingen Research Online - Dataverse 
<http://data.goettingen-research-online.de>

### University of Harvard - Dataverse 
<http://dataverse.harvard.edu>

### Heidelberg Open Research Data - Dataverse 
<http://heidata.uni-heidelberg.de>

### Instituto Brasileiro de Informação em Ciencia e Tecnologia (IBICT) - Dataverse 
<http://repositoriopesquisas.ibict.br>

### Science of discovery to science of delivery (ICRISAT) - Dataverse
<http://dataverse.icrisat.org>

### International Fertilizer Development Center (IFDC) - Dataverse 
<http://dataverse.ifdc.org>

### French Institute of Science and Technology for Transport, Development and Networks  (IFSTTAR) -m Dataverse 
<http://research-data.ifsttar.fr>

### International Institute of Social History (IISG) - Dataverse 
<http://datasets.iisg.amsterdam>

### Institute of Russian Literature  - Dataverse 
<http://dataverse.pushdom.ru>

### International Potato Center - Dataverse 
<http://data.cipotato.org>

### Italian Institute of Technology (IIT) - Dataverse 
<http://dataverse.iit.it>

### Johns Hopkins University - Dataverse 
<http://archive.data.jhu.edu>

### Forschungszentrum Julich - Dataverse 
<http://data.fz-juelich.de>

### University of Virginia (UVA) - Dataverse  
<http://dataverse.lib.virginia.edu>

### Repositori Ilmiah Nasional (RIN) - Dataverse 
<http://data.lipi.go.id>

### Lithuanian Data Archive for Social Sciences and Humanities (LiDA) - Dataverse 
<http://lida.dataverse.lt>

### International Center for Agricultural Research in Dry Ares (ICARDA) - Dataverse 
<http://data.mel.cgiar.org>

### Royal Netherlands Institute for Sea Research (NIOZ) - Dataverse 
<http://dataverse.nioz.nl>

### Universite catholique de Louvain - Dataverse 
<http://dataverse.uclouvain.be>

### Open Forest Data - Dataverse 
<http://dataverse.openforestdata.pl>

### Peking University - Dataverse 
<http://opendata.pku.edu.cn>

### Pontificia Universidad Catolica del Peru - Dataverse  
<http://datos.pucp.edu.pe>

### Qualitative Data Repository - Dataverse 
<http://data.qdr.syr.edu>

### Repositorio de datos de investigación de la Universidad de Chile - Dataverse 
<http://datos.uchile.cl>

### Repositorio de Datos de Investigación Universidad del Rosario  - Dataverse 
<http://research-data.urosario.edu.co>

### Repositorios Piloto da Rede Nacional de Ensino e Pesquisa - Dataverse 
<http://dadosabertos.rnp.br>

### Riga Stradins University (RSU) - Dataverse 
<http://dataverse.rsu.lv>

### Texas Data Library (TDL) Repository  - Dataverse 
<http://dataverse.tdl.org>

### University of California Los Angeles (UCLA) - Dataverse 
<http://dataverse.ucla.edu>

### University of New Brunswick (UNB) Libraries - Dataverse 
<http://dataverse.lib.unb.ca>

### University of North Carolina  (UNC) - Dataverse 
<http://dataverse.unc.edu>

### University of Manitoba - Dataverse 
<http://dataverse.lib.umanitoba.ca>

###  Universita degli Studi di Milano - Dataverse 
<http://dataverse.unimi.it>

### University of the West Indies (UWI) - Dataverse 
<http://dataverse.sta.uwi.edu>

###  Virginia Tech Transportation Institute (VTTI) - Dataverse 
<http://dataverse.vtti.vt.edu>

###  World Agroforestry Research Data Repository - Dataverse 
<http://data.worldagroforestry.org>

###  Yale-NUS College - Dataverse
<http://dataverse.yale-nus.edu.sg>





