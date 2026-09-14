/**
 * Shared "Share" button used on product, Tips & Guide, and Peptide Guide
 * detail pages. Clicking it always opens the same dropdown menu — the
 * device's native share sheet (if supported) is offered as the first
 * item, plus direct links (WhatsApp, Telegram, Facebook, X), Print, and
 * Copy Link — so every option (including Print, which native share
 * sheets never include) is always reachable in one place.
 *
 * Usage: call renderShareButton(containerEl, { title, text, url }) — url
 * defaults to the current page's URL if omitted.
 */

function shareIconSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="2.5" stroke="currentColor" stroke-width="1.7"/><circle cx="6" cy="12" r="2.5" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="19" r="2.5" stroke="currentColor" stroke-width="1.7"/><path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
}

function nativeShareIconSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v13M8 7l4-4 4 4M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function printIconSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9V4h12v5M6 18H4.5A1.5 1.5 0 013 16.5v-5A1.5 1.5 0 014.5 10h15a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-1.5 1.5H18M6 14h12v6H6v-6z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function copyLinkIconSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 15l6-6M10.5 6.5l1-1a3.54 3.54 0 015 5l-1 1M13.5 17.5l-1 1a3.54 3.54 0 01-5-5l1-1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

const SHARE_FALLBACK_LINKS = [
  {
    label: "WhatsApp",
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 003.83 1H12a7.94 7.94 0 007.94-7.94 7.9 7.9 0 00-2.34-5.64z" fill="#25D366"/></svg>`,
    hrefFor: ({ url, text }) => `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
  {
    label: "Telegram",
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#26A5E4"/><path d="M17.5 7.5l-2.2 10.2c-.15.7-.6.85-1.2.55l-3.3-2.5-1.6 1.55c-.18.18-.33.33-.65.33l.24-3.3 6.1-5.5c.27-.24-.06-.37-.4-.13l-7.5 4.75-3.25-1c-.7-.22-.72-.7.15-1.05l12.7-4.9c.6-.22 1.1.15.9 1z" fill="#fff"/></svg>`,
    hrefFor: ({ url, text }) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  {
    label: "Facebook",
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#1877F2"/><path d="M15.5 8.5h-1.7c-.4 0-.8.4-.8.9v1.6h2.4l-.35 2.4h-2.05V19h-2.4v-5.6H8.5v-2.4h1.65V9.1c0-1.75 1.1-3.1 2.9-3.1h2.45v2.5z" fill="#fff"/></svg>`,
    hrefFor: ({ url }) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    label: "X / Twitter",
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="5" fill="#000"/><path d="M6.5 6l4.6 6.15L6.2 18h1.7l3.8-4.35L14.9 18h2.6l-4.85-6.5L17 6h-1.7l-3.5 4-2.7-4H6.5z" fill="#fff"/></svg>`,
    hrefFor: ({ url, text }) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
];

/**
 * Renders a "Share" button into containerEl. shareData: { title, text, url }
 * — url defaults to window.location.href if omitted.
 */
function renderShareButton(containerEl, shareData) {
  if (!containerEl) return;
  const data = {
    title: shareData.title || document.title,
    text: shareData.text || shareData.title || document.title,
    url: shareData.url || window.location.href,
  };
  const isAr = document.documentElement.dir === "rtl";
  const t = isAr
    ? { share: "مشاركة", more: "المزيد من الخيارات…", print: "طباعة", copyLink: "نسخ الرابط", copied: "تم نسخ الرابط.", copyFailed: "تعذّر نسخ الرابط." }
    : { share: "Share", more: "More options…", print: "Print", copyLink: "Copy Link", copied: "Link copied.", copyFailed: "Could not copy the link." };

  const wrap = document.createElement("div");
  wrap.className = "share-widget";
  wrap.innerHTML = `
    <button type="button" class="btn btn-primary share-btn">
      <span class="share-btn-icon">${shareIconSvg()}</span>
      ${t.share}
    </button>
    <div class="share-menu" hidden>
      ${
        navigator.share
          ? `
        <button type="button" class="share-menu-item share-native-btn">
          <span class="share-menu-item-icon">${nativeShareIconSvg()}</span>${t.more}
        </button>
      `
          : ""
      }
      ${SHARE_FALLBACK_LINKS.map(
        (link) => `
        <a class="share-menu-item" href="${link.hrefFor(data)}" target="_blank" rel="noopener">
          <span class="share-menu-item-icon">${link.icon}</span>${link.label}
        </a>
      `
      ).join("")}
      <button type="button" class="share-menu-item share-print-btn">
        <span class="share-menu-item-icon">${printIconSvg()}</span>${t.print}
      </button>
      <button type="button" class="share-menu-item share-copy-link-btn">
        <span class="share-menu-item-icon">${copyLinkIconSvg()}</span>${t.copyLink}
      </button>
    </div>
  `;
  containerEl.appendChild(wrap);

  const shareBtn = wrap.querySelector(".share-btn");
  const menu = wrap.querySelector(".share-menu");

  shareBtn.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
  });

  const nativeBtn = wrap.querySelector(".share-native-btn");
  if (nativeBtn) {
    nativeBtn.addEventListener("click", async () => {
      menu.hidden = true;
      try {
        await navigator.share(data);
      } catch (e) {
        // User cancelled the native share sheet — do nothing.
      }
    });
  }

  wrap.querySelector(".share-print-btn").addEventListener("click", () => {
    menu.hidden = true;
    window.print();
  });

  wrap.querySelector(".share-copy-link-btn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(data.url);
      showShareToast(t.copied);
    } catch (e) {
      showShareToast(t.copyFailed);
    }
    menu.hidden = true;
  });

  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target)) menu.hidden = true;
  });
}

// A minimal, self-contained toast so share.js works even on pages without
// the admin panel's showToast() helper.
function showShareToast(message) {
  let toast = document.querySelector(".share-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "share-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
}
