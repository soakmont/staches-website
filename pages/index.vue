<template>
  <div>
    <section class="coming-soon-area d-flex">
      <div class="container m-auto">
        <div class="coming-soon-content row py-2">
          <div class="col-12 col-md-6 d-flex">
            <div class="m-auto">
              <h3 class="stache-title small">Whitelist minting in:</h3>
              <span class="stache-hr"></span>
              <div id="timer">
                <div id="days" class="text-center">
                  {{ days }} <span>Days</span>
                </div>
                <div id="hours" class="text-center">
                  {{ hours }} <span>Hours</span>
                </div>
                <div id="minutes" class="text-center">
                  {{ minutes }} <span>Minutes</span>
                </div>
                <div id="seconds" class="text-center">
                  {{ seconds }} <span>Seconds</span>
                </div>
              </div>
              <hr />
              <p>
                The only NFT collection backed by a regulated Financial
                Institution.
              </p>
              <p>
                StachesNFT is Soakmont's official utility-packed NFT that gives
                a maximum of 10,000 holders exclusive ways to earn, save, and
                access unbeatable DeFi and real world opportunities. Don’t miss
                your chance to own a Stache and grow your stash.
              </p>
              <span class="stache-hr"></span>
              <p>
                Join our discord to get whitelisted and guarantee your Stache
                today:
                <span class="font-weight-bold">Join now!</span>
              </p>
              <a
                href="https://discord.gg/staches"
                class="btn btn-primary"
                target="_new"
                >Join Staches Discord</a
              >
              <!--<div v-if="!getAccount"><p class="mint-text">Please connect your wallet</p></div>
                            <div v-else-if="mintStarted" class="mint-form">
                            <p class="total-price mint-text small">Choose between 1 and 10 NFTs</p>
                            <input v-model="mintQuantity" type="number" class="form-control w-auto d-inline-block my-2" />
                            <a href="javascript:void(0)" @click="mintNFT" class="btn btn-primary mt-2">Mint</a>
                            <p class="total-price mint-text">Total price: {{ totalMintPrice }} ETH</p>
                            </div>
                            <div v-else>
                                <p class="mint-text">Minting not started yet!</p>
                            </div>-->
            </div>
          </div>
          <div class="col-12 col-md-6 text-center">
            <img
              class="img-responsive mt-2"
              src="~/assets/img/header-stache.png"
              alt="Stache NFT Header Image"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="about-section" class="about d-flex bg-pattern-1">
      <div class="container m-auto">
        <div class="row mt-5">
          <div class="col-12 col-md-5 text-center">
            <img
              class="img-responsive"
              src="~/assets/img/img-about.png"
              alt="Stache NFT Showcase"
            />
          </div>
          <div class="col-12 col-md-6 px-3">
            <h3 class="stache-title mt-5">About Staches</h3>
            <span class="stache-hr"></span>
            <p>
              StachesNFT represents a step change for the NFT space. As well as
              providing the elements you would expect from high quality NFTs -
              exquisite artwork and rarity - StachesNFT goes way beyond and adds
              a range of unbeatable real world utility and incredible benefits
              across the revolutionary products offered by the Soakmont Group.
            </p>
            <p>
              On top of this, StachesNFT is the only NFT that is backed by a
              regulated financial institution - Atlantic Trust Company.
            </p>
            <p>
              The exclusive, limited StachesNFT collection sets a new benchmark
              in quality and utility that all future NFT projects will be
              compared to - don’t miss out on your chance to own a Stache and
              grow your stash.
            </p>
            <a
              href="https://discord.gg/staches"
              class="btn btn-primary mt-4"
              target="_new"
              >Join Staches Discord</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="soakmont d-flex">
      <div class="container m-auto">
        <div class="row mt-5">
          <div class="col-12 text-left">
            <div class="card soakmont-card">
              <div class="row">
                <div class="col-12 col-lg-8">
                  <h3 class="stache-title mt-1">StachesNFT</h3>
                  <span class="stache-hr"></span>
                  <p>
                    So, you want to be one of the select few who can proudly
                    boast they own a <i>StachesNFT</i>, that means after our
                    mint you can tell people that your <i>StachesNFT</i> has:
                  </p>
                  <ul>
                    <li>Exquisite unique artwork</li>
                    <li>
                      A rarity score based on a randomly generated properties
                    </li>
                    <li>
                      Access to an unrivaled range of utility (detailed below)
                    </li>
                  </ul>
                  <p>
                    And following mint, on reveal there are two incredible
                    one-time-only offers:
                  </p>
                  <ul>
                    <li>
                      Will you get a <b>Soaked Stache</b>? There are only 10 of
                      these in the entire collection and each one will see the
                      holder receive a <u>$10,000 reward.</u>
                    </li>
                    <li>
                      Check your properties carefully, if your
                      <i>StachesNFT</i> has a <b>yacht background</b>, then
                      congratulations! This is your ticket to a one-of-a-kind
                      yacht party. There are only 25 of these super rare Staches
                      - will you be lucky enough to get one?
                    </li>
                  </ul>
                  <p>
                    Finally, get ready to find out just how golden holding is
                    and meet the rarely seen <b>GoldenStache</b> - this
                    exclusive NFT will be given to anyone who holds 10 or more
                    Staches and unlocks even more benefits for holders…
                  </p>
                  <p>
                    There’s still more. Much more. Let’s take a look at the
                    amazing utility you get with your StachesNFT…
                  </p>
                </div>
                <div class="col-12 col-lg-4 d-flex">
                  <div class="my-auto mx-auto">
                    <img
                      class="img-responsive my-4"
                      src="~/assets/img/img-alien-staches.png"
                      alt="Soakmont Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="utility-section" class="stache-pass">
      <div class="container m-auto">
        <div class="row py-5">
          <div class="col-12 col-md-4 my-auto text-center py-4">
            <img
              class="img-responsive"
              src="~/assets/img/img-stache-pass.png"
              alt="Stache NFT Showcase"
            />
          </div>
          <div class="col-12 col-md-8">
            <h3 class="stache-title mt-1">Unique, Unbeatable Utility</h3>
            <span class="stache-hr"></span>
            <br />
            <p>
              Our utility has been thoughtfully handpicked and designed to give
              holders peerless utility across a range of industries and
              settings.
            </p>
            <p>
              <i>StachesNFT</i> gives you useful utility every single day.
              Through our cutting-edge web3 NFT wallet detection technology,
              <i>StachesNFT</i> will unlock <b>discounts and cashback</b> at
              thousands of retailers on major ecommerce platforms.
            </p>
            <p>
              As the
              <b>only NFT backed by a regulated financial institution</b>,
              <i>StachesNFT</i> holders will receive premium services from
              Atlantic Trust Company’s soon-to-be-launched digital subsidiary as
              a result of ATC’s agreement with Soakmont (more on that below!).
            </p>
            <p>
              The rarity of your <i>StachesNFT</i> is linked to the number of
              entries you’ll get in our <b>regular giveaways</b> for incredible
              real world and DeFi prizes.
            </p>
            <p>
              And of course being Soakmont’s official NFT,
              <i>StachesNFT</i> holders unlock incredible benefits across the
              entire Soakmont ecosystem:
            </p>
            <ul>
              <li>
                <i>Soakmont Investment Platform</i>:
                <b>20% of the tokens</b> from this revolutionary real estate and
                private equity investment platform goes to StachesNFT DAO. Your
                StachesNFT unlocks <b>StachePass</b> (detailed below) for even
                greater benefits on the SIP.
              </li>
              <li>
                <i>Soakmont Rental and Travel Platform</i>: You will get early
                <b>access, discounts and rewards</b> on travel related bookings
                and experiences. <b>GoldenStache</b> holders will get even more.
              </li>
              <li>
                <i>Soakmont DeFi App</i>: <b>Stakers of StachesNFT</b> will be
                rewarded for participating in the ecosystem.
              </li>
            </ul>
            <p>
              As a StachesNFT holder you also unlock our coveted
              <i>StachePass</i> for use with the Soakmont Investment Platform
              that also gives you:
            </p>
            <ul>
              <li>
                Exclusive and/or early access to investment opportunities.
              </li>
              <li>
                Every <i>StachesNFT</i> has a randomly generated Level 1, 2, 3,
                4, or 5 that entitles you to increasing additional utility
                across the <i>Soakmont</i> ecosystem, and this is increased even
                further if you own a GenesisNFT:
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container m-auto">
        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <div class="card stache-card shadow h-100">
              <div class="card-title">
                <h3>StachePass Level Rewards</h3>
              </div>
              <div class="card-body">
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-1-s.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 1</p>
                    <p class="">
                      - Level 1 discounted fees on Soakmont Investment Platform.
                    </p>
                    <p class="">- Free advanced charting tool.</p>
                  </div>
                </div>
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-2-s.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 2</p>
                    <p class="">
                      - Level 2 discounted fees on Soakmont Investment Platform.
                    </p>
                    <p class="">- 10% off all investment tools.</p>
                  </div>
                </div>
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-3-s.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 3</p>
                    <p class="">
                      - Level 3 discounted fees on Soakmont Investment Platform.
                    </p>
                    <p class="">
                      - 30% off personalized investing consultation and
                      guidance.
                    </p>
                  </div>
                </div>
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-4-s.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 4</p>
                    <p class="">
                      - Level 4 discounted fees on Soakmont Investment Platform.
                    </p>
                    <p class="">
                      - 40% off personalized investing consultation and guidance
                      and 75% off investment courses.
                    </p>
                  </div>
                </div>
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-5-s.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 5</p>
                    <p class="">
                      - Level 5 discounted fees on Soakmont Investment Platform.
                    </p>
                    <p class="">
                      - free personalized investing consultation and guidance,
                      free investment courses and 25% off all investment tools
                      available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="card stache-card shadow h-100">
              <div class="card-title">
                <h3>GenesisPass Level Rewards</h3>
              </div>
              <div class="card-body">
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-1-p.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 1</p>
                    <p class="">
                      - Level 1 Genesis discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries on giveaways, free advanced charting
                      tool and 15% off all investment tools.
                    </p>
                  </div>
                </div>
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-2-p.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 2</p>
                    <p class="">
                      - Level 2 Genesis discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries on giveaways and 25% off all investment
                      tools.
                    </p>
                  </div>
                </div>
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-3-p.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 3</p>
                    <p class="">
                      - Level 3 Genesis discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries on giveaways and 50% off personalized
                      investing consultation and guidance.
                    </p>
                  </div>
                </div>
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-4-p.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 4</p>
                    <p class="">
                      - Level 4 Genesis discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries on giveaways, 70% off personalized
                      investing consultation & guidance and 75% off investment
                      courses.
                    </p>
                  </div>
                </div>
                <div class="stache-level">
                  <div class="icon">
                    <img
                      class="img-responsive"
                      src="~/assets/img/stache-level/img-level-5-p.png"
                      alt="Stache Standard Level 1"
                    />
                  </div>
                  <div class="text">
                    <p class="font-weight-bold">Level 5</p>
                    <p class="">
                      - Level 5 Genesis discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries on giveaways, FREE personalized
                      investing consultation and FREE investment courses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="stache-perks">
      <div class="container m-auto">
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <h3 class="stache-title mt-1">
              Groundbreaking financial institution backing
            </h3>
            <span class="stache-hr"></span>
            <p class="font-weight-bold">The first of its kind</p>
            <p>
              <i>Soakmont</i> has reached an agreement with a Canadian regulated
              Financial Institution: <b>Atlantic Trust Company (ATC)</b>. This
              partnership will create a regulated entity which will cater to the
              cryptocurrency and blockchain industry, providing stability and
              insurance for investors. The agreement will see the following
              initial outputs:
            </p>
            <ul style="color: white">
              <li>
                Launch of a new digital subsidiary Trust/Financial Institution
                in 2022.
              </li>
              <li>
                Launch of fully secure, 1:1 fiat asset-backed CAD and USD
                stablecoins - these will be fully regulated and regularly
                audited.
              </li>
              <li>
                ATC and its subsidiary will ensure the forthcoming Soakmont
                Investment Platform is fully regulated for asset tokenization
                and fractional ownership.
              </li>
              <li>
                ATC’s digital subsidiary will provide premium services to
                StachesNFT holders
              </li>
              <li>
                This agreement makes StachesNFT the only NFT backed by a
                regulated financial institution.
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 my-auto text-center pt-4">
            <img
              class="img-responsive"
              src="~/assets/img/img-crypto.png"
              alt="Stache NFT Showcase"
            />
          </div>
        </div>
        <div class="splitter text-center my-4">
          <img
            class="img-responsive"
            src="~/assets/img/img-pellet.png"
            alt="Stache NFT Pellet"
          />
        </div>
        <div class="row pb-5">
          <div class="col-12 col-md-5 my-auto text-center py-0">
            <img
              class="img-responsive"
              style="max-width: 280px"
              src="~/assets/img/img-soakmont-white.png"
              alt="Stache NFT Showcase"
            />
          </div>
          <div class="col-12 col-md-7">
            <h3 class="stache-title mt-1">Soakmont Group Inc</h3>
            <span class="stache-hr"></span>
            <p>
              The Soakmont Group, Inc is a financial technology company focused
              on utilizing the transparency and efficiency of blockchain and
              Web3 across a range of industries and products.
            </p>

            <p>
              Soakmont is developing a range of cutting edge Web3 and blockchain
              technologies to create a range of fully regulated and unbeatable
              products including: the Soakmont Investment Platform, Soakmont
              DeFi App, Soakmont Rental and Travel Platform - StachesNFT holders
              will benefit from a range of exclusive offers, discounts and other
              perks across all of these platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="roadmap-section" class="stache-roadmap">
      <div class="container m-auto">
        <div class="row pt-5">
          <div class="col-12 text-center mb-4">
            <h3 class="stache-title mt-1 text-center">Launch & Development</h3>
            <span class="stache-hr mx-auto"></span>
            <p>Connecting the dots backward will be epic. Here are the dots:</p>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>5%</h6>
              </div>
              <div class="content">
                <h6>WELCOME TO THE METAVERSE</h6>
                <span class="stache-hr"></span>
                <p>
                  Staches NFT will buy lands in Sandbox or Decentraland Land,
                  voted by Stache Holders. Any future revenue from these lands
                  will be distributed among staches NFT holders who hold for a
                  minimum of 6 months.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>10%</h6>
              </div>
              <div class="content">
                <h6>BIG ANNOUNCEMENT PARTY</h6>
                <span class="stache-hr"></span>
                <p>
                  The prizes are sent to the giveaway winners; a big party is
                  organized on our lands in the metaverse for the announcement.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>15%</h6>
              </div>
              <div class="content">
                <h6>PRIVILEGED DEALS</h6>
                <span class="stache-hr"></span>
                <p>
                  Staches NFT will give its holders access to early
                  international in real life and metaverse real estate
                  crowdfunding deals offered by Soakmont investment. You can now
                  invest in the most hyped real estate deals without
                  limitations.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>20%</h6>
              </div>
              <div class="content">
                <h6>DEPLOYMENT OF $SOAK</h6>
                <span class="stache-hr"></span>
                <p>
                  Staches NFT holders will own 10% of all revenue of the $SOAK
                  Tokens. Multi-million dollar real estate deals will be closed
                  using $SOAK through our Soakmont crowdfunding real estate
                  investment platform. We are the first platform to crowdfund in
                  real life and metaverse real estate deals, and revenue will be
                  distributed among Stache NFT holders.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>25%</h6>
              </div>
              <div class="content">
                <h6>STAKING PROTOCOL</h6>
                <span class="stache-hr"></span>
                <p>
                  We will enable the ability to allow our Stache NFT holders to
                  stake their NFTs for $SOAK distribution and generate passive
                  income.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>35%</h6>
              </div>
              <div class="content">
                <h6>ANNUAL SOAKMONT REAL ESTATE DAY</h6>
                <span class="stache-hr"></span>
                <p>
                  Free access to the coveted annual Soakmont Real Estate
                  Conference, giving you access to top investment opportunities
                  worldwide and in the metaverse, as well as insights into
                  current and future trends to help inform your future
                  investment decisions.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>40%</h6>
              </div>
              <div class="content">
                <h6>DONATION</h6>
                <span class="stache-hr"></span>
                <p>
                  A $50,000.00 donation is given to foundations to fight against
                  poverty
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>50%</h6>
              </div>
              <div class="content">
                <h6>ECOM DEALS</h6>
                <span class="stache-hr"></span>
                <p>
                  Stache Pass: access to thousands of discounts on major
                  eCommerce platforms. We are utilizing cutting-edge web3 wallet
                  NFT detection technology to save you money on the things you
                  buy.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>75%</h6>
              </div>
              <div class="content">
                <h6>RAISE THE FLOOR PRICE</h6>
                <span class="stache-hr"></span>
                <p>
                  Implementation of diverse strategies to raise the floor price.
                  5% of secondary sales are reserved for sweeps.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>85%</h6>
              </div>
              <div class="content">
                <h6>FREE NFT</h6>
                <span class="stache-hr"></span>
                <p>
                  Meet the Golden Stache, the rarest NFT of all, which you gain
                  access to when you purchase 10 Staches NFT. There will also be
                  10 Soaked Stache NFTs randomly generated in the mint, giving a
                  $10,000 USD reward to those lucky enough to mint it.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>90%</h6>
              </div>
              <div class="content">
                <h6>FIRST DEAL CLOSED</h6>
                <span class="stache-hr"></span>
                <p>
                  Our first premium real estate deal is closed, and the revenue
                  will be split among the Stache NFT holders.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-4">
            <div class="card roadmap-card">
              <div class="percentage">
                <h6>100%</h6>
              </div>
              <div class="content">
                <h6>ROYALTIES</h6>
                <span class="stache-hr"></span>
                <p>
                  Staches NFT will deliver 20% royalties on every dollar
                  generated by Soakmont investment to holders who have held
                  their Stache NFT for a minimum of 6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="splitter text-center my-2">
      <img
        class="img-responsive"
        src="~/assets/img/img-pellet.png"
        alt="Stache NFT Pellet"
      />
    </section>
    <section id="team-section" class="stache-team pb-5">
      <div class="container m-auto">
        <div class="row">
          <div class="title-holder col-12 text-left mt-4">
            <h3 class="stache-title mt-1">Staches' Team</h3>
            <span class="stache-hr"></span>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="team-member row">
              <div class="col-12 col-sm-4">
                <img
                  class="img-responsive"
                  src="~/assets/img/team/img-yb.png"
                  alt="Stache NFT Pellet"
                />
              </div>
              <div class="col-12 col-sm-8 d-flex">
                <div class="my-auto">
                  <h6>YB</h6>
                  <p>
                    YB Soﬂware engineer with a solid experience in blockchain
                    and real estate. He’s managing the project development. When
                    he‘s not coding, he lives in a tent.
                  </p>
                  <a href="https://twitter.com/O_yb_O" target="_blank"
                    ><font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-2x"
                  /></a>
                </div>
              </div>
            </div>
            <div class="team-member row">
              <div class="col-12 col-sm-4">
                <img
                  class="img-responsive"
                  src="~/assets/img/team/img-steve-mayer.png"
                  alt="Stache NFT Pellet"
                />
              </div>
              <div class="col-12 col-sm-8 d-flex">
                <div class="my-auto">
                  <h6>STEVEO</h6>
                  <p>
                    6 years of experience in sales and marketing. Owns multiple
                    businesses. He spends most of his free time with his kids
                    and fishing the rest of the time.
                  </p>
                  <a href="https://twitter.com/SOAKedSteveo" target="_blank"
                    ><font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-2x"
                  /></a>
                </div>
              </div>
            </div>
            <div class="team-member row">
              <div class="col-12 col-sm-4">
                <img
                  class="img-responsive"
                  src="~/assets/img/team/img-stazzi.png"
                  alt="Stache NFT Pellet"
                />
              </div>
              <div class="col-12 col-sm-8 d-flex">
                <div class="my-auto">
                  <h6>STAZZI</h6>
                  <p>
                    Corporate Marketing, Sales, HR. & Management experience.
                    When he's not working on DeFi projects, he's coaching or
                    watching soccer.
                  </p>
                  <a href="https://twitter.com/RealStazzi" target="_blank"
                    ><font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-2x"
                  /></a>
                </div>
              </div>
            </div>
            <div class="team-member row">
              <div class="col-12 col-sm-4">
                <img
                  class="img-responsive"
                  src="~/assets/img/team/img-scribbles.png"
                  alt="Stache NFT Pellet"
                />
              </div>
              <div class="col-12 col-sm-8 d-flex">
                <div class="my-auto">
                  <h6>SCRIBBLES</h6>
                  <p>
                    Operations supervisor and owns a wealth management firm in
                    the US. When he's not working on DeFi projects he’s training
                    and coaching ju-jitsu; or telling YB he needs to work more.
                  </p>
                  <a href="https://twitter.com/Michael11879885" target="_blank"
                    ><font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-2x"
                  /></a>
                </div>
              </div>
            </div>
            <div class="team-member row">
              <div class="col-12 col-sm-4">
                <img
                  class="img-responsive"
                  src="~/assets/img/team/img-hoole-26.png"
                  alt="Stache NFT Pellet"
                />
              </div>
              <div class="col-12 col-sm-8 d-flex">
                <div class="my-auto">
                  <h6>HOOLE26</h6>
                  <p>
                    Years of strategy development and delivery on multi-million
                    dollar programmes. Spare time is wasted believing Manchester
                    United might win their next game...
                  </p>
                  <a href="https://twitter.com/hoole26" target="_blank"
                    ><font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-2x"
                  /></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="team-member row">
              <div class="col-12 col-sm-4">
                <img
                  class="img-responsive"
                  src="~/assets/img/team/img-sal.png"
                  alt="Stache NFT Pellet"
                />
              </div>
              <div class="col-12 col-sm-8 d-flex">
                <div class="my-auto">
                  <h6>ReadingKing</h6>
                  <p>
                    Managing the family’s supermarket, community manager,
                    useless at heart, and part time mate-Husband.
                  </p>
                  <a href="https://twitter.com/Readingking3" target="_blank"
                    ><font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-2x"
                  /></a>
                </div>
              </div>
            </div>
            <div class="team-member row">
              <div class="col-12 col-sm-4">
                <img
                  class="img-responsive"
                  src="~/assets/img/team/img-secure-88.png"
                  alt="Stache NFT Pellet"
                />
              </div>
              <div class="col-12 col-sm-8 d-flex">
                <div class="my-auto">
                  <h6>SECURE88</h6>
                  <p>Advanced trader responsible for the SOAK trading room.</p>
                </div>
              </div>
            </div>

            <img
              class="img-responsive"
              src="~/assets/img/img-software-engineer.png"
              alt="Stache NFT Pellet"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import nftABI from "@/assets/abi/StachesABI";
export default {
  name: "Index",
  data() {
    return {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
      endTime: new Date("July 09, 2022 16:00:00 EST"),
      maxMint: 10,
      mintCost: 0.1,
      mintQuantity: 3,
      mintStarted: false,
    };
  },
  computed: {
    ...mapGetters({
      getAccount: "getAccount",
    }),
    totalMintPrice() {
      return parseFloat(this.mintQuantity * this.mintCost).toFixed(3);
    },
  },
  created() {
    setInterval(() => {
      this.commingSoonTime();
    }, 1000);
    /**this.$swal.fire({
            title: 'Pay Attention!',
            text: "Make sure you have a Genesis spot before minting. In case you've minted during Genesis without having a Genesis spot, you will not be eligible to enter the raffles with any NFTs you purchase through Genesis (Lambo and other Prizes).",
            icon: 'warning',
        });**/
  },
  methods: {
    validateMintQuantity() {
      return (
        parseInt(this.mintQuantity) >= 1 && parseInt(this.mintQuantity) <= 10
      );
    },
    commingSoonTime() {
      let endTime = this.endTime;
      if (new Date() > endTime) {
        this.days = "00";
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
        this.mintStarted = true;
        return;
      }
      let endTimeParse = Date.parse(endTime) / 1000;
      let now = new Date();
      let nowParse = Date.parse(now) / 1000;
      let timeLeft = endTimeParse - nowParse;
      let days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - days * 86400) / 3600);
      let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      let seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );
      if (days < "10") {
        days = "0" + days;
      }
      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    },
    async mintNFT() {
      if (!this.validateMintQuantity()) {
        this.$swal.fire({
          title: "Error",
          text: "Number of mints must be between 1 and 10",
          icon: "error",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-danger btn-fill",
          },
        });
        return;
      }
      const self = this;
      try {
        const accounts = await window.web3.eth.getAccounts();
        if (accounts.length > 0) {
          this.loading = true;
          const account = accounts[0];

          const ethUtils = window.web3.utils;
          const gasPrice = await window.web3.eth.getGasPrice();

          const nftContract = new window.web3.eth.Contract(
            nftABI.abi,
            process.env.NFT_CONTRACT_ADDRESS
          );

          const ethToSend = ethUtils.toWei(self.totalMintPrice, "ether");

          console.log(gasPrice);

          const adjustedGasPrice = new ethUtils.BN(gasPrice)
            .add(new ethUtils.BN(15000000000))
            .toString();
          const gasLimit = await nftContract.methods
            .mint(this.mintQuantity)
            .estimateGas({
              from: account,
              gasPrice: adjustedGasPrice,
              value: ethToSend,
            });

          const mintedNFTTransaction = await nftContract.methods
            .mint(this.mintQuantity)
            .send({
              from: account,
              gasPrice: adjustedGasPrice,
              gasLimit: gasLimit,
              value: ethToSend,
            });
          this.loading = false;
          if (mintedNFTTransaction.status) {
            this.$swal.fire({
              icon: "success",
              title: "Mint transaction confirmed",
            });
          }
        }
      } catch (e) {
        this.loading = false;
        let currentError = e.message ? e.message : e;
        this.$swal.fire({
          title: "Error",
          text: currentError,
          icon: "error",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-danger btn-fill",
          },
        });
      }
    },
  },
};
</script>

<style>
p.mint-text {
  font-family: Roboto;
  font-size: 24px;
  font-weight: 900;
  color: #30261d;
}

p.mint-text.small {
  font-size: 28px;
}

@media all and (max-width: 550px) {
  p.mint-text {
    font-size: 26px;
  }

  p.mint-text.small {
    font-size: 22px;
  }
}

input.form-control {
  border-radius: 20px;
  border: 2px solid #d8a462;
  height: 42px;
  text-align: center;
}
</style>
