export default function HomePageHeader(ctx) {
  return () => `
    <section class="hero">
      <div id="home-page-header-container" class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title" style="color:white;">HackRVA</h1>
          <p class="subtitle" style="color:white;">Richmond's Hackerspace since 2009</p>
          <div class="buttons is-centered">
            <a class="button is-secondary is-large" href="/hackrva.org/membership">Become A Member</a>
            <a class="button is-secondary is-large" href="/hackrva.org/about">About</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
