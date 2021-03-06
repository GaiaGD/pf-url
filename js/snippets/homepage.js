let homePage = `
    <div class="transition">

    <div id="circle-orbit-container" class="mx-auto">

        <div id="sun-center" class="col-6 mx-auto">
            <img src="img/hp/sunmain.svg">
        </div>
        <!-- Circles closest to the central point -->
        <div id="inner-orbit">
            <div class="inner-orbit-circles">
              <a href="#" onclick="onLinkClickGo('/coding'); return false;">
                <img src="img/hp/code.svg">
              </a>
            </div>
        </div>

        <!-- Circles second closest to the central point -->
        <div id="middle-orbit">
            <div class="middle-orbit-circles">
            <a href="#" onclick="onLinkClickGo('/design'); return false;">
                <img src="img/hp/design.svg">
            </a>
            </div>
        </div>

    </div>

    <div id='about' class="col-sm-8 mx-auto my-5">
        <p>My name is Gaia, I am a Digital Designer and Front-End developer. I have more than eight years of experience and a solid background
        in Luxury and Advertising and all things digital:
        Websites, Apps, and not only.<p>
        <p> I'm currently based in <span class="delete">Milan</span>, <span class="delete">London</span>, <span class="delete">Paris</span>, <span class="delete">Dubai</span>, Italy</p>.
    </div>

    <div id='secondLinks' class="col-sm-8 my-5 mx-auto row justify-content-around">
        <div class="col-6 col-sm-4 col-lg-3">
        <a href="#" onclick="onLinkClickGo('/design'); return false;">
            <img src="img/hp/design.svg">
        </a>
        </div>
        <div class="col-6 col-sm-4 col-lg-3">
          <a href="#" onclick="onLinkClickGo('/coding'); return false;">
            <img src="img/hp/code.svg">
          </a>
        </div>
    </div>

    <div id='misc' class="col-sm-8 mx-auto my-5">
        <p>When I'm not working, I like to keep up with all the latest news on space exploration, spend my free time helping
        rescued animals and challenge shazam on who guess the song first.</p>
    </div>

    </div>
`;