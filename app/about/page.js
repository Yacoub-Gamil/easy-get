import About from "../_components/About";

export const metadata = {
  title: "About",
};
function page() {
  return (
    <section className=" p-4">
      <About />
    </section>
  );
}

export default page;
