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
                The future of Web3.0. Connecting real estate in the real world
                and the metaverse, creating massive passive income potential,
                and giving true utility to NFTs. Staches NFT is your sure win in
                the NFT space.
              </p>
              <p class="font-weight-bold">Own a Stache, grow your Stash</p>
              <span class="stache-hr"></span>
              <p>
                Whitelisting for public mint in our discord.
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
              Welcome to StachesNFT where the exquisite artwork for every single
              one of the 10,000 unique Staches is only bettered by the
              handpicked utility.
            </p>
            <p>
              The StachesNFT collection has been curated by Soakmont with a
              single goal in mind: providing multiple ways to earn, save, and
              access exclusive opportunities!
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
                  <h3 class="stache-title mt-1">Innovative Real Estate</h3>
                  <span class="stache-hr"></span>
                  <p>
                    StachesNFT was created to work hand-in-hand with Soakmont
                    ($SKMT). Soakmont’s core mission is to make high end real
                    estate and private equity investment opportunities available
                    to everyone, removing the traditional barriers to
                    investment. So whether you’re looking to invest one dollar,
                    a thousand dollars or a million dollars, Soakmont will offer
                    the assets and support to meet and beat your expectations.
                  </p>
                  <p>
                    Soakmont will be developing an investment platform and their
                    own rental platform. Soakmont will also be vesting 10% then
                    20% of the total supply to StachesNFT. Here on the
                    investment platform, StachesNFT holders will be given
                    exclusive benefits and perks with Stache Pass (listed
                    below). On the rental platform side, those who have invested
                    in the crowdfunding of properties, including StachesNFT
                    holders, will see realized gains from profits. StachesNFT
                    holders will also have exclusive travel deals and perks when
                    booking through the Soakmont rental platform.
                  </p>
                  <a
                    href="https://soakmont.com"
                    class="btn btn-primary"
                    target="_new"
                    >Soakmont Website</a
                  >
                </div>
                <div class="col-12 col-lg-4 d-flex">
                  <div class="my-auto mx-auto">
                    <img
                      class="img-responsive my-4"
                      src="~/assets/img/img-soakmont.png"
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
            <h3 class="stache-title mt-1">Stache Pass</h3>
            <span class="stache-hr"></span>
            <br />
            <p class="font-weight-bold">Exclusive Deals</p>
            <p>
              Within the Soakmont investment platform, Stache Pass will allow
              users to have early access and discounted rates on tools that will
              be available. Stache Pass is a unique helping hand when it comes
              to investing strategy. It will allow users to have unique rebated
              offers and free products from Staches partners.
            </p>
            <p class="font-weight-bold">Investor Levels</p>
            <p>
              There will be a numbered sticker on the bottom left corner of each
              Stache NFT that will represent the "Investor Level". The Investor
              Level will determine what exclusive perks and incentives a holder
              will have access to with their Stache Pass. There will be 5
              Investor Levels, number 5 being the highest and 1 being the
              lowest. There is also "Premium Levels" which is solely for Genesis
              NFTs with each of those being numbered 1-5 as well.
            </p>
            <p>
              Those levels will give access to discounted rates and early access
              for investing in Soakmont Platform.
            </p>
            <p class="font-weight-bold">Entries</p>
            <p>
              Stache Pass will be given to all holders of Stache NFT. We have
              also partnered with Lucky Fairy $FAE to participate in their
              lotteries. Someone's Stache Pass will represent their amount of
              entries within all raffles, giveaways and $FAE lotteries. The
              amount of entries will be based solely on the rarity of the Stache
              NFT.
            </p>
          </div>
        </div>
      </div>

      <div class="container m-auto">
        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <div class="card stache-card shadow h-100">
              <div class="card-title">
                <h3>Standard Investor Level Rewards</h3>
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
                      - Level 1 discounted fees on Soakmont Platform.
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
                      - Level 2 discounted fees on Soakmont Platform.
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
                      - Level 3 discounted fees on Soakmont Platform.
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
                      - Level 4 discounted fees on Soakmont Platform.
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
                      - Level 5 discounted fees on Soakmont Platform.
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
                <h3>Premium Investor Level Rewards</h3>
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
                      - Level 1 premium discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries, free advanced charting tool and 15%
                      off all investment tools.
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
                      - Level 2 premium discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries and 25% off all investment tools.
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
                      - Level 3 premium discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries and 50% off personalized investing
                      consultation and guidance.
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
                      - Level 4 premium discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries, 70% off personalized investing
                      consultation & guidance and 75% off investment courses.
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
                      - Level 5 premium discounted fees on Soakmont Platform.
                    </p>
                    <p class="">
                      - Extra 25 entries, FREE personalized investing
                      consultation and FREE investment courses.
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
              Ground-breaking financial institution backing
            </h3>
            <span class="stache-hr"></span>
            <p class="font-weight-bold">The first of its kind</p>
            <p>
              Usually, having one utility is good for a NFT project, even having
              multiple utilities or being partnered with a project as
              forward-thinking as Soakmont would suffice. StachesNFT conquers
              all of this while still adding value and support.
            </p>
            <p>
              There has been an agreement made between Soakmont, StachesNFT, and
              a Canadian digital subsidiary financial institution. The terms of
              this partnership is to focus solely on Web3 projects and the
              Metaverse. There will also be focus on designing technology that
              will be used on the Soakmont investment platform that will entail
              a USD and CAD stablecoin.
            </p>

            <p>
              StachesNFT is officially the FIRST NFT project to be backed by a
              fully regulated financial institution. StachesNFT will also be
              going into agreements with the financial institution to acquire
              and crowdfund Metaverse properties. Later down the line, they will
              also be building their own Metaverse where StachesNFT and Soakmont
              will be looking to acquire land, as well as, other top Metaverse
              properties.
            </p>
            <p>
              This is an extensive step forward for StachesNFT and the NFT
              industry as a whole. This gives StachesNFT and Soakmont
              flexibility, worldwide reach, and a one of a kind backing. This is
              a cornerstone for the industry and we will continue to develop
              many products that will be a prime example of what the NFT and
              Fintech industry is fully capable of.
            </p>
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
              src="~/assets/img/img-alien-staches.png"
              alt="Stache NFT Showcase"
            />
          </div>
          <div class="col-12 col-md-7">
            <h3 class="stache-title mt-1">Travel Perks</h3>
            <span class="stache-hr"></span>
            <p class="font-weight-bold">The best way to travel</p>
            <p>
              Real estate is not the only perk with StachesNFT. In addition to
              exclusive deals on the Soakmont rental app, we want to help
              StachesNFT holders even further. In order to get to the amazing
              rental properties all across the world, you need to get there
              first. StachesNFT will be offering travel discounts and exclusive
              perks for holders through the Soakmont rental platform.
            </p>

            <p>
              These will entail discounted flights, reimbursement on rental
              vehicles, and exclusive offers on events and activities. Each of
              these offers will be dependent on where someone is traveling and
              will be constantly evolving as we grow. StachesNFT is the unique
              Web3 NFT that brings full utilization to the real world. We will
              continue to adapt with time in order to bring the most exciting
              experience.
            </p>
            <p>
              Unlike Stache Pass, the level of the NFT will not determine the
              travel perks one will receive. All StachesNFT holders will be
              given equal rights with this utility. However with the addition of
              the Golden Stache, which someone will receive once they own 10
              StachesNFTs, we will be giving these holders extra deals. This
              could emerge to be a free flight, free events or activities, or
              even fully paid rental property for one or more nights. All
              exclusive offers will be ever changing and/or growing.
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
