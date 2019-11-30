@extends('layouts.app')
@section('content')
<template>

 <div class="container">
    <nav id="navbar-section" class="navbar navbar-default navbar-static-top navbar-sticky" role="navigation">
        <div class="container">
        
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <a class="navbar-brand wow fadeInDownBig" href="index.html"><img class="office-logo" src="assets/img/slider/Office.png" alt="Office"></a>      
            </div>
        
            <div id="navbar-spy" class="collapse navbar-collapse navbar-responsive-collapse">
                <ul class="nav navbar-nav pull-right">
                    <li class="active">
                        <router-link v-bind:to="{path: '/'}">Home</router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{path: '/blog'}">New Post</router-link>
                    </li>
                    <li>
                        <router-link :to="{path : '/posts'}">Posts</router-link>
                    </li>
                </ul>         
            </div>
        </div>
    </nav>
         <transition name="fade">
         <router-view></router-view>
         </transition>
 </div>
</template>
@endsection
<script>
export default {
 mounted() {
 console.log('Component mounted.')
 }
 };
</script>