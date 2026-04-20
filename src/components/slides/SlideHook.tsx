{
  /* Reframe block */
}
<motion.div
  className="flex flex-col items-center text-center"
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
>
  <h2 className="text-[1.45rem] md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.01em] text-foreground">
    You don’t have a
  </h2>
  <h2 className="text-[1.9rem] md:text-5xl lg:text-6xl font-extrabold leading-[0.96] tracking-[-0.01em] text-foreground mt-1">
    stress problem.
  </h2>
</motion.div>;

{
  /* Main point */
}
<motion.div
  className="flex flex-col items-center text-center mt-6 md:mt-10"
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
>
  <h2 className="text-[1.65rem] md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-[-0.01em] text-foreground">
    You have a
  </h2>
  <h2 className="text-[2.2rem] md:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] mt-1">
    <span className="relative inline-block">
      <span className="relative z-10 text-primary">breathing problem.</span>
      <motion.span
        className="absolute -inset-x-4 -inset-y-2 rounded-full bg-primary/10 blur-2xl"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
      />
    </span>
  </h2>
</motion.div>;
