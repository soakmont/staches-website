<template>
    <div>
        <section class="coming-soon-area d-flex">
            <div class="container m-auto">
                <div class="coming-soon-content row py-5">
                    <div class="col-12 col-md-6 d-flex">
                        <div class="m-auto">
                            <h3 class="stache-title small">Whitelist minting in:</h3>
                            <span class="stache-hr"></span>
                            <div id="timer">
                                <div id="days" class="text-center">{{days}} <span>Days</span></div>
                                <div id="hours" class="text-center">{{hours}} <span>Hours</span></div>
                                <div id="minutes" class="text-center">{{minutes}} <span>Minutes</span></div>
                                <div id="seconds" class="text-center">{{seconds}} <span>Seconds</span></div>
                            </div>
                            <hr/>
                            <p>
                                The NFT of the Real Estate, from the real world and in the metaverse.
                            </p>
                            <p>
                                Be part of the club, join the Stache Pass.
                            </p>
                            <span class="stache-hr"></span>
                            <p>
                                NFT Sale Whitelisting on discord
                            </p>
                            <a href="https://discord.gg/staches" class="btn btn-primary" target="_new">Join Staches Discord</a>
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
                        <img class="img-responsive mt-5" src="~/assets/img/header-stache.png" alt="Stache NFT Header Image"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="about d-flex">
            <div class="container m-auto">
                <div class="row mt-5">
                    <div class="col-12 col-md-5 text-center">
                        <img class="img-responsive" src="~/assets/img/img-about.png" alt="Stache NFT Showcase"/>
                    </div>
                    <div class="col-12 col-md-6 px-3">
                        <h3 class="stache-title mt-5">About the Staches</h3>
                        <span class="stache-hr"></span>
                        <p>
                        StachesNFT is an Official Soakmont ($SOAK) NFT Collection of 10000 handsomely mustached world travelers. Each NFT will carry a weighted number of entries into monthly reward lotteries performed by the Lucky Fairy ($FAE) ecosytems, along with benefits in Lucky Fairy, Soakmont and other partners through the innovative Stache Pass.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="splitter text-center my-5">
            <img class="img-responsive" src="~/assets/img/img-pellet.png" alt="Stache NFT Pellet"/>
        </section>
        <section class="stache-pass">
            <div class="container m-auto">
                <div class="row pb-5">
                    <div class="col-12 col-md-8">
                        <h3 class="stache-title mt-1">Stache Pass</h3>
                        <span class="stache-hr"></span>
                        <br/>
                        <p class="font-weight-bold">
                            Exclusive Deals
                        </p>
                        <p>
                            Within the Soakmont investment platform, Stache Pass will allow users 
                            to have early access and discounted rates on tools that will be available. 
                            Stache Pass is a unique helping hand when it comes to investing strategy. 
                            There will be exclusive investment webinars and in person training sessions 
                            available. It will also allow users to have unique rebated offers and free 
                            products from Stache partners. For example, there will be online investment courses, 
                            retail products and much more to be announced with upcoming partnerships.
                        </p>
                        <p class="font-weight-bold">
                            Investor Levels
                        </p>
                        <p>
                            There will be a numbered sticker on the bottom left corner of each Stache NFT 
                            that will represent the "Investor Level". The Investor Level will determine what 
                            exclusive perks and incentives a holder will have access to with their Stache Pass. 
                            There will be 5 Investor Levels, number 5 being the highest and 1 being the lowest. 
                            There is also "Premium Levels" which is solely for Genesis NFTs with each of those 
                            being numbered 1-5 as well.
                        </p>
                        <p>
                            Those levels will give access to discounted rates and early access for investing in Soakmont Platform.
                        </p>
                        <p class="font-weight-bold">
                            Entries
                        </p>
                        <p>
                            Stache Pass will be given to all holders of Stache NFT. 
                            It will represent a holder's amount of entries within all raffles, 
                            giveaways and lotteries. The entries will range from 1-50 all of which 
                            are based solely on the rarity of the Stache NFT.
                        </p>
                    </div>
                    <div class="col-12 col-md-4 my-auto text-center py-4">
                        <img class="img-responsive" src="~/assets/img/img-stache-pass.png" alt="Stache NFT Showcase"/>
                    </div>
                </div>
            </div>

            <div class="container m-auto">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="card stache-card shadow mb-4">
                            <div class="card-title">
                                <h3>Standard Investor Level Rewards</h3>
                            </div>
                            <div class="card-body">
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-1-s.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 1</p>
                                        <p class=""><i class="fa fa-check"></i>1% discounted fees on Soakmont Platform.</p>
                                        <p class="">15% off webinars and free advanced charting tool.</p>
                                    </div>
                                </div>
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-2-s.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 2</p>
                                        <p class="">
                                            20% off webinars and 10% off all investment tools.
                                        </p>
                                    </div>
                                </div>
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-3-s.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 3</p>
                                        <p class="">
                                            30% off webinars and 30% off personalized investing consultation and guidance.
                                        </p>
                                    </div>
                                </div>
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-4-s.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 4</p>
                                        <p class="">
                                            40% off webinars, 40% off personalized investing consultation and guidance and 
                                            75% off investment courses.
                                        </p>
                                    </div>
                                </div>
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-5-s.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 5</p>
                                        <p class="">
                                            75% off webinars, free personalized investing consultation and guidance, 
                                            free investment courses and 25% off all investment tools available.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="card stache-card shadow mb-4">
                            <div class="card-title">
                                <h3>Premium Investor Level Rewards</h3>
                            </div>
                            <div class="card-body">
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-1-p.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 1</p>
                                        <p class="">
                                            Extra 25 entries, 30% off webinars, free advanced charting 
                                            tool and 15% off all investment tools.
                                        </p>
                                    </div>
                                </div>
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-2-p.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 2</p>
                                        <p class="">
                                            Extra 25 entries, 40% off webinars and 25% off all investment tools.
                                        </p>
                                    </div>
                                </div>
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-3-p.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 3</p>
                                        <p class="">
                                            Extra 25 entries, 50% off webinars and 50% off personalized investing consultation and guidance.
                                        </p>
                                    </div>
                                </div>
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-4-p.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 4</p>
                                        <p class="">
                                            Extra 25 entries, 70% off webinars, 70% off personalized investing consultation 
                                            & guidance and 75% off investment courses.
                                        </p>
                                    </div>
                                </div>
                                <div class="stache-level">
                                    <div class="icon">
                                        <img class="img-responsive" src="~/assets/img/stache-level/img-level-5-p.png" alt="Stache Standard Level 1"/>
                                    </div>
                                    <div class="text">
                                        <p class="font-weight-bold">Level 5</p>
                                        <p class="">
                                            Extra 25 entries, FREE webinars, FREE personalized investing consultation and FREE investment courses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="splitter text-center my-5">
            <img class="img-responsive" src="~/assets/img/img-pellet.png" alt="Stache NFT Pellet"/>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import nftABI from '@/assets/abi/StachesABI'
export default {
    name: 'Index',
    data() {
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            endTime: new Date("May 16, 2022 16:00:00 EST"),
            maxMint: 10,
            mintCost: 0.1,
            mintQuantity: 3,
            mintStarted: false
        }
    },
    computed: {
        ...mapGetters({
            getAccount: 'getAccount'
        }),
        totalMintPrice() {
            return parseFloat(this.mintQuantity * this.mintCost).toFixed(3);
        }
    },
    created() {
        setInterval(() => {
            this.commingSoonTime();
        }, 1000);
        this.$swal.fire({
            title: 'Pay Attention!',
            text: "Make sure you have a Genesis spot before minting. In case you've minted during Genesis without having a Genesis spot, you will not be eligible to enter the raffles with any NFTs you purchase through Genesis (Lambo and other Prizes).",
            icon: 'warning',
        });
    },
    methods: {
        validateMintQuantity() {
            return parseInt(this.mintQuantity) >= 1 && parseInt(this.mintQuantity) <= 10;
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
            let endTimeParse = (Date.parse(endTime)) / 1000;
            let now = new Date();
            let nowParse = (Date.parse(now) / 1000);
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400); 
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (days < "10") { days = "0" + days; }
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        },
        async mintNFT() {
            if (!this.validateMintQuantity()) {
                this.$swal.fire({
                    title: 'Error',
                    text: "Number of mints must be between 1 and 10",
                    icon: 'error',
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: 'btn btn-danger btn-fill',
                    },
                });
                return;
            }
            const self = this
            try {
                const accounts = await window.web3.eth.getAccounts()
                if (accounts.length > 0) {
                this.loading = true
                const account = accounts[0]

                const ethUtils = window.web3.utils;
                const gasPrice = await window.web3.eth.getGasPrice();

                const nftContract = new window.web3.eth.Contract(
                    nftABI.abi,
                    process.env.NFT_CONTRACT_ADDRESS
                )

                const ethToSend = ethUtils.toWei(self.totalMintPrice, "ether");

                console.log(gasPrice);

                const adjustedGasPrice = new ethUtils.BN(gasPrice).add(new ethUtils.BN(15000000000)).toString();
                const gasLimit = await nftContract.methods
                    .mint(this.mintQuantity)
                    .estimateGas(
                    {
                        from: account,
                        gasPrice: adjustedGasPrice,
                        value: ethToSend
                    }
                );

                const mintedNFTTransaction = await nftContract.methods
                    .mint(this.mintQuantity)
                    .send(
                    {
                        from: account,
                        gasPrice: adjustedGasPrice,
                        gasLimit: gasLimit,
                        value: ethToSend
                    }
                    )
                this.loading = false
                if (mintedNFTTransaction.status) {
                    this.$swal.fire({
                    icon: 'success',
                    title: 'Mint transaction confirmed'
                    })
                }
                }
            } catch (e) {
                this.loading = false
                let currentError = e.message ? e.message : e
                this.$swal.fire({
                title: 'Error',
                text: currentError,
                icon: 'error',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-danger btn-fill',
                },
                })
            }
        }
    }
}
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