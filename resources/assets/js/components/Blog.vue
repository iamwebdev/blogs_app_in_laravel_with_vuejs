<template id="add-post">
  <div>
        <!-- Main Container -->
    <div id="banners"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-9"> 
                    <div class="blog-post">
                        <h1 class="blog-title">
                            <i class="fa fa-file-text"></i>
                            Alice in Wonderland, part dos
                        </h1>
                        <br>
                        <img src="assets/img/slider/blog3.jpg" alt="Feature-img" align="right" width="100%" class="blog-image">
                        <br>
                        <p>
                            'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words:
                            'Yes, we went to school in the sea, though you mayn't believe it—'
                            'I never said I didn't!' interrupted Alice.
                            'You did,' said the Mock Turtle.
                        </p>
                        <div>
                            <span class="badge">Posted 2012-08-02 20:47:04</span>
                            <div class="pull-right">
                                <span class="label label-default">alice</span> 
                                <span class="label label-primary">story</span> 
                                <span class="label label-success">blog</span> 
                                <span class="label label-info">personal</span> 
                                <span class="label label-warning">Warning</span>
                                <span class="label label-danger">Danger</span>
                            </div>         
                        </div>
                    </div>
                    <hr>

                    <div class="blog-post">
                        <h1 class="blog-title">
                            <i class="fa fa-file"></i>
                            Revolution has begun!
                        </h1>
                        <img src="assets/img/slider/blog2.jpg" alt="Feature-img" align="right" width="100%" class="blog-image"> 
                        <br>
                        <p>
                            'I am bound to Tahiti for more men.'
                            'Very good. Let me board you a moment—I come in peace.' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, stood face to face with the captain.
                            'Cross your arms, sir; throw back your head. Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.
                        </p>
                        <div>
                            <span class="badge">Posted 2012-08-02 20:47:04</span>
                            <div class="pull-right"><span class="label label-default">alice</span>
                                <span class="label label-primary">story</span> 
                                <span class="label label-success">blog</span> 
                                <span class="label label-info">personal</span> 
                                <span class="label label-warning">Warning</span>
                                <span class="label label-danger">Danger</span>
                            </div>
                        </div>  
                    </div>   
                    <hr>

                    <div class="blog-post">
                        <h1 class="blog-title">
                            <i class="fa fa-cloud"></i>
                            Alice in Wonderland, part dos
                        </h1>
                        <img src="assets/img/slider/blog1.jpg" alt="Feature-img" align="right" width="100%" class="blog-image">
                        <p>
                            'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words:
                            'Yes, we went to school in the sea, though you mayn't believe it—'
                            'I never said I didn't!' interrupted Alice.
                            'You did,' said the Mock Turtle.
                        </p>
                        <div>
                            <span class="badge">Posted 2012-08-02 20:47:04</span>
                            <div class="pull-right">
                                <span class="label label-default">alice</span> 
                                <span class="label label-primary">story</span> 
                                <span class="label label-success">blog</span> 
                                <span class="label label-info">personal</span> 
                                <span class="label label-warning">Warning</span>
                                <span class="label label-danger">Danger</span>
                            </div>         
                        </div>
                    </div>
                    <hr>

                    <ul class="pagination">
                        <li class="disabled"><a href="#">&laquo;</a></li>
                        <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">2 <span class="sr-only"></span></a></li>
                        <li><a href="#">3 <span class="sr-only"></span></a></li>
                        <li><a href="#">4 <span class="sr-only"></span></a></li>
                        <li><a href="#">5 <span class="sr-only"></span></a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title"><strong>New Post</strong></h3>
                        </div>
                        <div class="panel-body">
                            <form role="form" v-on:submit.prevent="addPost">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Post Title</label>
                                    <input type="text" v-model="post.title" class="form-control" style="border-radius:0px" id="exampleInputEmail1" placeholder="Enter Post title">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Description</label>
                                    <input type="text" v-model="post.desc" class="form-control" style="border-radius:0px" id="exampleInputPassword1" placeholder="Description">
                                </div>
                                <button type="submit" class="btn btn-sm btn-default">Add Post</button>
                            </form>
                        </div>
                    </div>

                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                        </ol>
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">
                            <div class="item active">
                                <img src="http://placehold.it/292/16a085/FFF&text=CSS3" alt="" class="img-responsive" />
                            </div>
                            <div class="item">
                                <img src="http://placehold.it/292/d35400/FFF&text=HTML5" alt="" class="img-responsive" />
                            </div>
                            <div class="item">
                                <img src="http://placehold.it/292/2980b9/FFF&text=RESPONSIVE" alt="" class="img-responsive" />
                            </div>
                            <div class="item">
                                <img src="http://placehold.it/292/8e44ad/FFF&text=BOOTSTRAP3" alt="" class="img-responsive" />
                            </div>
                        </div>
                        <!-- Controls -->
                        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       
        <!--End Main Container --> 
  </div>
</template>

<script>
 export default {
    data: function(){
        return {post : { title: '', desc: '' }}
    },
    methods: {
        addPost: function(){
            console.log('Hello')
            axios.post('/api/add-post',this.post)
            .then((response)=>{
                this.$router.push({name: 'Post'})
            })
        }
    }
 };
</script>