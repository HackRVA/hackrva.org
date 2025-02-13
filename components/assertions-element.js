export default function AssertionsElement(ctx) {
  return () => `
    <section class="features" style="padding-bottom: 12rem; padding-top:6rem;">
      <div class="container">
        <div class="row">
          <div class="whatWeAreWrapper">
            <div class="checkedWrapper">
              <div class="whatWeAreHeader">
                <h1 class="is-size-2">We are...</h1>
              </div>
              <ul>
                <li><i aria-hidden="true" class="fas fa-check"></i> a 100% volunteer-run makerspace</li>
                <li><i aria-hidden="true" class="fas fa-check"></i> A community workshop</li>
                <li><i aria-hidden="true" class="fas fa-check"></i> A 501c3 Non-Profit Organization</li>
                <li><i aria-hidden="true" class="fas fa-check"></i> Enthusiastically open-ended and open-minded</li>
                <li><i aria-hidden="true" class="fas fa-check"></i> Education & Interest Group Focused</li>
              </ul>
            </div>
            <div class="exWrapper">
              <div class="whatWeAreHeader">
                <h1 class="is-size-2">We are NOT...</h1>
              </div>
              <ul>
                <li><i aria-hidden="true" class="fas fa-times"></i> A fablab or for-profit business
                  <p>We are not focused on re-creating, fabricating, or finishing an idea for anyone.</p>
                </li>
                <li><i aria-hidden="true" class="fas fa-times"></i> An incubator
                  <p>While some of our members may be interested in your business opportunity, our organization does not operate in that type of collective manner.</p>
                </li>
                <li><i aria-hidden="true" class="fas fa-times"></i> A tool rental business
                  <p>Tools are not allowed to leave HackRVA Property</p>
                </li>
                <li><i aria-hidden="true" class="fas fa-times"></i> A fully staffed operation
                  <p>Response time varies, and machine downtime is possible. Active members help keep things running smoothly.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
