export const SUBURB_CONTENT: Record<string, {
  intro: string;
  leadH2: string;
  leadBody: string;
  secondH2: string;
  secondBody: string;
  thirdH2: string;
  thirdBody: string;
  zips: string[];
  localTip: string;
}> = {
  // Des Moines: lead with jurisdiction split
  "des-moines": {
    intro: "We provide local septic tank service across Des Moines, IA. Most calls come from the NE 14th Street (Highway 69) corridor, the late-2000s northeast and southeast annexation areas, and properties along the Four Mile Creek drainage, where private septic systems are still common even though most of Des Moines proper now runs on city sanitary sewer. If your home is on septic, we service you.",
    leadH2: "City of Des Moines vs. Polk County: Which Office Do You Call?",
    leadBody: "Septic regulation inside Des Moines city limits routes through the City of Des Moines Development Services. Outside the city limits, the same questions go to Polk County Environmental Health Services. This split confuses homeowners constantly, especially in recently annexed neighborhoods where the answer changed the year the city absorbed the parcel. We know which office to talk to for any address in Polk County, and we handle the permit paperwork as part of inspection and installation jobs.",
    secondH2: "Des Moines Lobe Soils and Why They Matter",
    secondBody: "Des Moines sits on the Des Moines Lobe, a relatively young Wisconsinan glacial till with compact pebbly loam and clay-rich Cretaceous shale fragments. Clay-heavy till means slow percolation in many parts of the city, and sidewall smearing during installation is a real concern when soils are wet. Polk County also restricts aerobic treatment units (ATUs) more tightly than Dallas and Warren Counties under current ordinance. If your system is failing and you're hoping to retrofit with an ATU, the rules here are stricter. We'll walk you through what is and isn't allowed for your address.",
    thirdH2: "Where Septic Systems Live in Des Moines",
    thirdBody: "The biggest concentrations are along the NE 14th Street and NE Broadway corridor, edges near the Saylorville and Four Mile Creek drainages, and the large northeast and southeast annexations of the late 2000s. Many of these properties are still waiting on sewer extension and will be on septic for years to come.",
    zips: ["50309", "50315", "50316", "50317", "50320"],
    localTip: "If you're in a recently annexed parcel and you've gotten a notice about sewer connection, don't panic. We can inspect your current system, give you a realistic remaining-life estimate, and help you decide whether to pump-and-hold or pre-empt the connection."
  },

  // West Des Moines: lead with two-county split + Raccoon River alluvium
  "west-des-moines": {
    intro: "West Des Moines is mostly sewered inside its core, but the western expansion into Dallas County has put a lot of acreages on private septic. The Booneville-area parcels, River Woods development near Booneville, and the long-tail acreages along the Raccoon River bluffs are common service calls for us.",
    leadH2: "The Two-County Problem West Des Moines Homeowners Run Into",
    leadBody: "West Des Moines straddles Polk and Dallas Counties (with thin slivers in Warren and Madison). Properties on either side of Jordan Creek Parkway often fall into different jurisdictions, which means the septic permit office, soil-test requirements, and time-of-transfer process change depending on which side of the line your house sits on. Polk County Environmental Health Services handles the eastern half; Dallas County Environmental Health handles the western half. We service both and know which paperwork applies to which address.",
    secondH2: "Raccoon River Soils Are Different Here",
    secondBody: "Eastern West Des Moines sits on the same Des Moines Lobe till as the rest of central Polk County: clay-heavy, slow-percolating. Move west toward the Raccoon River and the soils transition to alluvial deposits, sandier and gravelly in the floodplain pockets, with significantly better percolation. That matters for system design. A drain field that would struggle on the east end of WDM can work fine on a Booneville-area acreage if it's sited correctly on the alluvial benches above the river.",
    thirdH2: "Aging Systems Coming Due",
    thirdBody: "A lot of the Dallas County WDM and Booneville-area acreages were built out in the late 1990s and 2000s. Those systems are now 25 to 30 years old. That's the age where tanks start developing baffle issues and drain fields begin to saturate. If you bought your property in this stretch and inherited the original system, schedule an inspection before you need an emergency call. Most failing fields can be rehabilitated for a fraction of a full replacement if caught in time.",
    zips: ["50265", "50266", "50325", "50263"],
    localTip: "Selling a Dallas County WDM acreage? The Iowa Time of Transfer inspection has to be filed with Dallas County Environmental Health, not Polk County, even if you bought it under the WDM address. We file with the right county the first time."
  },

  // Ankeny: lead with growth + aging septics on the fringe
  "ankeny": {
    intro: "Ankeny is one of Iowa's largest and fastest-growing cities. That growth has annexed neighborhoods that used to be rural Saylor, Crocker, and Douglas Township acreages. Homes that were originally on private septic. Many of them still are, and many of them are hitting their first major service cycle right now.",
    leadH2: "First-Pump-Cycle Pressure in Ankeny",
    leadBody: "The unique problem in Ankeny is timing. Systems installed during the 1990s and 2000s building boom are now 20 to 30 years old. That's exactly the window where original concrete tanks start showing baffle wear, original drain fields hit perc-rate decline, and original effluent filters (on systems that have them) finally need to be cleaned for the first time. We see more 'I've never had this serviced' calls in Ankeny than anywhere else in the metro, and we handle them every week.",
    secondH2: "Saylorville Drainage and Why It Affects Your System",
    secondBody: "Ankeny sits on Des Moines Lobe glacial till, which is clay-heavy and slow-percolating on the uplands. The parcels closer to Saylorville Lake and the smaller drainages running south into the city sit on pockets of better-draining glacial outwash sand. Drain fields perform differently on those two soil types. A perc test done on an upland parcel is not transferable to a parcel a quarter-mile downhill, so we always re-test before designing a new drain field.",
    thirdH2: "Polk County Rules Apply",
    thirdBody: "All of Ankeny falls under Polk County Environmental Health Services for septic permitting and inspection. Polk County restricts aerobic treatment units (ATUs) more tightly than Dallas or Warren Counties under current ordinance, which means failing systems in Ankeny are more often repaired or replaced with conventional gravity systems instead of being modernized with an ATU. We work within those rules and design around them.",
    zips: ["50021", "50023"],
    localTip: "If you bought an Ankeny home in the last 5 years and never received septic records from the previous owner, call us. We can pull Polk County permits for most addresses and tell you what was originally installed, when it was last serviced, and what to plan for."
  },

  // Waukee: lead with growth pressure + sewer-chasing-development
  "waukee": {
    intro: "Waukee is one of the fastest-growing cities in Iowa and ranks among the fastest-growing cities in the nation per recent U.S. Census data. That growth has stretched sewer infrastructure thin. Most new construction inside the immediate city is absorbed into city sewer, but acreages just outside the city, and unincorporated Walnut Township and Boone Township, are almost universally on private septic.",
    leadH2: "Sewer Is Chasing Development Westward",
    leadBody: "Many Waukee-area acreages installed septic systems 10 to 20 years ago when their parcel was firmly rural. Today, those same parcels sit next door to new sewered subdivisions, and homeowners face a real decision: keep the septic and continue to maintain it, or tie into city sewer at significant up-front cost. Neither is universally better. The right call depends on system age, expected remaining life, distance to the nearest sewer main, and connection fees. We inspect the system and give you the honest math, not a sales pitch in either direction.",
    secondH2: "Different Soils Than Polk County",
    secondBody: "Western Waukee transitions out of the Des Moines Lobe into the older Southern Iowa Drift Plain, which has a thicker loess cap, more rolling terrain, and generally better-developed drainage. Percolation is usually better here than on the heavy till uplands east of the city, but steep slopes near Sugar Creek and the Raccoon River tributaries create setback and design challenges that a flat-lot installer won't always anticipate. We design around the slope, not against it.",
    thirdH2: "Dallas County Allows What Polk County Doesn't",
    thirdBody: "Dallas County Environmental Health handles all septic permits and time-of-transfer inspections for Waukee. Unlike Polk County, Dallas County does allow aerobic treatment units (ATUs) for failed-system replacement when conventional drain fields aren't feasible. That gives you more options if your existing drain field has hit end of life and the lot can't fit a new conventional field.",
    zips: ["50263"],
    localTip: "Buying a Waukee-area acreage with septic? Make the offer contingent on a pre-purchase inspection. We can usually complete it within 3 to 5 business days and give you documentation to renegotiate if the system has issues."
  },

  // Norwalk: lead with terrain + Warren County quirks
  "norwalk": {
    intro: "Norwalk and the rural Warren County addresses around it are the most septic-heavy market in our service area. Echo Valley Estates (annexed in the late 1980s), Lakewood, and the broader acreages along G14, R63, and the Cumming and Prole corridors are almost all on private systems. Warren County does septic differently than the Polk and Dallas County jurisdictions north of Norwalk, and that matters.",
    leadH2: "Why Norwalk Systems Are More Complicated",
    leadBody: "Norwalk and Warren County sit on the Southern Iowa Drift Plain: older glacial drift capped with deep loess, rolling hills, and deeply etched drainages. Loess percolation varies wildly across short distances, and steep slopes are common. The result: a lot of Warren County parcels require engineered lateral systems or sand filter systems instead of the simple gravity drain fields you'd install on flatter Polk County acreages. If your contractor is quoting a 'standard drain field' on a sloped Warren County lot, get a second opinion.",
    secondH2: "Warren County's Rules Are Different",
    secondBody: "Warren County Environmental Health (in Indianola) handles septic permits, soil and percolation tests, and time-of-transfer inspections through an online permit portal. The county requires Iowa-certified (IOWWA) installers and PE or soil-scientist-stamped perc tests valid for one year. We handle the permits, the perc tests, and the install, including filing everything correctly with Warren County.",
    thirdH2: "Echo Valley and the Older Norwalk Systems",
    thirdBody: "Echo Valley Estates was annexed into Norwalk decades ago, but many of the homes around Echo Valley Country Club predate that annexation and run on original 1970s-era septic systems. Forty-plus years is the age where tanks start to fail structurally and where the original perc rate of the drain field is no longer reliable. If you own an Echo Valley home with the original system, plan on a thorough inspection (not just a pumping) at your next service.",
    zips: ["50211"],
    localTip: "Warren County requires perc tests to be performed by a Professional Engineer or certified soil scientist and the results are only valid for one year. If you're planning a sale, time the perc test to align with the closing window so the report doesn't expire mid-transaction."
  }
};
