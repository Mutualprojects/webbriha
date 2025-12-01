import { ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroVideo } from "@/components/animated-video-on-scroll"

  export const HeroVideoDemo = () => {
  return (
    <section>
      <ContainerScroll className="h-[350vh]">
        <ContainerSticky
          style={{
            background:
              "#2469ad", 
          }}
          className="bg-stone-900 px-6 py-10 text-slate-50"
        >
      <ContainerAnimated className="space-y-4 text-center">
  <h1 className="text-5xl font-semibold tracking-tighter md:text-6xl text-[#FCC012]">
    Empowering India with Smart Solar Solutions 
  </h1>

<p className="mx-auto max-w-[55ch] text-lg opacity-90 leading-relaxed text-white">
  <span className="font-semibold text-[#FCC012]">SkyVolt</span > delivers next-generation
  solar energy systems that inspire sustainability and power a brighter tomorrow.
</p>
</ContainerAnimated>
          <ContainerInset className="max-h-[450px] w-auto py-6">
            <HeroVideo
              src="https://ik.imagekit.io/ynh4hdbml/redpandacompress_1253164_Light_Solar_3840x2160.mp4?updatedAt=1761992936510"
              data-src="https://ik.imagekit.io/ynh4hdbml/redpandacompress_1253164_Light_Solar_3840x2160.mp4?updatedAt=1761992936510"
            />
          </ContainerInset>
          <ContainerAnimated
            transition={{ delay: 0.4 }}
            outputRange={[-120, 0]}
            inputRange={[0, 0.7]}
            className="mx-auto mt-2 w-fit "
          >
            <HeroButton className="bg-[#fcc012] mt-10 text-black">Get Started</HeroButton>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  )
}
