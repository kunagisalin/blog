<template>
<div class="index">
    <div id="login">login</div>
    <div id="nav">
      <div id="blog"><h1 class="font-weight:500;">KunagisaLin</h1></div>
    </div>
    <router-view/>
</div>
</template>

<script>

</script>

<style>
  #nav{
    width: 100%;
    height: 100%;
    background-color: #d2d9d1;
    padding: 120px 0 42px;
    top: 0;
    left: 0;
    right: 0;
    border: 0;
    margin:0
  }
  #login{
    top: 30px;
    left: 0;
    color: #444b44;
    position: fixed;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    letter-spacing: .5px;
    margin: 0;
    text-transform: none;
    background: 0 0;
    text-decoration: none;
    line-height: 34px;
    font-size: 12px;
    padding: 0 24px;
  }
  .index{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    border: 0;
    margin:0;
  }
  #blog{
    margin:auto;
    text-align:center;
    color: #444b44;
  }
</style>
