<template>
<div>
    <div class="row container-kamn">
        <img src="assets/img/slider/slide1.jpg" class="blog-post" alt="Feature-img" align="right" width="100%"> 
    </div>

<div id="banners"></div>
    <div class="container">   
        <div class="row">
            <div class="side-left col-sm-4 col-md-4">

                <h3 class="lead">  About post : </h3><hr>

                <p v-text="post.title"></p>
                
                <br>
                <h4>Detail about post:</h4><hr>
                <h5 v-text="post.desc"></h5>
            </div>
        </div>    
    </div> 
    </div> 
</template>
<script type="text/javascript">
    export default {
        data : function(){
           return { post: {}};     
        },
        mounted() {
            this.getDetails();
        },
        methods : {
            getDetails() {
                axios.get('/api/post-detail/'+this.$route.params.id)
                .then((response) => {
                    this.post = response.data
                })
            }
        }
    };
</script>