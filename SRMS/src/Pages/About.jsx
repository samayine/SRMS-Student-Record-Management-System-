import PageLayout from "../Components/PageLayout";

function About() {
  return (
    <div className="ml-64 flex-1 bg-gray-100 p-6 mt-[65px]">
      <PageLayout userName="Abebe" pageTitle="About">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla
          ac eros ac convallis. Integer vestibulum mauris quis metus commodo,
          nec gravida dolor vestibulum. Quisque ligula turpis, laoreet ut
          fermentum at, elementum vitae arcu. Nunc eu tortor vulputate,
          malesuada augue ac, commodo quam. In pharetra neque eget est sodales
          pretium. Duis elementum molestie metus tristique eleifend. Maecenas
          finibus scelerisque posuere.
        </p>
      </PageLayout>
    </div>
  );
}

export default About;
