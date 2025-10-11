<script lang="ts" setup>
import { isPartOfTypeOnlyImportOrExportDeclaration } from 'typescript';
import Blog from '~/components/Post.vue';
import PortfolioSection from '~/components/PortfolioSection.vue';


</script>

<template>
    <div >
        <Header />
        <slot />
        <HeroSection />
        <Services id="services"/>
        <Mywork />

       <HiremeSection />
       <PortfolioSection/>
      <SlidComment /> 
       <SendProject/>
        <Post/> 
         

        <Footer />
    </div>
</template>

