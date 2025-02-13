export default function PaypalButtons(ctx) {
  let clientId = ctx.attributes.clientId || "";
  let plans = [
    { id: ctx.attributes.planId39, label: "Standard $39" },
    { id: ctx.attributes.planId50, label: "Premium $50" },
    { id: ctx.attributes.planId35, label: "Storage Locker $35" },
  ];

  if (!clientId || !plans[0].id) {
    return () =>
      `<div class="paypal-button-group">PayPal buttons could not be loaded.  Please reach out to info@hackrva.org</div>`;
  }

  return () => `
    <div class="paypal-button-group">
      ${plans
        .map(
          (plan) => `
            <div class="paypal-button">
              <div class="membership-label">${plan.label}</div>
              <div>
                <a href="https://www.paypal.com/webapps/billing/subscriptions?plan_id=${plan.id}&client_id=${clientId}" target="_blank" class="paypal-subscribe-button">Subscribe</a>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}
