<template>
    <div>
        <Header/>
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import PreLoader from './PreLoader';

export default {
    name: 'app',
    components: {
        Header, PreLoader, Footer
    },

    data() {
        return {
            isLoading: true,
            currentUrl: ''
        }
    },

    watch: {
        '$route'(pathUrl){
            this.currentUrl = pathUrl.path;
            this.isLoading = true;
            setTimeout(() => { this.isLoading = false }, 1500);
        }
    },

    mounted() {
        this.currentUrl = window.location.pathname;
        setTimeout(() => {
            this.isLoading = false
        }, 2000);
    }
}
</script>