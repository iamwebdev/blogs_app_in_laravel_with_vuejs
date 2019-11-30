<template>
<div class="container-fluid-kamn">
            <div class="row">
                <div>
                    <iframe width="100%" height="450px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3618.727010735933!2d91.837871!3d24.907291700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1404919738144"></iframe>
                    <br />
                </div>
                <div class="col-lg-4 col-lg-offset-1">
                    <h4>Find us at:</h4>
                    <p class="block-author"> Johns, Smith & Associates</p>
                    <p>Via Ludovisi 39-45, Rome, 54267, Italy</p>
                    <p>Phone: 1.800.245.356</p>
                    <p>Fax: 1.800.245.357</p>
                    <em class="block-author">Email: hello@LawOffice.org </em> <br>
                    <br>
                    <p class="lead">Social Link</p><hr>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <a href="#"><img src="assets/img/social-icons/btn_skype.png" alt="Skype"></a>
                        Call us
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <a href="#"><img src="assets/img/social-icons/btn_facebook.png" alt="Facebook"></a>
                        Like us
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-3 col-xs-12">
                        <a href="#"><img src="assets/img/social-icons/btn_twitter.png" alt="Twitter"></a>
                        Follow us
                    </div>
                    <br>
                </div>
                <div class="col-lg-5">
                    <div class="feedback-form">
          
                        <div id="contact-response"></div>
            
                        <form v-on:submit.prevent="updatePost" id="contact-form">
                            <fieldset>
                                <div class="form-group form-group-email">
                                    <label class="control-label" for="email">Post Title</label>
                                    <input type="text" v-model="post.title" class="form-control" name="email" id="email" placeholder="Enter Your E-Mail">
                                </div>
                                <div class="form-group form-group-message">
                                    <label class="control-label" for="message">Description</label>
                                    <textarea class="form-control" v-model="post.desc" name="message" id="message" rows="3"></textarea>
                                </div>           
                                <button type="submit" class="btn btn-primary">Update</button>
                            </fieldset>
                        </form>
                    </div> 
                </div>
            </div>
        </div>  
        </template>
<script>
    export default{
        data : function(){
            return {post : { title:'', desc: '' }};
        },
        mounted(){
            this.fetchData();
        },
        methods : {
            fetchData() {
                axios.get('/api/fetch-data/'+this.$route.params.id)
                .then((response)=> {
                    this.post = response.data
                })
                .catch(function(error){
                    console.log(error)
                });
            },
            updatePost() {
                axios.post('/api/update-post/'+this.$route.params.id,this.post)
                .then((response) => {
                    this.$router.push({name: 'Post'})
                })
                .catch(function(error){
                    console.log(error);
                })
            }
        }

    };
</script>