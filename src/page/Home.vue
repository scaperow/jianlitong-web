<template>
  <div class="body">

    <!-- Mixins-->
    <!-- This logo isn't used anywhere, but I kept the code handy just in case...-->
    <!-- Nav section-->
    <header-component />

    <!-- Index HERO section-->
    <div id="hero">
      <div class="flex-row-center" id="hero-container">
        <div id="hero-text-container">
          <div class="hero-text">Designer
            <span>&amp;</span><br>Developer</div>
        </div>
      </div>
      <div id="hero-action">
        <div class="scroller">如何使用？</div>
        <div class="arrow"></div>
      </div>
    </div>
    <!-- Index WORK section-->
    <div id="work">
      <div class="right flex-column-center">
        <div class="about-container">
          <p>UX Designer and Front End Developer based outside
            <span class="keyword">St. Louis, MO.</span>
          </p>
          <p>Web, game, and graphic designer with
            <span class="keyword">5+ years </span>building digital and physical experiences.</p>
          <p>Avid educator,
            <span class="keyword">entrepreneur, </span>and dungeon master.</p>
          <p>Into rapid prototyping, design,
            <span class="keyword">code </span>and making awesome stuff on the web.</p>
          <p>
            <span class="keyword">Passionate </span>about technology and enabling others to do great things.</p>
          <p>Motivated
            <span class="keyword">learner </span>always looking for new challenges and opportunities.</p>
          <div id="work-link">
            <a class="cta-animated" id="work-link-button" href="https://www.behance.net/brendanbax881b" target="_blank">Some Other Projects</a>
          </div>
        </div>
      </div>

      <div class="left">
        <div class="work-thumbnail" style="background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb07a467207897.5b31bc84de97b.png),linear-gradient(#ffffff 10%, #ececee 60%,#cfcfd1 80%);">
          <a class="work-link">
            <div class="work-details">
              <h3 class="work-title">Mortgage App</h3>
              <p class="work-role">UX Designer / Front End Engineer</p>
            </div>
          </a>
        </div>
        <section class="work-lightbox" aria-hidden="true">
          <div class="lightbox-images">
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/47e05367207897.5b31bc84de459.png" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9d9c3067207897.5b31bc84dde6b.png" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c5252867207897.5b31bc84df5f7.png" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1d56767207897.5b31bc84deeab.jpg" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9184a267207897.5b31bc84dd71a.jpg" /></div>
          </div>
          <div class="lightbox-content">
            <div class="project-information">
              <p class="project-title">Mortgage App</p>
              <p class="project-role">UX Designer &amp; Front End Engineer</p>
              <p class="project-tech">Sketch | HTML | CSS | JavaScript | Angular 4.0</p>
            </div>
            <div class="project-story">
              <p>A national bank needed to update their online mortgage application for 2018 regulation changes. They were looking to roll out a new design that would increase online mortgage app conversions and expand additional products into online applications.</p>
              <p>I started by journey mapping the home buying process, leveraging my experience as a licensed Realtor, and was able to identify opportunities to design for emotion and delight. I also did a few usability reviews of the current app to establish a baseline for success and challenge the value of existing content to users.</p>
              <p>After testing a few ideas I ultimately landed on building a single page application that incrementally moved users along the happy path, breaking a long process into smaller chunks of activity. This approach allowed for branching logic so users could skip questiosn that weren't relevant to them and enabled a more conversational interface- answers from some questions populate the text of others.</p>
              <p>Working with the business teams, I laid out the logic maps, wire frames, and made a prototype using InVision. There were 205 initial screens for the new home purchase flow. All my designes were synchronized from Sketch using the Craft plugin. I validated my assumptions by leading usability labs to test new interaction patterns. During the sessions I evaluated confidence level, time on task, and accuracy as my metrics.</p>
              <p>I took my design a step further and built a responsive prototype using HTML, SaSS, and JavaScript. This gave the production app a head start, as we were under a tight deadline. I built the presentation layer of our app in Angular 4.0 and paired with other developers to fix bugs, improve accessibility, and add new Angular components and logic. Once production ramped up I made myself a proxy project manager and set up a Kanban board for story tracking. I facilitated standups and interfaced with clients daily, mitigating their feedback into digestible stories.</p>
              <div class="project-quote">
                <p>“Everyone is so excited about it as it is our first step into creating a first class experience for our customers and, I believe, will be the foundation to move us past our peers in our digital experience. Corporate marketing loved it so much that they are looking at the possibility of a commercial! All of you should take a HUGE amount of pride in the work you’ve already done and the fine tuning to get this perfect. It amazes me every time I do a demo how incredible this looks. I am extremely lucky to work with this kind of talent. You all are amazing and I thank you very much for all of the effort.”</p>
                <p>Rory F.<br>Vice President<br>Customer Experience Delivery Manager</p>
              </div>

              <p>Once we shipped our MVP we were awarded an additional project - a consumer portal for tracking application progress - and our design system was adopted for other digital account opening flows. As a team, we demonstrated the benefits of agile development and design thinking to a large organization, who is adopting this approach elsewhere. Mortgage Loan Originators refer customers to the online app because of its ease of use and are seeing increased conversions compared to the previous app.</p>
            </div>
          </div>
          <button class="lightbox-cancel">X</button>
        </section>
      </div>
      <div class="left">
        <div class="work-thumbnail" style="background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ffa6f967207803.5b31bb440867f.jpg),linear-gradient(#ffffff 10%, #ececee 60%,#cfcfd1 80%);">
          <a class="work-link">
            <div class="work-details">
              <h3 class="work-title">D.A.R.T.S.</h3>
              <p class="work-role">UX Designer / Front End Engineer</p>
            </div>
          </a>
        </div>
        <section class="work-lightbox" aria-hidden="true">
          <div class="lightbox-images">
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ffa6f967207803.5b31bb440867f.jpg" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c2cbed67207803.5b31bb44093bd.png" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/69212d67207803.5b31bb4408d50.png" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d5acb367207803.5b31bb4407f87.png" /></div>
          </div>
          <div class="lightbox-content">
            <div class="project-information">
              <p class="project-title">D.A.R.T.S.</p>
              <p class="project-role">UX Designer &amp; Front End Engineer</p>
              <p class="project-tech">Sketch | HTML | CSS</p>
            </div>
            <div class="project-story">
              <p>D.A.R.T.S. is a logistic app designed to ensure accurate parcel receiving, reduced loss from damaged items, and improved carrier rates by identifying top performers.</p>
              <p>I joined the project just in time for an MVP launch and worked to improve the user experience and design new functionality for future releases. To get up to speed I developed personas based on some field research, contextual inquiries, and interviews at the nearest warehouse. The users had several physical limitations requiring special consideration in the UI including poor vision, larger-than-normal fingers, gloves, a warehouse environment, safety glasses, and bulky device cases.</p>
              <p>Part of the redesign involved leveraging a mobile-first approach so users wouldn't need to carry iPads on forklifts or dollies. I created large, tappable icons and action items, added a dedicated keypad for improved focus and accuracy, and drew custom icons relevant to the tasks at hand. This mobile design would help increase mobility and productivity, reduce hardware costs from tablet purchases, and enable faster adoption across the company.</p>
              <p>I paired with another developer for a few days to build a functional prototype with Angular 2.0 off the ground. We were able to do a complete rebuild and get the app in front of users, who were beyond delighted with it's ease of use and robust features.</p>
              <p>Additionally, I explored adding a kiosk for truck check-ins to further streamline data entry into the app and minimize errors. I also created an admin panel to track data and access carrier metrics which were key to negotiating carrier rate contracts.</p>
            </div>
          </div>
          <button class="lightbox-cancel">X</button>
        </section>
      </div>
      <div class="left">
        <div class="work-thumbnail" style="background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/aae84167207661.5b31b9aa7fef7.jpg),linear-gradient(#ffffff 10%, #ececee 60%,#cfcfd1 80%);">
          <a class="work-link">
            <div class="work-details">
              <h3 class="work-title">Presto Shears</h3>
              <p class="work-role">Design / Branding / Front End</p>
            </div>
          </a>
        </div>
        <section class="work-lightbox" aria-hidden="true">
          <div class="lightbox-images">
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4399a767207661.5b31b9aa80a03.jpg" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/59ce4b67207661.5b31b9aa803de.jpg" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f94be167207661.5b31b9aa80e7d.gif" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/25f15467207661.5b31b9aa81b83.jpg" /></div>
          </div>
          <div class="lightbox-content">
            <div class="project-information">
              <p class="project-title">Presto Shears</p>
              <p class="project-role">Web &amp; Graphic Designer &amp; Front End Engineer</p>
              <p class="project-tech">Sketch | Affinity Designer | HTML | CSS | Hugo</p>
            </div>
            <div class="project-story">
              <p>Presto Shears wanted to elevate their online experience to the same level of their outstanding products. As a scrappy team of 2, my partner and I delivered a redesigned home page and product experience built on the ultra-performant Hugo templating engine, hosted on Netlify. As the designer I handled the visual style and presentation layer for the site along with the improved branding.</p>
              <p>I defined a color pallet that communicated the brands premium quality products, but was still edgy enough to connect with the artists and stylists who use the shears. Presto's old message boiled down to "we make great scissors", but it stopped at the product level. I encouraged the owner to empathize with what the customers use these tools for- creative expression and giving their customers an amazing new look. "Limitless cut" was born, and helped the brand build deeper customer connections around the product enabling passion.</p>
              <p>Another improvement to the experience involved product naming. We began to advocate for humanized nomenclature that could connect with customers and make discussions around the product more engaging. Flowers, Japanese swords, and painting names were all considered as potential replacements to the archaic product ID currently in use.</p>
              <p>For the website's aesthetics I wanted to give the impression of layers and paper, and to incorporate sharp, clean lines. There is gentle use of box shadows and layered pseudo elements giving a stacked effect. I used slim fonts that felt upscale but maintained legibility, and a dark color pallet for large bodies of text links, such as the footer.</p>
              <p>I worked on a fresh logo as well, inspired by the core products offered. The mark needed to be identifiable, relatable, flexible enough for web and physical printing (or stamping and engraving).</p>
            </div>
          </div>
          <button class="lightbox-cancel">X</button>
        </section>
      </div>
      <div class="left">
        <div class="work-thumbnail" style="background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa8d3144878915.5b31b0834af3e.jpg),linear-gradient(#ffffff 10%, #ececee 60%,#cfcfd1 80%);">
          <a class="work-link">
            <div class="work-details">
              <h3 class="work-title">Stitch</h3>
              <p class="work-role">UX Designer</p>
            </div>
          </a>
        </div>
        <section class="work-lightbox" aria-hidden="true">
          <div class="lightbox-images">
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/46dbaa44878915.5b31b0834c260.jpg" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4a654444878915.5b31b0834b609.jpg" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/081f7e44878915.5b31b0834be34.jpg" /></div>
            <div class="lightbox-image"><img class="photo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d6167544878915.5b31b0834ba0a.jpg" /></div>
          </div>
          <div class="lightbox-content">
            <div class="project-information">
              <p class="project-title">Stitch</p>
              <p class="project-role">Product Designer</p>
              <p class="project-tech">Sketch | Illustrator</p>
            </div>
            <div class="project-story">
              <p>The concept of Stitch is simple. The app tracks what you do all day by ambient sensors, GPS, and user input. Over time it will learn your habits and routines and produce a report based on how you spend your time. The goal is for users to simply fill in the blanks in their schedule by "Stitching" events together and reporting what they were up to in these awkward moments.</p>
              <p>My goal with Stitch was to design something borderline practical that would tie into a wearable smart device. Since the app would do the heavy lifting it seemed like a great fit for Apple Watch integration. Users are gently nudged to stitch gaps together so the interactions are minimal but effective.</p>
            </div>
          </div>
          <button class="lightbox-cancel">X</button>
        </section>
      </div>
    </div>
    <!-- Index TESTIMONIALS section-->
    <div id="testimonials">
      <div class="card-container flex-row-center">
        <div class="card">
          <p class="quote">&ldquo;Brendan is a talented, thoughtful UX and interaction designer. I am convinced he can learn and master any skill or practice to make himself a UX thought and practice lead.&rdquo;</p>
          <p class="attr">Kate C.</p>
        </div>
        <div class="card">
          <p class="quote">&ldquo;His designs clearly articulate the value a user will get out of each interaction with the page. Working with Brendan was a treat. In three days of pairing, we were able to redesign the entire application and put forward a working prototype.&rdquo;</p>
          <p class="attr">Johnny S.</p>
        </div>
        <div class="card">
          <p class="quote">&ldquo;Brendan works well as a team player. His ability to change designs and tasks to help the overall team is unparalleled. He not only will support his developers but also steps in as a developer when he can. It's amazing to have him around.&rdquo;</p>
          <p class="attr">Calvin C.</p>
        </div>
      </div>
    </div>
    <!-- Index CONTACT section-->
    <div class="flex-row-center" id="contact">
      <div class="flex-column-center" id="contact-social-container">
        <table class="contact-social-links">
          <tr>
            <td>
              <svg class="contact-social-icon" width="100%" height="100%" viewBox="0 0 20 20" style="stroke-linejoin:round;stroke-miterlimit:1.41421;">
                <g>
                  <path d="M17.681,11.334l-1.994,-1.334l1.994,-1.334l0,2.668Zm-6.884,5.654l0,-3.718l3.456,-2.311l2.789,1.866l-6.245,4.163Zm-0.797,-5.102l-2.819,-1.886l2.819,-1.886l2.819,1.886l-2.819,1.886Zm-0.797,5.102l-6.245,-4.163l2.789,-1.866l3.456,2.311l0,3.718Zm-6.884,-8.322l1.995,1.334l-1.995,1.334l0,-2.668Zm6.884,-5.654l0,3.718l-3.456,2.311l-2.789,-1.866l6.245,-4.163Zm1.594,0l6.245,4.163l-2.789,1.866l-3.456,-2.311l0,-3.718Zm8.471,4.058c-0.002,-0.011 -0.005,-0.023 -0.007,-0.034c-0.004,-0.023 -0.008,-0.045 -0.014,-0.067c-0.003,-0.013 -0.008,-0.026 -0.012,-0.039c-0.007,-0.019 -0.013,-0.039 -0.021,-0.058c-0.005,-0.013 -0.011,-0.026 -0.017,-0.039c-0.009,-0.018 -0.018,-0.035 -0.028,-0.052c-0.007,-0.013 -0.015,-0.025 -0.022,-0.038c-0.011,-0.016 -0.022,-0.032 -0.034,-0.048c-0.009,-0.012 -0.018,-0.023 -0.027,-0.035c-0.013,-0.014 -0.026,-0.029 -0.04,-0.042c-0.01,-0.011 -0.021,-0.022 -0.032,-0.032c-0.014,-0.013 -0.029,-0.026 -0.045,-0.038c-0.012,-0.009 -0.024,-0.018 -0.036,-0.027c-0.005,-0.003 -0.009,-0.007 -0.013,-0.01l-8.478,-5.652c-0.268,-0.178 -0.616,-0.178 -0.884,0l-8.478,5.652c-0.004,0.003 -0.008,0.007 -0.013,0.01c-0.012,0.009 -0.024,0.018 -0.036,0.027c-0.015,0.012 -0.031,0.025 -0.045,0.038c-0.011,0.01 -0.021,0.021 -0.032,0.032c-0.014,0.013 -0.027,0.028 -0.039,0.042c-0.01,0.012 -0.019,0.023 -0.028,0.035c-0.012,0.016 -0.023,0.032 -0.033,0.048c-0.009,0.013 -0.016,0.025 -0.023,0.038c-0.01,0.017 -0.019,0.034 -0.028,0.052c-0.006,0.013 -0.012,0.026 -0.017,0.039c-0.008,0.019 -0.014,0.039 -0.021,0.058c-0.004,0.013 -0.009,0.026 -0.012,0.039c-0.006,0.022 -0.01,0.044 -0.014,0.067c-0.002,0.011 -0.005,0.023 -0.006,0.034c-0.005,0.034 -0.008,0.069 -0.008,0.104l0,5.652c0,0.035 0.003,0.07 0.008,0.104c0.001,0.012 0.004,0.023 0.006,0.035c0.004,0.022 0.008,0.044 0.014,0.066c0.003,0.014 0.008,0.026 0.012,0.039c0.007,0.019 0.013,0.039 0.021,0.059c0.005,0.013 0.011,0.025 0.017,0.038c0.009,0.018 0.018,0.036 0.028,0.053c0.007,0.013 0.014,0.025 0.023,0.037c0.01,0.016 0.021,0.033 0.033,0.048c0.009,0.012 0.018,0.024 0.028,0.035c0.012,0.014 0.025,0.029 0.039,0.043c0.011,0.01 0.021,0.021 0.032,0.031c0.014,0.013 0.03,0.026 0.045,0.038c0.012,0.009 0.024,0.019 0.036,0.027c0.005,0.003 0.009,0.007 0.013,0.01l8.478,5.652c0.134,0.089 0.288,0.134 0.442,0.134c0.154,0 0.308,-0.045 0.442,-0.134l8.478,-5.652c0.004,-0.003 0.008,-0.007 0.013,-0.01c0.012,-0.008 0.024,-0.018 0.036,-0.027c0.016,-0.012 0.031,-0.025 0.045,-0.038c0.011,-0.01 0.022,-0.021 0.032,-0.031c0.014,-0.014 0.027,-0.029 0.04,-0.043c0.009,-0.011 0.018,-0.023 0.027,-0.035c0.012,-0.015 0.023,-0.032 0.034,-0.048c0.007,-0.012 0.015,-0.024 0.022,-0.037c0.01,-0.017 0.019,-0.035 0.028,-0.053c0.006,-0.013 0.012,-0.025 0.017,-0.038c0.008,-0.02 0.014,-0.04 0.021,-0.059c0.004,-0.013 0.009,-0.025 0.012,-0.039c0.006,-0.022 0.01,-0.044 0.014,-0.066c0.002,-0.012 0.005,-0.023 0.007,-0.035c0.004,-0.034 0.007,-0.069 0.007,-0.104l0,-5.652c0,-0.035 -0.003,-0.07 -0.007,-0.104"></path>
                </g>
              </svg>
            </td>
            <td>
              <a id="contact-codepen" href="https://codepen.io/brendanbax/" target="_blank">CodePen</a>
            </td>
          </tr>
          <tr>
            <td>
              <svg class="contact-social-icon" width="100%" height="100%" viewBox="0 0 30 30" style="stroke-linejoin:round;stroke-miterlimit:1.41421;">
                <g>
                  <path d="M15,0c-4.074,0 -4.585,0.017 -6.184,0.09c-1.597,0.073 -2.687,0.327 -3.642,0.698c-0.986,0.383 -1.823,0.896 -2.656,1.73c-0.834,0.834 -1.347,1.67 -1.731,2.656c-0.37,0.955 -0.624,2.045 -0.697,3.642c-0.073,1.599 -0.09,2.11 -0.09,6.184c0,4.074 0.017,4.585 0.09,6.185c0.073,1.596 0.327,2.687 0.697,3.641c0.384,0.986 0.897,1.823 1.731,2.656c0.833,0.834 1.67,1.347 2.656,1.731c0.955,0.37 2.045,0.624 3.642,0.697c1.599,0.073 2.11,0.09 6.184,0.09c4.074,0 4.585,-0.017 6.184,-0.09c1.597,-0.073 2.687,-0.327 3.642,-0.697c0.986,-0.384 1.822,-0.897 2.656,-1.731c0.834,-0.833 1.347,-1.67 1.731,-2.656c0.37,-0.954 0.624,-2.045 0.697,-3.641c0.073,-1.6 0.09,-2.111 0.09,-6.185c0,-4.074 -0.017,-4.585 -0.09,-6.184c-0.073,-1.597 -0.327,-2.687 -0.697,-3.642c-0.384,-0.986 -0.897,-1.822 -1.731,-2.656c-0.834,-0.834 -1.67,-1.347 -2.656,-1.73c-0.955,-0.371 -2.045,-0.625 -3.642,-0.698c-1.599,-0.073 -2.11,-0.09 -6.184,-0.09Zm0,2.703c4.005,0 4.48,0.015 6.061,0.087c1.463,0.067 2.257,0.311 2.786,0.517c0.7,0.272 1.199,0.597 1.724,1.122c0.525,0.525 0.85,1.024 1.122,1.724c0.206,0.529 0.45,1.323 0.517,2.786c0.072,1.581 0.087,2.056 0.087,6.061c0,4.005 -0.015,4.48 -0.087,6.061c-0.067,1.463 -0.311,2.257 -0.517,2.786c-0.272,0.7 -0.597,1.199 -1.122,1.724c-0.525,0.525 -1.024,0.85 -1.724,1.122c-0.529,0.206 -1.323,0.45 -2.786,0.517c-1.581,0.072 -2.056,0.087 -6.061,0.087c-4.005,0 -4.48,-0.015 -6.061,-0.087c-1.463,-0.067 -2.257,-0.311 -2.786,-0.517c-0.7,-0.272 -1.199,-0.597 -1.724,-1.122c-0.525,-0.525 -0.85,-1.024 -1.122,-1.724c-0.206,-0.529 -0.45,-1.323 -0.517,-2.786c-0.072,-1.581 -0.087,-2.056 -0.087,-6.061c0,-4.005 0.015,-4.48 0.087,-6.061c0.067,-1.463 0.311,-2.257 0.517,-2.786c0.272,-0.7 0.597,-1.199 1.122,-1.724c0.525,-0.525 1.024,-0.85 1.724,-1.122c0.529,-0.206 1.323,-0.45 2.786,-0.517c1.581,-0.072 2.056,-0.087 6.061,-0.087Z"></path>
                  <path d="M15,20c-2.761,0 -5,-2.238 -5,-5c0,-2.761 2.239,-5 5,-5c2.761,0 5,2.239 5,5c0,2.762 -2.239,5 -5,5Zm0,-12.703c-4.254,0 -7.703,3.449 -7.703,7.703c0,4.254 3.449,7.703 7.703,7.703c4.254,0 7.703,-3.449 7.703,-7.703c0,-4.254 -3.449,-7.703 -7.703,-7.703Z"></path>
                  <path d="M24.807,6.993c0,0.994 -0.806,1.8 -1.8,1.8c-0.994,0 -1.8,-0.806 -1.8,-1.8c0,-0.994 0.806,-1.8 1.8,-1.8c0.994,0 1.8,0.806 1.8,1.8Z"></path>
                </g>
              </svg>
            </td>
            <td>
              <a id="contact-instagram" href="https://www.instagram.com/brendanbax/" target="_blank">Instagram</a>
            </td>
          </tr>
          <tr>
            <td>
              <svg class="contact-social-icon" width="100%" height="100%" viewBox="0 0 30 30" style="stroke-linejoin:round;stroke-miterlimit:1.41421;">
                <g>
                  <path d="M3.557,7.798c0.038,-0.368 -0.103,-0.732 -0.378,-0.98l-2.801,-3.374l0,-0.504l8.698,0l6.722,14.744l5.911,-14.744l8.291,0l0,0.504l-2.395,2.296c-0.206,0.158 -0.309,0.416 -0.266,0.672l0,16.872c-0.043,0.256 0.06,0.515 0.266,0.672l2.339,2.297l0,0.504l-11.765,0l0,-0.504l2.423,-2.353c0.238,-0.238 0.238,-0.308 0.238,-0.672l0,-13.637l-6.736,17.11l-0.911,0l-7.843,-17.11l0,11.467c-0.065,0.482 0.095,0.968 0.434,1.316l3.152,3.823l0,0.504l-8.936,0l0,-0.504l3.151,-3.823c0.337,-0.349 0.488,-0.838 0.406,-1.316l0,-13.26Z"></path>
                </g>
              </svg>
            </td>
            <td>
              <a id="contact-medium" href="https://medium.com/@brendanbax" target="_blank">Medium</a>
            </td>
          </tr>
          <tr>
            <td>
              <svg class="contact-social-icon" width="100%" height="100%" viewBox="0 0 30 30" style="stroke-linejoin:round;stroke-miterlimit:1.41421;">
                <g>
                  <path d="M25.563,25.565l-4.448,0l0,-6.962c0,-1.66 -0.029,-3.797 -2.312,-3.797c-2.315,0 -2.669,1.81 -2.669,3.677l0,7.082l-4.445,0l0,-14.316l4.265,0l0,1.957l0.062,0c0.593,-1.125 2.043,-2.312 4.208,-2.312c4.507,0 5.339,2.963 5.339,6.819l0,7.852Zm-18.891,-16.273c-1.428,0 -2.582,-1.157 -2.582,-2.58c0,-1.425 1.154,-2.58 2.582,-2.58c1.423,0 2.579,1.155 2.579,2.58c0,1.423 -1.156,2.58 -2.579,2.58Zm2.225,16.273l-4.453,0l0,-14.316l4.453,0l0,14.316Z"></path>
                </g>
              </svg>
            </td>
            <td>
              <a id="contact-linkedin" href="https://www.linkedin.com/in/brendan-bax-81613a100/" target="_blank">LinkedIn</a>
            </td>
          </tr>
        </table>
      </div>
      <div class="flex-column-center" id="contact-form">
        <form action="" method="POST">
          <div class="form-row">
            <input type="text" id="name" name="name" required="required" />
            <label for="name" id="contact-name">Name</label>
          </div>
          <div class="form-row">
            <input type="email" id="email" name="_replyto" required="required" />
            <label for="email" id="contact-email">Email</label>
          </div>
          <div class="form-row">
            <textarea type="text" id="message" name="message" required="required"></textarea>
            <label for="message" id="contact-message">Message</label>
          </div>
          <div class="form-row">
            <button class="cta-animated" id="contact-button" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Index FOOTER section-->
    <footer class="flex-row-center">
      <div class="footer-content">
        <div id="footer-logo-container">
          <svg class="footer-logo" width="100%" height="100%" viewBox="0 0 128 100" xml:space="preserve" style="fill-rule:evenodd; clip-rule:evenodd; stroke-linejoin:round; stroke-miterlimit:1.41421;">
            <g>
              <path d="M46.25,100l-21.25,0l50,-100l21.25,0l-50,100Z" style="fill-rule:nonzero;"></path>
              <path d="M21.25,50l10.831,21.662l-10.625,21.25l-21.456,-42.912l25,-50l21.25,0l-25,50Z" style="fill-rule:nonzero;"></path>
              <path d="M125.029,56.559c1.633,3.848 2.476,7.995 2.471,12.191c0,17.259 -13.991,31.25 -31.25,31.25l-42.904,0l9.375,-18.75l33.529,0c0,0 0,0 0,0c6.857,0 12.5,-5.643 12.5,-12.5c0,-0.425 -0.021,-0.849 -0.065,-1.27c6.283,-2.187 11.958,-5.981 16.344,-10.921Z" style="fill-rule:nonzero;"></path>
              <path d="M102.981,0.73c14.023,3.076 24.519,15.572 24.519,30.52c0,17.259 -13.991,31.25 -31.25,31.25l-24.154,0l9.375,-18.75l14.779,0c6.857,0 12.5,-5.643 12.5,-12.5c0,-6.857 -5.643,-12.5 -12.5,-12.5l-2.279,0l9.01,-18.02Z" style="fill-rule:nonzero;"></path>
            </g>
          </svg>
        </div>
        <div id="footer-details">
          <p id="copy-date"></p>
          <p>Written in Pug, Sass, and VanillaJS</p>
          <p>Source code on
            <a class="footer-link" href="https://bitbucket.org/brendanbax/bax-dot-com/overview" target="_blank"> BitBucket </a>, hosted through
            <a class="footer-link" href="https://www.netlify.com/" target="_blank">Netlify</a>
          </p>
        </div>
        <div id="footer-cta">
          <a href="https://www.linkedin.com/in/brendan-bax-81613a100/" target="_blank">Hire Me</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
export default {
  name: "Home",
  components: { HeaderComponent },
  data() {
    return {
      isSigined: false
    };
  },
  created() { },
  methods: {
    onSigout() {
      sessionStorage.clear();
      // this.isSigined = false;
      this.$bus.$emit("user:afterSigoutSuccess");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/variables.scss";

// Import nav
$custom-easing-in: cubic-bezier(0.755, 0.05, 0.855, 0.06);
$custom-easing-out: cubic-bezier(0.075, 0.82, 0.165, 1);

// Import index hero
#hero {
  width: 100%;
  background: $--color-primary;
  color: $--color-white;
}

#hero-container {
  height: 100vh;
}

#hero-text-container {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    transform: translateY(-20px);
  }
}

.hero-logo {
  fill: $gold;
  height: 140px;
  width: 180px;
  margin: 10px 20px 0 0;
  opacity: 0;
  transform: translateY(0);
  animation: hero-fade 300ms 500ms forwards ease-out;
}

.hero-text {
  font-size: 86px;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 80px;
  transform: translateY(0);
  color: $--color-primary;
  background: $--color-white;
  padding: 26px;
  border-radius: 20px;
  span {
    color: $--color-primary;
  }
}

.hero-sub-text {
  font-size: 32px;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  z-index: 0;
  color: $gold;
  height: 160px;
  line-height: 80px;
  opacity: 0;
  transform: translateY(0);
  span {
    color: $gold;
  }
}

#hero-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  color: $--color-primary;
  opacity: 0;
  transform: translateY(0);
  animation: action-fade 300ms 700ms forwards;
  .scroller {
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    letter-spacing: 2px;
    font-family: "Raleway", sans-serif;
    height: 40px;
    line-height: 40px;
    animation: colory 3000ms 1500ms infinite;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      width: 120px;
      transform: translateX(-50%);
      border-radius: 12px;
      z-index: -1;

      bottom: 40px;
      background: $--color-white;
      animation: scrolly 3000ms 1500ms infinite;
    }
  }
  .arrow {
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 40px;
    background: $gold;
    &::before,
    &::after {
      content: "";
      width: 10px;
      height: 10px;
      border-left: 2px solid $gold;
      border-bottom: 2px solid $gold;
      position: absolute;
      left: -5px;
      transform: rotate(-45deg);
      transform-origin: center;
    }
    &::before {
      top: -12px;
    }
    &::after {
      top: -22px;
    }
  }
}

@keyframes hero-stripe {
  0% {
    width: 0;
    left: 50%;
  }
  100% {
    width: 100%;
    left: 0;
  }
}

@keyframes hero-fade {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes action-fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrolly {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes colory {
  0% {
    color: $--color-white;
  }
  30% {
    color: $--color-white;
  }
  40% {
    color: $--color-white;
  }
  55% {
    color: $--color-primary;
  }
  61% {
    color: $--color-primary;
  }
  100% {
    color: $--color-white;
  }
}

// Import index work
$custom-easing-in: cubic-bezier(0.755, 0.05, 0.855, 0.06);
$custom-easing-out: cubic-bezier(0.075, 0.82, 0.165, 1);

.right {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 50%;
  float: right;
  background: $white;
  border-left: 1px solid $gold;
}

.about-container {
  max-width: 40vw;
  p {
    margin-top: 24px;
  }
}

.left {
  height: 50vh;
  width: 50%;
  border-right: 1px solid $gold;
}

.keyword {
  background: $sky;
  padding: 2px 6px;
}

#work-link-button {
  color: $teal;
  max-width: 240px;
  height: 40px;
  line-height: 40px;
  margin-top: 40px;
  &::after {
    height: 36px;
  }
  &:hover,
  &:focus {
    color: $white;
  }
}

// Left side styling
.work-thumbnail {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

.work-link {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 200ms $custom-easing-out;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7) 80%);
  }
  &:hover {
    cursor: pointer;
    &::before {
      opacity: 1;
      transition: opacity 200ms $custom-easing-in;
    }
    &>.work-details {
      transition: bottom 200ms $custom-easing-in;
      bottom: 20px;
    }
  }
}

.work-details {
  color: $white;
  position: absolute;
  bottom: -120px;
  left: 20px;
  transition: bottom 200ms $custom-easing-out;
}

.work-title {
  font-size: 48px;
  line-height: 60px;
}

.work-role {
  font-size: 22px;
  line-height: 26px;
}

// Lightbox Styling
.work-lightbox {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
}

button.lightbox-cancel {
  position: fixed;
  top: 12px;
  right: 32px;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  outline: none;
  font-size: 40px;
  line-height: 44px;
  color: $black;
  font-weight: bolder;
  &:hover,
  &:focus {
    cursor: pointer;
    color: $gold;
    &::after {
      width: 60px;
      left: -8px;
      transition: width 300ms $custom-easing-in, left 300ms $custom-easing-in;
    }
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: -2px;
    left: 50%;
    width: 0;
    height: 48px;
    background: $black;
    transition: width 300ms $custom-easing-out, left 300ms $custom-easing-out;
  }
}

.lightbox-images {
  display: block;
  width: 65%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: $white;
  animation: slide-left 300ms;
}

.lightbox-content {
  display: block;
  width: 36%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  right: 0;
  top: 0;
  background: white;
  animation: slide-right 300ms;
}

.project-information {
  margin: 20px;
  .project-title {
    font-size: 24px;
    font-weight: bolder;
  }
  .project-role,
  .project-tech {
    margin-top: 0;
    margin-bottom: 6px;
  }
}

.project-story {
  max-width: 600px;
  margin: 20px;
  line-height: 24px;
  p {
    margin: 20px 0;
  }
  ol {
    padding-left: 0;
  }
}

.project-quote {
  p {
    font-style: italic;
    line-height: 32px;
    &:last-child {
      font-style: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
  &::before,
  &::after {
    content: "\2022   \2022   \2022";
    font-size: 24px;
    text-align: center;
    display: block;
    width: 100px;
    margin: 24px auto;
  }
}

.lightbox-image {
  display: block;
  width: 100%;
  background: linear-gradient(#ececee, #cfcfd1);
}

.photo {
  display: block;
  width: 100%;
}

@keyframes slide-right {
  from {
    right: -50%;
  }
  to {
    right: 0;
  }
}

@keyframes slide-left {
  from {
    left: -50%;
  }
  to {
    left: 0;
  }
}

@media screen and (max-width: 980px) {
  [aria-hidden="true"] {
    display: none;
  }
  [aria-hidden="false"] {
    display: flex;
  }

  .work-lightbox {
    flex-direction: column-reverse;
  }
  .lightbox-images {
    width: 100%;
    height: auto;
    position: relative;
    overflow-y: visible;
  }
  .lightbox-image {
    padding: 20px;
    background: #ffffff;
  }
  .lightbox-content {
    width: 100%;
    height: auto;
    position: relative;
    overflow-y: visible;
    transform: translateY(-20px);
    padding-bottom: 20px;
    margin-bottom: -20px;
  }
  .project-information {
    max-width: 600px;
    margin: 20px auto;
    padding: 0 20px;
  }
  .project-story {
    margin: 20px auto;
    padding: 0 20px;
  }
}

// Responsive
@media screen and (max-width: $medium) {
  .right {
    position: relative;
    top: auto;
    height: auto;
    width: 100%;
    float: none;
  }
  .about-container {
    margin: 40px auto;
    padding: 0 20px;
    max-width: 100%;
    p {
      line-height: 22px;
    }
  }
  .keyword {
    background: none;
    padding: 0;
  }
  #work-link-button {
    margin: 40px auto 0;
  }

  .left {
    height: 400px;
    width: 100%;
    border: none;
  }
  .work-link::before {
    opacity: 1;
    top: 314px;
  }
  .work-details {
    bottom: 10px;
  }
  .work-link:hover>.work-details {
    bottom: 10px;
  }
  .work-title {
    font-size: 32px;
    line-height: 32px;
  }
  .work-role {
    font-size: 16px;
    line-height: 26px;
  }
}

// Import index testimonials
#testimonials {
  width: 100%;
  height: 500px;
  background: url("https://images.unsplash.com/photo-1499823196937-8a4597f6f307?ixlib=rb-0.3.5&s=35a2e01eb33dcea44de45d99d4a35a90&auto=format&fit=crop&w=3397&q=80") center center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
}

.card-container {
  background: inherit;
  max-width: $large;
  min-width: $small;
  height: 500px;
  padding: 0 20px;
}

.card {
  width: 300px;
  min-height: 360px;
  position: relative;
  border-radius: 3px;
  box-shadow: 0 16px 24px -8px rgba(0, 0, 0, 0.5);
  background: inherit;
  overflow: hidden;
}

.card::before {
  content: "";
  background: inherit;
  position: absolute;
  z-index: 0;
  width: 350px;
  height: 480px;
  left: -25px;
  right: 0;
  top: -25px;
  bottom: 0;
  box-shadow: inset 0 0 0 500px rgba(255, 255, 255, 0.6);
  filter: blur(10px);
}

.quote,
.attr {
  color: black;
  font-size: 16px;
  position: relative;
  z-index: 900;
  margin: 32px;
  line-height: 28px;
  font-style: italic;
}

.attr {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-style: normal;
}

.attr::after {
  content: "";
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 1px;
  background: $black;
  opacity: 0.75;
  box-shadow: $shadow;
}

.attr::before {
  content: "";
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: $gold;
  box-shadow: $shadow;
}

@media screen and (max-width: 980px) {
  #testimonials {
    height: auto;
  }
  .card-container.flex-row-center {
    flex-direction: column;
    justify-content: space-around;
  }
  .card-container {
    height: auto;
  }
  .card {
    width: 80%;
    min-height: 220px;
    height: auto;
    margin: 20px;
    padding-bottom: 80px;
    &::before {
      width: 120%;
    }
  }
}

@media screen and (max-width: 440px) {
  .card-container {
    min-width: auto;
  }
  .card {
    width: 100%;
    margin: 20px 0;
    max-width: 100%;
    &::before {
      width: 120%;
    }
  }
}

// Import contact
$custom-easing-in: cubic-bezier(0.755,
0.05,
0.855,
0.06);
$custom-easing-out: cubic-bezier(0.075,
0.82,
0.165,
1);

#contact {
  max-width: $large;
  min-width: $small;
  min-height: 500px;
}

#contact-social-container {
  width: 50%;
  min-height: 500px;
  margin: 0 auto;
  border-right: 1px solid $gold;
  .contact-social-links {
    width: 200px;
    tr {
      height: 60px;
      td:first-child {
        text-align: center;
      }
      td:last-child {
        padding-left: 10px;
      }
    }
  }
}

#contact-codepen,
#contact-instagram,
#contact-medium,
#contact-linkedin {
  display: block;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
}

#contact-codepen::before,
#contact-instagram::before,
#contact-medium::before,
#contact-linkedin::before {
  content: "";
  width: 0;
  position: absolute;
  left: -8px;
  top: -6px;
  transition: all 300ms $custom-easing-out;
  z-index: -1;
}

#contact-codepen:hover::before,
#contact-instagram:hover::before,
#contact-medium:hover::before,
#contact-linkedin:hover::before,
#contact-codepen:focus::before,
#contact-instagram:focus::before,
#contact-medium:focus::before,
#contact-linkedin:focus::before {
  left: -8px;
  top: -6px;
  width: 100%;
  height: 30px;
  transition: all 300ms $custom-easing-in;
  outline: none;
  box-shadow: $shadow;
}

#contact-codepen {
  &::before {
    background: #fcd000;
  }
}

#contact-instagram {
  &:hover,
  &:focus {
    color: $white;
    transition: color 300ms $custom-easing-out;
  }
  &::before {
    background: radial-gradient( circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%);
  }
}

#contact-medium {
  &::before {
    background: #d7efee;
  }
}

#contact-linkedin {
  padding-top: 5px;
  &:hover,
  &:focus {
    color: $white;
    transition: color 300ms $custom-easing-in;
  }
  &::before {
    background: #0077b5;
    transform: translateY(5px);
  }
}

.contact-social-icon {
  width: 30px;
  height: 30px;
}

#contact-form {
  width: 50%;
  min-height: 500px;
  border-left: 1px solid $gold;
}

form {
  width: 100%;
  max-width: $small;
}

.form-row {
  position: relative;
  margin: 16px 0;
  overflow: hidden;
  &:last-child {
    overflow: visible;
  }
}

label {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background: $black;
  line-height: 32px;
  text-align: center;
  color: $white;
  font-weight: bolder;
  text-transform: uppercase;
  overflow: hidden;
  font-size: 13px;
  border-radius: 3px 0 0 3px;
  transition: left 300ms $custom-easing-out;
}

textarea {
  height: 80px;
  min-height: 80px;
  max-height: 200px;
  min-width: 100%;
  max-width: 100%;
  &+label {
    line-height: 60px;
  }
}

input,
textarea {
  font-family: "Raleway", sans-serif;
  display: block;
  padding: 8px 8px 8px 88px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #c7c7c7;
  border-radius: 3px;
  width: 100%;
  min-height: 32px;
  transition: padding 300ms $custom-easing-out;
  &:focus {
    border-bottom: 1px solid $teal;
    outline: none;
    padding-left: 13px;
    transition: padding 300ms $custom-easing-in;
    &+label {
      left: -75px;
      background: $teal;
      transition: left 300ms $custom-easing-in,
      background-color 300ms $custom-easing-in;
    }
  }
}

#contact-button {
  font-size: 12px;
  width: 80px;
  height: 32px;
  line-height: 28px;
  &::after {
    height: 28px;
  }
  &:focus,
  &:focus {
    outline: none;
  }
}

@media screen and (max-width: $medium) {
  #contact {
    min-width: auto;
    padding-top: 60px;
  }
  #contact.flex-row-center {
    flex-direction: column-reverse;
  }
  #contact-social-container,
  #contact-form {
    border: none;
    width: 80%;
    min-height: 300px;
  }
  #contact-form {
    border-bottom: 2px solid $gold;
    form {
      max-width: 100%;
    }
  }
}

// Import footer
$custom-easing-in: cubic-bezier(0.755,
0.05,
0.855,
0.06);
$custom-easing-out: cubic-bezier(0.075,
0.82,
0.165,
1);

footer {
  width: 100%;
  height: 100px;
  background: $black;
}

.footer-content {
  width: 100%;
  min-width: $small;
  max-width: $large;
  margin: 0 auto;
  padding: 0 20px;
  color: $white;
  display: grid;
  grid-template-columns: 80px 1fr 120px;
  grid-gap: 20px;
}

.footer-logo {
  fill: $white;
  height: 60px;
  width: 80px;
  display: inline-block;
  align-self: flex-start;
}

#footer-details {
  p::selection {
    background: white;
    color: black;
  }
}

.footer-link {
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: $teal;
    transition: height 250ms $custom-easing-out;
  }
  &:hover,
  &:focus {
    outline: none;
    &::after {
      height: 100%;
      transition: height 250ms $custom-easing-in;
    }
  }
}

#footer-cta a {
  display: block;
  position: relative;
  z-index: 1;
  width: 120px;
  height: 40px;
  background: transparent;
  box-shadow: none;
  color: $gold;
  border: 2px solid $gold;
  text-align: center;
  line-height: 40px;
  margin: 10px 0;
  font-weight: bolder;
  text-transform: uppercase;
  transition: background-color 300ms $custom-easing-out,
  color 300ms $custom-easing-out, box-shadow 300ms $custom-easing-out,
  outline 300ms $custom-easing-out;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    background: $gold;
    height: 36px;
    z-index: -1;
    transition: width 300ms $custom-easing-out, left 300ms $custom-easing-out;
  }
  &:hover,
  &:focus {
    background: $gold;
    color: $black;
    box-shadow: $shadow, 0 6px 18px rgba(0, 0, 0, 0.4);
    outline: none;
    transition: background-color 300ms $custom-easing-in,
    color 300ms $custom-easing-in, box-shadow 300ms $custom-easing-in,
    outline 300ms $custom-easing-in;
    &::after {
      left: 0;
      width: 100%;
      transition: width 300ms $custom-easing-out, left 300ms $custom-easing-out;
    }
  }
}

@media screen and (max-width: $medium) {
  footer {
    height: auto;
    padding: 20px;
  }
  .footer-content {
    display: block;
    padding: 0;
    min-width: auto;
    text-align: center;
  }
  #footer-details {
    margin: 20px 0;
    p:nth-child(2) {
      margin: 8px 0;
    }
  }
  #footer-cta a {
    margin: 0 auto;
  }
}



/* Utilities */

* {
  box-sizing: border-box;
}

.flex-column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-row-center {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.noscroll {
  overflow: hidden;
}

.cta-animated {
  display: block;
  position: relative;
  background: transparent;
  box-shadow: none;
  color: $teal;
  border: 2px solid $teal;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
  transition: background-color 300ms $custom-easing-out,
  color 300ms $custom-easing-out, box-shadow 300ms $custom-easing-out,
  outline 300ms $custom-easing-out;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    background: $teal;
    z-index: -1;
    transition: width 300ms $custom-easing-out, left 300ms $custom-easing-out;
  }
  &:hover,
  &:focus {
    background: $teal;
    color: $white;
    box-shadow: $shadow;
    outline: none;
    transition: background-color 300ms $custom-easing-in,
    color 300ms $custom-easing-in, box-shadow 300ms $custom-easing-in,
    outline 300ms $custom-easing-in;
    &::after {
      left: 0;
      width: 100%;
      transition: width 300ms $custom-easing-in, left 300ms $custom-easing-in;
    }
  }
}
</style>
