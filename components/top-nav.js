export default function TopNav(ctx) {
  ctx.onConnected(function () {
    const burger = ctx.dom.querySelector(".navbar-burger");
    const menu = ctx.dom.querySelector("#navbarMenu");

    burger.addEventListener("click", function () {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  });

  return () => `
    <nav class="navbar is-fixed-top is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" href="/hackrva.org/">
          <img src="/hackrva.org/assets/images/cropped-hackrva-circle.png" alt="HackRVA Logo" class="themedImage" />
          <b class="navbar__title text--truncate" style="padding-left: 0.5rem;">HackRVA</b>
        </a>
        <button class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/hackrva.org/about">About</a>
          <a class="navbar-item" href="/hackrva.org/calendar">Calendar</a>
          <a class="navbar-item" href="/hackrva.org/membership">Join</a>
<!--          <a class="navbar-item" href="/hackrva.org/blog">Blog</a>    -->
          <a class="navbar-item" href="https://wiki.hackrva.org" target="_blank" rel="noopener noreferrer">Wiki</a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/HackRVA/hackrva.org" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </nav>
  `;
}
