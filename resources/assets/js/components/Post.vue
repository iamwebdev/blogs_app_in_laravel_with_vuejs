<template>
<div class="container">
        <div class="row">
            <div class="col-md-6" v-for="post in posts">
                <div class="blockquote-box blockquote-info animated wow fadeInLeft clearfix">
                    <div class="square pull-left">
                        <img src="assets/img/team/member2.png" alt="Feature-img" height="80" width="100">
                    </div>
                    <h4>
                       {{ post.title }}
                    </h4>
                    <p>
                       {{ post.desc }}
                    </p>
                    <span><router-link v-bind:to="{name: 'EditPost', params : {id: post.id}}">Edit</router-link></span>
                    <span><router-link :to="{name: 'DetailPost', params : {id: post.id}}">See in Detail</router-link></span>
                    <span><a href="#" @click="deletePost(post.id)" >Delete</a></span>
                </div>
            </div>
        </div>
</div>
    <!--End Main Container -->
</template>
<script>
    export default{
        data: function(){
           return {posts: ''};
        },

        mounted(){
            this.getAllPosts();
        },
        methods : {
            getAllPosts() {
                axios.get('/api/view-posts')
                .then((response)=>{
                    this.posts = response.data 
                })
                .catch(function(error){
                    console.log(error)
                })
            },
            deletePost(postId) {
               
                axios.get('/api/delete-post/'+postId)
                .then((response) => {
                    this.getAllPosts()
                })
                .catch(function(error){
                    console.log(error)
                })
            }
        }
    };
</script>