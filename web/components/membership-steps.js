export function MembershipSteps(ctx) {
  const steps = [
    {
      title: "Review Our Terms and Conditions",
      //imgSrc: "/assests/images/undraw_docusaurus_mountain.svg",
    },
    {
      title: "Review Our Membership Agreement",
      //imgSrc: "/assets/images/undraw_docusaurus_react.svg",
    },
    {
      title: "Contact us with any questions",
      //imgSrc: "/assets/images/undraw_docusaurus_tree.svg",
    },
  ];

  return () => `
    <section class="features">
      <div class="container">
        <h1>Steps</h1>
        <div class="row">
          ${steps
            .map(
              (step) => `
                <div class="col col--4">
                  <div class="text--center">
                    <img src="${step.imgSrc}" class="featureSvg" role="img" />
                  </div>
                  <div class="text--center padding-horiz--md">
                    <h3>${step.title}</h3>
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
