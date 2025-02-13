export default function HomePageFeatures(ctx) {
  const features = [
    {
      title: "Member Driven",
      imgSrc: "@site/static/img/undraw_docusaurus_mountain.svg",
      description:
        "A member-ran and organized 501c3 non-profit in Richmond, Virginia",
    },
    {
      title: "Community",
      imgSrc: "@site/static/img/undraw_docusaurus_react.svg",
      description:
        "A diverse group interested in electronics, robots, woodworking, embedded software, metalworking, programming, music, art, video, photography, 3D printing, sewing, textiles, and virtual reality—and more",
    },
    {
      title: "Skills/Tools",
      imgSrc: "@site/static/img/undraw_docusaurus_tree.svg",
      description:
        "A space filled with tools, computers, and people who like to build, invent, tinker, expand their minds, and learn and share new skills",
    },
  ];

  return () => `
    <section class="features">
      <div class="container">
        <div class="columns is-multiline">
          ${features
            .map(
              (feature) => `
                <div class="column is-one-third">
                  <div class="has-text-centered">
                    <div class="text--center">
                      <!--<img src="${feature.imgSrc}" class="featureSvg" role="img" />-->
                    </div>
                    <div class="text--center padding-horiz--md">
                      <h3 class="title is-4">${feature.title}</h3>
                      <p>${feature.description}</p>
                    </div>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
