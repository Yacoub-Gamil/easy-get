import Contact from "../_components/Contact";

export const metadata = {
  title: "Contact",
};

function page() {
  return (
    <section className=" mt-[6rem] mb-[6rem] flex justify-center items-center">
      <Contact />
    </section>
  );
}

export default page;
