export default function FooterElement(ctx) {
  return () => `
<footer class="footer footer--dark">
  <div class="container container-fluid">
    <div class="row footer__links">
      <div class="col footer__col">
        <div class="footer__title">Links</div>
        <ul class="footer__items clean-list">
          <li class="footer__item"><a href="http://wiki.hackrva.org/" target="_blank" rel="noopener noreferrer" class="footer__link-item">Wiki</a></li>
          <li class="footer__item"><a href="http://www.flickr.com/photos/hackrva" target="_blank" rel="noopener noreferrer" class="footer__link-item">Photos</a></li>
          <li class="footer__item"><a href="http://www.thingiverse.com/HackRVA/designs" target="_blank" rel="noopener noreferrer" class="footer__link-item">Thingiverse</a></li>
          <li class="footer__item"><a href="https://www.youtube.com/user/HackRVA" target="_blank" rel="noopener noreferrer" class="footer__link-item">Youtube</a></li>
          <li class="footer__item"><a href="https://mapsengine.google.com/map/edit?mid=zR5arxdgxvHk.kv0AxPoIw1WY" target="_blank" rel="noopener noreferrer" class="footer__link-item">Richmond Maker Map</a></li>
        </ul>
      </div>
      <div class="col footer__col">
        <div class="footer__title">Community</div>
        <ul class="footer__items clean-list">
          <li class="footer__item"><a href="https://www.meetup.com/hackrva-meetup/" target="_blank" rel="noopener noreferrer" class="footer__link-item">Meetup</a></li>
          <li class="footer__item"><a href="http://wiki.hackrva.org/index.php?title=Online_Chat_Channel" target="_blank" rel="noopener noreferrer" class="footer__link-item">Slack Chat</a></li>
          <li class="footer__item"><a href="https://www.facebook.com/hackrva" target="_blank" rel="noopener noreferrer" class="footer__link-item">Facebook</a></li>
        </ul>
      </div>
      <div class="col footer__col">
        <div class="footer__title">More</div>
        <ul class="footer__items clean-list">
          <li class="footer__item"><a class="footer__link-item" href="/hackrva.org/blog">Blog</a></li>
          <li class="footer__item"><a href="https://github.com/HackRVA/hackrva.org" target="_blank" rel="noopener noreferrer" class="footer__link-item">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom text--center">
      <div class="footer__copyright">Copyright © 2025 HackRVA Labs, Inc.</div>
    </div>
  </div>
</footer>
  `;
}
